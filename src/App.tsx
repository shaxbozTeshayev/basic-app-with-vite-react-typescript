import {useEffect, useMemo, useState} from 'react';
import styles from './App.module.css';
import type {Child, Root, ErrorResponse} from './interfaces/Reddit';

const useFetch = (url: string) => {
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState<ErrorResponse | undefined>(undefined);
	const [data, setData] = useState<Child[]>([]);

	useEffect(() => {
		if (!url) {
			return;
		}

		(async () => {
			setLoading(true);
			setData([]);
			setError(undefined);

			try {
				const response = await fetch(url);

				// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
				const json = await response.json();

				if (response.ok) {
					setData((json as Root).data.children);
				} else {
					setError(json as ErrorResponse);
				}
			} catch (error: unknown) {
				const e = error as Error;
				setError({message: e.message});
			}

			setLoading(false);
		})();
	}, [url]);

	return {
		loading,
		error,
		data,
	};
};

function App() {
	const [subreddit, setSubreddit] = useState('');
	const [subredditUrl, setSubredditUrl] = useState('');
	const {loading, error, data} = useFetch(subredditUrl);

	const subredditChanged = (event: React.FormEvent<HTMLInputElement>) => {
		setSubreddit(event.currentTarget.value);
	};

	const formSubmitted = async (event: React.SyntheticEvent) => {
		event.preventDefault();
		setSubredditUrl(`https://www.reddit.com/r/${subreddit}.json`);
	};

	return (
		<div className={['container', styles.mt2].join(' ')}>
			<form onSubmit={formSubmitted}>
				<label htmlFor='subreddit'>Subreddit</label>
				<input
					onChange={subredditChanged}
					value={subreddit}
					placeholder='Enter subreddit name...'
					name='subreddit'
					id='subreddit'
				/>
				<button>Go</button>
			</form>
			{error && <article>{error.message}</article>}
			{loading && <progress />}
			<div>
				{data.map(post => (
					<article key={post.data.id}>{post.data.title}</article>
				))}
			</div>
		</div>
	);
}

export default App;

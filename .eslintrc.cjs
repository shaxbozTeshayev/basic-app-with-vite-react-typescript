module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: [
		'plugin:react/recommended',
		'xo',
	],
	overrides: [
		{
			extends: [
				'xo-typescript',
			],
      settings: {
        react: {
          version: 'detect'
        }
      },
			files: [
				'*.ts',
				'*.tsx',
			],
		},
	],

	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: [
		'react',
	],
	rules: {
    'react/react-in-jsx-scope': 0,
	},
};

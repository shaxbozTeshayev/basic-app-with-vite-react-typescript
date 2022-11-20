// Generated by https://quicktype.io

export type ErrorResponse = {
	message: string;
	error?: number;
};

export type Root = {
	kind: string;
	data: RootData;
};

export type RootData = {
	after: string;
	dist: number;
	modhash: string;
	geo_filter: string;
	children: Child[];
	before: undefined;
};

export type Child = {
	kind: Kind;
	data: ChildData;
};

export type ChildData = {
	user_flair_background_color: undefined;
	submit_text_html: undefined | string;
	restrict_posting: boolean;
	user_is_banned: undefined;
	free_form_reports: boolean;
	wiki_enabled: boolean;
	user_is_muted: undefined;
	user_can_flair_in_sr: undefined;
	display_name: string;
	header_img: undefined | string;
	title: string;
	allow_galleries: boolean;
	icon_size: number[] | undefined;
	primary_color: string;
	active_user_count: undefined;
	icon_img: string;
	display_name_prefixed: string;
	accounts_active: undefined;
	public_traffic: boolean;
	subscribers: number;
	user_flair_richtext: any[];
	videostream_links_count?: number;
	name: string;
	quarantine: boolean;
	hide_ads: boolean;
	prediction_leaderboard_entry_type: PredictionLeaderboardEntryType;
	emojis_enabled: boolean;
	advertiser_category: string;
	public_description: string;
	comment_score_hide_mins: number;
	allow_predictions: boolean;
	user_has_favorited: undefined;
	user_flair_template_id: undefined;
	community_icon: string;
	banner_background_image: string;
	original_content_tag_enabled: boolean;
	community_reviewed: boolean;
	submit_text: string;
	description_html: string;
	spoilers_enabled: boolean;
	comment_contribution_settings: CommentContributionSettings;
	allow_talks: boolean;
	header_size: number[] | undefined;
	user_flair_position: FlairPosition;
	all_original_content: boolean;
	has_menu_widget: boolean;
	is_enrolled_in_new_modmail: undefined;
	key_color: string;
	can_assign_user_flair: boolean;
	created: number;
	wls: number;
	show_media_preview: boolean;
	submission_type: SubmissionType;
	user_is_subscriber: undefined;
	allowed_media_in_comments: AllowedMedia[];
	allow_videogifs: boolean;
	should_archive_posts: boolean;
	user_flair_type: UserFlairType;
	allow_polls: boolean;
	collapse_deleted_comments: boolean;
	emojis_custom_size: number[] | undefined;
	public_description_html: undefined | string;
	allow_videos: boolean;
	is_crosspostable_subreddit: boolean;
	suggested_comment_sort: undefined | string;
	should_show_media_in_comments_setting: boolean;
	can_assign_link_flair: boolean;
	accounts_active_is_fuzzed: boolean;
	allow_prediction_contributors: boolean;
	submit_text_label: undefined | string;
	link_flair_position: FlairPosition;
	user_sr_flair_enabled: undefined;
	user_flair_enabled_in_sr: boolean;
	allow_chat_post_creation: boolean;
	allow_discovery: boolean;
	accept_followers: boolean;
	user_sr_theme_enabled: boolean;
	link_flair_enabled: boolean;
	disable_contributor_requests: boolean;
	subreddit_type: SubredditType;
	notification_level: undefined;
	banner_img: string;
	user_flair_text: undefined;
	banner_background_color: string;
	show_media: boolean;
	id: string;
	user_is_contributor: undefined;
	over18: boolean;
	header_title: undefined | string;
	description: string;
	is_chat_post_feature_enabled: boolean;
	submit_link_label: undefined | string;
	user_flair_text_color: undefined;
	restrict_commenting: boolean;
	user_flair_css_class: undefined;
	allow_images: boolean;
	lang: Lang;
	whitelist_status: WhitelistStatus;
	url: string;
	created_utc: number;
	banner_size: number[] | undefined;
	mobile_banner_image: string;
	user_is_moderator: undefined;
	allow_predictions_tournament: boolean;
	content_category?: string;
};

export enum AllowedMedia {
	Animated = 'animated',
	Giphy = 'giphy',
	Static = 'static',
}

export type CommentContributionSettings = {
	allowed_media_types?: AllowedMedia[] | undefined;
};

export enum Lang {
	En = 'en',
	Es = 'es',
}

export enum FlairPosition {
	Left = 'left',
	Right = 'right',
}

export enum PredictionLeaderboardEntryType {
	SubredditHeader = 'SUBREDDIT_HEADER',
}

export enum SubmissionType {
	Any = 'any',
	Link = 'link',
	Self = 'self',
}

export enum SubredditType {
	Public = 'public',
}

export enum UserFlairType {
	Text = 'text',
}

export enum WhitelistStatus {
	AllAds = 'all_ads',
	NoAds = 'no_ads',
	SomeAds = 'some_ads',
}

export enum Kind {
	T5 = 't5',
}

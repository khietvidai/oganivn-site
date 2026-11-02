/** Resolved media reference from getSiteSettings() */
export interface MediaReference {
	mediaId: string;
	alt?: string;
	url?: string;
}

export interface BlogSiteIdentitySettings {
	title?: string;
	tagline?: string;
	logo?: MediaReference;
	favicon?: MediaReference;
}

const DEFAULT_SITE_TITLE = "Ogani";
const DEFAULT_SITE_TAGLINE =
	"A Pioneer in Organic Agriculture — Tropical soft-dried fruit products nurtured by the hardworking hands of Vietnamese farmers.";
const DEFAULT_SITE_LOGO: MediaReference = {
	mediaId: "wp-media-418",
	alt: "Ogani",
	url: "/wp-content/uploads/2025/06/ogani-logo.png",
};

export function resolveBlogSiteIdentity(settings?: BlogSiteIdentitySettings) {
	return {
		siteTitle: settings?.title ?? DEFAULT_SITE_TITLE,
		siteTagline: settings?.tagline ?? DEFAULT_SITE_TAGLINE,
		siteLogo: settings?.logo?.url ? settings.logo : DEFAULT_SITE_LOGO,
	};
}

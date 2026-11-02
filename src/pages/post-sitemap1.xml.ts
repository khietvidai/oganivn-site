import type { APIRoute } from "astro";
import { getWpSeoData, renderUrlSetXml } from "../utils/sitemap";

export const GET: APIRoute = async ({ url }) => {
	const origin = url.origin;
	const { posts } = getWpSeoData();
	const entries = Object.entries(posts).slice(0, 200);

	return renderUrlSetXml(
		entries.map(([slug, meta]) => ({
			loc: `${origin}/${slug}/`,
			lastmod: meta.updatedAt || meta.publishedAt,
		})),
	);
};

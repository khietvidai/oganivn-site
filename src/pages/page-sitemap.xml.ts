import type { APIRoute } from "astro";
import { getWpSeoData, renderUrlSetXml } from "../utils/sitemap";

export const GET: APIRoute = async ({ url }) => {
	const origin = url.origin;
	const { pages } = getWpSeoData();

	const items = [
		{
			loc: `${origin}/`,
			lastmod: pages.home?.updatedAt || "2025-11-18T17:28:18.000Z",
		},
		...Object.entries(pages)
			.filter(([slug]) => slug !== "home")
			.map(([slug, meta]) => ({
				loc: `${origin}/${slug}/`,
				lastmod: meta.updatedAt || meta.publishedAt,
			})),
	];

	return renderUrlSetXml(items);
};

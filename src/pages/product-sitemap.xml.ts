import type { APIRoute } from "astro";
import { getWpSeoData, renderUrlSetXml } from "../utils/sitemap";

export const GET: APIRoute = async ({ url }) => {
	const origin = url.origin;
	const { products } = getWpSeoData();

	const items = [
		{
			loc: `${origin}/shop/`,
			lastmod: "2025-11-18T17:28:18.000Z",
		},
		...Object.entries(products).map(([slug, meta]) => ({
			loc: `${origin}/product/${slug}/`,
			lastmod: meta.updatedAt || meta.publishedAt,
		})),
	];

	return renderUrlSetXml(items);
};

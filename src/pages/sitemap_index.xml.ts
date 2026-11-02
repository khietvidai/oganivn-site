import type { APIRoute } from "astro";
import { renderSitemapIndexXml } from "../utils/sitemap";

export const GET: APIRoute = async ({ url }) => {
	const origin = url.origin;
	const lastmod = "2025-11-18T17:28:18+00:00";

	return renderSitemapIndexXml([
		{ loc: `${origin}/post-sitemap1.xml`, lastmod },
		{ loc: `${origin}/post-sitemap2.xml`, lastmod },
		{ loc: `${origin}/page-sitemap.xml`, lastmod },
		{ loc: `${origin}/product-sitemap.xml`, lastmod },
		{ loc: `${origin}/category-sitemap.xml`, lastmod },
		{ loc: `${origin}/local-sitemap.xml`, lastmod },
	]);
};

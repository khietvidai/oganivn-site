import type { APIRoute } from "astro";
import { renderUrlSetXml } from "../utils/sitemap";

export const GET: APIRoute = async ({ url }) => {
	const origin = url.origin;
	const slugs = [
		"blog",
		"red-dragon-fruit-powder",
		"dried-mango-fruit",
		"dried-red-dragon-fruit",
		"soft-dried-fruit",
		"coffee",
	];

	return renderUrlSetXml(
		slugs.map((slug) => ({
			loc: `${origin}/${slug}/`,
			lastmod: "2025-11-18T17:28:18.000Z",
		})),
	);
};

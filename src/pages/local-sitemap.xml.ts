import type { APIRoute } from "astro";
import { renderUrlSetXml } from "../utils/sitemap";

export const GET: APIRoute = async ({ url }) => {
	const origin = url.origin;
	return renderUrlSetXml([
		{
			loc: `${origin}/locations.kml`,
			lastmod: "2025-11-18T17:28:18.000Z",
		},
	]);
};

import wpSeoMap from "../data/wp-seo-map.json";

export interface SitemapUrlItem {
	loc: string;
	lastmod?: string;
}

export function renderUrlSetXml(items: SitemapUrlItem[]): Response {
	const rows = items
		.map(
			(item) => `  <url>
    <loc>${escapeXml(item.loc)}</loc>${
			item.lastmod
				? `\n    <lastmod>${escapeXml(item.lastmod)}</lastmod>`
				: ""
		}
  </url>`,
		)
		.join("\n");

	const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${rows}
</urlset>`;

	return new Response(xml, {
		status: 200,
		headers: {
			"Content-Type": "application/xml; charset=utf-8",
			"Cache-Control": "public, max-age=3600",
		},
	});
}

export function renderSitemapIndexXml(
	sitemaps: Array<{ loc: string; lastmod?: string }>,
): Response {
	const rows = sitemaps
		.map(
			(s) => `  <sitemap>
    <loc>${escapeXml(s.loc)}</loc>${
			s.lastmod ? `\n    <lastmod>${escapeXml(s.lastmod)}</lastmod>` : ""
		}
  </sitemap>`,
		)
		.join("\n");

	const xml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${rows}
</sitemapindex>`;

	return new Response(xml, {
		status: 200,
		headers: {
			"Content-Type": "application/xml; charset=utf-8",
			"Cache-Control": "public, max-age=3600",
		},
	});
}

export function getWpSeoData() {
	return wpSeoMap as {
		posts: Record<
			string,
			{ wpId: number; publishedAt: string; updatedAt: string }
		>;
		pages: Record<
			string,
			{ wpId: number; publishedAt: string; updatedAt: string }
		>;
		products: Record<
			string,
			{ wpId: number; publishedAt: string; updatedAt: string }
		>;
	};
}

function escapeXml(str: string): string {
	return str
		.replaceAll("&", "&amp;")
		.replaceAll("<", "&lt;")
		.replaceAll(">", "&gt;")
		.replaceAll('"', "&quot;")
		.replaceAll("'", "&apos;");
}

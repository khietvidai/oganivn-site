import type { APIRoute } from "astro";
import { search } from "emdash";

export const GET: APIRoute = async ({ url }) => {
	const query = (url.searchParams.get("query") || url.searchParams.get("s") || "").trim();
	if (query.length < 2) {
		return new Response(JSON.stringify({ suggestions: [] }), {
			status: 200,
			headers: { "Content-Type": "application/json; charset=UTF-8" },
		});
	}

	const { items } = await search(query, {
		collections: ["products", "posts", "pages"],
		limit: 8,
	});

	const suggestions = items.map((item) => {
		const slugOrId = item.slug ?? item.id;
		const itemUrl =
			item.collection === "products" ? `/product/${slugOrId}/` : `/${slugOrId}/`;
		return {
			id: item.id,
			value: item.title,
			url: itemUrl,
		};
	});

	return new Response(JSON.stringify({ suggestions }), {
		status: 200,
		headers: { "Content-Type": "application/json; charset=UTF-8" },
	});
};

export const POST: APIRoute = GET;

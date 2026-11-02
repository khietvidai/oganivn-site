import type { APIRoute } from "astro";

export const POST: APIRoute = async ({ request, url }) => {
	const referer = request.headers.get("referer");
	let redirectTarget = "/shop/";
	if (referer) {
		try {
			const refUrl = new URL(referer);
			if (refUrl.origin === url.origin) {
				refUrl.searchParams.set("review_submitted", "1");
				redirectTarget = `${refUrl.pathname}${refUrl.search}`;
			}
		} catch {
			// Fallback to /shop/
		}
	}
	return new Response(null, {
		status: 303,
		headers: { Location: redirectTarget },
	});
};

export const GET: APIRoute = async () => {
	return new Response(null, {
		status: 302,
		headers: { Location: "/blog/" },
	});
};

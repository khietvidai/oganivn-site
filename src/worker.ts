import handler, { createScheduledHandler, PluginBridge } from "@emdash-cms/cloudflare/worker";

export { PluginBridge };

const SECURITY_HEADERS: Record<string, string> = {
	"Strict-Transport-Security": "max-age=31536000; includeSubDomains; preload",
	"X-Content-Type-Options": "nosniff",
	"X-Frame-Options": "SAMEORIGIN",
	"Referrer-Policy": "strict-origin-when-cross-origin",
	"Permissions-Policy":
		"camera=(), geolocation=(), microphone=(), accelerometer=(), focus-without-user-activation=()",
	"Cross-Origin-Opener-Policy": "same-origin-allow-popups",
	"Content-Security-Policy":
		"frame-ancestors 'self'; base-uri 'self'; object-src 'none'",
};

export default {
	...handler,
	async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
		const response = await handler.fetch(request, env, ctx);
		const headers = new Headers(response.headers);
		for (const [key, value] of Object.entries(SECURITY_HEADERS)) {
			if (!headers.has(key)) {
				headers.set(key, value);
			}
		}
		return new Response(response.body, {
			status: response.status,
			statusText: response.statusText,
			headers,
		});
	},
	scheduled: createScheduledHandler(),
} satisfies ExportedHandler;

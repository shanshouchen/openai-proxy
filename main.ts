import {serve} from "https://deno.land/std@0.181.0/http/server.ts";
import { cors_all } from "https://deno.land/x/masx200_deno_http_middleware@1.0.2/middleware.ts";
import { createHandler } from "https://deno.land/x/masx200_deno_http_middleware@1.2.1/mod.ts";

const OPENAI_API_HOST = "api.openai.com";

const handler = createHandler([cors_all, async (ctx) => {
    const url = new URL(ctx.request.url);
    if (url.pathname === "/") {
        return fetch(new URL("./desc.md", import.meta.url));
    }

    url.host = OPENAI_API_HOST;
    return await fetch(url, ctx.request);
}])

serve(handler);

import {serve} from "https://deno.land/std@0.181.0/http/server.ts";

const OPENAI_API_HOST = "api.openai.com";

serve(async (request) => {
    const url = new URL(request.url);

    if (url.pathname === "/") {
        return fetch(new URL("./desc.md", import.meta.url));
    }

    url.host = OPENAI_API_HOST;
    request.respond({
        headers: new Headers({
            'Access-Control-Allow-Origin': '*', // 允许所有来源的请求
            'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE', // 允许的请求方法
            'Access-Control-Allow-Headers': 'Content-Type', // 允许的请求头
        }),
    });
    return await fetch(url, request);
});

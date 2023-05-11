FROM denoland/deno

EXPOSE 8000

WORKDIR /app

USER deno

COPY desc.md .

COPY main.ts .
RUN deno cache main.ts

CMD ["run", "--allow-net","--allow-read", "main.ts"]
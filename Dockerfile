FROM oven/bun:1 AS builder

WORKDIR /usr/src/app

COPY package.json bun.lockb* ./

RUN bun install --frozen-lockfile

COPY . .

RUN bun run build

FROM oven/bun:1-slim AS production

WORKDIR /usr/src/app

ENV PORT=3000

COPY --from=builder /usr/src/app/node_modules ./node_modules
COPY --from=builder /usr/src/app/build ./build
COPY --from=builder /usr/src/app/package.json .

EXPOSE 3000

CMD ["bun", "run", "start"]

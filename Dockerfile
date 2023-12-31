FROM oven/bun:1 as builder

WORKDIR /builder

COPY . /builder

RUN bun install && bun run build

FROM node:19-bullseye

COPY --from=builder /builder/dist /app

RUN yarn global add serve

WORKDIR /app

EXPOSE 3000

CMD [ "serve", "-s"]
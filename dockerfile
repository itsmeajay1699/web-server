
FROM node:22-alpine

RUN corepack enable

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"


WORKDIR /app

COPY package.json pnpm-lock.yaml ./

RUN pnpm install

COPY . .

CMD ["pnpm", "start"]

EXPOSE 3000


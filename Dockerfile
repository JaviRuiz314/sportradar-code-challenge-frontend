FROM node:16-alpine

RUN mkdir -p /opt/app
WORKDIR /opt/app

COPY package.json package-lock.json ./
RUN npm install

ARG API_URL
ENV API_URL ${API_URL:-http://localhost:8000}

ARG PORT
ENV PORT=$PORT

COPY . .
RUN npm run build

EXPOSE $PORT
CMD [ "npm" "run" "start" ]

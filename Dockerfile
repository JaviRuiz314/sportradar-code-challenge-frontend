FROM node:16-alpine

RUN mkdir -p /opt/app
WORKDIR /opt/app

COPY package.json package-lock.json ./
RUN npm install

ARG REACT_APP_API_URL
ENV REACT_APP_API_URL=${REACT_APP_API_URL}

ARG PORT
ENV PORT=${PORT}

COPY . .
RUN npm run build

EXPOSE ${PORT}
CMD [ "npm" "start" ]

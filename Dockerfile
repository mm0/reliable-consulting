FROM node:lts AS build
WORKDIR /app
COPY package.json .
COPY package-lock.json .
RUN npm ci
COPY . .
RUN npm run build
RUN echo "www.reliable.consulting" > dist/CNAME && \
    touch dist/.nojekyll && \
    cp dist/index.html dist/404.html

FROM scratch AS dist
COPY --from=build /app/dist /dist

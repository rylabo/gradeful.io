FROM node:gallium-alpine
USER root
RUN npm install -g npm@latest
RUN apk add --no-cache bash
USER node
WORKDIR /home/node/app
COPY --chown=node:node ./ ./
RUN chmod +x ./wait-for-it.sh ./docker-entrypoint.sh
RUN npm install
EXPOSE 3000
ENTRYPOINT [ "./docker-entrypoint.sh" ]
CMD [ "node", "main.js" ]

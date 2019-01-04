FROM node:slim
RUN mkdir /home/tba-js
COPY ./ /home/tba-js
WORKDIR /home/tba-js

RUN npm install

CMD npm start
CMD npm run storybook

EXPOSE 9001

VOLUME /var/www/html/tba-js
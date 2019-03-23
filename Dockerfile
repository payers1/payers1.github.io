FROM node:10
RUN mkdir /usr/src/app
WORKDIR /usr/src/app
ADD ./build /usr/src/app
RUN ls

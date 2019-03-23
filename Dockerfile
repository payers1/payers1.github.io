FROM node:10
RUN printenv
ADD . /usr
RUN ls
RUN ls /usr
RUN echo hello world
RUN ls /usr/src

FROM node:10
RUN printenv
RUN cd /usr
RUN echo hello world
RUN ls

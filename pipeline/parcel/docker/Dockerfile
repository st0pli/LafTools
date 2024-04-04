FROM ubuntu:22.04
RUN mkdir /opt/app

RUN apt-get update && \
    apt-get install -y curl 
RUN mkdir -p /opt/app

RUN curl https://cdn.npmmirror.com/binaries/node/v20.12.0/node-v20.12.0-linux-x64.tar.gz -O
RUN tar -xf node-v20.12.0-linux-x64.tar.gz
ENV PATH "/opt/app/node-v20.12.0-linux-x64/bin:${PATH}"
ENV NODE_ENV production

COPY ["./linux.tar.gz", "/opt/app"]
COPY ["./bootstrap.sh","/opt/app"]
WORKDIR "/opt/app"
CMD ["/opt/app/bootstrap.sh"]

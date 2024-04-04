FROM ubuntu:22.04
RUN mkdir /opt/app

RUN apt-get update && \
    apt-get install -y curl 
RUN mkdir -p /opt/app

ENV PATH "/opt/app/node-v20.12.0-linux-x64/bin:${PATH}"
ENV NODE_ENV production

COPY ["./node-v20.12.0-linux-x64","/opt/app"]
COPY ["./linux.tar.gz", "/opt/app"]
COPY ["./bootstrap.sh","/opt/app"]
WORKDIR "/opt/app"
CMD ["/opt/app/bootstrap.sh"]

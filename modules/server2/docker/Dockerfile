# Start with a base image containing Java runtime
FROM ubuntu:22.04

# mirrors for China mainland
RUN sed -i 's/archive.ubuntu.com/mirrors.aliyun.com/g' /etc/apt/sources.list

# Install OpenJDK-8
RUN apt-get update && \
    apt-get install -y wget && \
    apt-get install -y curl && \
    apt-get install -y mysql-client && \
    apt-get install -y nodejs npm && \
    npm install -g pm2 && \
    apt-get clean;

RUN mkdir -p /opt/app
COPY ["./dist", "/opt/app"]
COPY ["./bootstrap.sh","/opt/app"]
WORKDIR "/opt/app"
CMD ["/opt/app/bootstrap.sh"]
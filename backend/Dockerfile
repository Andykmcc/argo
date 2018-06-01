# specify the node base image with your desired version node:<version>
FROM node:10
# replace this with your application's default port
EXPOSE 8080

# ----- [1] Misc Preparation ---------------------------------------------------

# Add sudo, useful when debugging inside containers.
# RUN apt-get update && apt-get install -y sudo

# Install a version of NPM that has "npm ci".
# RUN npm install --global npm@5.7.1

# Set NODE_ENV to production inside the container.
ENV NODE_ENV=production


# ----- [2] Install Tini Process Manager ---------------------------------------

ENV TINI_VERSION v0.18.0
ADD https://github.com/krallin/tini/releases/download/${TINI_VERSION}/tini /tini
RUN chmod +x /tini
ENTRYPOINT ["/tini", "-v", "--"]


# ----- [3] Copy Build Artifacts -----------------------------------------------

WORKDIR /usr/src
COPY package /usr/src/app
COPY src /usr/src/app/src
COPY bin /usr/src/app/bin

# ----- [4] Install Dependencies -----------------------------------------------

# Use either "npm ci" (installs from lockfile, very fast)
RUN npm ci --production --no-optional

# ----- [5] Misc Post ----------------------------------------------------------

# This will be appended to the ENTRYPOINT above, unless overridden by manually
# docker-run-ing the container. The "main" value is interpolated at build-time
# by Edge's build CLI.
# CMD ["node", "<%= ENTRYPOINT %>"]

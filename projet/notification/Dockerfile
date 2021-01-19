FROM node:12.20.1

# Create app directory
WORKDIR /

COPY package.json .
COPY package-lock.json .

RUN npm install
COPY . .

EXPOSE 8080
CMD npm run start

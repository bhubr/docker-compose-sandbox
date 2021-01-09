FROM node:lts-alpine

WORKDIR /app

# Copy app files 
COPY package.json *.js /app/

# Install deps
RUN yarn

# Run the app
CMD ["npm", "start"]

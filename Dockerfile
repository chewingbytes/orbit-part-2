FROM node:20

# Set working directory
WORKDIR /usr/src/app

# Install dependencies
COPY package*.json ./
RUN npm install

# Install PM2 globally
RUN npm install pm2 -g

# Copy app files
COPY . .

# Expose the port your app will run on
EXPOSE 5050

# Use PM2 to start the app (e.g., index.js) with the ecosystem file or directly
CMD ["pm2-runtime", "ecosystem.config.js"]

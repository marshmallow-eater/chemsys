FROM node:22-slim AS builder

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and the lockfile
COPY package.json package-lock.json* ./

# Install dependencies using npm ci for clean, reproducible builds
RUN npm ci

# Copy the rest of the application source code
COPY . .

# Run the build script
RUN npm run build

# --- Production Stage ---

# Use a slim Node.js image for the production stage
FROM node:22-slim AS production

WORKDIR /usr/src/app

# Set the port environment variable
ENV PORT=3000
ENV NODE_ENV=production

# Copy built assets and production dependencies
COPY --from=builder /usr/src/app/node_modules ./node_modules
COPY --from=builder /usr/src/app/build ./build
COPY --from=builder /usr/src/app/package.json .

# Expose the port the app runs on
EXPOSE 3000

# The command to start the application
CMD ["npm", "run", "start"]

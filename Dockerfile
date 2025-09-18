# Use Node.js for building the app
FROM node:18-alpine AS builder

# Set working directory
WORKDIR /app

# Install pnpm globally
RUN npm install -g pnpm

# Copy package files
COPY package*.json ./

# Install dependencies (including dev deps for build)
RUN pnpm install

# Copy source code
COPY . .

# Build the app
RUN pnpm run build



# Production stage
FROM node:18-alpine AS runner

# Set working directory
WORKDIR /app

# Install pnpm globally (optional, if needed for CMD)
RUN npm install -g pnpm

# Copy package files and install only production dependencies
COPY --from=builder /app/package*.json ./
RUN pnpm install --prod && pnpm cache clean 

# this will install only production dependencies


# Copy built app and other essentials
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public

# Expose port 3000
EXPOSE 3000

# Set environment to production
ENV NODE_ENV=production

# Start the app
CMD ["pnpm", "start"]
# Stage 1: Install dependencies
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .

# Stage 2: Final lightweight image
FROM node:18-alpine
WORKDIR /app
COPY --from=builder /app /app
EXPOSE 5000
CMD ["node", "server.js"]
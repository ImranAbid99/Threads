# Threadora

Threadora is an original fashion storefront foundation for men, women, and kids. The client and server are intentionally independent applications.

## Run locally

1. Install Node.js 20+.
2. Start PostgreSQL with `docker compose up -d`.
3. Install dependencies: `cd client && npm install`; in another terminal `cd server && npm install`.
4. Start the frontend with `npm run dev` in `client` (`http://localhost:3000`).
5. Start the API with `npm run start:dev` in `server` (`http://localhost:3001/api/v1/health`).

## Current scope

The initial pass includes the polished responsive homepage, category listing routes, sorting/search, product detail views, demo cart route, centralized product data, Docker PostgreSQL configuration, and NestJS health/category/product route foundations. Product data is explicitly demonstration data. The cart persistence, full TypeORM schema/migrations, auth, admin, checkout, and transactional order workflow are documented follow-up work rather than simulated as complete.

# =========================
# 1) BUILD
# =========================
FROM node:20-alpine AS build

WORKDIR /app

# Copia manifests primeiro para aproveitar cache
COPY package.json package-lock.json* ./

RUN npm ci

# Copia o resto do projeto
COPY . .

# Build do Vite (gera /dist)
RUN npm run build


# =========================
# 2) RUN (NGINX)
# =========================
FROM nginx:alpine

# SPA fallback (rota do React)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copia build final para o nginx
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

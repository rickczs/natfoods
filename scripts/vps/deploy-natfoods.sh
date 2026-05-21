#!/usr/bin/env bash
set -euo pipefail

APP_DIR="${APP_DIR:-/var/www/natfoods}"
PM2_APP_NAME="${PM2_APP_NAME:-natfoods-site}"

if [[ ! -d "${APP_DIR}" ]]; then
  echo "Diretorio nao encontrado: ${APP_DIR}"
  echo "Clone o repositorio primeiro: git clone https://github.com/rickczs/natfoods.git ${APP_DIR}"
  exit 1
fi

cd "${APP_DIR}"

echo "==> Atualizando codigo"
git pull --ff-only

echo "==> Instalando dependencias"
npm ci

echo "==> Rodando lint"
npm run lint

echo "==> Gerando build de producao"
npm run build

echo "==> Reiniciando aplicacao com PM2"
if pm2 describe "${PM2_APP_NAME}" >/dev/null 2>&1; then
  pm2 restart "${PM2_APP_NAME}" --update-env
else
  pm2 start ecosystem.config.js
fi

pm2 save
pm2 status

echo "Deploy concluido."

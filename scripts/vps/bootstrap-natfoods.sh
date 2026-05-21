#!/usr/bin/env bash
set -euo pipefail

NODE_MAJOR="${NODE_MAJOR:-22}"

if [[ "${EUID}" -ne 0 ]]; then
  echo "Execute este script como root: sudo bash scripts/vps/bootstrap-natfoods.sh"
  exit 1
fi

export DEBIAN_FRONTEND=noninteractive

echo "==> Atualizando pacotes"
apt-get update
apt-get upgrade -y

echo "==> Instalando dependencias basicas"
apt-get install -y ca-certificates curl gnupg git nginx ufw

if ! command -v node >/dev/null 2>&1 || [[ "$(node -v | sed 's/^v//' | cut -d. -f1)" != "${NODE_MAJOR}" ]]; then
  echo "==> Instalando Node.js ${NODE_MAJOR}.x via NodeSource"
  curl -fsSL "https://deb.nodesource.com/setup_${NODE_MAJOR}.x" | bash -
  apt-get install -y nodejs
else
  echo "==> Node.js ${NODE_MAJOR}.x ja instalado"
fi

if ! command -v pm2 >/dev/null 2>&1; then
  echo "==> Instalando PM2"
  npm install -g pm2
else
  echo "==> PM2 ja instalado"
fi

echo "==> Habilitando Nginx"
systemctl enable nginx
systemctl start nginx

echo "==> Configurando firewall basico se UFW estiver disponivel"
ufw allow OpenSSH || true
ufw allow "Nginx Full" || true

echo "==> Versoes instaladas"
node -v
npm -v
pm2 -v
nginx -v

echo "Setup inicial concluido. Proximo passo: clonar o repositorio em /var/www/natfoods."

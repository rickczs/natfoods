module.exports = {
  apps: [
    {
      name: "natfoods-site",
      script: "npm",
      args: "start",
      cwd: "/var/www/natfoods",
      env: {
        NODE_ENV: "production",
        PORT: 3000
      }
    }
  ]
};

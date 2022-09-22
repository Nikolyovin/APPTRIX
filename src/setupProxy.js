const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = (app) => {
  app.use(
    createProxyMiddleware('/users/:userId',
    {
      target: 'https://demo-apptrix.myjetbrains.com/youtrack/api/',
      changeOrigin: true,
    })
  );
};
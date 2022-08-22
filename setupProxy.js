const {createProxyMiddleware} = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        createProxyMiddleware("/api", {
            target: "http://localhost:80" || "http://localhost:8080",
            changeOrigin: true,
        })
    )
    app.use(
        createProxyMiddleware("/lyrics", {
            target: "http://localhost:80" || "http://localhost:8080",
            changeOrigin: true,
        })
    )
}
﻿const { createProxyMiddleware } = require('http-proxy-middleware');

const context = [
    "/game",
];

module.exports = function (app) {
    const appProxy = createProxyMiddleware(context, {
        target: 'https://localhost:7072',
        secure: false
    });

    app.use(appProxy);
};

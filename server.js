const express = require('express');
const cp = require('child_process');
const next = require('next');
// const os = require('os');
const proxyMiddleware = require('http-proxy-middleware');
const { publicRuntimeConfig, serverRuntimeConfig } = require('./next.config');

// function getIPAdress() {
//   const interfaces = os.networkInterfaces();
  
//   for (let devName in interfaces) {
//     const iface = interfaces[devName];
//     for (let i = 0; i < iface.length; i++) {
//       const alias = iface[i];
//       if (alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal) {
//         return alias.address;
//       }
//     }
//   }
// }

const { isDev } = publicRuntimeConfig;
const { PORT } = serverRuntimeConfig;

const app = next({ dev: isDev });
const handle = app.getRequestHandler();

const devProxy = {
  '/api': {
    target: 'http://localhost:8000', // 端口自己配置合适的
    pathRewrite: {
      '^/api': '/'
    },
    changeOrigin: true
  }
};

app.prepare()
  .then(() => {
    const server = express();

    if (isDev && devProxy) {
      Object.keys(devProxy).forEach(function(context) {
        server.use(proxyMiddleware(context, devProxy[context]));
      });
    }

    server.get('*', (req, res) => {
      return handle(req, res);
    });

    server.listen(PORT, err => {
      if (err) throw err;
      const serverUrl = `http://127.0.0.1:8099/`;
      // const serverUrl = `http://localhost:${PORT}`;
      console.log(`
        App is running at:
        - Local: ${serverUrl}
      `);
      // console.log(`
      //   App is running at:
      //   - Local: ${serverUrl}
      //   - Network: http://${getIPAdress()}:${PORT}
      // `);
      // development auto open browser
      if (isDev) {
        switch (process.platform) {
          // macos
          case 'darwin':
            cp.exec(`open ${serverUrl}`);
            break;
          // windows
          case 'win32':
            cp.exec(`start ${serverUrl}`);
            break;
          default:
            cp.exec(`open ${serverUrl}`);
        }
      }
    });
  });


const next = require('next');
const express = require('express');
const Routes = require('./routes');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare()
  .then(() => {
    const server = express();
    Routes(app, server);
    server.get('*', (req, res) => handle(req, res));

    server.listen(process.env.PORT || 3000, (err) => {
      if (err) {
        throw err;
      }

      console.log(`> Ready on http://localhost:${process.env.PORT || 3000}`);
    });
  })
  .catch((ex) => {
    console.error(ex.stack);
    process.exit(1);
  });

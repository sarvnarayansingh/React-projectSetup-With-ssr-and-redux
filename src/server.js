import 'babel-polyfill';
import express from 'express';
import { matchRoutes } from 'react-router-config';
import renderer from './Helper/renderer'
import Router from './Helper/router'
import createStore from './Redux/Store/serverStore'

const app = express();

app.get('/dist.js', function (req, res, next) {
    req.url = req.url + '.gz';
    res.set('Content-Encoding', 'gzip');
    res.set('Content-Type', 'text/javascript');
    next();
  });

  app.use(express.static('public'));

  app.get('*', (req, res) => {
    const store = createStore(req);
    const promises = matchRoutes(Router, req.path)
      .map(({ route, match }) => {
        return route.loadData ? route.loadData(store, match) : null;
      })
      .map((promise) => {
        if (promise) {
          return new Promise((resolve, reject) => {
            promise.then(resolve).catch(resolve);
          });
        }
      });
  
    Promise.all(promises)
      .then(() => {
        const context = {};
        const content = renderer(req, store, context);
        if (context.url) {
          return res.redirect(301, context.url);
        }
        if (context.notFound) {
          res.status(404);
        }
        res.send(content);
      })
      .catch((err) => console.log(err));
  });
  
  app.listen(process.env.PORT, () => {
    console.log(`server is up and running 5001`);
  });
import 'babel-polyfill';
import express from 'express';
import { matchRoutes } from 'react-router-config';
import renderer from '../Helpers/renderer';
import Routes from '../Helpers/router';
import createStore from '../Helpers/store';
import axios from 'axios';
import API from '../Helpers/endpoints';
import sitemapRendering from '../Util/SitemapRendering';

const renderUrl = process.env.RenderUrl;
const webUrl = process.env.WebUrl;
const baseUrl = process.env.BaseUrl;

// const basicAuth = require('express-basic-auth');
const bodyParser = require('body-parser');
const chalk = require('chalk');

const app = express();

const options = {
  httpOnly: false,
};

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/dist.js', function (req, res, next) {
  req.url = req.url + '.gz';
  res.set('Content-Encoding', 'gzip');
  res.set('Content-Type', 'text/javascript');
  next();
});

app.use(express.static('public'));
/* app.use(
  basicAuth({
    users: { admin: 'scbank' },
    challenge: true,
  })
); */

// app.post('/', async (req, res, next) => {
//   try {
//     const { name, mobileNumber, emailId } = req.body;
//     if (!name || !mobileNumber || !emailId) {
//       return res.redirect(webUrl + renderUrl);
//     }
//     const { data: result } = await axios({
//       url: baseUrl + API.SSOLOginApi,
//       method: 'POST',
//       data: req.body,
//     });
//     res.cookie('rbl_bank_offer', result['x-api-key'], options);
//     res.cookie('sso_user', 1, options);
//     res.redirect(webUrl + renderUrl);
//   } catch (err) {
//     res.redirect(webUrl + renderUrl);
//   }
// });

app.get('*', (req, res) => {
  const store = createStore(req);
  const promises = matchRoutes(Routes, req.path)
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
  // console.log(chalk.hex('#073FCF').bold.underline(`${renderUrl.replace(/\//g, '')} server is up and running on port ${process.env.PORT}`));
});

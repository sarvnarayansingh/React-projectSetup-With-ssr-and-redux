import React from 'react';
import { renderToString } from 'react-dom/server';
import { renderRoutes } from 'react-router-config';
import { StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import serialize from 'serialize-javascript';
import Router from './router';

const renderUrl = process.env.RenderUrl;

export default (req, store, context) => {
    const content = renderToString(
      <Provider store={store}>
        <StaticRouter location={req.path} context={context}>
          <React.Fragment>{renderRoutes(Router)}</React.Fragment>
        </StaticRouter>
      </Provider>
    );
    return `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="utf-8">
        <meta name="theme-color" content="#000000" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <meta data-react-helmet="true" name="robots" content="INDEX, FOLLOW" />
        <meta data-react-helmet="true" name="googlebot" content="INDEX, FOLLOW">

        <link rel="stylesheet" type="text/css" href="${renderUrl}css/notfound.css">

		  </head>
    <body>
      <div id="root">${content}</div>
      <script>
          window.INITIAL_STATE = ${serialize(store.getState())}
      </script>

      <script src="${renderUrl}dist.js"></script>

      <script>
        if ('serviceWorker' in navigator) {
          window.addEventListener('load', function() {
            navigator.serviceWorker.register('${renderUrl}service-worker.js').then(function(registration) {
              return null;
            }, function(err) {
              return null;
            });
          });
        }
      </script>

	  </body>
    </html>
  `;
};

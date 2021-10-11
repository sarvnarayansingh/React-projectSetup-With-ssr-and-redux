import React from 'react';
import { renderToString } from 'react-dom/server';
import { Helmet } from 'react-helmet';
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';
import { StaticRouter } from 'react-router-dom';
import serialize from 'serialize-javascript';
import Routes from './router';

const renderUrl = process.env.RenderUrl;

export default (req, store, context) => {
  const content = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.path} context={context}>
        <React.Fragment>{renderRoutes(Routes)}</React.Fragment>
      </StaticRouter>
    </Provider>
  );

  const helmet = Helmet.renderStatic();
  return `<!DOCTYPE html>
    <html lang="en">
      <head>
        ${helmet.title.toString()}
        ${helmet.meta.toString()}
        ${helmet.link.toString()}
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <meta data-react-helmet="true" name="robots" content="INDEX, FOLLOW" />
        <meta data-react-helmet="true" name="googlebot" content="INDEX, FOLLOW">

        <link data-react-helmet="true" rel="canonical" href="https://www.gyftr.com/rblbankoffers/" />
        <link rel="icon" type="image/x-icon" href="${renderUrl}images/favicon.ico">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous">
        <link href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900&display=swap" rel="stylesheet">


       
        
        <script id='_webengage_script_tag' type='text/javascript'>
          var webengage;!function(w,e,b,n,g){function o(e,t){e[t[t.length-1]]=function(){r.__queue.push([t.join("."),
          arguments])}}var i,s,r=w[b],z=" ",l="init options track screen onReady".split(z),a="feedback survey notification".split(z),c="options render clear abort".split(z),p="Open Close Submit Complete View Click".split(z),u="identify login logout setAttribute".split(z);if(!r||!r.__v){for(w[b]=r={__queue:[],__v:"6.0",user:{}},i=0;i < l.length;i++)o(r,[l[i]]);for(i=0;i < a.length;i++){for(r[a[i]]={},s=0;s < c.length;s++)o(r[a[i]],[a[i],c[s]]);for(s=0;s < p.length;s++)o(r[a[i]],[a[i],"on"+p[s]])}for(i=0;i < u.length;i++)o(r.user,["user",u[i]]);setTimeout(function(){var f=e.createElement("script"),d=e.getElementById("_webengage_script_tag");f.type="text/javascript",f.async=!0,f.src=("https:"==e.location.protocol?"https://ssl.widgets.webengage.com":"http://cdn.widgets.webengage.com")+"/js/webengage-min-v-6.0.js",d.parentNode.insertBefore(f,d)})}}(window,document,"webengage");
          webengage.init("~47b6601c")
        </script>

		  </head>
    <body>
      <div id="root">${content}</div>
      <script>
          window.INITIAL_STATE = ${serialize(store.getState())}
      </script>

      <script src="https://code.jquery.com/jquery-3.4.1.min.js" integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo=" crossorigin="anonymous"></script>

      <script src="${renderUrl}dist.js"></script>

      <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
      <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>

      <!-- Google Tag Manager (noscript) -->
      <noscript>
        <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-K9DXL56" height="0" width="0" style="display:none;visibility:hidden"></iframe>
      </noscript>
      <!-- End Google Tag Manager (noscript) -->

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

      <script async src="https://www.googletagmanager.com/gtag/js?id=AW-697132182"></script>
      <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'AW-697132182');
      </script>
      <script type='text/javascript'>
        window.__lo_site_id = 225825;
        (function() {
        var wa = document.createElement('script'); wa.type = 'text/javascript'; wa.async = true;
        wa.src = 'https://d10lpsik1i8c69.cloudfront.net/w.js';
        var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(wa, s);
      })();
      </script>

	  </body>
    </html>
  `;
};

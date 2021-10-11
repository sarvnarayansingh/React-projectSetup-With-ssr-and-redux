import axios from 'axios';
import API from '../Helpers/endpoints';
const { SitemapStream } = require('sitemap');
const { createGzip } = require('zlib');

const baseUrl = process.env.BaseUrl;
const webUrl = process.env.WebUrl;

async function sitemapRendering(req, res) {
  res.header('Content-Type', 'application/xml');
  res.header('Content-Encoding', 'gzip');
  try {
    const { data: result } = await axios({
      url: baseUrl + API.sitemapApi,
      method: 'GET',
    });
    const smStream = new SitemapStream({ hostname: webUrl });
    const pipeline = smStream.pipe(createGzip());
    result.map((el) => smStream.write({ url: el.url, changefreq: el.changefreq, priority: el.priority }));
    smStream.end();
    pipeline.pipe(res).on('error', (err) => {
      if (err) throw err;
    });
  } catch (err) {
    if (err) throw err;
    res.status(500).end();
  }
}

export default sitemapRendering;

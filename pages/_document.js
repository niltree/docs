import Document_, { Head, Main, NextScript } from 'next/document'
import isIE11_ from '../lib/is-ie-11'
import htmlescape from 'htmlescape'

const { API_URL, NOW_API_URL } = process.env
const env = { API_URL, NOW_API_URL }

export default class Document extends Document_ {
  static async getInitialProps(ctx) {
    const props = await Document_.getInitialProps(ctx)
    const ua = String(ctx.req.headers && ctx.req.headers['user-agent'])
    return {
      ...props,
      isIE11: isIE11_(ua)
    }
  }

  render() {
    return (
      <html lang="en">
        <Head />
        <body>
          <Main />
          <script
            dangerouslySetInnerHTML={{ __html: '__ENV__ = ' + htmlescape(env) }}
          />
          <NextScript />
          <script
            dangerouslySetInnerHTML={{
              __html: `
  var _paq = _paq || [];
  /* tracker methods like "setCustomDimension" should be called before "trackPageView" */
  _paq.push(["setDocumentTitle", document.domain + "/" + document.title]);
  _paq.push(["setCookieDomain", "*.niltree.com"]);
  _paq.push(['trackPageView']);
  _paq.push(['enableLinkTracking']);
  (function() {
    var u="//next.niltree.com/p/";
    _paq.push(['setTrackerUrl', u+'js/']);
    _paq.push(['setSiteId', '1']);
    var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
    g.type='text/javascript'; g.async=true; g.defer=true; g.src=u+'js/'; s.parentNode.insertBefore(g,s);
  })();`
            }}
          />
          <noscript>
            <p>
              <img
                src="//next.niltree.com/p/js/?idsite=1&rec=1"
                style={{ border: 0 }}
                alt=""
              />
            </p>
          </noscript>
        </body>
      </html>
    )
  }
}

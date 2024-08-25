/* eslint-disable node/no-unsupported-features/es-syntax */
import Script from 'next/script';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script
        id="clarity-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `(function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "nsbbe70y6o");`,
        }}
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;

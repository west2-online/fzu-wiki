import Script from 'next/script';
import { Footer, Layout, Navbar } from 'nextra-theme-docs';
import { Head, Search } from 'nextra/components';
import { getPageMap } from 'nextra/page-map';
import 'nextra-theme-docs/style.css';

export const metadata = {
  title: {
    template: '%s - FZU Wiki',
    default: 'FZU Wiki',
  },
};

const navbar = (
  <Navbar
    logo={<span>FZU Wiki</span>}
    projectLink="https://github.com/west2-online/fzu-wiki"
  />
);

const footer = (
  <Footer>
    <div style={{ width: '100%' }}>
      Built with ❤️ by FZUers.
      <br />
      &copy; {new Date().getFullYear()} west2-online. All rights reserved.
      <small style={{ float: 'right' }}>
        Powered by{' '}
        <a
          href="https://nextra.site"
          target="_blank"
          rel="noopener noreferrer nofollow"
        >
          Nextra
        </a>
      </small>
    </div>
  </Footer>
);

const clarityScript = (
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
);

export default async function RootLayout({ children }) {
  return (
    <html lang="zh-CN" dir="ltr" suppressHydrationWarning>
      <Head />
      <body>
        {clarityScript}
        <Layout
          navbar={navbar}
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/west2-online/fzu-wiki/tree/main"
          footer={footer}
          editLink="在 GitHub 上编辑此页"
          feedback={{ content: '有疑问？马上反馈', labels: 'feedback' }}
          toc={{ title: '目录' }}
          search={<Search placeholder="搜索..." />}
          copyPageButton={false}
          themeSwitch={{
            dark: '深色模式',
            light: '浅色模式',
            system: '跟随系统',
          }}
        >
          {children}
        </Layout>
      </body>
    </html>
  );
}

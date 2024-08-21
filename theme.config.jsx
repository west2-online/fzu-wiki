import { useRouter } from 'next/router';

/** @type {import('nextra-theme-docs').DocsThemeConfig} */
const config = {
  logo: <span>FZU Wiki</span>,
  project: {
    link: 'https://github.com/west2-online/fzu-wiki',
  },
  docsRepositoryBase: 'https://github.com/west2-online/fzu-wiki',
  useNextSeoProps() {
    const { asPath } = useRouter();
    if (asPath !== '/') {
      return {
        titleTemplate: '%s - FZU Wiki',
      };
    }
  },
  footer: {
    text: (
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
    ),
  },
};

export default config;

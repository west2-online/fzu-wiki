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
};

export default config;

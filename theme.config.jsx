import { useRouter } from 'next/router';

/** @type {import('nextra-theme-docs').DocsThemeConfig} */
const config = {
  logo: <span>FZU Wiki</span>,
  project: {
    link: 'https://github.com/west2-online/fzu-wiki',
  },
  docsRepositoryBase: 'https://github.com/west2-online/fzu-wiki/tree/main',
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
  editLink: {
    text: '在 GitHub 上编辑此页',
  },
  feedback: {
    content: '有疑问？马上反馈',
    labels: 'feedback',
  },
  toc: {
    title: '目录',
  },
  search: {
    placeholder: '搜索...',
  },
};

export default config;

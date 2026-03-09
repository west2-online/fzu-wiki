import nextra from 'nextra'

const withNextra = nextra({})

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  trailingSlash: true,
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  images: {
    unoptimized: true,
  },
  turbopack: {
    resolveAlias: {
      'next-mdx-import-source-file': './mdx-components.js',
      'mdx-components': './mdx-components.js',
    },
  },
}

export default withNextra(nextConfig)

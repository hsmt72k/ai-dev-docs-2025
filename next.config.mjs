import { createMDX } from 'fumadocs-mdx/next'

const withMDX = createMDX()

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/docs', // リダイレクト元のパス
        destination: '/docs/hands-on', // リダイレクト先のパス
        permanent: true, // 永続的なリダイレクト（308ステータスコード）
      },
    ]
  },
}

export default withMDX(config)

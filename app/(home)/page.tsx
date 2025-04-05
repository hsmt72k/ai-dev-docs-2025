import Link from 'next/link'

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col justify-center text-center">
      <h1 className="mb-4 text-2xl font-bold">Hello World</h1>
      <p className="text-fd-muted-foreground">
        AI 開発ハンズオンは&nbsp;
        <Link
          href="/docs"
          className="text-fd-foreground font-semibold underline"
        >
          /docs
        </Link>
        &nbsp; ページへ。開発ドキュメントを見ることができます
      </p>
    </main>
  )
}

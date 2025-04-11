import Link from 'next/link'

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col justify-center text-center">
      <h1 className="mb-4 text-2xl font-bold">
        ようこそ 生成 AI BoosterCamp へ
      </h1>
      <p className="text-fd-muted-foreground">
        生成 AI BoosterCamp は&nbsp;
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

'use client'

import 'katex/dist/katex.min.css'
import katex from 'katex'
import { useEffect, useRef } from 'react'

interface InlineMathProps {
  math: string
}

export function InlineMath({ math }: InlineMathProps) {
  const containerRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    if (containerRef.current) {
      katex.render(math, containerRef.current, {
        throwOnError: false,
        displayMode: false,
      })
    }
  }, [math])

  return <span ref={containerRef} />
}

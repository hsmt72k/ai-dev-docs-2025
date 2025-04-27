import defaultMdxComponents from 'fumadocs-ui/mdx'
import { Mermaid } from '@/components/mdx/mermaid'
import { InlineMath } from '@/components/mdx/inline-math'
import type { MDXComponents } from 'mdx/types'

export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...defaultMdxComponents,
    Mermaid,
    InlineMath,
    ...components,
  }
}

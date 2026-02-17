'use client'

import { useEffect, useState } from 'react'
import Prism from 'prismjs'

type Props = {
  code: string
  language?: string
  filename?: string
}

export default function CodeBlock({
  code,
  language = 'typescript',
  filename,
}: Props) {
  const [html, setHtml] = useState<string>('')

  useEffect(() => {
    let mounted = true

    async function load() {
      await import('prismjs/components/prism-markup')
      await import('prismjs/components/prism-clike')
      await import('prismjs/components/prism-javascript')
      await import('prismjs/components/prism-jsx')
      await import('prismjs/components/prism-typescript')
      await import('prismjs/components/prism-tsx')

      await import('prismjs/components/prism-c')
      await import('prismjs/components/prism-cpp')
      await import('prismjs/components/prism-python')
      await import('prismjs/components/prism-bash')
      await import('prismjs/components/prism-json')

      const grammar =
        Prism.languages[language] || Prism.languages.clike || Prism.languages.plain

      const highlighted = Prism.highlight(code, grammar, language)
        .split('\n')
        .map((line) => `<span>${line || ' '}</span>`)
        .join('')

      if (mounted) setHtml(highlighted)
    }

    load()

    return () => {
      mounted = false
    }
  }, [code, language])

  const [copied, setCopied] = useState(false)

  const copy = async () => {
    await navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 1200)
  }

  return (
    <div className="group relative rounded-2xl border border-zinc-800 bg-zinc-900 shadow-lg overflow-hidden">
      {(filename || language) && (
        <div className="flex items-center justify-between px-4 py-2 text-xs bg-zinc-800 border-b border-zinc-700">
          <span className="font-mono text-zinc-300">
            {filename || language}
          </span>

          <button
            onClick={copy}
            className="opacity-0 group-hover:opacity-100 transition text-zinc-400 hover:text-white"
          >
            {copied ? 'copied' : 'copy'}
          </button>
        </div>
      )}

      <pre className="overflow-auto text-sm leading-relaxed max-h-96">
        {html ? (
          <code
            className={`language-${language} block px-4 py-4`}
            dangerouslySetInnerHTML={{ __html: html }}
          />
        ) : (
          <code className="block px-4 py-4 whitespace-pre">{code}</code>
        )}
      </pre>
    </div>
  )
}
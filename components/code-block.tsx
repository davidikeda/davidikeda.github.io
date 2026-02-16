'use client'

import {useState} from "react";
import Prism from 'prismjs'
import 'prismjs/components/prism-tsx';
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-python';
import 'prismjs/components/prism-c';
import 'prismjs/components/prism-cpp';
import 'prismjs/components/prism-java';
import 'prismjs/components/prism-go';
import 'prismjs/components/prism-rust';
import 'prismjs/components/prism-csharp';
import 'prismjs/components/prism-json';
import 'prismjs/components/prism-kotlin';

type Props = {
    code: string
    language?: string
    filename?: string
}

export default function CodeBlock({
    code,
    language = "typescript",
    filename,
}: Props) {
    const [copied, setCopied] = useState(false)

    const html = Prism.highlight(code, Prism.languages[language], language)
    const copy = async () => {
        await navigator.clipboard.writeText(code)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
    }

    return (
        <div className="group relative bg-zinc-100 rounded-lg overflow-hidden">
            {filename && (
                <div className="absolute top-0 left-0 right-0 bg-zinc-200 px-4 py-2 text-sm font-medium text-zinc-700">
                    {filename}
                </div>
            )}
            <pre className={`overflow-x-auto ${filename ? 'pt-10' : 'p-4'}`}>
                <code
                    className={`language-${language} block whitespace-pre`}
                    dangerouslySetInnerHTML={{ __html: html }}
                />
            </pre>
            <button
                onClick={copy}
                className="absolute top-2 right-2 bg-zinc-200 hover:bg-zinc-300 text-sm font-medium text-zinc-700 px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity"
            >
                {copied ? "Copied!" : "Copy"}
            </button>
        </div>
    )
}
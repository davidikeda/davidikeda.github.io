import ProjectPage from "@/components/project-page";
import CodeBlock from "@/components/code-block";

export default function Quokka() {
    return (
        <ProjectPage
            title="Quokka"
            description="A Machine to Machine language (M2M) that allows the communication and allocation of resources over usb cables"
            date="01-30-2026"
            status="in-progress"
            backLink="/programming"
            backText="Back to Programming"
        >

            <section className="mb-12">
                <h2 className="text-2xl font-bold text-zinc-900 mb-4">Overview</h2>
                <p>Quokka is a relatively small language I&#39;ve been working on (around 20 default keywords), that allows communication and allocation of resources over any standard USB cable. It&#39;s (It shouldent be) not limited by the port either, as long as both devices either have a USB port, or they have RX/TX pins, and the ability to <i>use</i> those ports, the language works.</p>
            </section>

            <section className="mb-12">
                <h2 className="text-2xl font-bold text-zinc-900 mb-4">A quick note</h2>
                <p>This project is still under development, at the time of writing this (3/5/26), I have finished most of the language (Lexer, Ast, Parser, and testing scripts) I plan to finish the compiler by the end of the month, view the progress here: <a href="https://github.com/davidikeda/quokka" target="_blank" id="link">https://github.com/davidikeda/quokka</a></p>
            </section>

            <section className="mb-12">
                <h2 className="text-2xl font-bold text-zinc-900 mb-4">Lexer</h2>
                <p>The lexer is custom made, in C of course. Originally I thought about going with a program that would generate the lexer (Flex/Bison), but I decided to just code it myself for more control. There is two main parts of the lexer (right now), the main C program, and the lexer_test.c which is what gets turned into an executable.</p>
                <br></br>
                <CodeBlock
                    code = {"//\n" +
                    "// Created by David Ikeda on 2/10/2026.\n" +
                    "//\n" +
                    "\n" +
                    "#include \"../lexer.h\"\n" +
                    "#include <stdio.h>\n" +
                    "#include <stdlib.h>\n" +
                    "\n" +
                    "static const char *tokenName(TokenType t)\n" +
                    "{\n" +
                    "    switch (t)\n" +
                    "    {\n" +
                    "        case TOK_EOF: return \"EOF\";\n" +
                    "        case TOK_IDENTIFIER: return \"IDENTIFIER\";\n" +
                    "        case TOK_ELSE: return \"ELSE\";\n" +
                    "        case TOK_NUMBER: return \"NUMBER\";\n" +
                    "        case TOK_STRING: return \"STRING\";\n" +
                    "        //etc.... \n" +
                    "        default: return \"UNKNOWN\";\n" +
                    "    }\n" +
                    "}\n" +
                    "\n" +
                    "int main(void)\n" +
                    "{\n" +
                    "    FILE *f = fopen(\"test.qk\", \"r\");\n" +
                    "    if (!f)\n" +
                    "    {\n" +
                    "        perror(\"test.qk\");\n" +
                    "        return 1;\n" +
                    "    }\n" +
                    "\n" +
                    "    Lexer *lx = lexerInit(f);\n" +
                    "\n" +
                    "    for (;;)\n" +
                    "    {\n" +
                    "        Token tok = lexerNextToken(lx);\n" +
                    "        printf(\"[%d:%d] %-12s %s\\n\",\n" +
                    "            tok.line,\n" +
                    "            tok.column,\n" +
                    "            tokenName(tok.type),\n" +
                    "            tok.value ? tok.value : \"\");\n" +
                    "\n" +
                    "        if (tok.value) {\n" +
                    "            free(tok.value);\n" +
                    "        }\n" +
                    "\n" +
                    "        if (tok.type == TOK_EOF)\n" +
                    "            break;\n" +
                    "    }\n" +
                    "\n" +
                    "    lexerFree(lx);\n" +
                    "    fclose(f);\n" +
                    "    return 0;\n" +
                    "}"}
                    language="c"
                    filename="lexer_test.c">
                </CodeBlock>
                <br></br>
                <p><code>test.qk</code> is the file I use for lexer testing, this is (hopefully) what the syntax ends up being. I aimed for a mix of C, CPP, Python, and a little bit of Java</p>
                <br></br>
                <CodeBlock
                code = {"@import \"logging.j\"\n" +
                    "@import \"usb_driver.j\"\n" +
                    "\n" +
                    "new device USB1 as Keyboard;\n" +
                    "USB1.connect();\n" +
                    "\n" +
                    "if (USB1.status() == \"connected\") then {\n" +
                    "    USB1.write(header=\"KEY-UP\", payload=\"A\");\n" +
                    "    USB1.write(header=\"KEY-DOWN\", payload=\"A\");\n" +
                    "} else {\n" +
                    "    log(\"Keyboard not detected, aborting.\");\n" +
                    "};\n"}
                language="clike"
                filename="test.qk">
                </CodeBlock>
                <br></br>
                <p>After bundling and building lexer_test.c this was the output. Something I noticed which I need to fix is that the end of the lines characters like semicolons get put one row ahead of what they are. They still get parsed in the correct order, but the lexer is saying its somewhere its not. <b>fixed 2/17</b></p>
                <br></br>
                <CodeBlock code={"[1:0] AT           \n" +
                    "[1:1] IMPORT       \n" +
                    "[1:8] STRING       logging.j\n" +
                    "[2:0] AT           \n" +
                    "[2:1] IMPORT       \n" +
                    "[2:8] STRING       usb_driver.j\n" +
                    "[4:0] NEW          \n" +
                    "[4:4] IDENTIFIER   device\n" +
                    "[4:11] IDENTIFIER   USB1\n" +
                    "[4:16] AS           \n" +
                    "[4:19] IDENTIFIER   Keyboard\n" +
                    "[4:27] SEMICOLON    \n" +
                    "[5:0] IDENTIFIER   USB1\n" +
                    "[5:4] DOT          \n" +
                    "[5:5] CONNECT      \n" +
                    "[5:12] LPAREN       \n" +
                    "[5:13] RPAREN       \n" +
                    "[5:14] SEMICOLON    \n" +
                    "[7:0] IF           \n" +
                    "[7:3] LPAREN       \n" +
                    "[7:4] IDENTIFIER   USB1\n" +
                    "[7:8] DOT          \n" +
                    "[7:9] IDENTIFIER   status\n" +
                    "[7:15] LPAREN       \n" +
                    "[7:16] RPAREN       \n" +
                    "[7:18] EQUAL        \n" +
                    "[7:21] STRING       connected\n" +
                    "[7:32] RPAREN       \n" +
                    "[7:34] THEN         \n" +
                    "[7:39] LBRACE       \n" +
                    "[8:4] IDENTIFIER   USB1\n" +
                    "[8:8] DOT          \n" +
                    "[8:9] WRITE        \n" +
                    "[8:14] LPAREN       \n" +
                    "[8:15] IDENTIFIER   header\n" +
                    "[8:21] ASSIGN       \n" +
                    "[8:22] STRING       KEY-UP\n" +
                    "[8:30] COMMA        \n" +
                    "[8:32] IDENTIFIER   payload\n" +
                    "[8:39] ASSIGN       \n" +
                    "[8:40] STRING       A\n" +
                    "[8:43] RPAREN       \n" +
                    "[8:44] SEMICOLON    \n" +
                    "[9:4] IDENTIFIER   USB1\n" +
                    "[9:8] DOT          \n" +
                    "[9:9] WRITE        \n" +
                    "[9:14] LPAREN       \n" +
                    "[9:15] IDENTIFIER   header\n" +
                    "[9:21] ASSIGN       \n" +
                    "[9:22] STRING       KEY-DOWN\n" +
                    "[9:32] COMMA        \n" +
                    "[9:34] IDENTIFIER   payload\n" +
                    "[9:41] ASSIGN       \n" +
                    "[9:42] STRING       A\n" +
                    "[9:45] RPAREN       \n" +
                    "[9:46] SEMICOLON    \n" +
                    "[10:0] RBRACE       \n" +
                    "[10:2] ELSE         \n" +
                    "[10:7] LBRACE       \n" +
                    "[11:4] IDENTIFIER   log\n" +
                    "[11:7] LPAREN       \n" +
                    "[11:8] STRING       Keyboard not detected, aborting.\n" +
                    "[11:42] RPAREN       \n" +
                    "[11:43] SEMICOLON    \n" +
                    "[12:0] RBRACE       \n" +
                    "[12:1] SEMICOLON    \n" +
                    "[13:0] EOF  "}
                           language="plaintext">
                </CodeBlock>
                <br></br>
                <p>
                    The way the lexer works is pretty standard. The function that gets called the most is <code>lexerAdvance()</code>, this function does what is sounds like, it advances the "cursor" to the next character by 1 (<code>lx-{">"}column++</code>). What I did to make comments work is just to ignore them (again <i>very</i> standard). This is accomplished by the <code>lexerSkipWhitespace()</code> function. The function is just a while loop that checks if there is a space, advances, and if <code>lx-{'>'}current == '/' && lx-{'>'}next == '/'</code> and the next lines are not either a newline, or the End Of File (EOF), it just advances until it reaches the end of the line, effectively ignoring comments. Since I have not added every keyword yet, there is only 20 currently implemented out of the 152 (give or take) planned. Now I know that doesn't sound like half done at all, but its just brainless work which will take me an hour or two. Anyway, since most of the language is the abundance of keywords, there is not much else. The rest of the lexer is making tokens (<code>makeToken()</code>), identifying tokens, numerics, strings, and symbols (which personally I don't count as keywords even though they kind of are).
                </p>
            </section>

            <section className="mb-12">
                <h2 className="text-2xl font-bold text-zinc-900 mb-4">AST</h2>
                <p>
                    [placeholder for text :P]
                </p>
            </section>

            <section className="mb-12">
                <h2 className="text-2xl font-bold text-zinc-900 mb-4">Parser</h2>
                <p>
                    [placeholder for text :P]
                </p>
            </section>

            <section className="mb-12">
                <h2 className="text-2xl font-bold text-zinc-900 mb-4">Validators</h2>
                <p>
                    [placeholder for text :P]
                </p>
            </section>

            <section className="mb-12">
                <h2 className="text-2xl font-bold text-zinc-900 mb-4">Compiler</h2>
                <p>
                    [placeholder for text :P]
                </p>
            </section>

        </ProjectPage>
    )
}
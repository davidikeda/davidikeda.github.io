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
                <p>Quokka is a relatively big language I&#39;ve been working on (around 150 keywords), that allows communication and allocation of resources over any standard USB cable. It&#39;s (It shouldent be) not limited by the port either, as long as both devices either have a USB port, or they have RX/TX pins, and the ability to <i>use</i> those ports, the language works.</p>
            </section>

            <section className="mb-12">
                <h2 className="text-2xl font-bold text-zinc-900 mb-4">A quick note</h2>
                <p>This project is still under development, at the time of writing this (2/12/26), I am about halfway done to finishing the lexer for the langauge. This is a very big project that will most likely take up most of my time. If you want, you can watch the progress here: <a href="https://github.com/davidikeda/quokka" target="_blank" id="link">https://github.com/davidikeda/quokka</a></p>
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
                code = {"new device USB1 as Keyboard;\n" +
                    "USB1.connect();\n" +
                    "\n" +
                    "if (USB1.status() == \"connected\") then {\n" +
                    "    //Successful Connection\n" +
                    "    USB1.write(header=\"KEY-UP\", payload=\"A\");\n" +
                    "    USB1.write(header=\"KEY-DOWN\", payload=\"A\");\n" +
                    "} else {\n" +
                    "    log(\"Keyboard not detected, aborting.\");\n" +
                    "};"}
                language="clike"
                filename="test.qk">
                </CodeBlock>
                <br></br>
                <p>After bundling and building lexer_test.c this was the output. Something I noticed which I need to fix is that the end of the lines characters like semicolons get put one row ahead of what they are. They still get parsed in the correct order, but the lexer is saying its somewhere its not.</p>
                <br></br>
                <CodeBlock code={"[1:0] NEW          \n" +
                    "[1:4] IDENTIFIER   device\n" +
                    "[1:11] IDENTIFIER   USB1\n" +
                    "[1:16] AS           \n" +
                    "[1:19] IDENTIFIER   Keyboard\n" +
                    "[2:27] SEMICOLON    \n" +
                    "[2:1] IDENTIFIER   USB1\n" +
                    "[2:5] DOT          \n" +
                    "[2:6] CONNECT      \n" +
                    "[2:13] LPAREN       \n" +
                    "[2:14] RPAREN       \n" +
                    "[3:15] SEMICOLON    \n" +
                    "[4:1] IF           \n" +
                    "[4:4] LPAREN       \n" +
                    "[4:5] IDENTIFIER   USB1\n" +
                    "[4:9] DOT          \n" +
                    "[4:10] STATUS       \n" +
                    "[4:16] LPAREN       \n" +
                    "[4:17] RPAREN       \n" +
                    "[4:19] EQUAL        \n" +
                    "[4:22] STRING       connected\n" +
                    "[4:33] RPAREN       \n" +
                    "[4:35] THEN         \n" +
                    "[5:40] LBRACE       \n" +
                    "[5:5] IDENTIFIER   USB1\n" +
                    "[5:9] DOT          \n" +
                    "[5:10] WRITE        \n" +
                    "[5:15] LPAREN       \n" +
                    "[5:16] IDENTIFIER   header\n" +
                    "[5:22] ASSIGN       \n" +
                    "[5:23] STRING       KEY-UP\n" +
                    "[5:31] COMMA        \n" +
                    "[5:33] IDENTIFIER   payload\n" +
                    "[5:40] ASSIGN       \n" +
                    "[5:41] STRING       A\n" +
                    "[5:44] RPAREN       \n" +
                    "[6:45] SEMICOLON    \n" +
                    "[6:5] IDENTIFIER   USB1\n" +
                    "[6:9] DOT          \n" +
                    "[6:10] WRITE        \n" +
                    "[6:15] LPAREN       \n" +
                    "[6:16] IDENTIFIER   header\n" +
                    "[6:22] ASSIGN       \n" +
                    "[6:23] STRING       KEY-DOWN\n" +
                    "[6:33] COMMA        \n" +
                    "[6:35] IDENTIFIER   payload\n" +
                    "[6:42] ASSIGN       \n" +
                    "[6:43] STRING       A\n" +
                    "[6:46] RPAREN       \n" +
                    "[7:47] SEMICOLON    \n" +
                    "[7:1] RBRACE       \n" +
                    "[7:3] ELSE         \n" +
                    "[8:8] LBRACE       \n" +
                    "[8:5] LOG          \n" +
                    "[8:8] LPAREN       \n" +
                    "[8:9] STRING       Keyboard not detected, aborting.\n" +
                    "[8:43] RPAREN       \n" +
                    "[9:44] SEMICOLON    \n" +
                    "[9:1] RBRACE       \n" +
                    "[10:2] SEMICOLON    \n" +
                    "[10:1] EOF"}
                           language="plaintext">
                </CodeBlock>
                <br></br>
                <p>
                    The way the lexer works is pretty standard. The function that gets called the most is <code>lexerAdvance()</code>, this function does what is sounds like, it advances the "cursor" to the next character by 1 (<code>lx-{">"}column++</code>). What I did to make comments work is just to ignore them (again <i>very</i> standard). This is accomplished by the <code>lexerSkipWhitespace()</code> function. The function is just a while loop that checks if there is a space, advances, and if <code>lx-{'>'}current == '/' && lx-{'>'}next == '/'</code> and the next lines are not either a newline, or the End Of File (EOF), it just advances until it reaches the end of the line, effectively ignoring comments. Since I have not added every keyword yet, there is only 20 currently implemented out of the 152 (give or take) planned. Now I know that doesn't sound like half done at all, but its just brainless work which will take me an hour or two. Anyway, since most of the language is the abundance of keywords, there is not much else. The rest of the lexer is making tokens (<code>makeToken()</code>), identifying tokens, numerics, strings, and symbols (which personally I don't count as keywords even though they kind of are).
                </p>
                <br></br>
                <h4>Latest Update: <b>2/16/26 8:10PM</b></h4>
            </section>


        </ProjectPage>
    )
}
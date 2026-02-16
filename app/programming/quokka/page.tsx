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
                <p>Quokka is a relatively big language I&#39;ve been working on (around 40 keywords), that allows communication and allocation of resources over any standard USB cable. It&#39;s (It shouldent be) not limited by the port either, as long as both devices either have a USB port, or they have RX/TX pins, and the ability to <i>use</i> those ports, the language works.</p>
            </section>

            <section className="mb-12">
                <h2 className="text-2xl font-bold text-zinc-900 mb-4">A quick note</h2>
                <p>This project is still under development, at the time of writing this (2/12/26), I am about halfway done to finishing the lexer for the langauge. This is a very big project that will most likely take up most of my time.</p>
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
                    "    USB1.write(header=\"KEY-UP\", payload=\"A\");\n" +
                    "    USB1.write(header=\"KEY-DOWN\", payload=\"A\");\n" +
                    "} else {\n" +
                    "    log(\"Keyboard not detected, aborting.\");\n" +
                    "};\n"}
                language="clike"
                filename="test.qk">
                </CodeBlock>

            </section>


        </ProjectPage>
    )
}
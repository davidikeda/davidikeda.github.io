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
                    "\n" +
                    "        case TOK_NEW: return \"NEW\";\n" +
                    "        case TOK_IF: return \"IF\";\n" +
                    "        case TOK_SEND: return \"SEND\";\n" +
                    "        case TOK_USBIN: return \"USBIN\";\n" +
                    "        case TOK_USBOUT: return \"USBOUT\";\n" +
                    "        case TOK_AS: return \"AS\";\n" +
                    "        case TOK_STATUS: return \"STATUS\";\n" +
                    "        case TOK_CONNECT: return \"CONNECT\";\n" +
                    "        case TOK_THEN: return \"THEN\";\n" +
                    "        case TOK_WRITE: return \"WRITE\";\n" +
                    "        case TOK_LOG: return \"LOG\";\n" +
                    "\n" +
                    "        case TOK_ASSIGN: return \"ASSIGN\";\n" +
                    "        case TOK_EQUAL: return \"EQUAL\";\n" +
                    "        case TOK_NOT_EQUAL: return \"NOT_EQUAL\";\n" +
                    "        case TOK_LT: return \"LT\";\n" +
                    "        case TOK_GT: return \"GT\";\n" +
                    "        case TOK_LE: return \"LE\";\n" +
                    "        case TOK_GE: return \"GE\";\n" +
                    "        case TOK_PLUS: return \"PLUS\";\n" +
                    "        case TOK_MINUS: return \"MINUS\";\n" +
                    "        case TOK_STAR: return \"STAR\";\n" +
                    "        case TOK_SLASH: return \"SLASH\";\n" +
                    "        case TOK_PERCENT: return \"PERCENT\";\n" +
                    "\n" +
                    "        case TOK_LPAREN: return \"LPAREN\";\n" +
                    "        case TOK_RPAREN: return \"RPAREN\";\n" +
                    "        case TOK_LBRACE: return \"LBRACE\";\n" +
                    "        case TOK_RBRACE: return \"RBRACE\";\n" +
                    "        case TOK_LBRACKET: return \"LBRACKET\";\n" +
                    "        case TOK_RBRACKET: return \"RBRACKET\";\n" +
                    "        case TOK_COMMA: return \"COMMA\";\n" +
                    "        case TOK_DOT: return \"DOT\";\n" +
                    "        case TOK_COLON: return \"COLON\";\n" +
                    "        case TOK_SEMICOLON: return \"SEMICOLON\";\n" +
                    "\n" +
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
                    "}\n"}
                    language="c"
                    filename="lexer_test.c">
                </CodeBlock>
            </section>


        </ProjectPage>
    )
}
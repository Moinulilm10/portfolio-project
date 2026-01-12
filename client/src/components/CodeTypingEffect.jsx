import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export const CodeTypingEffect = () => {
    const [currentCodeLine, setCurrentCodeLine] = useState(0);
    const [displayedCode, setDisplayedCode] = useState("");

    const codeSnippets = [
        "import { FullStackDeveloper } from 'moinul.dev';",
        "",
        "const developer = new FullStackDeveloper({",
        "  name: 'Moinul Islam',",
        "  stack: ['React.js', 'Next.js', 'Node.js', 'Express.js', 'TypeScript', 'MongoDB', 'PostgreSQL'],",
        "  focus: 'Building performant, scalable, and maintainable web applications',",
        "  status: 'Open to new opportunities'",
        "});",
        "",
        "await developer.launchPortfolio();",
        "// Featured: SaaS, E-commerce, Real Estate, AI Chat Applications",
        "",
        "developer.connect();",
        "console.log('🚀 Let\\'s build innovative solutions that make an impact!');",
    ];

    useEffect(() => {
        const currentLine = codeSnippets[currentCodeLine];
        if (displayedCode.length < currentLine.length) {
            const timeout = setTimeout(() => {
                setDisplayedCode(currentLine.slice(0, displayedCode.length + 1));
            }, 30);
            return () => clearTimeout(timeout);
        } else {
            const timeout = setTimeout(() => {
                if (currentCodeLine < codeSnippets.length - 1) {
                    setCurrentCodeLine((prev) => prev + 1);
                    setDisplayedCode("");
                } else {
                    setTimeout(() => {
                        setCurrentCodeLine(0);
                        setDisplayedCode("");
                    }, 5000);
                }
            }, 800);
            return () => clearTimeout(timeout);
        }
    }, [displayedCode, currentCodeLine]);

    return (
        <div className="font-mono text-sm bg-primary/5 rounded-lg border border-primary/10 min-h-[280px] flex">
            <div className="p-6 w-full">
                <div className="grid grid-cols-1 gap-1 h-full content-start">
                    {codeSnippets.map((line, index) => (
                        <div
                            key={index}
                            className={`
                min-h-[20px] flex items-start
                ${index < currentCodeLine ? "opacity-100" : "opacity-0"}
                ${index === currentCodeLine ? "opacity-100" : ""}
                transition-opacity duration-150 ease-in-out
                ${line.includes("import")
                                    ? "text-purple-400 font-semibold"
                                    : line.includes("const") || line.includes("new")
                                        ? "text-blue-400 font-semibold"
                                        : line.includes("React") ||
                                            line.includes("Node.js") ||
                                            line.includes("TypeScript")
                                            ? "text-cyan-400"
                                            : line.includes("FullStackDeveloper")
                                                ? "text-emerald-400 font-semibold"
                                                : line.includes("//")
                                                    ? "text-muted-foreground italic"
                                                    : line.includes("await") || line.includes("connect")
                                                        ? "text-yellow-400"
                                                        : line.includes("'")
                                                            ? "text-amber-400"
                                                            : "text-foreground"
                                }
              `}
                        >
                            {index < currentCodeLine ? line : ""}
                            {index === currentCodeLine ? (
                                <>
                                    {displayedCode}
                                    <motion.span
                                        animate={{ opacity: [1, 0, 1] }}
                                        transition={{ duration: 0.8, repeat: Infinity }}
                                        className="ml-1 text-primary inline-block"
                                    >
                                        ▊
                                    </motion.span>
                                </>
                            ) : (
                                ""
                            )}
                            {line === "" && "‎"}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

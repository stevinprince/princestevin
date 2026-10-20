import { highlightCode, parseMarkdown } from "@/lib/markdown";

type MarkdownContentProps = {
  markdown: string;
};

export function MarkdownContent({ markdown }: MarkdownContentProps) {
  const blocks = parseMarkdown(markdown);

  return (
    <div className="article-prose">
      {blocks.map((block, index) => {
        if (block.type === "heading") {
          return <h2 key={`${block.text}-${index}`}>{block.text}</h2>;
        }

        if (block.type === "paragraph") {
          return <p key={`${block.text}-${index}`}>{block.text}</p>;
        }

        if (block.type === "list") {
          return (
            <ul key={`list-${index}`}>
              {block.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          );
        }

        return (
          <figure key={`code-${index}`} className="article-code">
            <figcaption>{block.language}</figcaption>
            <pre>
              <code
                dangerouslySetInnerHTML={{ __html: highlightCode(block.code) }}
              />
            </pre>
          </figure>
        );
      })}
    </div>
  );
}

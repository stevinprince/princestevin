export type MarkdownBlock =
  | { type: "heading"; text: string }
  | { type: "paragraph"; text: string }
  | { type: "list"; items: string[] }
  | { type: "code"; language: string; code: string };

const KEYWORDS =
  /\b(func|return|if|else|for|range|package|import|const|var|type|struct|error|true|false|nil|await|async|function|class|new)\b/g;

export function parseMarkdown(source: string): MarkdownBlock[] {
  const blocks: MarkdownBlock[] = [];
  const fence = /```(\w*)\n([\s\S]*?)```/g;
  let lastIndex = 0;
  let match = fence.exec(source);

  const pushText = (value: string) => {
    const chunks = value.split(/\n{2,}/);

    for (const chunk of chunks) {
      const trimmed = chunk.trim();

      if (!trimmed) {
        continue;
      }

      if (trimmed.startsWith("## ")) {
        blocks.push({ type: "heading", text: trimmed.slice(3) });
        continue;
      }

      const lines = trimmed.split("\n");

      if (lines.every((line) => line.trim().startsWith("- "))) {
        blocks.push({
          type: "list",
          items: lines.map((line) => line.trim().slice(2)),
        });
        continue;
      }

      blocks.push({ type: "paragraph", text: trimmed.replace(/\n/g, " ") });
    }
  };

  while (match) {
    pushText(source.slice(lastIndex, match.index));
    blocks.push({
      type: "code",
      language: match[1] || "text",
      code: match[2].replace(/\n$/, ""),
    });
    lastIndex = match.index + match[0].length;
    match = fence.exec(source);
  }

  pushText(source.slice(lastIndex));
  return blocks;
}

export function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

export function highlightCode(code: string): string {
  return escapeHtml(code)
    .replace(/(\/\/.*$)/gm, '<span class="token-comment">$1</span>')
    .replace(/("[^"]*"|'[^']*')/g, '<span class="token-string">$1</span>')
    .replace(KEYWORDS, '<span class="token-keyword">$1</span>');
}

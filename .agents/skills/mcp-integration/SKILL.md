---
name: mcp-integration
description: Instructions for how AI agents should load and query Model Context Protocol (MCP) servers to talk to external databases or APIs. Triggers when the user asks to query external documentation using Context7 or link third-party services via MCP.
---

# 🔌 MCP Integration Skill

This skill teaches agents how to link external third-party services using standard **Model Context Protocol (MCP)** bridges.

---

## 🚦 When to Use

Use this skill:
-   When needing up-to-date documentation using the **`context7`** MCP server.
-   When querying external relational databases or enterprise knowledge hubs.

---

## 🛠️ Usage Mechanism

### 1. Identify Available Servers
Run standard tools to discover if any servers are available in the runtime environment:
-   `list_resources`
-   `read_resource`

### 2. Formulate the Query
Frame your queries using precise semantic keywords.

> [!TIP]
> Do not ask generic questions like *"Tell me about Next.js"*. Instead ask: *"How do I implement JWT auth in Next.js 14 API routes?"*

---

## 📝 Configuration (Schema Example)

If running a local client (like Claude Code), use a standard `mcp-config.json` to load servers:

```json
{
  "mcpServers": {
    "context7": {
      "command": "npx",
      "args": ["-y", "@context7/mcp-server"]
    }
  }
}
```

---

> [!CAUTION]
> Always verify that your Node environment pathing is correct when spawning external `npx` servers!

import {MastraMCPClient} from "@mastra/mcp";

export const filesystem = new MastraMCPClient({
    name: "file system",
    server: {
        command : "npx",
        args : ["-y",
            "@modelcontextprotocol/server-filesystem",
            "~/"
        ],
    },
});

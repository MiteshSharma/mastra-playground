import { Mastra } from '@mastra/core';
import { CleanAgent } from "./agents";
import { filesystem } from "./mcp";

// Initialize Mastra without telemetry
export const mastra = new Mastra();

export const mastraTools = {
    CleanAgent,
    filesystem
};

async function main() {
    try {
        // Connect to the MCP server
        await filesystem.connect();

        const tools = await filesystem.tools();

        // Use the agent with the MCP tools
        const response = await CleanAgent.stream(
            "Hello! Could you please suggest me changes needed in my files to make them more organized.",
            {
                toolsets: {
                    filesystem: tools,
                },
            },
        );
        for await (const part of response.fullStream) {
            switch (part.type) {
                case "error":
                    console.error(part.error);
                    break;
                case "text-delta":
                    process.stdout.write(part.textDelta);
                    break;
                case "tool-call":
                    console.info(`\n-> Tool call: ${part.toolName}\n`);
            }
        }
    } finally {
        // Always disconnect when done
        await filesystem.disconnect();
    }
}

// Execute the main function
main().catch(console.error);
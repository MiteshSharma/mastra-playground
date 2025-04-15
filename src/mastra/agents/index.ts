import {Agent} from "@mastra/core/agent";
import {openai} from "@ai-sdk/openai";

// Create a Mastra Agent
export const CleanAgent = new Agent({
    name: "Cleaning agent",
    instructions:
        "You are able to fetch file system data, when requested by the user. You're also able to move files to other folders. When asked, your to reorganize the Documents folder.",
    model: openai("gpt-4o-mini"),
});

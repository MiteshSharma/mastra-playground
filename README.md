# Mastra Playground

A playground project for experimenting with Mastra, an AI-powered development assistant.

## Prerequisites

- Node.js >= 18.0.0
- npm >= 8.0.0

## Setup

1. Clone the repository:
```bash
git clone <repository-url>
cd mastra-playground
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory with your OpenAI API key:
```bash
OPENAI_API_KEY=your_openai_api_key_here
```

## Running the Project

### Development Mode

To start the development server:
```bash
npm run dev
```

This will:
- Start the Mastra development server
- Enable hot reloading
- Connect to the MCP server
- Initialize the AI agent

### Available Commands

- `npm run dev` - Start the development server
- `npm test` - Run tests (not implemented yet)

## Project Structure

```
mastra-playground/
├── src/
│   └── mastra/
│       ├── agents/     # AI agents
│       ├── mcp/        # MCP client implementation
│       └── index.ts    # Main entry point
├── .env                # Environment variables
├── mastra.config.ts    # Mastra configuration
├── package.json        # Project dependencies
└── README.md          # This file
```

## Configuration

The project is configured through `mastra.config.ts`. Key settings include:

- Telemetry: Disabled by default
- MCP directory: `src/mastra/mcp`
- Agents directory: `src/mastra/agents`
- Entry point: `src/mastra/index.ts`

## Environment Variables

Required environment variables:
- `OPENAI_API_KEY`: Your OpenAI API key

## Troubleshooting

If you encounter any issues:

1. Check that your OpenAI API key is correctly set in `.env`
2. Ensure all dependencies are installed (`npm install`)
3. Verify Node.js version is >= 18.0.0
4. Check the console for specific error messages

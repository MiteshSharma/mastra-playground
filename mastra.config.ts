import { defineConfig } from 'mastra/config';

export default defineConfig({
  telemetry: {
    enabled: false
  },
  tools: {
    directory: 'src/mastra/tools'
  },
  agents: {
    directory: 'src/mastra/agents'
  },
  entry: {
    file: 'src/mastra/index.ts',
    export: 'mastra'
  }
}); 
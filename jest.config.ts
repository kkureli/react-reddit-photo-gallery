// jest.config.ts
import type { Config } from "jest";

const config: Config = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/setupTests.ts"],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1", // Resolve alias paths
    "\\.(css|less|scss|sass)$": "identity-obj-proxy", // Mock CSS imports
  },
  transform: {
    "^.+\\.tsx?$": "ts-jest", // Transform TypeScript files
  },
};

export default config;

module.exports = {
  testEnvironment: "jsdom",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  testMatch: ["**/__tests__/*.(ts|tsx)"],
  globals: {
    "ts-jest": {
      babelConfig: false,
      tsconfig: "tsconfig.jest.json",
    },
  },
  coveragePathIgnorePatterns: ["/node_modules/", "enzyme.js"],
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  coverageReporters: ["json", "lcov", "text", "text-summary"],
  testPathIgnorePatterns: ["./.next/", "./node_modules/"],
  moduleNameMapper: {
    "\\.(css|less|scss)$": "<rootDir>/__mocks__/styleMock.js",
  },
};

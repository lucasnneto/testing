module.exports = {
  preset: "@vue/cli-plugin-unit-jest/presets/typescript-and-babel",
  // preset: "ts-jest",
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
  },
  collectCoverage: true,
  collectCoverageFrom: ["src/components/*.vue", "src/store/*.ts"],
  moduleFileExtensions: ["js", "ts", "json", "vue"],
  // testRegex: "(/tests/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$",
  testURL: "http://localhost/",
  setupFiles: ["<rootDir>/tests/setup.js"],
  transform: {
    "^.+\\.tsx?$": "ts-jest",
    "^.+\\.js$": "babel-jest",
    ".*\\.(vue)$": "@vue/vue2-jest",
  },
  testEnvironment: "jsdom",
};

module.exports = {
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "babel-jest",
  },
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/$1",
  },
  testMatch: ["**/*.test.(js|jsx|ts|tsx)"],
  moduleFileExtensions: ["js", "jsx", "ts", "tsx"],
};

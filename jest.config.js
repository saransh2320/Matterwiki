module.exports = {
  bail: false,
  verbose: true,
  testEnvironment: "node",
  testPathIgnorePatterns: [
    "/node_modules",
    "/testUtils/",
    "/factories/",
    "/sharedBehaviour/"
  ]
};

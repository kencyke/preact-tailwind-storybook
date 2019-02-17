module.exports = {
  transform: {"^.+\\.tsx?$": "ts-jest"},
  verbose: true,
  moduleFileExtensions: ["ts", "tsx", "js"],
  testRegex: "/__tests__/.*\\.tsx?$",
  snapshotSerializers: ["preact-render-spy/snapshot"]
};
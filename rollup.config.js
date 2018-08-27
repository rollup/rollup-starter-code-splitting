export default {
  input: ["src/main-a.js", "src/main-b.js"],
  output: [
    // ES module version, for modern browsers
    {
      dir: "public/module",
      format: "es",
      sourcemap: true
    },
    // SystemJS version, for older browsers
    {
      dir: "public/nomodule",
      format: "system",
      sourcemap: true
    }
  ],
  experimentalCodeSplitting: true
};

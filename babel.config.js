module.exports = function babelConfig(api) {
  api.cache(true);
  return {
    presets: ["next/babel", "nativewind/babel"]
  };
};

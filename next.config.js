module.exports = {
  webpack: (config, { isServer }) => {
    config.experiments = {
      asyncWebAssembly: true,
    };
    config.output.webassemblyModuleFilename = (isServer ? '../' : '') + 'static/wasm/webassembly.wasm';
    return config;
  },
};

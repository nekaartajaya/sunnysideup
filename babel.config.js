module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      'nativewind/babel',
      [
        'module-resolver',
        {
          root: ['./src'],
          extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
          alias: {
            tests: ['./tests/'],
            '@api': './src/api',
            '@components': './src/components',
            '@pages': './src/pages',
            '@redux': './src/redux',
            '@interfaces': './src/interfaces',
            '@router': './src/router',
            '@utils': './src/utils',
          },
        },
      ],
    ],
  };
};

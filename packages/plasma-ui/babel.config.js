const useCollectPackageInfo = process.env.USE_COLLECT_PACKAGE_INFO;

module.exports = useCollectPackageInfo
    ? {
          env: {
              cjs: {
                  plugins: [
                      [
                          '../../scripts/babel-plugin-import-replacer',
                          {
                              alias: {
                                  '@pkg': './package.json',
                              },
                          },
                      ],
                      '../../scripts/babel-plugin-collect-package-info',
                  ],
              },
              esm: {
                  plugins: [
                      [
                          '../../scripts/babel-plugin-import-replacer',
                          {
                              alias: {
                                  '@pkg': '../package.json',
                              },
                          },
                      ],
                      '../../scripts/babel-plugin-collect-package-info',
                  ],
              },
          },
      }
    : {};

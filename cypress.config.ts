import path from 'path';
import { defineConfig } from 'cypress';

import { getWebpackConfig } from './cypress/webpack.config';
import { setupNodeEvents } from './cypress/plugins';

const supportFilePath = path.resolve(__dirname, 'cypress', 'support', 'index.ts');

const { PACKAGE_NAME: packageName, COMPONENTS: components, RETRIES: retries = 5 } = process.env;

if (!packageName) {
    throw new Error('Provide PACKAGE env to cli command');
}

const baseTestMatch = '**/*.component-test.{ts,tsx}';
const retriesCount = Number(retries);
const productName = packageName.split('-').slice(1);
const snapshotsDir = `cypress/snapshots/${productName}/`;

const getTestMatch = () => {
    const componentMatchingDirs = components
        ? components
              .split(',')
              .filter((component) => Boolean(component.trim()))
              .map((component) => {
                  const [first, ...rest] = component.trim().split('');
                  const componentDir = `${first.toLocaleUpperCase()}${rest.join('')}`;

                  return componentDir;
              })
        : [];

    if (!componentMatchingDirs.length) {
        return `**/${packageName}/${baseTestMatch}`;
    }

    const matchingDirs =
        componentMatchingDirs.length === 1 ? `${componentMatchingDirs[0]}` : `{${componentMatchingDirs.join(',')}}`;

    return `**/${packageName}/**/${matchingDirs}/${baseTestMatch}`;
};

export default defineConfig({
    component: {
        specPattern: getTestMatch(),
        supportFile: supportFilePath,
        devServer: {
            framework: 'react',
            bundler: 'webpack',
            webpackConfig: getWebpackConfig(),
        },
        setupNodeEvents,
    },
    env: {
        snapshotsDir,
        package: packageName,
        a11yCheck: false,
        threshold: 0,
        hasComponents: !!components,
    },
    retries: {
        runMode: retriesCount,
        openMode: 0,
    },
    video: false,
    chromeWebSecurity: false,
});

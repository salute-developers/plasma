const { PACKAGE_NAME, npm_config_components: componentsList = '' } = process.env || {};

const findSpecFiles = (components) =>
    components
        .split(',')
        .filter((component) => Boolean(component.trim()))
        .map((component) => {
            const [first, ...rest] = component.trim();
            const componentDir = `${first.toLocaleUpperCase()}${rest.join('')}`;

            return `packages/${PACKAGE_NAME}/src/components/${componentDir}/*.component-test.tsx`;
        })
        .join(',');

module.exports = {
    specs: PACKAGE_NAME && componentsList.trim() ? findSpecFiles(componentsList) : '',
};

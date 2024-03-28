const META = require('./meta');

module.exports = () => {
    const { PACKAGE, PROCESSED_DATA } = process.env;

    // INFO: результат команды `lerna la --since` - список пакетов в которых были изменения
    // или они связаны в графе зависимостей lerna
    const processedData = JSON.parse(PROCESSED_DATA);

    // INFO: Список пакетов которые нужно поставить если они есть в списке processedData
    const packageScope = META[PACKAGE].scope || [];
    const packageTheme = META[PACKAGE].themes;

    // INFO: Список обязательных пакетов без которых не будет работать сборка
    // INFO: Например для корректной сборки storybook в `plasma-asdk` нужно ставить plasma-core
    // INFO: Это workaround - временно позволяет обойти ошибки в инфре
    const requiredDeps = META[PACKAGE]['required-deps'] || [];

    // INFO: Пакет с документацией, например `plasma-web-docs` или `sdds-serv-docs`
    const packageDocs = `${PACKAGE}-docs`;

    const computedScope = processedData.filter((dep) => [...packageScope, packageDocs].includes(dep));

    const scope = new Set([...computedScope, ...requiredDeps, PACKAGE]);

    if (scope.has(packageDocs)) {
        scope.add('plasma-docs-ui');
    }

    if (scope.has(packageTheme)) {
        scope.add('data-themes');
        scope.add('plasma-typo');
    }

    // TODO: Как избавиться от этой зависимости
    if (processedData.includes('plasma-tokens-native')) {
        scope.add('plasma-tokens');
        scope.add('plasma-tokens-utils');
        scope.add('plasma-tokens-native');
    }

    console.log('Result =>', Array.from(scope));

    return `@salutejs/{${Array.from(scope).join(',')}}`;
};

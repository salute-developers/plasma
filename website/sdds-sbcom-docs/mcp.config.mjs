/** @type {import('../../utils/mcp-data/src/config.ts').McpDataConfig} */
export default {
    baseUrl: 'https://plasma.sberdevices.ru/sdds-sbcom/',
    tools: [
        'list_components',
        'search_icons',
        'get_installation_guide',
        'get_form_guide',
        'get_tokens',
        'get_component',
    ],
    // Модуль, из которого импортируются токены темы. Разрешается от packages/sdds-sbcom.
    tokens: { entry: '@salutejs-ds/sdds_sbcom/theme/tokens' },
    // Перенесено из старого config.mjs без изменений; генератор это поле не читает.
    qdrantConfig: {
        collectionName: 'plasma-docs',
        payloadSchema: ['metadata.productId', 'metadata.source.url'],
    },
};

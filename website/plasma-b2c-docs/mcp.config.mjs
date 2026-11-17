/** @type {import('../../utils/mcp-data/src/config.ts').McpDataConfig} */
export default {
    baseUrl: 'https://plasma.sberdevices.ru/b2c/',
    tools: [
        'list_components',
        'search_icons',
        'get_installation_guide',
        'get_functions',
        'get_design_system_configuration',
        'get_form_guide',
        'get_tokens',
        'get_component',
    ],
    // Модуль, из которого импортируются токены темы. Разрешается от packages/plasma-b2c.
    tokens: { entry: '@salutejs/plasma-themes/tokens/plasma_b2c' },
    // Перенесено из старого config.mjs без изменений; генератор это поле не читает.
    qdrantConfig: {
        collectionName: 'plasma-docs',
        payloadSchema: ['metadata.productId', 'metadata.source.url'],
    },
};

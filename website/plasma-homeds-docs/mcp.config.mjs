/** @type {import('../../utils/mcp-data/src/config.ts').McpDataConfig} */
export default {
    baseUrl: 'https://plasma.sberdevices.ru/homeds/',
    tools: [
        'list_components',
        'search_icons',
        'get_installation_guide',
        'get_nextjs_guide',
        'get_form_guide',
        'get_tokens',
        'get_component',
    ],
    // Модуль, из которого импортируются токены темы. Разрешается от packages/plasma-homeds.
    tokens: { entry: '@salutejs/plasma-themes/tokens/plasma_homeds' },
    // Перенесено из старого config.mjs без изменений; генератор это поле не читает.
    qdrantConfig: {
        collectionName: 'plasma-docs',
        payloadSchema: ['metadata.productId', 'metadata.source.url'],
    },
};

import { fileURLToPath } from 'url';
import path, { dirname } from 'path';

const config = {
    baseUrl: 'https://plasma.sberdevices.ru/sdds-netology/',
    pathToDocs: path.join(dirname(fileURLToPath(import.meta.url)), '../../docs'),
    exclude: ['_examples', '_theme-switch', '_theme-turn-on', '_utils', 'tokens.mdx'],
    productId: 'sdds-netology',
    qdrantConfig: {
        collectionName: 'plasma-docs',
        payloadSchema: ['metadata.productId', 'metadata.source.url'],
    },
};

export default config;

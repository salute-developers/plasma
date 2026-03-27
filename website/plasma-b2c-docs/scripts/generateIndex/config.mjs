import { fileURLToPath } from 'url';
import path, { dirname } from 'path';

const config = {
    baseUrl: 'https://plasma.sberdevices.ru/b2c/',
    pathToDocs: path.join(dirname(fileURLToPath(import.meta.url)), '../../docs'),
    exclude: ['_examples', '_theme-switch', '_theme-turn-on', '_utils', 'tokens.mdx'],
    productId: 'plasma-b2c',
    qdrantConfig: {
        collectionName: 'plasma-docs',
        payloadSchema: ['metadata.productId', 'metadata.source.url'],
    },
};

export default config;

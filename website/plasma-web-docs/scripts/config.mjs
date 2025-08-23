import { fileURLToPath } from 'url';
import path, { dirname } from 'path';

const config = {
    baseUrl: 'https://plasma.sberdevices.ru/web/',
    pathToDocs: path.join(dirname(fileURLToPath(import.meta.url)), '../docs'),
    exclude: ['changelog.mdx'],
    productId: 'plasma-web',
    qdrantConfig: {
        collectionName: 'plasma-docs',
        payloadSchema: ['metadata.productId', 'metadata.source.url'],
    },
};

export default config;

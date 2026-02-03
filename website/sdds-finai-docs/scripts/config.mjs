import { fileURLToPath } from 'url';
import path, { dirname } from 'path';

const config = {
    baseUrl: 'https://plasma.sberdevices.ru/sdds-finai/',
    pathToDocs: path.join(dirname(fileURLToPath(import.meta.url)), '../docs'),
    exclude: ['changelog.mdx', '_examples', '_theme-switch', '_theme-turn-on'],
    productId: 'sdds-finai',
    qdrantConfig: {
        collectionName: 'plasma-docs',
        payloadSchema: ['metadata.productId', 'metadata.source.url'],
    },
};

export default config;

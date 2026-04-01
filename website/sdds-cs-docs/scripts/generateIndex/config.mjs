import { fileURLToPath } from 'url';
import path, { dirname } from 'path';

const config = {
    baseUrl: 'https://plasma.sberdevices.ru/sdds-cs/',
    pathToDocs: path.join(dirname(fileURLToPath(import.meta.url)), '../../docs'),
    exclude: ['_examples'],
    productId: 'sdds-cs',
    qdrantConfig: {
        collectionName: 'plasma-docs',
        payloadSchema: ['metadata.productId', 'metadata.source.url'],
    },
};

export default config;

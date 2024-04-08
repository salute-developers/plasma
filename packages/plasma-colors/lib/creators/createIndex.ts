import fs from 'fs';
import path from 'path';

import { ROBO_COMMENT } from '../utils';

export const createIndex = (srcDir: string) => {
    const indexDir = path.join(srcDir, 'index.ts');

    const indexTsContent = `${ROBO_COMMENT}
    export * from './general';
    export * from './additional';
    export * from './types';
`;

    fs.writeFileSync(indexDir, indexTsContent);
};

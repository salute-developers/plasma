import fs from 'fs';
import path from 'path';
import { ROBO_COMMENT } from '@salutejs/plasma-tokens-utils';

export const generateRootIndex = (srcDir: string) => {
    const rootIndexTsDir = path.join(srcDir, 'index.ts');

    const indexTsContent = `${ROBO_COMMENT}export * from './themes';
    `;

    fs.writeFileSync(rootIndexTsDir, indexTsContent);
};

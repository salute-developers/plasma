import path from 'path';
import process from 'process';

import getHashCode from './hash';

// kinda ok as query string value and variable name
export default function getSubjectId(modulePath: string, namedExport: string): string {
    const cwd = process.cwd();

    return `${namedExport}_${getHashCode(path.relative(cwd, path.resolve(cwd, modulePath)))}`;
}

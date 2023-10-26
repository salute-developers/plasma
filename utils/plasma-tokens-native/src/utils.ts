import path from 'path';
import fs from 'fs';

import { FormatterArguments } from './types';

export const comments = (content: string) => ({
    arrows: `<!-- ${content} -->`,
    slashes: `// ${content}`,
});

export type CommentsType = keyof ReturnType<typeof comments>;

const getPackageVersion = () => {
    const packages = path.join(__dirname, '../data/package.json');
    const data = JSON.parse(fs.readFileSync(packages, 'utf-8'));

    return (data as { version: string }).version;
};

export const commentWithVersion = (func: (args: FormatterArguments) => string) => (args: FormatterArguments) => {
    const commentType = args.options.commentType as CommentsType;
    const version = getPackageVersion();

    return `${comments(`version: ${version}`)[commentType]}\n${func(args)}`;
};

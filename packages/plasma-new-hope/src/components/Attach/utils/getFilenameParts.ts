import type { ReactNode } from 'react';

import { extractExtension } from './extractExtension';
import { getFileIcon } from './getFileicon';

export const getFilenameParts = (filename: string, size?: string, customIcon?: ReactNode) => {
    const extension = extractExtension(filename) || '';
    const filenameWithoutExtension = filename.slice(0, -1 - (extension?.length || 0)) || '';
    const cellContentLeft = customIcon || getFileIcon(extension, size);

    return { extension, filenameWithoutExtension, cellContentLeft, isVisible: true };
};

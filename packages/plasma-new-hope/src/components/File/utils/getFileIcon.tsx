import React from 'react';

import {
    IconBlankCsvOutline,
    IconBlankDocOutline,
    IconBlankOutline,
    IconBlankPdfOutline,
    IconBlankTxtOutline,
    IconBlankXlsOutline,
} from '../../_Icon';
import { tokens } from '../File.tokens';

export const getFileIcon = (extension?: string, size?: string) => {
    const iconSize = size === 'xs' ? 'xs' : 's';

    switch (extension) {
        case 'pdf':
            return <IconBlankPdfOutline size={iconSize} sizeCustomProperty={tokens.fileThumbSize} color="inherit" />;
        case 'doc':
            return <IconBlankDocOutline size={iconSize} sizeCustomProperty={tokens.fileThumbSize} color="inherit" />;
        case 'docx':
            return <IconBlankDocOutline size={iconSize} sizeCustomProperty={tokens.fileThumbSize} color="inherit" />;
        case 'xls':
            return <IconBlankXlsOutline size={iconSize} sizeCustomProperty={tokens.fileThumbSize} color="inherit" />;
        case 'xlsx':
            return <IconBlankXlsOutline size={iconSize} sizeCustomProperty={tokens.fileThumbSize} color="inherit" />;
        case 'txt':
            return <IconBlankTxtOutline size={iconSize} sizeCustomProperty={tokens.fileThumbSize} color="inherit" />;
        case 'csv':
            return <IconBlankCsvOutline size={iconSize} sizeCustomProperty={tokens.fileThumbSize} color="inherit" />;
        default:
            return <IconBlankOutline size={iconSize} sizeCustomProperty={tokens.fileThumbSize} color="inherit" />;
    }
};

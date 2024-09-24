import React from 'react';

import {
    IconBlankCsvOutline,
    IconBlankDocOutline,
    IconBlankOutline,
    IconBlankPdfOutline,
    IconBlankTxtOutline,
    IconBlankXlsOutline,
} from '../../_Icon';

export const getFileicon = (extension?: string, size?: string) => {
    const iconSize = size === 'xs' ? 'xs' : 's';

    switch (extension) {
        case 'pdf':
            return <IconBlankPdfOutline size={iconSize} color="inherit" />;
        case 'doc':
            return <IconBlankDocOutline size={iconSize} color="inherit" />;
        case 'xls':
            return <IconBlankXlsOutline size={iconSize} color="inherit" />;
        case 'txt':
            return <IconBlankTxtOutline size={iconSize} color="inherit" />;
        case 'csv':
            return <IconBlankCsvOutline size={iconSize} color="inherit" />;
        default:
            return <IconBlankOutline size={iconSize} color="inherit" />;
    }
};

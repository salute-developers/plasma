import React, { FC } from 'react';
import { Description as DescriptionView } from '@salutejs/plasma-docs-ui';

import { useDynamicImport } from '../hooks/useDynamicImport';

export const Description: FC<{ name: string }> = ({ name }) => {
    const { description } = useDynamicImport('@docgen', name);

    if (!description) {
        return null;
    }

    return <DescriptionView description={description} />;
};

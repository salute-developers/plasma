import React, { useState } from 'react';
import { IconPlasma } from '@salutejs/plasma-icons';

import { items } from './mock';

export const createSingleStory = (Select: any) => {
    return ({ enableContentLeft, ...rest }: any) => {
        const [value, setValue] = useState('');

        return (
            <div style={{ width: '300px' }}>
                <Select
                    {...rest}
                    items={items}
                    value={value}
                    onChange={setValue}
                    contentLeft={enableContentLeft ? <IconPlasma size="s" color="inherit" /> : undefined}
                />
            </div>
        );
    };
};

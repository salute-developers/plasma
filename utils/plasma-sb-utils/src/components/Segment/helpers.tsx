import React from 'react';
import { IconPlasma } from '@salutejs/plasma-icons';

export const getContentSize = (size: string) => {
    return size === 'xs' ? 'xs' : 's';
};

type GetContentLeftProps = {
    contentLeftOption: string;
    size: string;
};

export const getContentLeft = ({ contentLeftOption, size }: GetContentLeftProps) => {
    const iconSize = getContentSize(size);

    return contentLeftOption === 'icon' ? <IconPlasma size={iconSize} color="inherit" /> : undefined;
};

type GetContentRightProps = {
    contentRightOption: string;
    size: string;
    CounterComponent?: React.ComponentType<{ size: string; count: number; view: string }>;
};

export const getContentRight = ({ contentRightOption, size, CounterComponent }: GetContentRightProps) => {
    const contentSize = getContentSize(size);

    switch (contentRightOption) {
        case 'icon':
            return <IconPlasma size={contentSize} color="inherit" />;
        case 'counter':
            return CounterComponent ? <CounterComponent size={contentSize} count={1} view="positive" /> : undefined;
        case 'text':
            return 'Text';
        default:
            return undefined;
    }
};

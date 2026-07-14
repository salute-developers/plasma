import React from 'react';
import { IconClose, IconPlasma } from '@salutejs/plasma-icons';

const getButtonSize = (size?: string) =>
    ({ xl: 'l', h2: 'l', l: 'm', h3: 'm', m: 's', h4: 's', s: 'xs', h5: 'xs' }[size || ''] || size);

export const createDefaultStory = (Header: any, IconButton: any) => (args: any) => {
    const { size, hasActionBefore, hasActionAfter, ...rest } = args;
    const iconSize = size === 'xs' || size === 's' || size === 'h5' ? 'xs' : 's';

    return (
        <div style={{ width: '22rem' }}>
            <Header
                {...rest}
                size={size}
                actionBefore={
                    hasActionBefore ? (
                        <IconButton view="clear" size={getButtonSize(size)}>
                            <IconPlasma size={iconSize} color="inherit" />
                        </IconButton>
                    ) : null
                }
                actionAfter={
                    hasActionAfter ? (
                        <IconButton view="clear" size={getButtonSize(size)}>
                            <IconClose size={iconSize} color="inherit" />
                        </IconButton>
                    ) : null
                }
            />
        </div>
    );
};

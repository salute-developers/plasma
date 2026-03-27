import React from 'react';
import { IconPlasma } from '@salutejs/plasma-icons';

const getIconSize = (size?: string, isScalable?: boolean) => {
    if (isScalable) {
        return 'm';
    }

    if (size === 'l' || size === 'm') {
        return 's';
    }

    return 'xs';
};

export const createDefaultStory = (NoteComponent: any) => {
    return ({ enableContentBefore, enableHeightControl, ...args }: any) => {
        return (
            <div style={{ height: '100vh' }}>
                <NoteComponent
                    contentBefore={
                        enableContentBefore ? (
                            <IconPlasma
                                size={getIconSize(args.size, args.contentBeforeSizing === 'scalable')}
                                color="inherit"
                            />
                        ) : undefined
                    }
                    height={enableHeightControl ? args.height : undefined}
                    {...args}
                />
            </div>
        );
    };
};

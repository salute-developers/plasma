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

export const createDefaultStory = (NoteComponent: any, Components: any) => {
    const { LinkButton } = Components;

    return ({ enableContentBefore, enableHeightControl, hasActionContent, ...args }: any) => {
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
                    actionContent={
                        hasActionContent ? <LinkButton text="Label" size={args.size} view={args.view} /> : undefined
                    }
                    {...args}
                />
            </div>
        );
    };
};

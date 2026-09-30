import React from 'react';
import { IconDisclosureRight, IconPlasma } from '@salutejs/plasma-icons';

import { getIconSize as defaultGetIconSize } from './fixtures';

type CreateDefaultStoryOptions = {
    getIconSize?: typeof defaultGetIconSize;
    linkButtonSize?: string;
};

export const createDefaultStory = (
    NoteComponent: any,
    Components: any,
    { getIconSize = defaultGetIconSize, linkButtonSize }: CreateDefaultStoryOptions = {},
) => {
    const { LinkButton } = Components;

    return ({ enableContentBefore, enableContentAfter, enableHeightControl, hasActionContent, ...args }: any) => {
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
                    contentAfter={enableContentAfter ? <IconDisclosureRight size="s" color="inherit" /> : undefined}
                    height={enableHeightControl ? args.height : undefined}
                    actionContent={
                        hasActionContent ? (
                            <LinkButton
                                text="Label"
                                size={linkButtonSize ?? args.size}
                                view={args.view === 'default' ? 'positive' : args.view}
                            />
                        ) : undefined
                    }
                    {...args}
                />
            </div>
        );
    };
};

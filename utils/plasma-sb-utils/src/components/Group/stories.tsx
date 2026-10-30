import React from 'react';

import type { ChildKind } from './fixtures';
import { childKinds } from './fixtures';

type GroupComponents = {
    Button: any;
    IconButton: any;
    Chip: any;
    Icon: any;
};

const renderItem = (components: GroupComponents, kind: ChildKind, index: number) => {
    const { Button, IconButton, Chip, Icon } = components;
    const resolvedKind = kind === 'mixed' ? childKinds[index % 3] : kind;

    if (resolvedKind === 'iconButton') {
        return (
            <IconButton key={`icon-button-${index}`}>
                <Icon color="inherit" size="s" />
            </IconButton>
        );
    }

    if (resolvedKind === 'chip') {
        return <Chip key={`chip-${index}`} text={`Chip ${index}`} />;
    }

    return <Button key={`button-${index}`} text={`Button ${index}`} />;
};

export const createDefaultStory = (Group: any, components: GroupComponents) => {
    return ({ itemsCount = 3, childKind = 'button', ...rest }: any) => (
        <Group {...rest}>
            {Array.from({ length: itemsCount }, (_, index) => renderItem(components, childKind, index))}
        </Group>
    );
};

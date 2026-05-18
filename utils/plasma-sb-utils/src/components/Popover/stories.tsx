import React, { useState } from 'react';
import { action } from 'storybook/actions';

import { resizableDirections, resizableHiddenIconsOptions, resizableIconSizes } from './fixtures';

const onToggleAction = action('onToggle');

type Components = {
    Button: React.ComponentType<any>;
};

const contentStyle = {
    background: 'var(--surface-solid-tertiary)',
    padding: '1rem',
    borderRadius: '20px',
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    height: '100%',
    boxSizing: 'border-box' as const,
};

export const createDefaultStory = (PopoverComponent: any, { Button }: Components) => {
    return ({ skidding = 0, distance = 6, ...rest }: any) => {
        const [isOpen, setIsOpen] = useState(false);

        return (
            <PopoverComponent
                opened={isOpen}
                onToggle={(is: boolean) => {
                    setIsOpen(is);
                    onToggleAction(is);
                }}
                usePortal={false}
                role="presentation"
                id="popover"
                target={<Button>Target</Button>}
                offset={[skidding, distance]}
                style={{ borderRadius: '20px' }}
                {...rest}
            >
                <div style={contentStyle}>
                    <p>Content</p>
                    <Button onClick={() => setIsOpen(false)}>Close</Button>
                </div>
            </PopoverComponent>
        );
    };
};

export const createResizableStory = (PopoverComponent: any, { Button }: Components) => {
    return ({
        skidding = 0,
        distance = 6,
        resizableDisabled,
        resizableDirections: directions,
        resizableHiddenIcons,
        resizableDefaultSize,
        resizableMinWidth,
        resizableMinHeight,
        resizableMaxWidth,
        resizableMaxHeight,
        resizableIconSize,
        ...rest
    }: any) => {
        const [isOpen, setIsOpen] = useState(false);

        return (
            <PopoverComponent
                opened={isOpen}
                onToggle={(is: boolean) => {
                    setIsOpen(is);
                    onToggleAction(is);
                }}
                frame="theme-root"
                usePortal={false}
                role="presentation"
                id="popover"
                target={<Button>Target</Button>}
                offset={[skidding, distance]}
                resizable={{
                    disabled: resizableDisabled,
                    directions,
                    hiddenIcons: resizableHiddenIcons,
                    defaultSize: resizableDefaultSize,
                    minWidth: resizableMinWidth,
                    minHeight: resizableMinHeight,
                    maxWidth: resizableMaxWidth,
                    maxHeight: resizableMaxHeight,
                    iconSize: resizableIconSize,
                }}
                style={{ borderRadius: '20px' }}
                {...rest}
            >
                <div style={contentStyle}>
                    <p>Content</p>
                    <Button onClick={() => setIsOpen(false)}>Close</Button>
                </div>
            </PopoverComponent>
        );
    };
};

export const resizableStoryArgs = {
    resizableDisabled: false,
    resizableDirections: ['bottom-right'],
    resizableHiddenIcons: [],
    resizableIconSize: 's',
    resizableDefaultSize: { width: 200, height: 100 },
    resizableMinWidth: 200,
    resizableMinHeight: 100,
};

export const resizableStoryArgTypes = {
    resizableDisabled: {
        control: 'boolean',
        table: { category: 'resizable' },
    },
    resizableDirections: {
        control: 'check',
        options: resizableDirections,
        table: { category: 'resizable' },
    },
    resizableHiddenIcons: {
        control: 'check',
        options: resizableHiddenIconsOptions,
        table: { category: 'resizable' },
    },
    resizableDefaultSize: {
        control: 'object',
        table: { category: 'resizable' },
    },
    resizableMinWidth: {
        control: 'number',
        table: { category: 'resizable' },
    },
    resizableMinHeight: {
        control: 'number',
        table: { category: 'resizable' },
    },
    resizableMaxWidth: {
        control: 'number',
        table: { category: 'resizable' },
    },
    resizableMaxHeight: {
        control: 'number',
        table: { category: 'resizable' },
    },
    resizableIconSize: {
        control: { type: 'select' },
        options: resizableIconSizes,
        table: { category: 'resizable' },
    },
};

import React, { useState } from 'react';
import type { ComponentProps } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { getDrawerStories } from '@salutejs/plasma-sb-utils';

import { Button } from '../Button';
import { SSRProvider } from '../SSRProvider';
import { BodyM, H2, H3 } from '../Typography';
import { PopupProvider } from '../Popup';

import { config } from './Drawer.config';

import { Drawer, DrawerContent, DrawerFooter, DrawerHeader } from '.';

type DrawerProps = ComponentProps<typeof Drawer>;

const { meta: META, Default } = getDrawerStories({
    component: Drawer,
    componentConfig: config,
    additionalComponents: {
        Button,
        DrawerContent,
        DrawerFooter,
        DrawerHeader,
        H2,
        H3,
        PopupProvider,
        SSRProvider,
    },
    defaultArgs: {
        width: '25vw',
    },
    disablePropsList: ['view', 'size'],
    iconButtonColor: 'var(--text-secondary)',
});

const meta: Meta<DrawerProps> = {
    ...META,
    title: 'Overlay/Drawer',
};

export default meta;

export { Default };

const LONG_TEXT = Array.from({ length: 40 }, (_, i) => `Строка ${i + 1}`);

const WithScrollStory = (args: DrawerProps) => {
    const [opened, setOpened] = useState(false);
    const onClose = () => setOpened(false);

    return (
        <SSRProvider>
            <PopupProvider>
                <Button text="Открыть панель" onClick={() => setOpened(true)} />
                <Drawer {...args} opened={opened} onClose={onClose}>
                    <DrawerHeader hasClose onClose={onClose}>
                        <H3>Header</H3>
                    </DrawerHeader>
                    <DrawerContent>
                        {LONG_TEXT.map((text) => (
                            <BodyM key={text} style={{ marginBottom: '1rem' }}>
                                {text}
                            </BodyM>
                        ))}
                    </DrawerContent>
                    <DrawerFooter>
                        <H3>Footer</H3>
                    </DrawerFooter>
                </Drawer>
            </PopupProvider>
        </SSRProvider>
    );
};

export const WithScroll: StoryObj<DrawerProps> = {
    render: (args) => <WithScrollStory {...args} />,
    args: {
        width: '25vw',
    },
    argTypes: {
        showHeader: { table: { disable: true } },
        showFooter: { table: { disable: true } },
        showActions: { table: { disable: true } },
        hasClose: { table: { disable: true } },
        closePlacement: { table: { disable: true } },
        offsetX: { table: { disable: true } },
        offsetY: { table: { disable: true } },
    } as Meta<DrawerProps>['argTypes'],
};

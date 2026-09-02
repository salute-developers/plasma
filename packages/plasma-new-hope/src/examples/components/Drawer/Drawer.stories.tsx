import React from 'react';
import type { ComponentProps } from 'react';
import type { Meta } from '@storybook/react-vite';
import { getDrawerStories } from '@salutejs/plasma-sb-utils';

import { Button } from '../Button/Button';
import { Heading } from '../typography/components/Heading/Heading';
import { SSRProvider } from '../../../components/SSRProvider';
import { PopupProvider } from '../Popup/Popup';

import { Drawer, DrawerContent, DrawerFooter, DrawerHeader } from './Drawer';
import { config } from './Drawer.config';

type DrawerProps = ComponentProps<typeof Drawer>;
type HeadingProps = ComponentProps<typeof Heading>;

const H2 = (props: HeadingProps) => <Heading {...props} size="h2" />;
const H3 = (props: HeadingProps) => <Heading {...props} size="h3" />;

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
    frame: 'theme-root',
});

const meta: Meta<DrawerProps> = {
    ...META,
    title: 'Overlay/Drawer',
};

export default meta;

export { Default };

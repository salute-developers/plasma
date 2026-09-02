import type { ComponentProps } from 'react';
import type { Meta } from '@storybook/react-vite';
import { getDrawerStories } from '@salutejs/plasma-sb-utils';

import { Button } from '../Button';
import { SSRProvider } from '../SSRProvider';
import { H2, H3 } from '../Typography';
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
});

const meta: Meta<DrawerProps> = {
    ...META,
    title: 'Overlay/Drawer',
};

export default meta;

export { Default };

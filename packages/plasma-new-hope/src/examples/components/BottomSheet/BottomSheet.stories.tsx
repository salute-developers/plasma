import React, { ComponentProps } from 'react';
import type { Meta } from '@storybook/react-vite';
import { getBottomSheetStories } from '@salutejs/plasma-sb-utils';

import { Button } from '../Button/Button';
import { Body } from '../typography/components/Body/Body';
import { Heading } from '../typography/components/Heading/Heading';

import { BottomSheet } from './BottomSheet';
import { config } from './BottomSheet.config';

type BottomSheetProps = ComponentProps<typeof BottomSheet>;

const H3 = (props: ComponentProps<typeof Heading>) => <Heading size="h3" {...props} />;

const { meta: META, Default } = getBottomSheetStories({
    component: BottomSheet,
    componentConfig: config,
    additionalComponents: {
        Button,
        Body,
        H3,
    },
});

const meta: Meta<BottomSheetProps> = {
    ...META,
    title: 'Overlay/BottomSheet',
};

export default meta;

export { Default };

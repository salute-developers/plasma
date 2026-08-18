import React, { ComponentProps } from 'react';
import type { Meta } from '@storybook/react-vite';
import { getBottomSheetStories } from '@salutejs/plasma-sb-utils';

import { Button } from '../Button';
import { BodyM, BodyS, H3 } from '../Typography';

import { config } from './BottomSheet.config';

import { BottomSheet } from '.';

type BottomSheetProps = ComponentProps<typeof BottomSheet>;
type BodyProps = ComponentProps<typeof BodyM> & { size?: 's' | 'm' };

const Body = ({ size, ...rest }: BodyProps) => (size === 's' ? <BodyS {...rest} /> : <BodyM {...rest} />);

const { meta: META, Default, WithSnapPoints } = getBottomSheetStories({
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

export { Default, WithSnapPoints };

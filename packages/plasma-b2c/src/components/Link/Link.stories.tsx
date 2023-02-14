import React from 'react';
import { InSpacingDecorator } from '@salutejs/plasma-sb-utils';
import { Meta } from '@storybook/react';

import { P1 } from '../Typography';

import { Link } from '.';

export default {
    title: 'Content/Link',
    decorators: [InSpacingDecorator],
} as Meta;

const props = { href: '/', target: '__blank' };

export const Default = () => (
    <P1>
        Скачайте <Link {...props}>приложение</Link>.
    </P1>
);

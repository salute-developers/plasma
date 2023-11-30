import React from 'react';
import type { StoryObj, Meta } from '@storybook/react';
import { IconDone, IconLock } from '@salutejs/plasma-icons';
import { accent, primary, tertiary } from '@salutejs/plasma-tokens';

import { InSpacing } from '../../helpers/StoryDecorators';

import { MarkedList, MarkedItem } from '.';

const meta: Meta = {
    title: 'Content/MarkedList',
    component: MarkedList,
    decorators: [InSpacing],
};

export default meta;

export const Default: StoryObj = {
    render: () => (
        <MarkedList>
            <MarkedItem text="Музыка без ограничений" style={{ color: primary }}>
                <IconDone size="xs" color={accent} />
            </MarkedItem>
            <MarkedItem text="Ежедневные рекомендации" style={{ color: primary }}>
                <IconDone size="xs" color={accent} />
            </MarkedItem>
            <MarkedItem text="Коллекции и плейлисты" style={{ color: tertiary }}>
                <IconLock size="xs" color={tertiary} />
            </MarkedItem>
            <MarkedItem text="Без рекламы" style={{ color: tertiary }}>
                <IconLock size="xs" color={tertiary} />
            </MarkedItem>
        </MarkedList>
    ),
};

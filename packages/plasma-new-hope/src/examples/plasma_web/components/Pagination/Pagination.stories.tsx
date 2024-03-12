import { disableProps } from '@salutejs/plasma-sb-utils';
import type { StoryObj, Meta } from '@storybook/react';
import React from 'react';

import { WithTheme } from '../../../_helpers';
import { Button } from '../Button/Button';

import { Pagination } from './Pagination';

const meta: Meta<typeof Pagination> = {
    title: 'plasma_web/Pagination',
    component: Pagination,
    decorators: [WithTheme],
    argTypes: {
        size: {
            options: ['xs', 's', 'm', 'l'],
            control: {
                type: 'select',
            },
        },
        type: {
            options: ['default', 'compact'],
            control: {
                type: 'select',
            },
        },
        view: {
            options: ['clear', 'primary', 'secondary'],
            control: {
                type: 'select',
            },
        },
        viewCurrentPage: {
            options: ['clear', 'primary', 'secondary'],
            control: {
                type: 'select',
            },
        },
        ...disableProps(['contentLeft', 'contentRight']),
    },
};

export default meta;

type Story = StoryObj<typeof Pagination>;

export const Default: Story = {
    args: {
        pages: 20,
        value: 1,
        slots: 9,
        type: 'default',
        view: 'clear',
        viewCurrentPage: 'secondary',
        size: 'xs',
        isQuickJump: true,
        isPerPage: true,
        pilled: false,
        stretching: true,
    },
};

const genButton = (text: string) => {
    return (
        <>
            <Button view="clear">{text}</Button>
        </>
    );
};

export const Content: Story = {
    args: {
        pages: 20,
        value: 1,
        slots: 9,
        type: 'default',
        view: 'clear',
        size: 'xs',
        isQuickJump: true,
        isPerPage: true,
        pilled: false,
        disabled: [3, 4],
        viewCurrentPage: 'secondary',
        leftContent: genButton('Prev'),
        rightContent: genButton('Next'),
        isCommonButtonStyles: true,
        stretching: true,
    },
};

import React from 'react';
import type { ComponentProps } from 'react';
import type { StoryObj, Meta } from '@storybook/react';
import { disableProps } from '@salutejs/plasma-sb-utils';

import { mergeConfig } from '../../../../engines';
import { WithTheme, argTypesFromConfig } from '../../../_helpers';
import { accordionConfig } from '../../../../components/Accordion';

import { config } from './Breadcrumbs.config';
import { Breadcrumbs } from './Breadcrumbs';

type BreadcrumbsProps = ComponentProps<typeof Breadcrumbs>;

const meta: Meta<BreadcrumbsProps> = {
    title: 'plasma_b2c/Breadcrumbs',
    decorators: [WithTheme],
    component: Breadcrumbs,
    args: {
        view: 'default',
        size: 'm',
        showItems: 2,
        items: [
            { title: 'Home', href: '/' },
            { title: 'About as', href: '/' },
            { renderItem: () => <span>Custom Item</span> },
            { title: 'Contacts' },
        ],
    },
    argTypes: {
        ...argTypesFromConfig(mergeConfig(accordionConfig, config)),
        ...disableProps(['separator']),
    },
};

export default meta;

export const Default: StoryObj<BreadcrumbsProps> = {
    render: (props: BreadcrumbsProps) => {
        return <Breadcrumbs {...props} />;
    },
};

import * as React from 'react';
import type { ComponentProps } from 'react';
import type { StoryObj, Meta } from '@storybook/react';

import { WithTheme } from '../../../_helpers';

import { Tree } from './Tree';

const treeData: any[] = [
    {
        title: 'Parent 1',
        key: '0-0',
        children: [
            {
                title: 'Parent 1-0',
                key: '0-0-0',
                children: [
                    {
                        title: 'Leaf',
                        key: '0-0-0-0',
                        disabled: true,
                    },
                    {
                        title: 'Leaf',
                        key: '0-0-0-1',
                        children: [
                            {
                                title: 'Leaf Leaf Leaf Leaf Leaf Leaf Leaf Leaf Leaf Leaf Leaf',
                                key: '0-0-0-0-0',
                            },
                            {
                                title: 'Leaf',
                                key: '0-0-0-0-1',
                            },
                        ],
                    },
                ],
            },
            {
                title: 'Parent 1-1',
                key: '0-0-1',
                children: [{ title: 'Leaf', key: '0-0-1-0' }],
            },
        ],
    },
    {
        title: 'Parent 2',
        key: '0-1',
        children: [
            {
                title: 'Parent 2-0',
                key: '0-1-0',
            },
        ],
    },
];

type StoryTreeProps = ComponentProps<typeof Tree>;

const view = ['default'];
const size = ['xs', 's', 'm', 'l'];
const arrowPlacements = ['left', 'right'];

const meta: Meta<StoryTreeProps> = {
    title: 'plasma_b2c/Tree',
    decorators: [WithTheme],
    component: Tree,
    argTypes: {
        view: {
            control: 'select',
            options: view,
        },
        size: {
            control: 'select',
            options: size,
        },
        checkable: {
            control: 'boolean',
        },
        multiple: {
            control: 'boolean',
        },
        arrowPlacement: {
            options: arrowPlacements,
            control: {
                type: 'inline-radio',
            },
        },
        checkStrictly: {
            control: 'boolean',
        },
        defaultExpandAll: {
            control: 'boolean',
        },
        virtual: {
            control: 'boolean',
        },
        fullWidthItemSelection: {
            control: 'boolean',
        },
        height: {
            control: 'number',
        },
    },
    args: {
        view: 'default',
        size: 'm',
        fullWidthItemSelection: false,
        checkable: false,
        multiple: false,
        arrowPlacement: 'left',
        checkStrictly: false,
        defaultExpandAll: true,
        virtual: false,
        height: undefined,
    },
};

export default meta;

const StoryDefault = (args: StoryTreeProps) => {
    return <Tree {...args} items={treeData} />;
};

export const Default: StoryObj<StoryTreeProps> = {
    render: (args) => <StoryDefault {...args} />,
};

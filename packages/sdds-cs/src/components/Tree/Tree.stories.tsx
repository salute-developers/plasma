import * as React from 'react';
import type { ComponentProps } from 'react';
import type { StoryObj, Meta } from '@storybook/react';
import { InSpacingDecorator } from '@salutejs/plasma-sb-utils';

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

const size = ['xs', 's', 'm', 'l'];
const arrowPlacements = ['left', 'right'];

const meta: Meta<StoryTreeProps> = {
    title: 'Data Entry/Tree',
    decorators: [InSpacingDecorator],
    component: Tree,
    argTypes: {
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
        defaultExpandAll: {
            control: 'boolean',
        },
        fullWidthItemSelection: {
            control: 'boolean',
        },
        height: {
            control: 'number',
        },
        hasIcon: {
            control: 'boolean',
        },
    },
    args: {
        size: 'm',
        fullWidthItemSelection: false,
        checkable: false,
        multiple: false,
        arrowPlacement: 'left',
        defaultExpandAll: true,
        height: undefined,
        hasIcon: true,
    },
    parameters: {
        controls: {
            include: [
                'size',
                'fullWidthItemSelection',
                'checkable',
                'multiple',
                'arrowPlacement',
                'defaultExpandAll',
                'height',
                'hasIcon',
            ],
        },
    },
};

export default meta;

const StoryDefault = (args: StoryTreeProps) => {
    return <Tree {...args} items={treeData} />;
};

export const Default: StoryObj<StoryTreeProps> = {
    render: (args) => <StoryDefault {...args} />,
};

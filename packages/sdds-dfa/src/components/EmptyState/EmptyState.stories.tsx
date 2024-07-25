import type { ComponentProps } from 'react';
import type { StoryObj, Meta } from '@storybook/react';
import * as React from 'react';
import { InSpacingDecorator } from '@salutejs/plasma-sb-utils';
import { IconPlasma } from '@salutejs/plasma-icons';

import { EmptyState } from './EmptyState';

const sizes = ['l', 'm', 's', 'xs'];

type StoryProps = ComponentProps<typeof EmptyState> & {
    enableIcon: boolean;
};

const meta: Meta<StoryProps> = {
    title: 'Content/EmptyState',
    decorators: [InSpacingDecorator],
    component: EmptyState,
    args: {
        description: 'Описание',
        buttonText: 'Кнопка',
        size: 'l',
        enableIcon: true,
    },
    argTypes: {
        size: {
            options: sizes,
            control: {
                type: 'inline-radio',
            },
        },
    },
};

export default meta;

const DefaultStory = (args: StoryProps) => {
    return <EmptyState {...args} icon={args.enableIcon ? <IconPlasma size="s" /> : undefined} />;
};

export const Default: StoryObj<StoryProps> = {
    render: (args) => <DefaultStory {...args} />,
};

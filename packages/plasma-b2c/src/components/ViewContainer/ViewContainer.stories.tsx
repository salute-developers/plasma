import React, { ComponentProps } from 'react';
import type { StoryObj, Meta } from '@storybook/react';
import { InSpacingDecorator } from '@salutejs/plasma-sb-utils';

import { H4, H3 } from '../Typography';
import { Button } from '../Button';

import { ViewContainer } from './ViewContainer';

type StoryViewProps = ComponentProps<typeof ViewContainer>;

const meta: Meta<StoryViewProps> = {
    title: 'Layout/ViewContainer',
    decorators: [InSpacingDecorator],
};

export default meta;

type Story = StoryObj<StoryViewProps>;

// const StoryBaseButton: Story = {
//     args: {
//         view: 'default',
//     },
// };

const ViewExample = ({ view }: StoryViewProps) => {
    return (
        <>
            <H4>view: {view}</H4>
            <ViewContainer view={view}>
                <H3>Inside ViewContainer</H3>
                <Button text="default Button" />
                <Button view="accent" text="Accent Button" />
            </ViewContainer>
        </>
    );
};

export const Default: Story = {
    // ...StoryBaseButton,
    // args: {
    //     view: 'default',
    // },
    render: ({ view, ...rest }) => {
        console.log(rest, view);
        return (
            <>
                <ViewExample view="default" />
                <br />
                <ViewExample view="onDark" />
                <br />
                <ViewExample view="onLight" />
                <br />
                <h3>Inverse in progress</h3>
                <br />
            </>
        );
    },
};

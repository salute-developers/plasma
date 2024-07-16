import React, { ComponentProps } from 'react';
import type { StoryObj, Meta } from '@storybook/react';

import { WithTheme } from '../../../_helpers';
import { Heading } from '../../../typograpy/components/Heading/Heading';
import { Button } from '../../components/Button/Button';

import { ViewContainer } from './ViewContainer';

type StoryViewProps = ComponentProps<typeof ViewContainer>;

const meta: Meta<StoryViewProps> = {
    title: 'plasma_b2c/ViewContainer',
    decorators: [WithTheme],
};

export default meta;

type Story = StoryObj<StoryViewProps>;

const backgroundPrimary = '--background-primary';
const textPrimary = '--text-primary';

const ViewExample = ({ view }: StoryViewProps) => {
    return (
        <>
            <Heading size="h4">view: {view}</Heading>
            <div>
                <ViewContainer
                    view={view}
                    style={{ background: `var(${backgroundPrimary})`, color: `var(${textPrimary})` }}
                >
                    <Heading size="h3">Inside ViewContainer</Heading>
                    <Button text="default Button" />
                    <Button view="accent" text="Accent Button" />
                </ViewContainer>
            </div>
        </>
    );
};

export const Default: Story = {
    render: () => {
        return (
            <>
                <ViewExample />
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

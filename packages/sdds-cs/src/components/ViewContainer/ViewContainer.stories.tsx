import React, { ComponentProps } from 'react';
import type { StoryObj, Meta } from '@storybook/react-vite';
import { InSpacingDecorator } from '@salutejs/plasma-sb-utils';

import { Button } from '../Button';
import { TextField } from '../TextField';
import { Checkbox } from '../Checkbox';

import { ViewContainer } from './ViewContainer';

type StoryViewProps = ComponentProps<typeof ViewContainer>;

const meta: Meta<StoryViewProps> = {
    title: 'Data Display/ViewContainer',
    decorators: [InSpacingDecorator],
};

export default meta;

type Story = StoryObj<StoryViewProps>;

const ViewExample = ({ view }: StoryViewProps) => {
    const style = view
        ? {
              background: view === 'onDark' ? '#1a1a1a' : '#ededed',
              color: view === 'onDark' ? 'white' : 'black',
          }
        : undefined;

    return (
        <>
            <h4>view: {view ?? 'default'}</h4>
            <div>
                <ViewContainer
                    view={view}
                    style={{
                        ...style,
                        padding: '1rem',
                        borderRadius: '1rem',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '1rem',
                    }}
                >
                    <h3 style={{ margin: 0 }}>Inside ViewContainer</h3>
                    <Button text="default Button" />
                    <Checkbox checked label="Label" />
                    <TextField size="s" value="Example Value" label="Label" />
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
            </>
        );
    },
};

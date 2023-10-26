import React, { useState } from 'react';
import styled from 'styled-components';
import type { StoryObj, Meta } from '@storybook/react';
import { IconDownload, IconApps } from '@salutejs/plasma-icons';
import { disableProps, InSpacingDecorator } from '@salutejs/plasma-sb-utils';

import { Button } from '../Button';

import { Tooltip, TooltipProps } from '.';

const meta: Meta<TooltipProps> = {
    title: 'Controls/Tooltip',
    decorators: [InSpacingDecorator],
    component: Tooltip,
    argTypes: {
        placement: {
            options: ['top', 'top-start', 'top-end', 'bottom', 'bottom-start', 'bottom-end', 'left', 'right'],
            control: {
                type: 'select',
            },
        },
        ...disableProps(['isVisible']),
    },
    args: {
        text: 'Hello',
        placement: 'bottom',
        animated: true,
        arrow: true,
    },
};

export default meta;

type Story = StoryObj<TooltipProps>;

const StyledGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, max-content);
    grid-gap: 1rem 3.5rem;
    padding: 2.5rem;
`;

const ChangeTextWrapper = styled.div`
    margin-left: 100px;
    margin-bottom: 35px;
`;

export const Live: StoryObj = {
    render: () => {
        return (
            <StyledGrid>
                <Tooltip placement="top-start" isVisible arrow text="Top start" animated={false}>
                    <Tooltip placement="left" isVisible arrow text="Left" animated={false}>
                        <Button contentLeft={<IconDownload />} />
                    </Tooltip>
                </Tooltip>
                <Tooltip placement="top" isVisible arrow text="Top" animated={false}>
                    <Button contentLeft={<IconDownload />} />
                </Tooltip>
                <Tooltip placement="top-end" isVisible arrow text="Top end" animated={false}>
                    <Tooltip placement="right" isVisible arrow text="Right" animated={false}>
                        <Button contentLeft={<IconDownload />} />
                    </Tooltip>
                </Tooltip>
                <Tooltip placement="bottom-start" isVisible arrow text="Bottom start" animated={false}>
                    <Button contentLeft={<IconDownload />} />
                </Tooltip>
                <Tooltip placement="bottom" isVisible arrow text="Bottom" animated={false}>
                    <Button contentLeft={<IconDownload />} />
                </Tooltip>
                <Tooltip placement="bottom-end" isVisible arrow text="Bottom end" animated={false}>
                    <Button contentLeft={<IconDownload />} />
                </Tooltip>
            </StyledGrid>
        );
    },
};

const StoryDefault = (args: TooltipProps) => {
    const [isVisible, setVisible] = useState(false);

    return (
        <Tooltip isVisible={isVisible} {...args}>
            <Button
                text="Toggle"
                onClick={() => {
                    setVisible((isVis) => !isVis);
                }}
            />
        </Tooltip>
    );
};

export const Default: Story = {
    render: (args) => <StoryDefault {...args} />,
};

export const ChangeText: Story = {
    render: ({ text, ...rest }) => {
        return (
            <div>
                <ChangeTextWrapper>
                    <Tooltip text={text} isVisible {...rest}>
                        <IconApps />
                    </Tooltip>
                </ChangeTextWrapper>
            </div>
        );
    },
};

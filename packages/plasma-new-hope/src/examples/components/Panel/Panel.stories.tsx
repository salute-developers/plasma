import React, { useState } from 'react';
import { styled } from '@linaria/react';
import type { ComponentProps } from 'react';
import type { StoryObj, Meta } from '@storybook/react';

import { Button } from '../Button/Button';
import { WithTheme } from '../../_helpers';
import { Heading } from '../typography/components/Heading/Heading';
import { IconDone } from '../../../components/_Icon';
import { ClosePlacementType } from '../../../components/Panel';
import { SSRProvider } from '../../../components/SSRProvider';

import { Panel, PanelContent, PanelFooter, PanelHeader } from './Panel';

export default {
    title: 'Overlay/Panel',
    decorators: [WithTheme],
    argTypes: {
        borderRadius: {
            options: ['none', 'default'],
            control: {
                type: 'select',
            },
        },
        showHeader: {
            control: {
                type: 'boolean',
            },
            table: { defaultValue: { summary: true } },
        },
        showFooter: {
            control: {
                type: 'boolean',
            },
            table: { defaultValue: { summary: true } },
        },
        showActions: {
            control: {
                type: 'boolean',
            },
            table: { defaultValue: { summary: true } },
        },
        closePlacement: {
            options: ['right', 'left'],
            control: {
                type: 'select',
            },
            table: { defaultValue: { summary: 'right' } },
        },
        customBackgroundColor: {
            control: {
                type: 'color',
            },
        },
        customContentBackgroundColor: {
            control: {
                type: 'color',
            },
        },
    },
} as Meta;

type StoryPanelProps = ComponentProps<typeof Panel> & {
    showHeader: boolean;
    showFooter: boolean;
    showActions: boolean;
    closePlacement: string;
    hasCloseArrow: boolean;
};

const StyledWrapper = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
`;

const StyledContentWrapper = styled.div`
    height: 80%;
    display: flex;
    flex-grow: 1;
`;

const StyledContent = styled.div`
    background: #f5f5dc;
    flex-grow: 1;
    height: 100%;
`;

const StyledSection = styled.div`
    background: #808080;
    min-height: 20%;
`;

const StyledIconButton = styled(Button)`
    position: relative;
    width: 1.5rem;
    height: 1.5rem;
`;

const StoryPanelDemo = ({ showHeader, showFooter, showActions, closePlacement, ...rest }: StoryPanelProps) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <SSRProvider>
            <StyledWrapper>
                <StyledSection>
                    <Button text="Открыть панель" onClick={() => setIsOpen(true)} />
                </StyledSection>
                <StyledContentWrapper>
                    {isOpen && (
                        <Panel {...rest}>
                            <PanelHeader
                                closePlacement={closePlacement as ClosePlacementType}
                                actions={
                                    showActions && (
                                        <StyledIconButton size="s" view="clear">
                                            <IconDone size="s" />
                                        </StyledIconButton>
                                    )
                                }
                                onClose={() => setIsOpen(false)}
                            >
                                {showHeader && <Heading size="h3">Header</Heading>}
                            </PanelHeader>
                            <PanelContent>Content</PanelContent>
                            {showFooter && (
                                <PanelFooter>
                                    <Heading size="h3">Footer</Heading>
                                </PanelFooter>
                            )}
                        </Panel>
                    )}
                    <StyledContent>
                        <Heading style={{ margin: '2rem' }} size="h2">
                            Some basic content
                        </Heading>
                    </StyledContent>
                </StyledContentWrapper>
                <StyledSection />
            </StyledWrapper>
        </SSRProvider>
    );
};

export const PanelDemo: StoryObj<StoryPanelProps> = {
    args: {
        showHeader: true,
        showFooter: true,
        showActions: true,
        hasCloseArrow: true,
        borderRadius: 'none',
        closePlacement: 'right',
        width: '30%',
        height: '100%',
    },
    render: (args) => <StoryPanelDemo {...args} />,
};

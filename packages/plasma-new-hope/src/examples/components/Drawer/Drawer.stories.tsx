import React, { useState } from 'react';
import { styled } from '@linaria/react';
import type { ComponentProps } from 'react';
import type { StoryObj, Meta } from '@storybook/react';
import { createGlobalStyle } from 'styled-components';

import { Button } from '../Button/Button';
import { WithTheme } from '../../_helpers';
import { Heading } from '../typography/components/Heading/Heading';
import { IconDone } from '../../../components/_Icon';
import { SSRProvider } from '../../../components/SSRProvider';
import { PopupProvider } from '../Popup/Popup';
import type { ClosePlacementType } from '../../../components/Drawer';

import { Drawer, DrawerContent, DrawerFooter, DrawerHeader } from './Drawer';

const meta: Meta<typeof Drawer> = {
    title: 'Overlay/Drawer',
    decorators: [WithTheme],
    argTypes: {
        placement: {
            options: ['top', 'bottom', 'right', 'left'],
            control: {
                type: 'select',
            },
            table: { defaultValue: { summary: 'center' } },
        },
        offsetX: {
            control: {
                type: 'number',
            },
            table: { defaultValue: { summary: 0 } },
        },
        offsetY: {
            control: {
                type: 'number',
            },
            table: { defaultValue: { summary: 0 } },
        },
        closeOnEsc: {
            control: {
                type: 'boolean',
            },
            table: { defaultValue: { summary: true } },
        },
        closeOnOverlayClick: {
            control: {
                type: 'boolean',
            },
            table: { defaultValue: { summary: true } },
        },
        withBlur: {
            control: {
                type: 'boolean',
            },
            table: { defaultValue: { summary: false } },
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
        borderRadius: {
            options: ['none', 'default'],
            control: {
                type: 'select',
            },
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
};

export default meta;

type StoryDrawerProps = ComponentProps<typeof Drawer> & {
    placement: string;
    offsetX: number;
    offsetY: number;
    closeOnEsc: boolean;
    closeOnOverlayClick: boolean;
    showHeader: boolean;
    showFooter: boolean;
    showActions: boolean;
    closePlacement: string;
    hasClose: boolean;
    asModal: boolean;
};

const StyledWrapper = styled.div`
    height: 100vh;
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
    background: #a8a875;
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

const animationName = 'customShowAnimation';

const GlobalAnimations = createGlobalStyle`
    @keyframes ${animationName} {
        0% {
            transform: translate(100%, -150%);
            opacity: 0;
        }

        100% {
            transform: translate(0, -50%);
            opacity: 1;
        }
    }
`;

const enterAnimation = `${animationName} 0.2s forwards`;

const StyledDrawerContent = styled(DrawerContent)`
    opacity: 0;

    animation: fadeIn 0.3s forwards;
    animation-delay: 0.5s;

    @keyframes fadeIn {
        0% {
            opacity: 0;
        }

        100% {
            opacity: 1;
        }
    }
`;

const StoryDrawerDemo = ({
    showHeader,
    showFooter,
    showActions,
    hasClose,
    closePlacement,
    offsetX,
    offsetY,
    ...rest
}: StoryDrawerProps) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <SSRProvider>
            <GlobalAnimations />
            <PopupProvider>
                <StyledWrapper>
                    <StyledSection>
                        <Button text="Открыть панель" onClick={() => setIsOpen(true)} />
                    </StyledSection>
                    <StyledContentWrapper>
                        <Drawer
                            frame="theme-root"
                            opened={isOpen}
                            offset={[offsetX, offsetY]}
                            animationInfo={{ enter: enterAnimation }}
                            onClose={() => setIsOpen(false)}
                            {...rest}
                        >
                            <DrawerHeader
                                hasClose={hasClose}
                                closePlacement={closePlacement as ClosePlacementType}
                                actions={
                                    showActions && (
                                        <StyledIconButton size="s" view="clear">
                                            <IconDone size="s" color="inherit" />
                                        </StyledIconButton>
                                    )
                                }
                                onClose={() => setIsOpen(false)}
                            >
                                {showHeader && <Heading size="h3">Header</Heading>}
                            </DrawerHeader>
                            <StyledDrawerContent>Content</StyledDrawerContent>
                            {showFooter && (
                                <DrawerFooter>
                                    <Heading size="h3">Footer</Heading>
                                </DrawerFooter>
                            )}
                        </Drawer>
                        <StyledContent>
                            <Heading style={{ margin: '2rem' }} size="h2">
                                Some basic content
                            </Heading>
                        </StyledContent>
                    </StyledContentWrapper>
                    <StyledSection />
                </StyledWrapper>
            </PopupProvider>
        </SSRProvider>
    );
};

export const DrawerDemo: StoryObj<StoryDrawerProps> = {
    args: {
        placement: 'right',
        withBlur: false,
        closeOnEsc: true,
        closeOnOverlayClick: true,
        offsetX: 0,
        offsetY: 0,
        showHeader: true,
        showFooter: true,
        showActions: true,
        hasClose: true,
        asModal: true,
        closePlacement: 'right',
        width: '50vw',
        height: '100dvh',
        borderRadius: 'none',
    },
    render: (args) => <StoryDrawerDemo {...args} />,
};

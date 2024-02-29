import React, { useState } from 'react';
import styled from 'styled-components';
import type { ComponentProps } from 'react';
import { InSpacingDecorator } from '@salutejs/plasma-sb-utils';
import type { StoryObj, Meta } from '@storybook/react';
import { IconDone } from '@salutejs/plasma-icons';

import { Button } from '../Button';
import { SSRProvider } from '../SSRProvider';
import { H2, H3 } from '../Typography';
import { PopupBaseProvider as PopupProvider } from '../PopupBase';

import type { ClosePlacementType } from '.';
import { Drawer, DrawerContent, DrawerFooter, DrawerHeader } from '.';

export default {
    title: 'Controls/Drawer',
    decorators: [InSpacingDecorator],
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
    },
} as Meta;

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

const StoryDrawerDemo = ({
    showHeader,
    showFooter,
    showActions,
    closePlacement,
    hasClose,
    offsetX,
    offsetY,
    ...rest
}: StoryDrawerProps) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <SSRProvider>
            <PopupProvider>
                <StyledWrapper>
                    <StyledSection>
                        <Button text="Открыть панель" onClick={() => setIsOpen(true)} />
                    </StyledSection>
                    <StyledContentWrapper>
                        <Drawer isOpen={isOpen} onClose={() => setIsOpen(false)} offset={[offsetX, offsetY]} {...rest}>
                            <DrawerHeader
                                hasClose={hasClose}
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
                                {showHeader && <H3>Header</H3>}
                            </DrawerHeader>
                            <DrawerContent>Content</DrawerContent>
                            {showFooter && (
                                <DrawerFooter>
                                    <H3>Footer</H3>
                                </DrawerFooter>
                            )}
                        </Drawer>
                        <StyledContent>
                            <H2 style={{ margin: '2rem' }}>Some basic content</H2>
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
        height: '100vh',
    },
    render: (args) => <StoryDrawerDemo {...args} />,
};

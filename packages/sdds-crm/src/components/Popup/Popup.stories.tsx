import React, { useState } from 'react';
import type { ComponentProps } from 'react';
import styled from 'styled-components';
import type { StoryObj, Meta } from '@storybook/react';
import { InSpacingDecorator } from '@salutejs/plasma-sb-utils';

import { SSRProvider } from '../SSRProvider';
import { Button } from '../Button';

import { Popup, popupClasses, PopupProvider } from '.';
import type { PopupProps } from '.';

const meta: Meta<PopupProps> = {
    title: 'Overlay/Popup',
    component: Popup,
    decorators: [InSpacingDecorator],
    parameters: {
        docs: { story: { inline: false, iframeHeight: '30rem' } },
        controls: {
            include: ['placement', 'offsetX', 'offsetY'],
        },
    },
    argTypes: {
        placement: {
            options: [
                'center',
                'top',
                'bottom',
                'right',
                'left',
                'top-right',
                'top-left',
                'bottom-right',
                'bottom-left',
            ],
            control: {
                type: 'select',
            },
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
        draggableDisabled: {
            control: 'boolean',
        },
        resizableDisabled: {
            control: 'boolean',
        },
        resizableDirections: {
            control: 'check',
            options: ['top', 'top-right', 'right', 'bottom-right', 'bottom', 'bottom-left', 'left', 'top-left'],
        },
        resizableDefaultSize: {
            control: 'object',
        },
        resizableHiddenIcons: {
            control: 'check',
            options: ['top-right', 'bottom-right', 'bottom-left', 'top-left'],
        },
        resizableMinWidth: {
            control: 'number',
        },
        resizableMinHeight: {
            control: 'number',
        },
        resizableMaxWidth: {
            control: 'number',
        },
        resizableMaxHeight: {
            control: 'number',
        },
        resizableIconSize: {
            control: {
                type: 'select',
            },
            options: ['xs', 's', 'm'],
        },
    },
};

export default meta;

type StoryPopupProps = ComponentProps<typeof Popup> & {
    placement: string;
    offsetX: number;
    offsetY: number;
    draggableDisabled: boolean;
    resizableDisabled: boolean;
    resizableDirections: string[];
    resizableHiddenIcons: string[];
    resizableDefaultSize: { width?: number; height?: number };
    resizableMinWidth: number;
    resizableMinHeight: number;
    resizableMaxWidth: number;
    resizableMaxHeight: number;
    resizableIconSize: 's' | 'xs' | 'm';
};

const StyledButton = styled(Button)`
    margin-top: 1rem;
    width: 15rem;
`;

const StyledWrapper = styled.div`
    height: 1200px;
`;

const OtherContent = styled.div`
    margin-top: 1rem;
    width: 400px;
    height: 500px;
    background: var(--surface-solid-tertiary);
    position: absolute;

    display: flex;
    align-items: flex-start;
    justify-content: center;
    padding: 1rem;

    top: 0;
    right: 0;
`;

const Content = styled.div`
    background: var(--surface-solid-secondary);
    padding: 1rem;
`;

const Block = styled.div`
    background: var(--surface-solid-secondary);
    padding: 1rem;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    border-radius: 1rem;
`;

const StyledPopupAnimation = styled(Popup)`
    && .${popupClasses.root} {
        animation: fadeIn 1s forwards;
    }

    &&.${popupClasses.endAnimation} .${popupClasses.root} {
        animation: fadeOut 1s forwards;
    }

    @keyframes fadeIn {
        from {
            opacity: 0;
        }

        to {
            opacity: 1;
        }
    }

    @keyframes fadeOut {
        from {
            opacity: 1;
        }

        to {
            opacity: 0;
        }
    }
`;

const StyledPopupTransition = styled(Popup)`
    && .${popupClasses.root} {
        opacity: 1;
        transition: opacity 0.5s 0.1s;
    }

    &&.${popupClasses.endTransition} .${popupClasses.root} {
        opacity: 0;
        transition: opacity 0.5s 0.1s;
    }
`;

const StoryPopup = ({ placement, offsetX, offsetY }: StoryPopupProps) => {
    const [isOpenA, setIsOpenA] = React.useState(false);
    const [isOpenB, setIsOpenB] = React.useState(false);

    const ref = React.useRef<HTMLDivElement>(null);

    return (
        <SSRProvider>
            <StyledWrapper>
                <PopupProvider>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <StyledButton text="Открыть в document" onClick={() => setIsOpenB(true)} />
                        <StyledButton text="Открыть во Frame" onClick={() => setIsOpenA(true)} />
                    </div>
                    <StyledPopupAnimation
                        id="popupA"
                        withAnimation
                        frame={ref}
                        opened={isOpenA}
                        placement={placement}
                        offset={[offsetX, offsetY]}
                    >
                        <Content>
                            <Button onClick={() => setIsOpenA(false)}>Close</Button>
                            <>Content</>
                        </Content>
                    </StyledPopupAnimation>
                    <OtherContent ref={ref}>
                        <>Frame</>
                    </OtherContent>
                    <StyledPopupTransition
                        id="popupB"
                        withAnimation
                        frame="document"
                        opened={isOpenB}
                        placement={placement}
                        offset={[offsetX, offsetY]}
                    >
                        <Content>
                            <Button onClick={() => setIsOpenB(false)}>Close</Button>
                            <>Content</>
                        </Content>
                    </StyledPopupTransition>
                </PopupProvider>
            </StyledWrapper>
        </SSRProvider>
    );
};

export const PopupDemo: StoryObj<StoryPopupProps> = {
    args: {
        placement: 'center',
        offsetX: 0,
        offsetY: 0,
    },
    render: (args) => <StoryPopup {...args} />,
};

const StoryPopupResizable = ({
    placement,
    offsetX,
    offsetY,
    resizableDirections,
    draggableDisabled,
    resizableDisabled,
    resizableHiddenIcons,
    resizableDefaultSize,
    resizableMinWidth,
    resizableMinHeight,
    resizableMaxWidth,
    resizableMaxHeight,
    resizableIconSize,
}: StoryPopupProps) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <SSRProvider>
            <StyledWrapper>
                <PopupProvider>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <StyledButton text="Открыть popup" onClick={() => setIsOpen(true)} />
                    </div>

                    <Popup
                        id="popup"
                        opened={isOpen}
                        placement={placement}
                        offset={[offsetX, offsetY]}
                        draggable={!draggableDisabled}
                        resizable={{
                            disabled: resizableDisabled,
                            directions: resizableDirections,
                            hiddenIcons: resizableHiddenIcons,
                            defaultSize: resizableDefaultSize,
                            minWidth: resizableMinWidth,
                            minHeight: resizableMinHeight,
                            maxWidth: resizableMaxWidth,
                            maxHeight: resizableMaxHeight,
                            iconSize: resizableIconSize,
                        }}
                    >
                        <Block>
                            <>Content</>
                            <br />
                            <Button stretching="filled" onClick={() => setIsOpen(false)}>
                                Close
                            </Button>
                        </Block>
                    </Popup>
                </PopupProvider>
            </StyledWrapper>
        </SSRProvider>
    );
};

export const Resizable: StoryObj<StoryPopupProps> = {
    name: 'Resizable/Draggable',
    args: {
        placement: 'center',
        offsetX: 0,
        offsetY: 0,
        draggableDisabled: false,
        resizableDisabled: false,
        resizableDirections: ['bottom-right'],
        resizableHiddenIcons: [],
        resizableIconSize: 's',
        resizableDefaultSize: { width: 200, height: 100 },
        resizableMinWidth: 200,
        resizableMinHeight: 100,
    },
    parameters: {
        controls: {
            include: [
                'placement',
                'offsetX',
                'offsetY',
                'draggableDisabled',
                'resizableDisabled',
                'resizableDirections',
                'resizableHiddenIcons',
                'resizableDefaultSize',
                'resizableMinWidth',
                'resizableMinHeight',
                'resizableMaxWidth',
                'resizableMaxHeight',
                'resizableIconSize',
            ],
        },
    },
    render: (args) => <StoryPopupResizable {...args} />,
};

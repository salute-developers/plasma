import React, { useState } from 'react';
import type { ComponentProps } from 'react';
import styled from 'styled-components';
import type { StoryObj, Meta } from '@storybook/react';
import { InSpacingDecorator } from '@salutejs/plasma-sb-utils';
import { surfaceSolid03 } from '@salutejs/plasma-tokens-web';

import { SSRProvider } from '../SSRProvider';
import { Button } from '../Button';

import { PopupBase, popupBaseClasses, PopupBaseProvider } from '.';
import type { PopupBaseProps } from '.';

const meta: Meta<PopupBaseProps> = {
    title: 'Overlay/Popup',
    component: PopupBase,
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
        resizableDisabled: {
            control: 'boolean',
        },
        resizableDirections: {
            control: 'check',
            options: ['top', 'top-right', 'right', 'bottom-right', 'bottom', 'bottom-left', 'left', 'top-left'],
        },
        resizableHiddenIcon: {
            control: 'boolean',
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

type StoryPopupBaseProps = ComponentProps<typeof PopupBase> & {
    placement: string;
    offsetX: number;
    offsetY: number;
    resizableDisabled: boolean;
    resizableDirections: string[];
    resizableHiddenIcon: boolean;
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
    width: 50%;
    height: 50%;
    background: ${surfaceSolid03};
    position: absolute;

    display: flex;
    align-items: flex-start;
    justify-content: center;
    padding: 1rem;

    top: 10rem;
    right: 0;
`;

const Content = styled.div`
    background: var(--surface-solid-secondary);
    padding: 1rem;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
`;

const Block = styled.div`
    background: var(--surface-solid-secondary);
    padding: 1rem;
    width: 100%;
    height: 100%;
    min-width: 200px;
    min-height: 120px;
    box-sizing: border-box;
    border-radius: 1rem;
`;

const StyledPopupAnimation = styled(PopupBase)`
    && .${popupBaseClasses.root} {
        animation: fadeIn 1s forwards;
    }

    &&.${popupBaseClasses.endAnimation} .${popupBaseClasses.root} {
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

const StyledPopupTransition = styled(PopupBase)`
    && .${popupBaseClasses.root} {
        opacity: 1;
        transition: opacity 0.5s 0.1s;
    }

    &&.${popupBaseClasses.endTransition} .${popupBaseClasses.root} {
        opacity: 0;
        transition: opacity 0.5s 0.1s;
    }
`;

const StoryPopupBase = ({ placement, offsetX, offsetY }: StoryPopupBaseProps) => {
    const [isOpenA, setIsOpenA] = React.useState(false);
    const [isOpenB, setIsOpenB] = React.useState(false);

    const ref = React.useRef<HTMLDivElement>(null);

    return (
        <SSRProvider>
            <StyledWrapper>
                <PopupBaseProvider>
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
                </PopupBaseProvider>
            </StyledWrapper>
        </SSRProvider>
    );
};

export const PopupBaseDemo: StoryObj<StoryPopupBaseProps> = {
    args: {
        placement: 'center',
        offsetX: 0,
        offsetY: 0,
    },
    render: (args) => <StoryPopupBase {...args} />,
};

const StoryPopupResizable = ({
    placement,
    offsetX,
    offsetY,
    resizableDirections,
    resizableDisabled,
    resizableHiddenIcon,
    resizableMaxWidth,
    resizableMaxHeight,
    resizableIconSize,
}: StoryPopupBaseProps) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <SSRProvider>
            <StyledWrapper>
                <PopupBaseProvider>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <StyledButton text="Открыть popup" onClick={() => setIsOpen(true)} />
                    </div>

                    <PopupBase
                        id="popup"
                        opened={isOpen}
                        placement={placement}
                        offset={[offsetX, offsetY]}
                        resizable={{
                            disabled: resizableDisabled,
                            directions: resizableDirections,
                            hiddenIcon: resizableHiddenIcon,
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
                    </PopupBase>
                </PopupBaseProvider>
            </StyledWrapper>
        </SSRProvider>
    );
};

export const Resizable: StoryObj<StoryPopupBaseProps> = {
    args: {
        placement: 'center',
        offsetX: 0,
        offsetY: 0,
        resizableDisabled: false,
        resizableDirections: ['bottom-right'],
        resizableHiddenIcon: false,
        resizableIconSize: 's',
    },
    parameters: {
        controls: {
            include: [
                'placement',
                'offsetX',
                'offsetY',
                'resizableDisabled',
                'resizableDirections',
                'resizableHiddenIcon',
                'resizableMaxWidth',
                'resizableMaxHeight',
                'resizableIconSize',
            ],
        },
    },
    render: (args) => <StoryPopupResizable {...args} />,
};

import React, { useCallback, useRef, useState } from 'react';
import styled from 'styled-components';
import type { ComponentProps } from 'react';
import type { StoryObj, Meta } from '@storybook/react';
import { SSRProvider } from '@salutejs/plasma-core';
import { disableProps } from '@salutejs/plasma-sb-utils';

import { PopupProvider, popupClasses } from '../Popup/Popup';
import { Button } from '../Button/Button';
import { TextField } from '../TextField/TextField';
import { WithTheme } from '../../_helpers';

import { Modal, modalClasses } from './Modal';

export default {
    title: 'Overlay/Modal',
    decorators: [WithTheme],
    parameters: {
        docs: { story: { inline: false, iframeHeight: '30rem' } },
    },
    argTypes: {
        ...disableProps(['hasBody']),
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
        resizableHiddenIcons: {
            control: 'check',
            options: ['top-right', 'bottom-right', 'bottom-left', 'top-left'],
        },
        resizableDefaultSize: {
            control: 'object',
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
} as Meta;

type StoryModalProps = ComponentProps<typeof Modal> & {
    placement: string;
    offsetX: number;
    offsetY: number;
    closeOnEsc: boolean;
    closeOnOverlayClick: boolean;
    withBlur: boolean;
    hasClose?: boolean;
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
    height: 100vh;
`;

const Content = styled.div`
    background: var(--surface-solid-secondary);
    padding: 1rem;
`;

const ButtonWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

const StyledModal = styled(Modal)`
    && .${popupClasses.root}, .${modalClasses.overlay} {
        animation: fadeIn 1s forwards;
    }

    &&.${popupClasses.endAnimation} .${popupClasses.root} {
        animation: fadeOut 1s forwards;
    }

    &&.${popupClasses.endAnimation} .${modalClasses.overlay} {
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

const StoryModalDemo = ({ placement, offsetX, offsetY, ...rest }: StoryModalProps) => {
    const [isOpenA, setIsOpenA] = useState(false);
    const [isOpenB, setIsOpenB] = useState(false);
    const [isOpenC, setIsOpenC] = useState(false);

    return (
        <SSRProvider>
            <StyledWrapper>
                <PopupProvider>
                    <ButtonWrapper>
                        <StyledButton text="Открыть A" onClick={() => setIsOpenA(true)} />
                    </ButtonWrapper>
                    <StyledModal
                        id="modalA"
                        frame="theme-root"
                        withAnimation
                        onClose={() => setIsOpenA(false)}
                        opened={isOpenA}
                        placement={placement}
                        offset={[offsetX, offsetY]}
                        hasBody
                        {...rest}
                    >
                        <Button onClick={() => setIsOpenA(false)}>Close</Button>
                        <ButtonWrapper>
                            <StyledButton text="Открыть B" onClick={() => setIsOpenB(true)} />
                        </ButtonWrapper>
                        <Modal
                            id="modalB"
                            frame="theme-root"
                            onClose={() => setIsOpenB(false)}
                            opened={isOpenB}
                            placement="left"
                            offset={[offsetX, offsetY]}
                            hasBody
                            {...rest}
                        >
                            <Button style={{ marginRight: '1rem' }} onClick={() => setIsOpenB(false)}>
                                Close
                            </Button>
                            <ButtonWrapper>
                                <StyledButton text="Открыть C" onClick={() => setIsOpenC(true)} />
                            </ButtonWrapper>
                            <Modal
                                id="modalC"
                                frame="theme-root"
                                onClose={() => setIsOpenC(false)}
                                opened={isOpenC}
                                placement="top"
                                offset={[offsetX, offsetY]}
                                hasBody
                                {...rest}
                            >
                                <div style={{ minWidth: '200px', minHeight: '200px' }}>
                                    <Button style={{ marginRight: '1rem' }} onClick={() => setIsOpenC(false)}>
                                        Close
                                    </Button>
                                    <>Content</>
                                </div>
                            </Modal>
                        </Modal>
                    </StyledModal>
                </PopupProvider>
            </StyledWrapper>
        </SSRProvider>
    );
};

const StoryCustomModalDemo = ({ placement, offsetX, offsetY, ...rest }: StoryModalProps) => {
    const [isOpenA, setIsOpenA] = useState(false);
    const [isOpenB, setIsOpenB] = useState(false);
    const [isOpenC, setIsOpenC] = useState(false);

    return (
        <SSRProvider>
            <StyledWrapper>
                <PopupProvider>
                    <ButtonWrapper>
                        <StyledButton text="Открыть A" onClick={() => setIsOpenA(true)} />
                    </ButtonWrapper>
                    <StyledModal
                        id="modalA"
                        frame="theme-root"
                        withAnimation
                        onClose={() => setIsOpenA(false)}
                        opened={isOpenA}
                        placement={placement}
                        offset={[offsetX, offsetY]}
                        {...rest}
                    >
                        <Content>
                            <Button onClick={() => setIsOpenA(false)}>Close</Button>
                            <ButtonWrapper>
                                <StyledButton text="Открыть B" onClick={() => setIsOpenB(true)} />
                            </ButtonWrapper>
                            <Modal
                                id="modalB"
                                frame="theme-root"
                                onClose={() => setIsOpenB(false)}
                                opened={isOpenB}
                                placement="left"
                                offset={[offsetX, offsetY]}
                                {...rest}
                            >
                                <Content>
                                    <Button style={{ marginRight: '1rem' }} onClick={() => setIsOpenB(false)}>
                                        Close
                                    </Button>
                                    <ButtonWrapper>
                                        <StyledButton text="Открыть C" onClick={() => setIsOpenC(true)} />
                                    </ButtonWrapper>
                                    <Modal
                                        id="modalC"
                                        frame="theme-root"
                                        onClose={() => setIsOpenC(false)}
                                        opened={isOpenC}
                                        placement="top"
                                        offset={[offsetX, offsetY]}
                                        {...rest}
                                    >
                                        <Content>
                                            <Button style={{ marginRight: '1rem' }} onClick={() => setIsOpenC(false)}>
                                                Close
                                            </Button>
                                            <>Content</>
                                        </Content>
                                    </Modal>
                                </Content>
                            </Modal>
                        </Content>
                    </StyledModal>
                </PopupProvider>
            </StyledWrapper>
        </SSRProvider>
    );
};

export const Default: StoryObj<StoryModalProps> = {
    args: {
        placement: 'center',
        withBlur: false,
        closeOnEsc: true,
        closeOnOverlayClick: true,
        offsetX: 0,
        offsetY: 0,
        hasClose: true,
    },
    argTypes: {
        hasClose: {
            control: {
                type: 'boolean',
            },
        },
    },
    render: (args) => <StoryModalDemo {...args} />,
};

export const CustomModalDemo: StoryObj<StoryModalProps> = {
    args: {
        placement: 'center',
        withBlur: false,
        closeOnEsc: true,
        closeOnOverlayClick: true,
        offsetX: 0,
        offsetY: 0,
    },
    render: (args) => <StoryCustomModalDemo {...args} />,
};

const StyledModalAnimation = styled(Modal)`
    /* stylelint-disable */
    && .${popupClasses.root} {
        animation: fadeIn 1s forwards;
    }

    &&.${popupClasses.endAnimation} .${popupClasses.root} {
        animation: fadeOut 1s forwards;
    }

    && .${modalClasses.overlay} {
        animation: overlayFadeIn 1s forwards;
    }

    &&.${popupClasses.endAnimation} .${modalClasses.overlay} {
        animation: overlayFadeOut 1s forwards;
    }
    /* stylelint-enable */

    @keyframes overlayFadeIn {
        from {
            opacity: 0;
        }

        to {
            opacity: 1;
        }
    }

    @keyframes overlayFadeOut {
        from {
            opacity: 1;
        }

        to {
            opacity: 0;
        }
    }

    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translate(-50%, 100%);
        }

        to {
            opacity: 1;
            transform: translate(-50%, -50%);
        }
    }

    @keyframes fadeOut {
        from {
            opacity: 1;
            transform: translate(-50%, -50%);
        }

        to {
            opacity: 0;
            transform: translate(-50%, 100%);
        }
    }
`;

const StoryModalAnimationDemo = ({ placement, offsetX, offsetY, ...rest }: StoryModalProps) => {
    const ref = useRef(null);
    const [isOpen, setIsOpen] = useState(false);

    const close = useCallback(() => {
        setIsOpen(false);
    }, []);

    return (
        <SSRProvider>
            <StyledWrapper>
                <PopupProvider>
                    <Button view="default" text="Открыть новое модальное окно" onClick={() => setIsOpen(!isOpen)} />
                    <StyledModalAnimation
                        id="modal"
                        frame="theme-root"
                        withAnimation
                        onClose={() => setIsOpen(false)}
                        opened={isOpen}
                        placement={placement}
                        offset={[offsetX, offsetY]}
                        initialFocusRef={ref}
                        {...rest}
                    >
                        <Content>
                            <TextField value="Text" onChange={() => {}} />
                            <TextField ref={ref} value="Text2" onChange={() => {}} />
                            <Button text="Закрыть" onClick={close} />
                        </Content>
                    </StyledModalAnimation>
                </PopupProvider>
            </StyledWrapper>
        </SSRProvider>
    );
};

export const ModalBottomAnimation: StoryObj<StoryModalProps> = {
    args: {
        placement: 'bottom',
        withAnimation: true,
        withBlur: false,
        closeOnEsc: true,
        closeOnOverlayClick: true,
        offsetX: 0,
        offsetY: 0,
    },
    render: (args) => <StoryModalAnimationDemo {...args} />,
};

const StoryModalResizable = ({
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
    ...rest
}: StoryModalProps) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <SSRProvider>
            <StyledWrapper>
                <PopupProvider>
                    <ButtonWrapper>
                        <StyledButton text="Открыть" onClick={() => setIsOpen(true)} />
                    </ButtonWrapper>

                    <StyledModal
                        frame="theme-root"
                        withAnimation
                        onClose={() => setIsOpen(false)}
                        opened={isOpen}
                        placement={placement}
                        offset={[offsetX, offsetY]}
                        hasBody
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
                        {...rest}
                    >
                        Content
                        <br />
                        <Button stretching="filled" onClick={() => setIsOpen(false)}>
                            Close
                        </Button>
                    </StyledModal>
                </PopupProvider>
            </StyledWrapper>
        </SSRProvider>
    );
};

export const Resizable: StoryObj<StoryModalProps> = {
    name: 'Resizable/Draggable',
    args: {
        placement: 'center',
        withBlur: false,
        closeOnEsc: true,
        closeOnOverlayClick: true,
        offsetX: 0,
        offsetY: 0,
        hasClose: true,
        draggableDisabled: false,
        resizableDisabled: false,
        resizableDirections: ['bottom-right'],
        resizableHiddenIcons: [],
        resizableIconSize: 's',
        resizableDefaultSize: { width: 300, height: 150 },
        resizableMinWidth: 300,
        resizableMinHeight: 150,
    },
    argTypes: {
        hasClose: {
            control: {
                type: 'boolean',
            },
        },
    },
    parameters: {
        controls: {
            include: [
                'placement',
                'withBlur',
                'closeOnEsc',
                'closeOnOverlayClick',
                'offsetX',
                'offsetY',
                'hasClose',
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
    render: (args) => <StoryModalResizable {...args} />,
};

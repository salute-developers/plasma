import React, { useCallback, useRef, useState } from 'react';
import styled, { css } from 'styled-components';
import type { Meta, StoryObj } from '@storybook/react';
import { surfaceSolid02 } from '@salutejs/plasma-tokens-b2c';
import { disableProps, InSpacingDecorator } from '@salutejs/plasma-sb-utils';

import { SSRProvider } from '../SSRProvider';
import { Button } from '../Button';
import { TextField } from '../TextField';
import { PopupBaseProvider, popupBaseClasses } from '../PopupBase';

import { ModalBase, modalBaseClasses } from '.';
import type { ModalBaseProps } from '.';

const meta: Meta<ModalBaseProps> = {
    title: 'Controls/ModalBase',
    component: ModalBase,
    decorators: [InSpacingDecorator],
    parameters: {
        docs: { story: { inline: false, iframeHeight: '30rem' } },
    },
    argTypes: {
        ...disableProps([
            'onEscKeyDown',
            'onOverlayClick',
            'initialFocusRef',
            'focusAfterRef',
            'onClose',
            'view',
            'isOpen',
            'opened',
            'offset',
            'frame',
            'children',
            'overlay',
            'zIndex',
            'popupInfo',
            'withAnimation',
            'hasBody',
        ]),
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
    },
};

export default meta;

type StoryModalBaseProps = {
    placement: string;
    offsetX: number;
    offsetY: number;
    closeOnEsc: boolean;
    closeOnOverlayClick: boolean;
    withBlur: boolean;
    hasClose?: boolean;
};

const StyledButton = styled(Button)`
    margin-top: 1rem;
    width: 15rem;
`;

const StyledWrapper = styled.div`
    height: 1200px;
`;

const Content = styled.div`
    background: ${surfaceSolid02};
    padding: 1rem;
`;

const StyledModal = styled(ModalBase)`
    && > .${popupBaseClasses.root}, .${modalBaseClasses.overlay} {
        animation: fadeIn 1s forwards;
    }

    &&.${popupBaseClasses.endAnimation} .${popupBaseClasses.root} {
        animation: fadeOut 1s forwards;
    }

    &&.${popupBaseClasses.endAnimation} .${modalBaseClasses.overlay} {
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

const StoryCustomModalDemo = ({ placement, offsetX, offsetY, ...rest }: StoryModalBaseProps) => {
    const [isOpenA, setIsOpenA] = useState(false);
    const [isOpenB, setIsOpenB] = useState(false);
    const [isOpenC, setIsOpenC] = useState(false);

    return (
        <SSRProvider>
            <StyledWrapper>
                <PopupBaseProvider>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <StyledButton text="Открыть A" onClick={() => setIsOpenA(true)} />
                    </div>
                    <StyledModal
                        id="modalA"
                        withAnimation
                        onClose={() => setIsOpenA(false)}
                        opened={isOpenA}
                        placement={placement}
                        offset={[offsetX, offsetY]}
                        hasBody
                        {...rest}
                    >
                        <Button onClick={() => setIsOpenA(false)}>Close</Button>
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <StyledButton text="Открыть B" onClick={() => setIsOpenB(true)} />
                        </div>
                        <ModalBase
                            id="modalB"
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
                            <div style={{ display: 'flex', flexDirection: 'column' }}>
                                <StyledButton text="Открыть C" onClick={() => setIsOpenC(true)} />
                            </div>
                            <ModalBase
                                id="modalC"
                                onClose={() => setIsOpenC(false)}
                                opened={isOpenC}
                                placement="top"
                                offset={[offsetX, offsetY]}
                                hasBody
                                {...rest}
                            >
                                <Button style={{ marginRight: '1rem' }} onClick={() => setIsOpenC(false)}>
                                    Close
                                </Button>
                                <>Content</>
                            </ModalBase>
                        </ModalBase>
                    </StyledModal>
                </PopupBaseProvider>
            </StyledWrapper>
        </SSRProvider>
    );
};

export const Default: StoryObj<StoryModalBaseProps> = {
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
    render: (args) => <StoryCustomModalDemo {...args} />,
};

const StoryCustomModalBaseDemo = ({ placement, offsetX, offsetY, ...rest }: StoryModalBaseProps) => {
    const [isOpenA, setIsOpenA] = useState(false);
    const [isOpenB, setIsOpenB] = useState(false);
    const [isOpenC, setIsOpenC] = useState(false);

    return (
        <SSRProvider>
            <StyledWrapper>
                <PopupBaseProvider>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <StyledButton text="Открыть A" onClick={() => setIsOpenA(true)} />
                    </div>
                    <StyledModal
                        id="modalA"
                        withAnimation
                        onClose={() => setIsOpenA(false)}
                        opened={isOpenA}
                        placement={placement}
                        offset={[offsetX, offsetY]}
                        {...rest}
                    >
                        <Content>
                            <Button onClick={() => setIsOpenA(false)}>Close</Button>
                            <div style={{ display: 'flex', flexDirection: 'column' }}>
                                <StyledButton text="Открыть B" onClick={() => setIsOpenB(true)} />
                            </div>
                            <ModalBase
                                id="modalB"
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
                                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                                        <StyledButton text="Открыть C" onClick={() => setIsOpenC(true)} />
                                    </div>
                                    <ModalBase
                                        id="modalC"
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
                                    </ModalBase>
                                </Content>
                            </ModalBase>
                        </Content>
                    </StyledModal>
                </PopupBaseProvider>
            </StyledWrapper>
        </SSRProvider>
    );
};

export const ModalBaseDemo: StoryObj<StoryModalBaseProps> = {
    args: {
        placement: 'center',
        withBlur: false,
        closeOnEsc: true,
        closeOnOverlayClick: true,
        offsetX: 0,
        offsetY: 0,
    },
    argTypes: {
        ...disableProps(['hasClose']),
    },
    render: (args) => <StoryCustomModalBaseDemo {...args} />,
};

const StyledModalAnimation = styled(ModalBase)`
    /* stylelint-disable */

    ${({ placement }) =>
        placement !== 'center'
            ? css`
                  --initial-position: 0, 100%;
                  --end-position: 0, -50%;
              `
            : css`
                  --initial-position: -50%, 100%;
                  --end-position: -50%, -50%;
              `}

    && .${popupBaseClasses.root} {
        animation: fadeIn 1s forwards;
    }

    &&.${popupBaseClasses.endAnimation} .${popupBaseClasses.root} {
        animation: fadeOut 1s forwards;
    }

    && .${modalBaseClasses.overlay} {
        animation: overlayFadeIn 1s forwards;
    }

    &&.${popupBaseClasses.endAnimation} .${modalBaseClasses.overlay} {
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
            transform: translate(var(--initial-position));
        }

        to {
            opacity: 1;
            transform: translate(var(--end-position));
        }
    }

    @keyframes fadeOut {
        from {
            opacity: 1;
            transform: translate(var(--end-position));
        }

        to {
            opacity: 0;
            transform: translate(var(--initial-position));
        }
    }
`;

const StoryModalAnimationDemo = ({ placement, offsetX, offsetY, ...rest }: StoryModalBaseProps) => {
    const ref = useRef(null);
    const [isOpen, setIsOpen] = useState(false);

    const close = useCallback(() => {
        setIsOpen(false);
    }, []);

    return (
        <SSRProvider>
            <PopupBaseProvider>
                <Button view="default" text="Открыть новое модальное окно" onClick={() => setIsOpen(!isOpen)} />
                <StyledModalAnimation
                    id="modal"
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
            </PopupBaseProvider>
        </SSRProvider>
    );
};

export const ModalBottomAnimation: StoryObj<StoryModalBaseProps> = {
    args: {
        placement: 'center',
        withAnimation: true,
        withBlur: false,
        closeOnEsc: true,
        closeOnOverlayClick: true,
        offsetX: 0,
        offsetY: 0,
    },
    argTypes: {
        ...disableProps(['hasClose']),
    },
    render: (args) => <StoryModalAnimationDemo {...args} />,
};

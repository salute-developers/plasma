import React from 'react';
import styled from 'styled-components';
import type { Meta, StoryObj } from '@storybook/react';
import { InSpacingDecorator } from '@salutejs/plasma-sb-utils';

import { SSRProvider } from '../SSRProvider';
import { Button } from '../Button';
import { TextField } from '../TextField';
import { PopupProvider, popupClasses } from '../Popup';

import { Modal, modalClasses } from '.';
import type { ModalProps } from '.';

const meta: Meta<ModalProps> = {
    title: 'Controls/Modal',
    decorators: [InSpacingDecorator],
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
    },
};

export default meta;

type StoryModalProps = {
    placement: string;
    offsetX: number;
    offsetY: number;
    closeOnEsc: boolean;
    closeOnOverlayClick: boolean;
    withBlur: boolean;
};

const StyledButton = styled(Button)`
    margin-top: 1rem;
    width: 15rem;
`;

const StyledWrapper = styled.div`
    height: 1200px;
`;

const Content = styled.div`
    background: var(--surface-solid-secondary);
    padding: 1rem;
`;

const StyledModal = styled(Modal)`
    && > .${popupClasses.root}, .${modalClasses.overlay} {
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
    const [isOpenA, setIsOpenA] = React.useState(false);
    const [isOpenB, setIsOpenB] = React.useState(false);
    const [isOpenC, setIsOpenC] = React.useState(false);

    return (
        <SSRProvider>
            <StyledWrapper>
                <PopupProvider>
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
                            <Modal
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
                                    <Modal
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

export const ModalDemo: StoryObj<StoryModalProps> = {
    args: {
        placement: 'center',
        withBlur: false,
        closeOnEsc: true,
        closeOnOverlayClick: true,
        offsetX: 0,
        offsetY: 0,
    },
    render: (args) => <StoryModalDemo {...args} />,
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

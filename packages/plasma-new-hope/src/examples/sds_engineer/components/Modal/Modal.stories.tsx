import React, { useState } from 'react';
import { styled } from '@linaria/react';
import type { ComponentProps } from 'react';
import type { StoryObj, Meta } from '@storybook/react';
import { SSRProvider } from '@salutejs/plasma-core';

import { PopupProvider, popupClasses } from '../Popup/Popup';
import { Button } from '../Button/Button';
import { WithTheme } from '../../../_helpers';

import { Modal, modalClasses } from './Modal';

export default {
    title: 'sds_engineer/Modal',
    decorators: [WithTheme],
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
} as Meta;

type StoryModalProps = ComponentProps<typeof Modal> & {
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
    background: var(--plasma-colors-surface-solid02);
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
                        isOpen={isOpenA}
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
                                isOpen={isOpenB}
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
                                        isOpen={isOpenC}
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

import React from 'react';
import styled from 'styled-components';
import { Story, Meta } from '@storybook/react';
import { SSRProvider } from '@salutejs/plasma-core';

import { PopupProvider, popupClasses } from '../Popup/Popup';
import { Button } from '../Button/Button';
import { WithTheme } from '../../../_helpers';

import { Modal, modalClasses } from './Modal';

export default {
    title: 'plasma_b2c/Modal',
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
        },
    },
} as Meta;

type ModalStoryProps = {
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

export const ModalDemo: Story<ModalStoryProps> = ({ placement, offsetX, offsetY, ...rest }) => {
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
                            <div style={{ display: 'flex', flexDirection: 'column' }}>
                                <StyledButton text="Открыть B" onClick={() => setIsOpenB(true)} />
                            </div>
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
                                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                                        <StyledButton text="Открыть C" onClick={() => setIsOpenC(true)} />
                                    </div>
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

ModalDemo.args = {
    placement: 'center',
    withBlur: false,
    closeOnEsc: true,
    closeOnOverlayClick: true,
    offsetX: 0,
    offsetY: 0,
};

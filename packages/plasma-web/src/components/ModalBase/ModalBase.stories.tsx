import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { Story, Meta } from '@storybook/react';
import { surfaceSolid02, darkOverlayBlur, overlaySoft } from '@salutejs/plasma-tokens-web';

import { SSRProvider } from '../SSRProvider';
import { InSpacingDecorator } from '../../helpers';
import { Button } from '../Button';
import { PopupBaseProvider, popupBaseRootClass, usePopupAnimation } from '../PopupBase';

import { ModalBase, modalBaseOverlayClass } from '.';

export default {
    title: 'Controls/ModalBase',
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
} as Meta;

type ModalBaseStoryProps = {
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

// TODO: новый отдельный оверлей #778
const ModalOverlayVariables = createGlobalStyle`
    body {
        --plasma-modal-blur-overlay-color: ${darkOverlayBlur};
        --plasma-modal-overlay-color: ${overlaySoft};
    }
`;

const Content = styled.div`
    background: ${surfaceSolid02};
    padding: 1rem;
`;

const StyledModal = styled(ModalBase)`
    & > .${popupBaseRootClass}, .${modalBaseOverlayClass} {
        animation: ${({ animationInfo }) =>
            /* eslint-disable-next-line no-nested-ternary */
            animationInfo === undefined
                ? 'unset'
                : animationInfo?.endAnimation
                ? 'fadeOut 1s forwards'
                : 'fadeIn 1s forwards'};

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
    }
`;

export const ModalBaseDemo: Story<ModalBaseStoryProps> = ({ placement, offsetX, offsetY, ...rest }) => {
    const [isOpenA, setIsOpenA] = React.useState(false);
    const [isOpenB, setIsOpenB] = React.useState(false);
    const [isOpenC, setIsOpenC] = React.useState(false);

    const animationInfo = usePopupAnimation();

    return (
        <SSRProvider>
            <StyledWrapper>
                <ModalOverlayVariables />
                <PopupBaseProvider>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <StyledButton text="Открыть A" onClick={() => setIsOpenA(true)} />
                    </div>
                    <StyledModal
                        id="modalA"
                        animationInfo={animationInfo}
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
                            <ModalBase
                                id="modalB"
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
                                    <ModalBase
                                        id="modalC"
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

ModalBaseDemo.args = {
    placement: 'center',
    withBlur: false,
    closeOnEsc: true,
    closeOnOverlayClick: true,
    offsetX: 0,
    offsetY: 0,
};

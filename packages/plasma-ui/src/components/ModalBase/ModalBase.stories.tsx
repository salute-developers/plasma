import React, { FC } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { Story, Meta } from '@storybook/react';
import { surfaceSolid02, darkOverlayBlur, overlaySoft } from '@salutejs/plasma-tokens';

import { SSRProvider } from '../SSRProvider';
import { InSpacingDecorator } from '../../helpers';
import { Button } from '../Button';
import { PopupBaseProvider } from '../PopupBase';

import { ModalBase, ModalOverlay, ModalBaseRoot, useModal } from '.';

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

const StyledModalBaseRoot = styled(ModalBaseRoot)`
    animation: ${({ theme, hookInfo }) => (theme.lowPerformance ? 'unset' : (hookInfo.endAnimation ? 'fadeOut 1s forwards' : 'fadeIn 1s forwards'))};

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

const ModalExample: FC<ModalBaseStoryProps> = ({ placement, offsetX, offsetY, withBlur, ...rest }) => {
    const [isOpenA, setIsOpenA] = React.useState(false);
    const [isOpenB, setIsOpenB] = React.useState(false);


    const hookInfoA = useModal({ id: 'modalA', isOpen: isOpenA, offset: [offsetX, offsetY], onClose: () => setIsOpenA(false), placement, withAnimation: true, ...rest });
    const hookInfoB = useModal({ id: 'modalB', isOpen: isOpenB, offset: [offsetX, offsetY], onClose: () => setIsOpenB(false), placement: "left", ...rest });

    return (
        <div>
            <div style={{ display: 'flex', flexDirection: 'column', height: '1000px' }}>
                <StyledButton text="Открыть A" onClick={() => setIsOpenA(true)} />
            </div>
            <ModalBase hookInfo={hookInfoA}>
                <ModalOverlay hookInfo={hookInfoA} withBlur={withBlur} />
                <StyledModalBaseRoot hookInfo={hookInfoA} {...rest}>
                    <Content>
                        <Button onClick={() => setIsOpenA(false)}>Close</Button>
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <StyledButton text="Открыть B" onClick={() => setIsOpenB(true)} />
                        </div>
                        <ModalBase hookInfo={hookInfoB}>
                            <ModalOverlay hookInfo={hookInfoB} withBlur={withBlur} />
                            <ModalBaseRoot hookInfo={hookInfoB} {...rest}>
                                <Content>
                                    <Button onClick={() => setIsOpenB(false)}>Close</Button>
                                    <>Content</>
                                </Content>
                            </ModalBaseRoot>
                        </ModalBase>
                    </Content>
                </StyledModalBaseRoot>
            </ModalBase>
        </div>
    );
};

export const ModalBaseDemo: Story<ModalBaseStoryProps> = (props) => {
    // const [isOpenA, setIsOpenA] = React.useState(false);
    // const [isOpenB, setIsOpenB] = React.useState(false);
    // const [isOpenC, setIsOpenC] = React.useState(false);

    // const info = useModal(
    //     {
    //         id: 'modalA',
    //         isOpen: isOpenA,
    //         placement,
    //         offset: [offsetX, offsetY],
    //         onClose: () => setIsOpenA(false),
    //         ...rest
    //     })

    return (
        <SSRProvider>
            <StyledWrapper>
                <ModalOverlayVariables />
                <PopupBaseProvider>
                    <ModalExample {...props} />
                    {/* <StyledModal
                        id="modalA"
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
                    </StyledModal> */}
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

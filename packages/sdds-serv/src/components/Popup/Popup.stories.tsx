import React from 'react';
import styled from 'styled-components';
import type { StoryObj, Meta } from '@storybook/react';
import { InSpacingDecorator } from '@salutejs/plasma-sb-utils';
import { surfaceSolid03, surfaceSolid02 } from '@salutejs/plasma-tokens';

import { SSRProvider } from '../SSRProvider';
import { Button } from '../Button';

import { Popup, popupClasses, PopupProvider } from '.';
import type { PopupProps } from '.';

const meta: Meta<PopupProps> = {
    title: 'Controls/Popup',
    component: Popup,
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

type StoryPopupProps = { placement: string; offsetX: number; offsetY: number };

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
    background: ${surfaceSolid03};
    position: absolute;

    display: flex;
    align-items: flex-start;
    justify-content: center;
    padding: 1rem;

    top: 0;
    right: 0;
`;

const Content = styled.div`
    background: ${surfaceSolid02};
    padding: 1rem;
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
                        isOpen={isOpenA}
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
                        isOpen={isOpenB}
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

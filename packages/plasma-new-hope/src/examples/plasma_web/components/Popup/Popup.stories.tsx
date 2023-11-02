import React from 'react';
import { styled } from '@linaria/react';
import { Story, Meta } from '@storybook/react';
import { SSRProvider } from '@salutejs/plasma-core';

import { Button } from '../Button/Button';
import { WithTheme } from '../../../_helpers';

import { Popup, popupClasses, PopupProvider } from './Popup';

export default {
    title: 'plasma_web/Popup',
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

type PopupStoryProps = { placement: string; offsetX: number; offsetY: number };

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
    background: var(--plasma-colors-surface-solid03);
    position: absolute;

    display: flex;
    align-items: flex-start;
    justify-content: center;
    padding: 1rem;

    top: 0;
    right: 0;
`;

const Content = styled.div`
    background: var(--plasma-colors-surface-solid02);
    padding: 1rem;
`;

const StyledPopupAnimation = styled(Popup)`
    && > .${popupClasses.root} {
        animation: fadeIn 1s forwards;
    }

    &&.${popupClasses.endAnimation} > .${popupClasses.root} {
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
    && > .${popupClasses.root} {
        opacity: 1;
        transition: opacity 0.5s 0.1s;
    }

    &&.${popupClasses.endTransition} > .${popupClasses.root} {
        opacity: 0;
        transition: opacity 0.5s 0.1s;
    }
`;

export const PopupDemo: Story<PopupStoryProps> = ({ placement, offsetX, offsetY }) => {
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
                        frame={ref}
                        withAnimation
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
                        frame="theme-root"
                        withAnimation
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

PopupDemo.args = {
    placement: 'center',
    offsetX: 0,
    offsetY: 0,
};

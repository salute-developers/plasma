import React from 'react';
import styled, { css } from 'styled-components';
import { Story, Meta } from '@storybook/react';
import { surfaceSolid03, surfaceSolid02 } from '@salutejs/plasma-tokens';

import { SSRProvider } from '../SSRProvider';
import { InSpacingDecorator } from '../../helpers';
import { Button } from '../Button';

import { PopupBase, popupBaseRootClass, PopupBaseProvider, usePopupAnimation } from '.';

export default {
    title: 'Controls/PopupBase',
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

type PopupBaseStoryProps = { placement: string; withAnimation: boolean; offsetX: number; offsetY: number };

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

const StyledPopupAnimation = styled(PopupBase)`
    & > .${popupBaseRootClass} {
        animation: ${({ theme, withAnimation, animationInfo }) =>
            /* eslint-disable-next-line no-nested-ternary */
            theme.lowPerformance || !withAnimation
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

const StyledPopupTransition = styled(PopupBase)`
    & > .${popupBaseRootClass} {
        /* stylelint-disable */
        ${({ animationInfo }) =>
            animationInfo?.endTransition
                ? css`
                      opacity: 0;
                  `
                : css`
                      opacity: 1;
                  `}
        /* stylelint-enable */
        transition: ${({ theme }) => (theme.lowPerformance ? 'unset' : 'opacity 0.5s 0.1s')};
    }
`;

export const PopupBaseDemo: Story<PopupBaseStoryProps> = ({ placement, withAnimation, offsetX, offsetY }) => {
    const [isOpenA, setIsOpenA] = React.useState(false);
    const [isOpenB, setIsOpenB] = React.useState(false);

    const ref = React.useRef<HTMLDivElement>(null);

    const animationInfoA = usePopupAnimation();
    const animationInfoB = usePopupAnimation();

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
                        animationInfo={animationInfoA}
                        withAnimation={withAnimation}
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
                        animationInfo={animationInfoB}
                        withAnimation={withAnimation}
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
                </PopupBaseProvider>
            </StyledWrapper>
        </SSRProvider>
    );
};

PopupBaseDemo.args = {
    placement: 'center',
    withAnimation: true,
    offsetX: 0,
    offsetY: 0,
};

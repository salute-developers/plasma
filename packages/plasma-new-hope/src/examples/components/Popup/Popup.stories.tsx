import React, { useState, useRef } from 'react';
import type { ComponentProps } from 'react';
import { styled } from '@linaria/react';
import type { StoryObj, Meta } from '@storybook/react';
import { SSRProvider } from '@salutejs/plasma-core';

import { Button } from '../Button/Button';
import { WithTheme } from '../../_helpers';

import { Popup, popupClasses, PopupProvider } from './Popup';

const meta: Meta<typeof Popup> = {
    title: 'Overlay/Popup',
    decorators: [WithTheme],
    parameters: {
        docs: { story: { inline: false, iframeHeight: '30rem' } },
    },
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
    },
};

export default meta;

type StoryPopupProps = ComponentProps<typeof Popup> & { placement: string; offsetX: number; offsetY: number };

const StyledButton = styled(Button)`
    margin-top: 1rem;
    width: 15rem;
`;

const StyledWrapper = styled.div`
    height: 100vh;
`;

const OtherContent = styled.div`
    width: 50%;
    height: 50%;
    background: var(--surface-solid-tertiary);
    position: absolute;

    display: flex;
    align-items: flex-start;
    justify-content: center;
    padding: 1rem;

    top: 10rem;
    right: 0;
`;

const Content = styled.div`
    background: var(--surface-solid-secondary);
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

const StoryPopupDemo = ({ placement, offsetX, offsetY }: StoryPopupProps) => {
    const [isOpenA, setIsOpenA] = useState(false);
    const [isOpenB, setIsOpenB] = useState(false);

    const ref = useRef<HTMLDivElement>(null);

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
                        opened={isOpenA}
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
                        opened={isOpenB}
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
    render: (args) => <StoryPopupDemo {...args} />,
};

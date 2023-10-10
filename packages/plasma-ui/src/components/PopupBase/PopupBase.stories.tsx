import React, { FC } from 'react';
import styled from 'styled-components';
import { Story, Meta } from '@storybook/react';
import { surfaceSolid03, surfaceSolid02 } from '@salutejs/plasma-tokens';

import { SSRProvider } from '../SSRProvider';
import { InSpacingDecorator } from '../../helpers';
import { Button } from '../Button';

import { PopupBase, PopupBaseProvider, PopupBaseRoot, usePopup } from '.';

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

type PopupBaseStoryProps = { placement: string; offsetX: number; offsetY: number };

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

const StyledModalBaseRoot = styled(PopupBaseRoot)`
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

const PopupExample: FC<PopupBaseStoryProps> = ({ offsetX, offsetY, ...rest }) => {
    const [isOpenA, setIsOpenA] = React.useState(false);
    const [isOpenB, setIsOpenB] = React.useState(false);

    const ref = React.useRef<HTMLDivElement>(null);
    const hookInfoA = usePopup({ id: 'popupA', isOpen: isOpenA, frame: "document", offset: [offsetX, offsetY], withAnimation: true, ...rest });
    const hookInfoB = usePopup({ id: 'popupB', isOpen: isOpenB, frame: ref, offset: [offsetX, offsetY], ...rest });

    return (
        <div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                {/* <StyledButton text="Открыть во Frame" onClick={() => setIsOpenB(true)} /> */}
                <StyledButton text="Открыть в document" onClick={() => setIsOpenA(true)} />
            </div>
            <PopupBase hookInfo={hookInfoA}>
                <StyledModalBaseRoot hookInfo={hookInfoA} {...rest}>
                    <Content>
                        <Button onClick={() => setIsOpenA(false)}>Close</Button>
                        <>Content</>
                    </Content>
                </StyledModalBaseRoot>
            </PopupBase>
            {/* <OtherContent ref={ref}>
                <>Frame</>
            </OtherContent>
            <PopupBase hookInfo={hookInfoB}>
                <PopupBaseRoot hookInfo={hookInfoB} {...rest}>
                    <Content>
                        <Button onClick={() => setIsOpenB(false)}>Close</Button>
                        <>Content</>
                    </Content>
                </PopupBaseRoot>
            </PopupBase> */}
        </div>
    );
};

export const PopupBaseDemo: Story<PopupBaseStoryProps> = (props) => {
    return (
        <SSRProvider>
            <StyledWrapper>
                <PopupBaseProvider>
                    <PopupExample {...props} />
                </PopupBaseProvider>
            </StyledWrapper>
        </SSRProvider>
    );
};

PopupBaseDemo.args = {
    placement: 'center',
    offsetX: 0,
    offsetY: 0,
};

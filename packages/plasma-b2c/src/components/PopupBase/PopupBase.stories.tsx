import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Story, Meta } from '@storybook/react';
import { InSpacingDecorator } from '@salutejs/plasma-sb-utils';
import { surfaceSolid03 } from '@salutejs/plasma-tokens-web';

import { SSRProvider } from '../SSRProvider';
import { Button } from '../Button';

import { PopupBase } from '.';

export default {
    title: 'Controls/PopupBase',
    decorators: [InSpacingDecorator],
    argTypes: {
        position: {
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

type PopupBaseStoryProps = { position: string; offsetX: number; offsetY: number };

const showAnimation = keyframes`
    0% {
        transform: translateX(100%);
        opacity: 0;
    }

    100% {
        transform: translateX(0);
        opacity: 1;
    }
`;
const hideAnimation = keyframes`
    0% {
        transform: translateX(0);
        opacity: 1;
    }

    100% {
        transform: translateX(100%);
        opacity: 0;
    }
`;

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

export const PopupBaseDemo: Story<PopupBaseStoryProps> = ({ position, offsetX, offsetY }) => {
    const [isOpenA, setIsOpenA] = React.useState(false);
    const [isOpenB, setIsOpenB] = React.useState(false);

    const ref = React.useRef<HTMLDivElement>(null);

    return (
        <SSRProvider>
            <StyledWrapper>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <StyledButton text="Открыть во Frame" onClick={() => setIsOpenA(true)} />
                    <StyledButton text="Открыть в document" onClick={() => setIsOpenB(true)} />
                </div>
                <PopupBase frame={ref} isOpen={isOpenA} position={position} offset={[offsetX, offsetY]}>
                    <div style={{ background: 'white', padding: '1rem' }}>
                        <Button onClick={() => setIsOpenA(false)}>Close</Button>
                        <>Content</>
                    </div>
                </PopupBase>
                <OtherContent ref={ref}>
                    <>Frame</>
                </OtherContent>
                <PopupBase frame="document" isOpen={isOpenB} position={position} offset={[offsetX, offsetY]}>
                    <div style={{ background: 'white', padding: '1rem' }}>
                        <Button onClick={() => setIsOpenB(false)}>Close</Button>
                        <>Content</>
                    </div>
                </PopupBase>
            </StyledWrapper>
        </SSRProvider>
    );
};

PopupBaseDemo.args = {
    position: 'center',
    offsetX: 0,
    offsetY: 0,
};

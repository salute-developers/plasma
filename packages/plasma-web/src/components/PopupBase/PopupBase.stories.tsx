import React from 'react';
import styled from 'styled-components';
import { Story, Meta } from '@storybook/react';
import { surfaceSolid03, surfaceSolid02 } from '@salutejs/plasma-tokens-web';

import { SSRProvider } from '../SSRProvider';
import { InSpacingDecorator } from '../../helpers';
import { Button } from '../Button';

import { PopupBase, PopupBaseProvider } from '.';

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

export const PopupBaseDemo: Story<PopupBaseStoryProps> = ({ placement, offsetX, offsetY }) => {
    const [isOpenA, setIsOpenA] = React.useState(false);
    const [isOpenB, setIsOpenB] = React.useState(false);

    const ref = React.useRef<HTMLDivElement>(null);

    return (
        <SSRProvider>
            <StyledWrapper>
                <PopupBaseProvider>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <StyledButton text="Открыть во Frame" onClick={() => setIsOpenA(true)} />
                        <StyledButton text="Открыть в document" onClick={() => setIsOpenB(true)} />
                    </div>
                    <PopupBase frame={ref} isOpen={isOpenA} placement={placement} offset={[offsetX, offsetY]}>
                        <Content>
                            <Button onClick={() => setIsOpenA(false)}>Close</Button>
                            <>Content</>
                        </Content>
                    </PopupBase>
                    <OtherContent ref={ref}>
                        <>Frame</>
                    </OtherContent>
                    <PopupBase frame="document" isOpen={isOpenB} placement={placement} offset={[offsetX, offsetY]}>
                        <Content>
                            <Button onClick={() => setIsOpenB(false)}>Close</Button>
                            <>Content</>
                        </Content>
                    </PopupBase>
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

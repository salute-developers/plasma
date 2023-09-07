import React from 'react';
import styled from 'styled-components';
import { Story, Meta } from '@storybook/react';

import { SSRProvider } from '../SSRProvider';
import { InSpacingDecorator } from '../../helpers';
import { Button } from '../Button';
import { Popup } from '../Popup';

export default {
    title: 'Controls/Popup',
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

type PopupStoryProps = { position: string };

const StyledButton = styled(Button)`
    margin-right: 1rem;
`;

const StyledWrapper = styled.div`
    height: 1200px;
`;

export const PopupDemo: Story<PopupStoryProps> = ({ position }) => {
    const [isOpenA, setIsOpenA] = React.useState(false);

    return (
        <SSRProvider>
            <StyledWrapper>
                <StyledButton text="Открыть окно A" onClick={() => setIsOpenA(true)} />
                <Popup isOpen={isOpenA} position={position}>
                    <div style={{ background: 'white', padding: '1rem' }}>
                        <Button onClick={() => setIsOpenA(false)}>Close</Button>
                        Content
                    </div>
                </Popup>
            </StyledWrapper>
        </SSRProvider>
    );
};

PopupDemo.args = {
    position: 'center',
};

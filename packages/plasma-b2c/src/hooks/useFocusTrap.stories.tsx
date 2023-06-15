import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Story, Meta } from '@storybook/react';
import { InSpacingDecorator } from '@salutejs/plasma-sb-utils';

import { SSRProvider } from '../components/SSRProvider';
import { Button } from '../components/Button';

import { useFocusTrap } from '.';

export default {
    title: 'Hooks/useFocusTrap',
    decorators: [InSpacingDecorator],
} as Meta;

const StyledWrapper = styled.div`
    margin: 1rem 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
`;

export const Default: Story = () => {
    const ref = useFocusTrap(true, '#focus-first');

    const [showButtons, setShowButtons] = useState(false);

    return (
        <SSRProvider>
            <>
                <Button onClick={() => setShowButtons(true)}>Показать кнопки</Button>
                {showButtons && (
                    <StyledWrapper ref={ref}>
                        <>
                            Hidden кнопка
                            <Button style={{ visibility: 'hidden' }}>Btn</Button>
                        </>
                        <Button>Кнопка</Button>
                        <Button id="focus-first">Первая на фокус</Button>
                        <>
                            Display none кнопка
                            <Button style={{ display: 'none' }}>Not displayed</Button>
                        </>
                        <Button onClick={() => setShowButtons(false)}>Закрыть</Button>
                        <>
                            Zero opacity кнопка
                            <Button style={{ opacity: '0' }}>Btn</Button>
                        </>
                    </StyledWrapper>
                )}
            </>
        </SSRProvider>
    );
};

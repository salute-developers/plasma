import React, { useState } from 'react';
import styled from 'styled-components';
import { Story, Meta } from '@storybook/react';

import { SSRProvider } from '../components/SSRProvider';
import { InSpacingDecorator } from '../helpers';
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
    const ref2 = useFocusTrap(true);

    const [showButtons, setShowButtons] = useState(false);
    const [showButtons2, setShowButtons2] = useState(false);

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
                        <Button onClick={() => setShowButtons2(true)}>Кнопка</Button>
                        {showButtons2 && (
                            <StyledWrapper ref={ref2}>
                                <>
                                    Hidden кнопка
                                    <Button style={{ visibility: 'hidden' }}>Btn</Button>
                                </>
                                <Button>Кнопка</Button>
                                <Button>Первая на фокус</Button>
                                <>
                                    Display none кнопка
                                    <Button style={{ display: 'none' }}>Not displayed</Button>
                                </>
                                <Button onClick={() => setShowButtons2(false)}>Закрыть</Button>
                                <>
                                    Zero opacity кнопка
                                    <Button style={{ opacity: '0' }}>Btn</Button>
                                </>
                            </StyledWrapper>
                        )}
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

import React, { useState, useRef, useEffect } from 'react';
import styled, { css } from 'styled-components';
import type { StoryObj, Meta } from '@storybook/react';
import { surfaceLiquid01 } from '@salutejs/plasma-core';

import { InSpacingDecorator, disableProps } from '../../helpers';
import { Button } from '../Button';
import { Body1 } from '../Typography';

import { Spinner } from '.';
import type { SpinnerProps } from '.';

const meta: Meta<SpinnerProps> = {
    title: 'Content/Spinner',
    component: Spinner,
    decorators: [InSpacingDecorator],
    argTypes: {
        size: {
            options: [8, 16, 32, 64, 96, 128],
            control: {
                type: 'select',
            },
        },
        ...disableProps(['color', 'theme', 'as', 'forwardedAs']),
    },
};

export default meta;

export const Default: StoryObj<SpinnerProps> = {
    args: {
        size: 32,
    },
};

const StyledWrapper = styled.div<{ $loading?: boolean }>`
    &::after {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;

        content: '';
        display: none;
        background: ${surfaceLiquid01};
    }

    ${({ $loading }) =>
        $loading &&
        css`
            &::after {
                display: block;
            }
        `}
`;

const StyledSpinner = styled(Spinner)`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
`;

const StoryLive = () => {
    const [loading, setLoading] = useState(false);
    const timeoutRef = useRef(null);

    useEffect(() => {
        if (loading) {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }

            timeoutRef.current = setTimeout(() => setLoading(false), 10000);
        }
    }, [loading]);

    return (
        <StyledWrapper $loading={loading}>
            <Body1 id="example-live-text" mb="8x">
                При нажатии кнопки приложение будет на 10 секунд переведено в состояние загрузки, отображая при этом
                индикатор Spinner, который не может быть сфокусирован и не доступен для взаимодействия. Через 10 секунд
                кнопку снова станет возможно нажать.
            </Body1>
            <Button
                text={loading ? 'Загрузка' : 'Нажмите'}
                onClick={() => setLoading(true)}
                aria-busy={loading}
                aria-describedby="example-live-text"
                disabled={loading}
            />
            {loading && <StyledSpinner size={32} />}
        </StyledWrapper>
    );
};

export const Live: StoryObj<SpinnerProps> = {
    render: () => <StoryLive />,
};

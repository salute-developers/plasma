import React, { useState, useRef, useEffect, ComponentProps } from 'react';
import styled, { css } from 'styled-components';
import type { StoryObj, Meta } from '@storybook/react';

import { InSpacingDecorator, disableProps } from '../../helpers';
import { Button } from '../Button';
import { BodyL } from '../Typography';

import { Spinner } from '.';

const meta: Meta<typeof Spinner> = {
    title: 'Data Display/Spinner',
    decorators: [InSpacingDecorator],
    component: Spinner,
    argTypes: {
        size: {
            options: [8, 16, 32, 64, 96, 128],
            control: {
                type: 'select',
            },
        },
        view: {
            options: ['default', 'secondary', 'tertiary', 'paragraph', 'accent', 'positive', 'warning', 'negative'],
            control: {
                type: 'select',
            },
        },
        ...disableProps(['color', 'theme', 'as', 'forwardedAs']),
    },
};

export default meta;

type StorySpinnerProps = ComponentProps<typeof Spinner>;

export const Default: StoryObj<StorySpinnerProps> = {
    args: {
        size: 32,
        view: 'default',
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
        background: var(--surface-transparent-primary);
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

const StoryLive = (props: StorySpinnerProps) => {
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
            <BodyL id="example-live-text" mb="8x">
                При нажатии кнопки приложение будет на 10 секунд переведено в состояние загрузки, отображая при этом
                индикатор Spinner, который не может быть сфокусирован и не доступен для взаимодействия. Через 10 секунд
                кнопку снова станет возможно нажать.
            </BodyL>
            <Button
                text={loading ? 'Загрузка' : 'Нажмите'}
                onClick={() => setLoading(true)}
                aria-busy={loading}
                aria-describedby="example-live-text"
                disabled={loading}
            />
            {loading && <StyledSpinner {...props} />}
        </StyledWrapper>
    );
};

export const Live: StoryObj<StorySpinnerProps> = {
    render: (args) => <StoryLive {...args} />,
};

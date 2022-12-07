import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { TextM, Tooltip } from '@salutejs/plasma-b2c';

import { getHEXA, getRGBA } from '../utils';
import type { TokenValue } from '../types';

const StyledToken = styled(TextM)<{ enabled?: boolean }>`
    font-family: inherit;

    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 56rem;

    margin: 1rem 0;
    margin-left: 2rem;

    ${({ enabled }) =>
        enabled === false &&
        css`
            opacity: 0.28;
        `}
`;

const TokenName = styled.span<{ disable?: boolean }>`
    width: 18rem;

    cursor: default;

    ${({ disable }) =>
        disable &&
        css`
            text-decoration: line-through;
        `}
`;

const TokenColorPreview = styled.div<{ value: string }>`
    width: 1rem;
    height: 1rem;
    border-radius: 50%;

    ${({ value }) =>
        value &&
        css`
            background: ${value};
        `}
`;

const TokenHEXAValue = styled.div`
    width: 7rem;
`;

const TokenRGBAValue = styled.div`
    width: 20rem;
`;

const hasOrigin = (values: string | Record<string, any>): values is Record<string, any> =>
    typeof values === 'object' && 'origin' in values;

const isGradient = (value: string) => value.includes('gradient');

interface TokenProps {
    name: string;
    data: TokenValue;
}

export const Token = ({ name, data }: TokenProps) => {
    const { value, comment, enabled } = data;

    const [visible, setVisible] = useState(false);

    const newValue = (!hasOrigin(value) && isGradient(value)) || hasOrigin(value) ? '#FFFFFFFF' : value;

    const onMouseEnter = () => setVisible(true);

    const onMouseLeave = () => setVisible(false);

    return (
        <StyledToken enabled={enabled}>
            <Tooltip placement="top-start" isVisible={Boolean(comment) && visible} arrow text={comment || ''} animated>
                <TokenName disable={!enabled} onMouseLeave={onMouseLeave} onMouseEnter={onMouseEnter}>
                    {name}
                </TokenName>
            </Tooltip>
            <TokenColorPreview value={hasOrigin(value) ? value.origin : value} />
            <TokenHEXAValue>{getHEXA(newValue)}</TokenHEXAValue>
            <TokenRGBAValue>{getRGBA(newValue)}</TokenRGBAValue>
        </StyledToken>
    );
};

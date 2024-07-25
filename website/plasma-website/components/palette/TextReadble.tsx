import React from 'react';
import styled from 'styled-components';
import { ContrastRatioChecker } from 'contrast-ratio-checker';
import { IconAttentionCircleOutline } from '@salutejs/plasma-icons';

const justify: { [key: string]: string } = {
    left: 'flex-end',
    right: 'flex-start',
};

const columnDirection: { [key: string]: string } = {
    top: 'column',
    bottom: 'column-reverse',
};

const rowDirection: { [key: string]: string } = {
    left: 'row',
    right: 'row-reverse',
};

const text = {
    AAA: 'Отлично',
    AA: 'Нормально',
    Poor: 'Плохо',
};

const TextReadbleWrapper = styled.div<{ alignX: string }>`
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: ${({ alignX }) => justify?.[alignX]};
    transition: 400ms;
`;

const TextReadbleTextWrapper = styled.div<{ alignX: string; alignY: string }>`
    display: flex;
    flex-direction: ${({ alignY }) => columnDirection?.[alignY]};
    align-items: ${({ alignX }) => justify?.[alignX]};
    gap: 0.75rem;
    transition: 100ms;
`;

const TextReadbleTextSmall = styled.div<{ alignX: string; score: string }>`
    font-size: 0.875rem;
    font-weight: var(--plasma-typo-body1-font-weight);
    display: flex;
    align-items: center;
    flex-direction: ${({ alignX }) => rowDirection[alignX]};
    gap: 0.5rem;
    cursor: default;
    transition: 0.15s;
    font-family: var(--plasma-typo-headline1-font-family);
    height: 1rem;

    &:hover {
        color: ${({ score }) => (score === 'Poor' ? 'red' : 'inhert')};
        transition: 0.15s;
    }
`;
const TextReadbleTextLarge = styled.div<{ alignX: string; score: string }>`
    height: 2rem;
    font-size: 2rem;
    font-weight: var(--plasma-typo-body1-font-weight);
    display: flex;
    align-items: center;
    gap: 0.5rem;
    flex-direction: ${({ alignX }) => rowDirection[alignX]};
    cursor: default;
    transition: 0.15s;
    font-family: var(--plasma-typo-headline1-font-family);

    &:hover {
        color: ${({ score }) => (score === 'Poor' ? 'red' : 'inhert')};
        transition: 0.15s;
    }
`;

const getWCAGIndex = (ratio: number, type: 'small' | 'lagre') => {
    if (ratio > 7) {
        return 'AAA';
    }
    if (ratio > 4.5) {
        return type === 'small' ? 'AA' : 'AAA';
    }
    if (ratio > 3 && type === 'lagre') {
        return 'AA';
    }
    return 'Poor';
};

export const TextReadble: React.FC<{
    background: string;
    color: string;
    alignX: 'left' | 'right';
    alignY: 'top' | 'bottom';
}> = ({ background, color, alignX, alignY }) => {
    const checker = new ContrastRatioChecker();

    const ratio = Math.round(checker.getContrastRatioByHex(background, color) * 100) / 100;

    const small = getWCAGIndex(ratio, 'small');
    const large = getWCAGIndex(ratio, 'lagre');

    const smallText = [text[small], small !== 'Poor' ? small : '', ratio.toFixed(2)];
    const lagreText = [text[large], large !== 'Poor' ? large : '', ratio.toFixed(2)];

    return (
        <TextReadbleWrapper alignX={alignX} style={{ background }}>
            <TextReadbleTextWrapper alignX={alignX} alignY={alignY} style={{ color }}>
                <TextReadbleTextLarge score={large} alignX={alignX}>
                    {large === 'Poor' && <IconAttentionCircleOutline color="red" />}
                    {alignX === 'right' ? lagreText.reverse().join(' ') : lagreText.join(' ')}
                </TextReadbleTextLarge>
                <TextReadbleTextSmall score={small} alignX={alignX}>
                    {small === 'Poor' && <IconAttentionCircleOutline color="red" size="xs" />}
                    {alignX === 'right' ? smallText.reverse().join(' ') : smallText.join(' ')}
                </TextReadbleTextSmall>
            </TextReadbleTextWrapper>
        </TextReadbleWrapper>
    );
};

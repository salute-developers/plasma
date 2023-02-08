import styled, { css } from 'styled-components';
import { applyRoundness, Card as CardBase, CardContent } from '@salutejs/plasma-core';
import type { CardProps as CardPropsBase, RoundnessProps } from '@salutejs/plasma-core';

export { StyledCard } from '@salutejs/plasma-core';

const DEFAULT_ROUNDNESS = 20;

interface BackgroundProps {
    /**
     * Цвет подложки
     */
    background?: string;
}

export type CardProps = CardPropsBase & RoundnessProps & BackgroundProps;

/**
 * Контейнер со скругленными углами с возможностью фокусировки на нем.
 */
export const Card = styled(CardBase)<CardProps>`
    box-shadow: none;
    background: transparent;

    img {
        ${({ roundness = DEFAULT_ROUNDNESS }) =>
            roundness &&
            css`
                ${applyRoundness({ roundness })};
            `}
    }

    ${({ background }) =>
        background &&
        css`
            background: ${background};

            ${CardContent} {
                padding: 1.25rem;
            }

            img {
                border-bottom-left-radius: 0;
                border-bottom-right-radius: 0;
            }
        `}
`;

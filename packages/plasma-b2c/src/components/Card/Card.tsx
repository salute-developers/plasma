import styled, { css } from 'styled-components';
import { plasmaCore } from '@salutejs/plasma-new-hope/styled-components';

const { applyRoundness, Card: CardBase, CardContent, StyledCard } = plasmaCore;
type CardPropsBase = plasmaCore.CardProps;
type RoundnessProps = plasmaCore.RoundnessProps;

export { StyledCard };

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

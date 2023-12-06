import { css } from '@linaria/core';
import { styled } from '@linaria/react';

import { applyEllipsis } from '../../mixins';
import { Pin, convertRoundnessMatrix } from '../../utils';

import { classes, tokens } from './tokens';

export const base = css`
    width: fit-content;

    &.${String(classes.buttonStretch)} {
        width: 100%;

        .${String(classes.buttonRoot)} {
            width: 100%;
        }
    }
`;

export const StyledButton = styled.button<{ pin?: Pin }>`
    position: relative;
    display: inline-flex;
    align-items: center;
    box-sizing: border-box;
    justify-content: center;

    appearance: none;
    border: none;
    cursor: pointer;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

    --plasma_private-btn-br: ${({ pin }) =>
        pin
            ? String(convertRoundnessMatrix(pin, `var(${tokens.buttonRadius})`, `var(${tokens.buttonHeight})`))
            : `var(${tokens.buttonRadius}, calc(var(${tokens.buttonHeight}) / 4))`};
    border-radius: var(--plasma_private-btn-br);

    &:before {
        border-radius: calc(var(--plasma_private-btn-br) + var(--plasma_private-btn-outline-size));
    }

    &.${String(classes.buttonSquare)} {
        width: var(${tokens.buttonHeight});
        padding: 0;
    }
`;

// TODO: PLASMA-2164
// WHY do we need applyEllipsis ??
// Если внутри кнопки тескт и на нее решили повесить square пропс
export const ButtonText = styled.span`
    :not(:last-child) {
        margin-right: 0.375rem;
    }

    :not(:first-child) {
        margin-left: 0.375rem;
    }

    ${applyEllipsis()}
`;

// TODO: #720
export const LoadWrap = styled.div<{ isLoading?: boolean }>`
    opacity: ${(props) => (props.isLoading ? '0' : '1')};
    display: flex;
    width: 100%;
    align-items: inherit;
    justify-content: inherit;
`;

export const Loader = styled.div`
    position: absolute;
`;

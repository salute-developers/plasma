import { styled } from '@linaria/react';

import { addFocus } from '../../../../mixins';
import { tokens } from '../../Slider.tokens';

export const ThumbBase = styled.div<{ disabled?: boolean }>`
    width: var(--thumb-size);
    height: var(--thumb-size);
    min-width: var(--thumb-size);
    min-height: var(--thumb-size);

    position: relative;
    border-radius: 50%;
    box-sizing: border-box;
    background: var(${tokens.thumbBackgroundColor});
    margin: 0.0625rem;
    transition: border-color 0.1s ease-in-out;

    &:after {
        background: var(${tokens.thumbBorderColor});
        margin: -0.0625rem;
        content: '';
        position: absolute;
        inset: 0;
        z-index: -1;
        border-radius: inherit;
    }

    &:not([disabled]):hover:after,
    &:not([disabled]):active:after {
        background: var(${tokens.thumbFocusBorderColor});
    }

    &[disabled] {
        cursor: not-allowed;
    }

    &:focus {
        outline: none;
    }

    ${addFocus({
        outlineOffset: '0.0625rem',
        outlineSize: '0.125rem',
        outlineRadius: '50%',
        outlineColor: `var(${tokens.thumbFocusBorderColor})`,
    })}
`;

import { styled } from '@linaria/react';

import { tokens, classes } from '../../Select.tokens';
import { component } from '../../../../engines';
import { spinnerConfig, spinnerTokens } from '../../../Spinner';
import type { SelectProps } from '../../Select.types';

const Spinner = component(spinnerConfig);

export const StyledSpinner = styled(Spinner)`
    ${spinnerTokens.color}: var(--text-primary);
    ${spinnerTokens.size}: var(${tokens.spinnerSize});
`;

export const Wrapper = styled.div<{ variant: SelectProps['variant'] }>`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.25rem;
    height: var(${tokens.itemHeight});
    padding: ${({ variant }) => `var(${variant === 'tight' ? tokens.itemPaddingTight : tokens.itemPadding})`};
    font-family: var(${tokens.fontFamily});
    font-size: var(${tokens.fontSize});
    font-style: var(${tokens.fontStyle});
    font-weight: var(${tokens.fontWeight});
    letter-spacing: var(${tokens.fontLetterSpacing});
    line-height: var(${tokens.fontLineHeight});
    user-select: none;

    & .${classes.selectSpinner} {
        ${spinnerTokens.size}: ${({ variant }) =>
            `var(${variant === 'tight' ? tokens.spinnerSizeTight : tokens.spinnerSize})`};
    }
`;

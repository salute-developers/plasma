import { styled } from '@linaria/react';

import { ComboboxProps } from '../../Combobox.types';
import { tokens, constants } from '../../Combobox.tokens';

export const Wrapper = styled.div<{ variant: ComboboxProps['variant']; sticky?: boolean }>`
    position: ${({ sticky }) => (sticky ? 'sticky' : 'static')};
    z-index: 10;
    top: 0;
    display: flex;
    flex-direction: column;
    background: var(${constants.background});
    margin-bottom: ${({ variant }) =>
        `var(${variant === 'tight' ? tokens.dividerMarginBottomTight : tokens.dividerMarginBottom})`};
    border-top-left-radius: calc(var(${tokens.borderRadius}) - 0.125rem - var(${tokens.dropdownBorderWidth}, 0rem));
    border-top-right-radius: calc(var(${tokens.borderRadius}) - 0.125rem - var(${tokens.dropdownBorderWidth}, 0rem));
`;

export const DividerWrapper = styled.div`
    background: var(${constants.background});
`;

export const Divider = styled.div<{ variant: ComboboxProps['variant'] }>`
    height: 0.0625rem;
    margin-top: ${({ variant }) =>
        `var(${variant === 'tight' ? tokens.dividerMarginTopTight : tokens.dividerMarginTop})`};
    margin-right: var(${tokens.dividerMarginRight});
    margin-left: var(${tokens.dividerMarginLeft});
    background: var(${tokens.dividerColor});
`;

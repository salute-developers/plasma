import { styled } from '@linaria/react';

import { component } from '../../engines';
import { popoverClasses, popoverConfig } from '../Popover';

import { tokens } from './Combobox.tokens';

export const StyledRoot = styled.div`
    width: 100%;
    position: relative;
`;

export const StyledCombobox = styled.div`
    box-sizing: border-box;

    background: var(${tokens.background});
    box-shadow: var(${tokens.boxShadow});

    border-radius: var(${tokens.borderRadius});
    width: var(${tokens.width});
    height: var(${tokens.height});

    padding: var(${tokens.paddingTop}) var(${tokens.paddingRight}) var(${tokens.paddingBottom})
        var(${tokens.paddingLeft});
`;

// issue #823
const Popover = component(popoverConfig);

export const StyledPopover = styled(Popover)<{ selectWidth?: number }>`
    display: block;

    .${String(popoverClasses.root)}, .${String(popoverClasses.target)} {
        width: ${({ usePortal, selectWidth }) => (usePortal ? `${selectWidth}px` : '100%')};
    }
`;

export const ComboboxItemNotFound = styled.div`
    text-align: center;
    padding: 0.5rem;

    font-family: var(${tokens.itemFontFamily});
    font-size: var(${tokens.itemFontSize});
    font-style: var(${tokens.itemFontStyle});
    font-weight: var(${tokens.itemFontWeightBold});
    letter-spacing: var(${tokens.itemFontLetterSpacing});
    line-height: var(${tokens.itemFontLineHeight});
`;

export const StyledNativeSelect = styled.select`
    display: none;
    appearance: none;
    -moz-appearance: none;
    -webkit-appearance: none;
    background: transparent;
    color: transparent;
    border: none;
    outline: none;
    opacity: 0;
    position: absolute;
    inset: 0;
`;

import { styled } from '@linaria/react';

import { component } from '../../engines';
import { popoverClasses, popoverConfig } from '../Popover';

import { tokens, classes } from './Select.tokens';

const { nativeSelectVisible, selectTarget } = classes;

export const StyledRoot = styled.div`
    width: 100%;
    position: relative;

    .${String(nativeSelectVisible)} {
        display: block;
    }
`;

export const StyledSelect = styled.div`
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

export const StyledPopover = styled(Popover)`
    display: block;

    .${String(popoverClasses.root)}, .${String(popoverClasses.target)} {
        width: 100%;
    }
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
    z-index: 1;
    cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
    font-size: 1rem;

    &:hover:not(:disabled) + .${String(popoverClasses.wrapper)} .${String(selectTarget)} {
        background: var(${tokens.targetBackgroundColorHover});
    }
`;

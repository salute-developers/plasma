import { css } from '@linaria/core';
import { styled } from '@linaria/react';

export const StyledRoot = css`
    position: relative;
    box-sizing: border-box;
    display: inline-flex;
`;

export const StyledArrow = styled.div``;

export const StyledPopover = styled.div`
    position: absolute;
    z-index: 1;

    &[data-popper-placement^='top'] > #popover-arrow {
        bottom: -0.25rem;
    }

    &[data-popper-placement^='bottom'] > #popover-arrow {
        top: -0.25rem;
    }

    &[data-popper-placement^='left'] > #popover-arrow {
        right: -0.25rem;
    }

    &[data-popper-placement^='right'] > #popover-arrow {
        left: -0.25rem;
    }
`;

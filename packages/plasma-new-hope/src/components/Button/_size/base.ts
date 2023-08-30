// TODO: switch engine
// import { css } from '../../../engines/styled-components';
// import { css } from '../../../engines/linaria';
import { css } from '@linaria/core';

export const base = css`

    height: var(--plasma-button-height);
    /* TODO: move these calc's to plasma-mapping | ds-generator and add Math.round() */
    padding: 0 var(--plasma-button-padding, calc( var(--plasma-button-height) * 1.618  / 4) );
    --btn-br: var(--plasma-button-radius, calc(var(--plasma-button-height) / 4) );
    border-radius: var(--btn-br);
    
    font-family: var(--plasma-button-font-family);
    font-size: var(--plasma-button-font-size);
    font-style: var(--plasma-button-font-style);
    font-weight: var(--plasma-button-font-weight);
    letter-spacing: var(--plasma-button-letter-spacing);
    line-height: var(--plasma-button-line-height);
    

    ::before {
        /* border-r + outline-size */
        border-radius: calc( var(--btn-br) + 0.0625rem );
    }
`;

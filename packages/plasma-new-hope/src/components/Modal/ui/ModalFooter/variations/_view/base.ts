import { css } from 'styled-components';

import { tokens } from '../../../../Modal.tokens';

export const base = css`
    display: flex;
    flex-direction: row;
    align-items: center;
    box-sizing: border-box;
    width: 100%;

    gap: var(${tokens.modalFooterGap});
    padding: var(${tokens.modalFooterPadding});
`;

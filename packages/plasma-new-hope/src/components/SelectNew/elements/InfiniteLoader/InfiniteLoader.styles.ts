import { styled } from '@linaria/react';

import { tokens } from '../../SelectNew.tokens';
import { component } from '../../../../engines';
import { spinnerConfig, spinnerTokens } from '../../../Spinner';

const Spinner = component(spinnerConfig);

export const StyledSpinner = styled(Spinner)`
    ${spinnerTokens.color}: var(--text-primary);
    ${spinnerTokens.size}: var(${tokens.spinnerSize});
`;

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
    height: var(${tokens.itemHeight});
    padding: var(${tokens.itemPadding});
    font-family: var(${tokens.fontFamily});
    font-size: var(${tokens.fontSize});
    font-style: var(${tokens.fontStyle});
    font-weight: var(${tokens.fontWeight});
    letter-spacing: var(${tokens.fontLetterSpacing});
    line-height: var(${tokens.fontLineHeight});
    user-select: none;
`;

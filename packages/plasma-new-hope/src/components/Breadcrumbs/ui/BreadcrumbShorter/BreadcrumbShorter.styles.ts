import styled from 'styled-components';
import { addFocus } from 'src/mixins';

import { tokens } from '../../Breadcrumbs.tokens';

export const StyledRoot = styled.div``;
export const StyledShorter = styled.div`
    cursor: pointer;
    outline: none;
    ${addFocus({
        outlineOffset: '0.125rem',
        outlineSize: '0.125rem',
        outlineRadius: '0.375rem',
        outlineColor: `var(${tokens.breadcrumbsFocusOutlineColor})`,
    })}
`;
export const StyledHidden = styled.div`
    display: flex;
    align-items: center;
    gap: var(${tokens.breadcrumbsGap});
`;

import styled from 'styled-components';
import { Input as InputCore } from '@salutejs/plasma-core';

import { applyInputStyles } from '../Field';

export const Input = styled(InputCore)`
    ${applyInputStyles};

    height: var(--height);

    font-size: var(--font-size);
    line-height: var(--line-height);
    font-weight: var(--plasma-typo-body-m-font-weight);

    border-radius: var(--border-radius);

    &::placeholder {
        color: transparent;
    }
`;

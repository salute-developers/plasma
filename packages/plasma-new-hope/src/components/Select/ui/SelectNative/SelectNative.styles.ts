import { styled } from '@linaria/react';

import { applyHidden } from '../../../../mixins';

export const SelectHidden = styled.select`
    ${applyHidden()};
`;

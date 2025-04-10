import { styled } from '@linaria/react';
import { applyHidden } from 'src/mixins';

export const SelectHidden = styled.select`
    ${applyHidden()};
`;

import { Radiobox as BaseRadiobox } from '@salutejs/plasma-core/components/Radiobox';
import styled from 'styled-components';

import { basebox } from '../Basebox';

export type { RadioboxProps } from '@salutejs/plasma-core/components/Radiobox';

/**
 * Переключатель, или *радиокнопка*.
 */
export const Radiobox = styled(BaseRadiobox)`
    ${basebox};
`;

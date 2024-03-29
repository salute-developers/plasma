import styled from 'styled-components';

import { DropdownUncontrolled } from '../Dropdown';
import type { DropdownUncontrolledProps } from '../Dropdown';

import { applyB2CSelectDropdown } from './views/b2c/SelectDropdown';
import { Design } from './types';

export interface SelectDropdownProps extends DropdownUncontrolledProps {}

export const SelectDropdown = styled(DropdownUncontrolled)<Design>`
    width: 100%;

    --plasma-dropdown-width: 100%;
    --plasma-dropdown-padding: 0.25rem;
    --plasma-dropdown-border-radius: 0.25rem;
    --plasma-dropdown-item-border-radius: 0.25rem;
    --plasma-popup-padding: var(--plasma-dropdown-padding) 0 0;
    --plasma-popup-width: 100%;
    --plasma-popup-nested-width: 100%;
    --plasma-popup-nested-padding: 0 var(--plasma-dropdown-padding, 0);
    --plasma-popup-nested-margin: calc(var(--plasma-dropdown-padding, 0) * -1) 0 0;

    ${({ design }) => design === 'b2c' && applyB2CSelectDropdown()}
`;

import { styled } from '@linaria/react';
import { Wrapper } from 'src/components/Dropdown/ui/DropdownItem/DropdownItem.styles';

import { component, mergeConfig } from '../../../../engines';
import { dropdownConfig, dropdownTokens } from '../../../Dropdown';
import { tokens } from '../../Attach.tokens';

const mergedConfig = mergeConfig(dropdownConfig);
const Dropdown = component(mergedConfig);

export const StyledDropdown = styled(Dropdown)`
    ${dropdownTokens.borderWidth}: var(${tokens.dropdownBorderWidth});
    ${dropdownTokens.padding}: var(${tokens.dropdownPadding});
    ${dropdownTokens.borderRadius}: var(${tokens.dropdownBorderRadius});
    ${dropdownTokens.width}: var(${tokens.dropdownWidth});
    ${dropdownTokens.itemPadding}: var(${tokens.dropdownItemPadding});

    ${dropdownTokens.background}: var(${tokens.dropdownBackground});
    ${dropdownTokens.boxShadow}: var(${tokens.dropdownBoxShadow});
    ${dropdownTokens.borderColor}: var(${tokens.dropdownBorderColor});

    ${Wrapper} {
        &:hover{
            cursor: default;
        }
    }
`;

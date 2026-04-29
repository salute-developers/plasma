import styled from 'styled-components';

import { iconButtonConfig } from '../../../IconButton';
import { component, mergeConfig } from '../../../../engines';

const mergedIconButtonConfig = mergeConfig(iconButtonConfig);
const IconButton = component(mergedIconButtonConfig);

export const StyledIconButton = styled(IconButton)``;

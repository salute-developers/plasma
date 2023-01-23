import styled from 'styled-components';
import { Switch as BaseSwitch } from '@salutejs/plasma-core';
import { accent, surfaceLiquid03, white } from '@salutejs/plasma-tokens';

import { spatnavClassNameAttrs } from '../../helpers';

export type { SwitchProps } from '@salutejs/plasma-core';

/**
 * Визуальный переключатель между двумя взаимоисключающими состояниями — вкл. и выкл.
 */
export const Switch = styled(BaseSwitch).attrs(spatnavClassNameAttrs)`
    --plasma-switch-trigger-background: ${surfaceLiquid03};
    --plasma-switch-trigger-background-checked: ${accent};
    --plasma-switch-ellipse-background: ${white};
`;

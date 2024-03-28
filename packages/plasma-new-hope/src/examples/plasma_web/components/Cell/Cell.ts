import { cellConfig, Textbox, TextLabel, TextSubtitle, TextTitle } from '../../../../components/Cell';
import { component, mergeConfig } from '../../../../engines';

import { config } from './Cell.config';

const mergedConfig = mergeConfig(cellConfig, config);
export const Cell = component(mergedConfig);
export { Textbox, TextLabel, TextSubtitle, TextTitle };

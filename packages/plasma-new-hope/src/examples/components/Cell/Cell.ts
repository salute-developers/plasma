import {
    cellConfig,
    CellTextbox,
    CellTextboxLabel,
    CellTextboxSubtitle,
    CellTextboxTitle,
} from '../../../components/Cell';
import { component, mergeConfig } from '../../../engines';

import { config } from './Cell.config';

const mergedConfig = mergeConfig(cellConfig, config);
export const Cell = component(mergedConfig);
export { CellTextbox, CellTextboxLabel, CellTextboxSubtitle, CellTextboxTitle };

import { panelContentConfig, panelFooterConfig, panelHeaderConfig } from '../../../components/Panel';
import { panelConfig } from '../../../components/Panel/Panel';
import { component, mergeConfig } from '../../../engines';

import { config } from './Panel.config';

const mergedConfig = mergeConfig(panelConfig, config);

export const Panel = component(mergedConfig);

const mergedContentConfig = mergeConfig(panelContentConfig);
export const PanelContent = component(mergedContentConfig);

const mergedHeaderConfig = mergeConfig(panelHeaderConfig);
export const PanelHeader = component(mergedHeaderConfig);

const mergedFooterConfig = mergeConfig(panelFooterConfig);
export const PanelFooter = component(mergedFooterConfig);

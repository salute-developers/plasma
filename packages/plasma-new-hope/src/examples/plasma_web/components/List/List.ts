import { listConfig, ListItem as ListItemComponent } from '../../../../components/List';
import { component, mergeConfig } from '../../../../engines';

import { config } from './List.config';

const mergedConfig = mergeConfig(listConfig, config);

export const List = component(mergedConfig);
export const ListItem = ListItemComponent;

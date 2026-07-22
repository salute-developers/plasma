import { getConfigVariations } from '../../../helpers';

import { createMeta } from './meta';
import { createStories } from './stories';

export const getMarkdownStories = ({ component, componentConfig, decorators, markedKatex }: any) => ({
    meta: createMeta({ component, componentConfig: getConfigVariations(componentConfig), decorators }),
    ...createStories(component, markedKatex),
});

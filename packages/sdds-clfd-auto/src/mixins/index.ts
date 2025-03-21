import { createApplyPaperMixin } from '@salutejs/plasma-new-hope/styled-components';
import * as allTokens from '@salutejs/plasma-themes/tokens/plasma_b2c';

export { addFocus, mediaQuery } from '@salutejs/plasma-new-hope/styled-components';

export const applyPaper = createApplyPaperMixin(allTokens);

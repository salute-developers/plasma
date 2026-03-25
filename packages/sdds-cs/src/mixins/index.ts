import { createApplyPaperMixin } from '@salutejs/plasma-new-hope/emotion';
import * as allTokens from '@salutejs/sdds-themes/tokens/sdds_cs';

export { addFocus, mediaQuery } from '@salutejs/plasma-new-hope/emotion';

export const applyPaper = createApplyPaperMixin(allTokens);

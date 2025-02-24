import { createApplyPaperMixin } from '@salutejs/plasma-new-hope/styled-components';
import * as allTokens from '@salutejs/sdds-themes/tokens/sdds_insol';

export { addFocus, mediaQuery } from '@salutejs/plasma-new-hope/styled-components';

export const applyPaper = createApplyPaperMixin(allTokens);

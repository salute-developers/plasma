import { createApplyPaperMixin } from '@salutejs/plasma-new-hope/styled-components';
import * as allTokens from '@salutejs-ds/sdds_sbcom/theme/tokens';

export { addFocus, mediaQuery } from '@salutejs/plasma-new-hope/styled-components';

export const applyPaper = createApplyPaperMixin(allTokens);

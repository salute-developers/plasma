import { createApplyPaperMixin } from '@salutejs/plasma-new-hope/styled-components';
import * as allTokens from '@salutejs/sdds-themes/tokens/sdds_scan';

export { addFocus, mediaQuery } from '@salutejs/plasma-new-hope/styled-components';

export { addScrollbar } from '../components/Scrollbar/Scrollbar';

export const applyPaper = createApplyPaperMixin(allTokens);

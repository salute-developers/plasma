import { createApplyPaperMixin } from '@salutejs/plasma-new-hope/styled-components';
import * as allTokens from '@sddsjs/sdds_os';

export { addFocus, mediaQuery } from '@salutejs/plasma-new-hope/styled-components';
export { addScrollbar } from '../components/Scrollbar/Scrollbar';

export const applyPaper = createApplyPaperMixin(allTokens);

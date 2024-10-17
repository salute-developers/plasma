import { composeMask } from '@salutejs/plasma-new-hope/styled-components';
import type { TextFieldProps } from '@salutejs/plasma-new-hope/styled-components';

import { TextFieldComponent } from '../TextField/TextField';

export const Mask = composeMask<TextFieldProps>(TextFieldComponent);

import { composeMask } from '@salutejs/plasma-new-hope/styled-components';
import type { TextFieldProps } from '@salutejs/plasma-new-hope/styled-components';

import { TextField } from '../TextField';

export const Mask = composeMask<TextFieldProps>(TextField);

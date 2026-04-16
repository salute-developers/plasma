import type { ComponentProps, ForwardRefExoticComponent } from 'react';
import { composeMask } from '@salutejs/plasma-new-hope/styled-components';

import { TextField } from '../TextField';

export const Mask = composeMask(TextField as ForwardRefExoticComponent<ComponentProps<typeof TextField>>);

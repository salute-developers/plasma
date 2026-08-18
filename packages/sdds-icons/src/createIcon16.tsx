import type { ReactNode } from 'react';

import { createIcon } from './createIcon.js';

export const createIcon16 = (content: ReactNode, maskImage: string) => createIcon(content, 16, maskImage);

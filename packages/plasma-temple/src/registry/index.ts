import { isSberPortal } from '@salutejs/plasma-ui';

import SberBoxRegistry from './registry@sberbox';
import SberPortalRegistry from './registry@sberportal';
import { Registry } from './types';

export const getRegistry = (): Registry => {
    if (isSberPortal()) {
        return SberPortalRegistry;
    }

    return SberBoxRegistry;
};

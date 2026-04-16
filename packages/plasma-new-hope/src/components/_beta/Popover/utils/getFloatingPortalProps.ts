import { RefObject } from 'react';

type FloatingPortalReturnedProps = {
    root?: RefObject<HTMLElement | null>;
    id?: string;
};

export const getFloatingPortalProps = (
    portal?: string | RefObject<HTMLElement | null>,
): FloatingPortalReturnedProps => {
    if (!portal) {
        return {};
    }

    if (typeof portal === 'string') {
        return { id: portal };
    }

    return { root: portal };
};

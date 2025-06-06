import { useEffect } from 'react';
import type { FC, PropsWithChildren } from 'react';
import { createPortal } from 'react-dom';

export type resourceOrOption =
    | string
    | {
          timeout?: number;
      };

interface PortalProps {
    id: string;
}

export const Portal: FC<PropsWithChildren<PortalProps>> = ({ id, children }) => {
    const el = document.createElement('div');

    useEffect(() => {
        const portalRoot = document.getElementById(id);

        portalRoot && portalRoot.appendChild(el);

        return () => {
            portalRoot && portalRoot.removeChild(el);
        };
    }, [el, id]);

    return createPortal(children, el);
};

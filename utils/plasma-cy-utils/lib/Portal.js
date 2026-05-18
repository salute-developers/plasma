import { useEffect } from 'react';
import { createPortal } from 'react-dom';
export const Portal = ({ id, children }) => {
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

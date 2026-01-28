import React, { useRef, FC, PropsWithChildren } from 'react';
import ReactDraggable from 'react-draggable';
import { classes } from 'src/components/Popup/Popup.tokens';
import { safeUseId } from 'src/utils';

import { PopupProps } from '../../Popup.types';

export const Draggable: FC<PropsWithChildren<{ draggable: PopupProps['draggable'] }>> = ({ children, draggable }) => {
    const nodeRef = useRef(null);

    const id = safeUseId();
    const handleClass = `draggable-handle-${id.replace(/:/g, '-')}`;

    if (!draggable) {
        return <>{children}</>;
    }

    return (
        <ReactDraggable
            nodeRef={nodeRef}
            handle={`.${handleClass}`}
            defaultClassName={draggable ? classes.draggablePopupWrapper : undefined}
            defaultClassNameDragging={draggable ? classes.draggingPopupWrapper : undefined}
            disabled={!draggable}
            cancel={`.${classes.resizableHandleWrapper}`}
        >
            <div className={handleClass} ref={nodeRef}>
                {children}
            </div>
        </ReactDraggable>
    );
};

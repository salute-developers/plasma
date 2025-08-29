import React, { useRef, FC, PropsWithChildren } from 'react';
import ReactDraggable from 'react-draggable';
import { classes } from 'src/components/Popup/Popup.tokens';

import { PopupProps } from '../../Popup.types';

export const Draggable: FC<PropsWithChildren<{ draggable: PopupProps['draggable'] }>> = ({ children, draggable }) => {
    const nodeRef = useRef(null);

    if (!draggable) {
        return <>{children}</>;
    }

    return (
        <ReactDraggable
            nodeRef={nodeRef}
            defaultClassName={draggable ? classes.draggablePopupWrapper : undefined}
            defaultClassNameDragging={draggable ? classes.draggingPopupWrapper : undefined}
            disabled={!draggable}
            cancel={`.${classes.resizableHandleWrapper}`}
        >
            <div ref={nodeRef}>{children}</div>
        </ReactDraggable>
    );
};

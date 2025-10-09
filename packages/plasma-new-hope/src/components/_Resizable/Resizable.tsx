import React, { useRef, FC, PropsWithChildren } from 'react';
import { Resizable as ReResizable } from 're-resizable';
import type { Resizable as ResizableType } from 're-resizable';

import { getHandleStyles, getRatioBasedOnPlacement, getResizeDirections } from './utils';
import { classes } from './Resizable.tokens';
import type { ResizableProps } from './Resizable.types';
import { IconResizeDiagonalStyled } from './Resizable.styles';

export const Resizable: FC<PropsWithChildren<ResizableProps>> = ({
    children,
    resizable: outerResizable,
    placement,
    onResizeStart,
    onResizeEnd,
}) => {
    const resizableContainer = useRef<ResizableType>(null);

    const resizable = typeof outerResizable === 'boolean' ? { disabled: !outerResizable } : outerResizable;

    const handleResizeStart = () => {
        if (resizableContainer?.current && resizableContainer.current.resizable) {
            resizableContainer.current.resizable.classList.toggle(classes.resizableContainerNoSelect);

            if (onResizeStart) {
                onResizeStart(resizableContainer);
            }
        }
    };

    const handleResizeEnd = () => {
        if (resizableContainer?.current && resizableContainer.current.resizable) {
            resizableContainer.current.resizable.classList.toggle(classes.resizableContainerNoSelect);

            if (onResizeEnd) {
                onResizeEnd(resizableContainer);
            }
        }
    };

    if (!resizable || resizable.disabled) {
        return <>{children}</>;
    }

    return (
        <ReResizable
            ref={resizableContainer}
            enable={resizable && !resizable.disabled ? getResizeDirections(resizable.directions) : false}
            resizeRatio={getRatioBasedOnPlacement(placement)}
            defaultSize={resizable?.defaultSize}
            minWidth={resizable?.minWidth}
            minHeight={resizable?.minHeight}
            maxWidth={resizable?.maxWidth}
            maxHeight={resizable?.maxHeight}
            onResizeStart={handleResizeStart}
            onResizeStop={handleResizeEnd}
            handleComponent={{
                topRight: resizable?.hiddenIcons?.includes('top-right') ? undefined : (
                    <>
                        {resizable?.icons?.topRight || (
                            <IconResizeDiagonalStyled
                                className={classes.resizableTopRightIcon}
                                color="inherit"
                                size={resizable?.iconSize}
                            />
                        )}
                    </>
                ),
                bottomRight: resizable?.hiddenIcons?.includes('bottom-right') ? undefined : (
                    <>
                        {resizable?.icons?.bottomRight || (
                            <IconResizeDiagonalStyled
                                className={classes.resizableBottomRightIcon}
                                color="inherit"
                                size={resizable?.iconSize}
                            />
                        )}
                    </>
                ),
                bottomLeft: resizable?.hiddenIcons?.includes('bottom-left') ? undefined : (
                    <>
                        {resizable?.icons?.bottomLeft || (
                            <IconResizeDiagonalStyled
                                className={classes.resizableBottomLeftIcon}
                                color="inherit"
                                size={resizable?.iconSize}
                            />
                        )}
                    </>
                ),
                topLeft: resizable?.hiddenIcons?.includes('top-left') ? undefined : (
                    <>
                        {resizable?.icons?.topLeft || (
                            <IconResizeDiagonalStyled
                                className={classes.resizableTopLeftIcon}
                                color="inherit"
                                size={resizable?.iconSize}
                            />
                        )}
                    </>
                ),
            }}
            className={classes.resizableContainer}
            handleStyles={getHandleStyles()}
            handleWrapperClass={classes.resizableHandleWrapper}
        >
            {children}
        </ReResizable>
    );
};

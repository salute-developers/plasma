import React, { useRef } from 'react';
import type { FC, PropsWithChildren } from 'react';
import cls from 'classnames';
import { Resizable as ReResizable } from 're-resizable';
import type { Resizable as ResizableInstance } from 're-resizable';

import type { ResizableOptions, ResizablePlacement, ResizableProps, ResizeDirections } from './Resizable.types';
// @ts-expect-error CSS Modules are processed during the beta build.
import styles from './Resizable.module.css';

const publicClasses = {
    container: 'resizable-container',
    topRightIcon: 'resizable-top-right-icon',
    bottomRightIcon: 'resizable-bottom-right-icon',
    bottomLeftIcon: 'resizable-bottom-left-icon',
    topLeftIcon: 'resizable-top-left-icon',
    handleWrapper: 'resizable-handle-wrapper',
    containerNoSelect: 'resizable-container-no-select',
};

const getResizeDirections = (directions?: ResizeDirections) => {
    if (!directions) {
        return {
            top: true,
            right: true,
            bottom: true,
            left: true,
            topRight: true,
            bottomRight: true,
            bottomLeft: true,
            topLeft: true,
        };
    }

    return {
        top: directions.includes('top'),
        right: directions.includes('right'),
        bottom: directions.includes('bottom'),
        left: directions.includes('left'),
        topRight: directions.includes('top-right'),
        bottomRight: directions.includes('bottom-right'),
        bottomLeft: directions.includes('bottom-left'),
        topLeft: directions.includes('top-left'),
    };
};

const getResizeRatio = (placement?: ResizablePlacement): [number, number] => {
    if (placement === 'center') {
        return [2, 2];
    }

    if (placement === 'top' || placement === 'bottom') {
        return [2, 1];
    }

    if (placement === 'left' || placement === 'right') {
        return [1, 2];
    }

    return [1, 1];
};

const handleStyles = {
    topRight: {
        width: 'auto',
        height: 'auto',
        lineHeight: '0',
        top: '0',
        right: '0',
        transform: 'translate(50%, -50%)',
    },
    bottomRight: {
        width: 'auto',
        height: 'auto',
        lineHeight: '0',
        right: '0',
        bottom: '0',
        transform: 'translate(50%, 50%)',
    },
    bottomLeft: {
        width: 'auto',
        height: 'auto',
        lineHeight: '0',
        bottom: '0',
        left: '0',
        transform: 'translate(-50%, 50%)',
    },
    topLeft: {
        width: 'auto',
        height: 'auto',
        lineHeight: '0',
        top: '0',
        left: '0',
        transform: 'translate(-50%, -50%)',
    },
};

type ResizeIconProps = {
    position: 'topRight' | 'bottomRight' | 'bottomLeft' | 'topLeft';
    size?: 'xs' | 's' | 'm';
};

const iconClasses = {
    topRight: [styles.topRightIcon, publicClasses.topRightIcon],
    bottomRight: [styles.bottomRightIcon, publicClasses.bottomRightIcon],
    bottomLeft: [styles.bottomLeftIcon, publicClasses.bottomLeftIcon],
    topLeft: [styles.topLeftIcon, publicClasses.topLeftIcon],
};

const ResizeIcon = ({ position, size = 's' }: ResizeIconProps) => (
    <svg
        className={cls(styles.resizeIcon, ...iconClasses[position])}
        data-size={size}
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
    >
        <path
            d="M21.5 13.25C21.5985 13.25 21.6961 13.269 21.7871 13.3066C21.8781 13.3443 21.9606 13.4001 22.0303 13.4697C22.1 13.5394 22.1556 13.6218 22.1934 13.7129C22.2311 13.8039 22.25 13.9015 22.25 14C22.25 14.1961 22.1721 14.3842 22.0303 14.5303L14.5303 22.0303C14.3896 22.171 14.199 22.25 14 22.25C13.801 22.25 13.6105 22.171 13.4697 22.0303C13.329 21.8895 13.25 21.699 13.25 21.5C13.25 21.301 13.329 21.1105 13.4697 20.9697L20.9697 13.4697C21.1105 13.329 21.301 13.25 21.5 13.25Z"
            fill="currentColor"
        />
        <path
            d="M20 4.99902C20.199 4.99902 20.3895 5.07803 20.5303 5.21973C20.671 5.36045 20.75 5.551 20.75 5.75C20.75 5.949 20.671 6.13955 20.5303 6.28027L6.28027 20.5303C6.13955 20.671 5.94901 20.75 5.75 20.75C5.551 20.75 5.36045 20.671 5.21973 20.5303C5.07901 20.3895 5 20.199 5 20C5 19.801 5.07902 19.6105 5.21973 19.4697L19.4697 5.21973C19.6105 5.07901 19.801 4.99903 20 4.99902Z"
            fill="currentColor"
        />
    </svg>
);

export const Resizable: FC<PropsWithChildren<ResizableProps>> = ({
    children,
    resizable: outerResizable,
    placement,
    onResizeStart,
    onResizeEnd,
}) => {
    const resizableContainer = useRef<ResizableInstance>(null);
    const resizable = typeof outerResizable === 'boolean' ? { disabled: !outerResizable } : outerResizable;

    const toggleNoSelect = () => {
        const element = resizableContainer.current?.resizable;

        element?.classList.toggle(styles.containerNoSelect);
        element?.classList.toggle(publicClasses.containerNoSelect);
    };

    if (!resizable || resizable.disabled) {
        return <>{children}</>;
    }

    const getIcon = (position: ResizeIconProps['position'], options: ResizableOptions) => {
        const positionName = {
            topRight: 'top-right',
            bottomRight: 'bottom-right',
            bottomLeft: 'bottom-left',
            topLeft: 'top-left',
        }[position] as 'top-right' | 'bottom-right' | 'bottom-left' | 'top-left';

        if (options.hiddenIcons?.includes(positionName)) {
            return undefined;
        }

        return <>{options.icons?.[position] || <ResizeIcon position={position} size={options.iconSize} />}</>;
    };

    return (
        <ReResizable
            ref={resizableContainer}
            enable={getResizeDirections(resizable.directions)}
            resizeRatio={getResizeRatio(placement)}
            defaultSize={resizable.defaultSize}
            minWidth={resizable.minWidth}
            minHeight={resizable.minHeight}
            maxWidth={resizable.maxWidth}
            maxHeight={resizable.maxHeight}
            onResizeStart={() => {
                toggleNoSelect();
                onResizeStart?.(resizableContainer);
            }}
            onResizeStop={() => {
                toggleNoSelect();
                onResizeEnd?.(resizableContainer);
            }}
            handleComponent={{
                topRight: getIcon('topRight', resizable),
                bottomRight: getIcon('bottomRight', resizable),
                bottomLeft: getIcon('bottomLeft', resizable),
                topLeft: getIcon('topLeft', resizable),
            }}
            className={publicClasses.container}
            handleStyles={handleStyles}
            handleWrapperClass={publicClasses.handleWrapper}
        >
            {children}
        </ReResizable>
    );
};

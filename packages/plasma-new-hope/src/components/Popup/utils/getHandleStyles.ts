interface ReturnData {
    topRight: {
        width: string;
        height: string;
        top: string;
        right: string;
    };
    bottomRight: {
        width: string;
        height: string;
        right: string;
        bottom: string;
    };
    bottomLeft: {
        width: string;
        height: string;
        bottom: string;
        left: string;
    };
    topLeft: {
        width: string;
        height: string;
        top: string;
        left: string;
    };
}

const getBaseDimension = (iconSize?: 'xs' | 's' | 'm'): number => {
    switch (iconSize) {
        case 'xs': {
            return 16;
        }
        case 's': {
            return 24;
        }
        case 'm': {
            return 36;
        }
        default: {
            return 16;
        }
    }
};

export const getHandleStyles = (iconSize?: 'xs' | 's' | 'm'): ReturnData => {
    const size = getBaseDimension(iconSize);
    const offset = size / 2;

    return {
        topRight: {
            width: `${size}px`,
            height: `${size}px`,
            top: `-${offset}px`,
            right: `-${offset}px`,
        },
        bottomRight: {
            width: `${size}px`,
            height: `${size}px`,
            right: `-${offset}px`,
            bottom: `-${offset}px`,
        },
        bottomLeft: {
            width: `${size}px`,
            height: `${size}px`,
            bottom: `-${offset}px`,
            left: `-${offset}px`,
        },
        topLeft: {
            width: `${size}px`,
            height: `${size}px`,
            top: `-${offset}px`,
            left: `-${offset}px`,
        },
    };
};

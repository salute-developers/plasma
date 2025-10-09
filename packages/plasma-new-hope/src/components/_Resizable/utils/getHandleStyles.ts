// Объект стилей для handler'а, в котором находится иконка ресайза.
interface ReturnType {
    topRight: {
        width: string;
        height: string;
        top: string;
        right: string;
        transform: string;
        lineHeight: string;
    };
    bottomRight: {
        width: string;
        height: string;
        right: string;
        bottom: string;
        transform: string;
        lineHeight: string;
    };
    bottomLeft: {
        width: string;
        height: string;
        bottom: string;
        left: string;
        transform: string;
        lineHeight: string;
    };
    topLeft: {
        width: string;
        height: string;
        top: string;
        left: string;
        transform: string;
        lineHeight: string;
    };
}

const base = {
    width: 'auto',
    height: 'auto',
    lineHeight: '0',
};

export const getHandleStyles = (): ReturnType => ({
    topRight: {
        top: '0',
        right: '0',
        transform: 'translate(50%, -50%)',
        ...base,
    },
    bottomRight: {
        right: '0',
        bottom: '0',
        transform: 'translate(50%, 50%)',
        ...base,
    },
    bottomLeft: {
        bottom: '0',
        left: '0',
        transform: 'translate(-50%, 50%)',
        ...base,
    },
    topLeft: {
        top: '0',
        left: '0',
        transform: 'translate(-50%, -50%)',
        ...base,
    },
});

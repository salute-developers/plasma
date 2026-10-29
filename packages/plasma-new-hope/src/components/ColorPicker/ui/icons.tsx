import React, { CSSProperties } from 'react';

const strokeBase: CSSProperties = {
    fill: 'none',
    strokeWidth: '1.8px',
};

const strokeWithMiter: CSSProperties = {
    fill: 'none',
    strokeMiterlimit: 10,
    strokeWidth: '1.8px',
};

const useIconStyles = (color?: string) => {
    const colorOverride = color ? { stroke: color } : undefined;
    const fillOverride = color ? { fill: color } : undefined;
    const bothOverride = color ? { stroke: color, fill: color } : undefined;

    return { colorOverride, fillOverride, bothOverride };
};

export const TrashIcon = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" style={{ width: 16 }} aria-hidden="true">
            <polyline
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{ ...strokeBase }}
                points="17.96 4.31 2.04 4.3 3.75 4.3 4.81 17.29 5.16 17.96 5.74 18.47 6.59 18.62 13.64 18.62 14.52 18.32 15.07 17.68 15.29 17.12 16.28 4.3 12.87 4.3 12.87 2.38 12.48 1.75 11.83 1.46 8.4 1.46 7.64 1.68 7.26 2.21 7.16 2.52 7.17 4.23"
            />
        </svg>
    );
};

export const LinearIcon = ({ color }: { color: string }) => {
    const { colorOverride } = useIconStyles(color);

    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" style={{ width: 16 }} aria-hidden="true">
            <polyline
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{ ...strokeBase, ...colorOverride }}
                points="0.9 12.73 0.9 19.1 7.27 19.1 0.9 19.1 19.1 0.9 12.73 0.9 19.1 0.9 19.1 7.27"
            />
        </svg>
    );
};

export const RadialIcon = ({ color }: { color: string }) => {
    const { colorOverride } = useIconStyles(color);

    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" style={{ width: 16 }} aria-hidden="true">
            <circle style={{ ...strokeWithMiter, ...colorOverride }} cx="10" cy="10" r="9" />
            <circle style={{ ...strokeWithMiter, ...colorOverride }} cx="10" cy="10" r="5" />
        </svg>
    );
};

export const DegreesIcon = ({ color }: { color?: string }) => {
    const { colorOverride } = useIconStyles(color);
    const style = { ...strokeWithMiter, ...colorOverride };

    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" style={{ width: 16 }} aria-hidden="true">
            <polyline strokeLinecap="round" style={style} points="13.86 2.01 1.7 16.99 18.77 16.99" />
            <polyline
                strokeLinecap="round"
                style={style}
                points="10.96 16.38 10.96 16.38 10.74 15.7 10.44 14.97 10.06 14.21 9.72 13.63 9.21 12.89 8.85 12.44 8.41 11.95 7.91 11.45 7.51 11.1"
            />
        </svg>
    );
};

export const DropperIcon = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
            <path
                fill="#080808"
                fillOpacity=".8"
                d="M14 4.206a2.24 2.24 0 0 0-.704-1.603c-.875-.83-2.295-.8-3.163.07L8.675 4.138a1.5 1.5 0 0 0-2.071.048l-.313.312a1 1 0 0 0 0 1.415l.125.129L3.23 9.229a2.48 2.48 0 0 0-.658 2.375l-.5 1.151a.855.855 0 0 0 .18.951.995.995 0 0 0 1.106.21l1.095-.479a2.5 2.5 0 0 0 2.316-.671l3.188-3.188.129.129a1 1 0 0 0 1.413 0l.313-.313a1.5 1.5 0 0 0 .046-2.073l1.484-1.492a2.23 2.23 0 0 0 .66-1.623m-7.937 7.857a1.5 1.5 0 0 1-1.5.374.5.5 0 0 0-.347.02l-1.132.494.479-1.113a.5.5 0 0 0 .015-.36 1.49 1.49 0 0 1 .36-1.54L7.125 6.75l2.121 2.125z"
            />
        </svg>
    );
};

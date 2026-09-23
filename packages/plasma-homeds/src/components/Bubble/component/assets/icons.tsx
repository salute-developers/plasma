import React from 'react';

import type { BubblePlacement } from '../Bubble.types';
import { classes } from '../Bubble.tokens';

const GlowFilter = ({
    id,
    x,
    y,
    width,
    height,
}: {
    id: string;
    x: string;
    y: string;
    width: string;
    height: string;
}) => (
    <filter id={id} x={x} y={y} width={width} height={height} colorInterpolationFilters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
        />
        <feOffset />
        <feGaussianBlur stdDeviation="4" />
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
        <feColorMatrix type="matrix" values="0 0 0 0 0.815686 0 0 0 0 1 0 0 0 0 0.466667 0 0 0 0.8 0" />
        <feBlend mode="normal" in2="shape" result="effect1_innerShadow" />
    </filter>
);

const STAR_PATH =
    'M10.3273 3.66236C12.5328 -1.22079 19.4672 -1.22079 21.6727 3.66236L22.7785 6.11086C23.4022 7.49179 24.5082 8.59779 25.8891 9.22148L28.3376 10.3273C33.2208 12.5328 33.2208 19.4672 28.3376 21.6727L25.8891 22.7785C24.5082 23.4022 23.4022 24.5082 22.7785 25.8891L21.6727 28.3376C19.4672 33.2208 12.5328 33.2208 10.3273 28.3376L9.22148 25.8891C8.59779 24.5082 7.49179 23.4022 6.11086 22.7785L3.66236 21.6727C-1.22079 19.4672 -1.22079 12.5328 3.66236 10.3273L6.11086 9.22148C7.49179 8.59779 8.59779 7.49179 9.22148 6.11086L10.3273 3.66236Z';

const STAR_STROKE_PATH =
    'M10.7832 3.86816C12.8115 -0.622629 19.1885 -0.622628 21.2168 3.86816L22.3232 6.31641C22.997 7.80827 24.1917 9.00296 25.6836 9.67676L28.1318 10.7832C32.6226 12.8115 32.6226 19.1885 28.1318 21.2168L25.6836 22.3232C24.1917 22.997 22.997 24.1917 22.3232 25.6836L21.2168 28.1318C19.1885 32.6226 12.8115 32.6226 10.7832 28.1318L9.67676 25.6836C9.00296 24.1917 7.80827 22.997 6.31641 22.3232L3.86816 21.2168C-0.622629 19.1885 -0.622628 12.8115 3.86816 10.7832L6.31641 9.67676C7.80827 9.00296 9.00296 7.80827 9.67676 6.31641L10.7832 3.86816Z';

export const StarShapeIcon = ({ filterId }: { filterId: string }) => (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
        <path d={STAR_PATH} fill="currentColor" filter={`url(#${filterId})`} />
        <path d={STAR_STROKE_PATH} stroke="currentColor" />
    </svg>
);

export const SparkleIcon = () => (
    <svg viewBox="8 8 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
        <path
            d="M14.9049 10.1829C15.2807 9.1672 16.7178 9.16723 17.0937 10.1829L18.3424 13.5585C18.3593 13.6039 18.3953 13.6399 18.4407 13.6568L21.8163 14.9055C22.832 15.2813 22.832 16.7184 21.8163 17.0943L18.4407 18.343C18.3953 18.3599 18.3593 18.3958 18.3424 18.4413L17.0937 21.8169C16.7178 22.8326 15.2807 22.8326 14.9049 21.8169L13.6562 18.4413C13.6393 18.3959 13.6033 18.3598 13.5579 18.343L10.1823 17.0943C9.16666 16.7184 9.16664 15.2814 10.1823 14.9055L13.5579 13.6568C13.6034 13.6399 13.6393 13.604 13.6562 13.5585L14.9049 10.1829Z"
            fill="currentColor"
        />
    </svg>
);

export const CloseIcon = () => (
    <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8.5 3.5C8.5 3.22386 8.27614 3 8 3C7.72386 3 7.5 3.22386 7.5 3.5V7.5H3.5C3.22386 7.5 3 7.72386 3 8C3 8.27614 3.22386 8.5 3.5 8.5H7.5V12.5C7.5 12.7761 7.72386 13 8 13C8.27614 13 8.5 12.7761 8.5 12.5V8.5H12.5C12.7761 8.5 13 8.27614 13 8C13 7.72386 12.7761 7.5 12.5 7.5H8.5V3.5Z"
            fill="currentColor"
        />
    </svg>
);

export const DecorStarIcon = () => (
    <svg viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
        <path
            d="M0.806088 6.67927C-0.580217 3.00934 3.00983 -0.580715 6.67977 0.805589L8.72168 1.57692C9.98725 2.05498 11.3839 2.05498 12.6494 1.57692L14.6913 0.805589C18.3613 -0.580716 21.9513 3.00933 20.565 6.67927L19.7937 8.72118C19.3156 9.98675 19.3156 11.3834 19.7937 12.6489L20.565 14.6908C21.9513 18.3608 18.3613 21.9508 14.6913 20.5645L12.6494 19.7932C11.3839 19.3151 9.98725 19.3151 8.72168 19.7932L6.67977 20.5645C3.00983 21.9508 -0.580216 18.3608 0.806088 14.6908L1.57741 12.6489C2.05548 11.3834 2.05548 9.98675 1.57741 8.72118L0.806088 6.67927Z"
            stroke="#F9F9F9"
            strokeOpacity="0.12"
        />
    </svg>
);

const BODY_JOIN_PATH =
    'M23.7831 0C22.246 0 21 1.246 21 2.7831C21 3.9853 21.7838 5.0299 22.8693 5.5466C28.2682 8.1169 32 13.6223 32 20C32 28.8366 24.8366 36 16 36C7.16344 36 0 28.8366 0 20C0 13.6223 3.73178 8.1169 9.1307 5.5466C10.2162 5.0299 11 3.9853 11 2.7831C11 1.246 9.75397 0 8.21691 0Z';

const bodyJoinByPlacement: Record<BubblePlacement, { viewBox: string; transform?: string }> = {
    'top-right': { viewBox: '0 -3 32 39' },
    'top-left': { viewBox: '0 -3 32 39' },
    right: { viewBox: '0 0 39 32', transform: 'matrix(0 1 -1 0 36 0)' },
    left: { viewBox: '-3 0 39 32', transform: 'matrix(0 1 1 0 0 0)' },
};

export const BodyJoin = ({ placement }: { placement: BubblePlacement }) => {
    const { viewBox, transform } = bodyJoinByPlacement[placement];

    return (
        <svg className={classes.bodyJoin} viewBox={viewBox} fill="currentColor" aria-hidden>
            <g transform={transform}>
                <rect x="8.21691" y="-2" width="15.56619" height="2" />
                <path d={BODY_JOIN_PATH} />
            </g>
        </svg>
    );
};

export const BodyGlowFilter = ({ id }: { id: string }) => (
    <svg width="0" height="0" aria-hidden style={{ position: 'absolute' }}>
        <defs>
            <GlowFilter id={id} x="-20%" y="-20%" width="140%" height="140%" />
        </defs>
    </svg>
);

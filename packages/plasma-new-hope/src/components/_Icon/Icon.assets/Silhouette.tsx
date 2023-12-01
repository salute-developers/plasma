import React from 'react';

import { IconProps } from '../IconRoot';

export const Silhouette: React.FC<IconProps> = (props) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="none" width="100%" height="100%" {...props}>
            <defs>
                <clipPath id="clip227_4845">
                    <rect
                        id="Size=XXL,Type=Silhouette"
                        rx="50.000000"
                        width="100.000015"
                        height="100.000000"
                        fill="white"
                    />
                </clipPath>
                <pattern
                    id="pattern_227_48290"
                    patternContentUnits="objectBoundingBox"
                    width="1.000000"
                    height="1.000000"
                />
                <image id="image227_4829_0" width="256.000000" height="256.000000" />
            </defs>
            <rect id="Size=XXL,Type=Silhouette" rx="50.000000" width="100.000015" height="100.000000" fill="#F5F5F5" />
            <g clipPath="url(#clip227_4845)">
                <path
                    id="Silhouette"
                    d="M0 86.6667C0 86.6667 13.4548 86.6667 15.9677 86.6667C20.8767 82.2339 20.6211 77.4724 28.9921 80.5419C44.6187 86.2719 54.2737 87.1402 56.7928 80.5419C58.0249 77.315 55.5122 73.9883 56.7928 70.9582C58.0127 68.072 59.6566 68.1155 60.6011 68.1155C60.8513 67.5497 62.3531 65.0041 58.4762 62.9489C59.6272 62.1486 60.9827 62.4879 61.5831 60.597C62.1836 58.7062 59.075 55.5345 61.2321 52.9774C63.389 50.4202 68.7633 52.5229 70.1785 48.0811C70.9832 45.5554 68.5316 42.0299 65.6008 38.0684C61.5227 32.556 58.4875 27.0615 59.4733 23.8894C60.459 20.7173 61.1722 21.4406 62.3531 18.7601C63.25 16.7247 63.7034 7.09637 58.9685 1.01758C58.7426 0.72052 58.2429 0.50946 57.5806 0.359772C55.6997 -0.0653076 52.5061 0.00424194 50.536 0.00424194C30.3143 0.00424194 0 0.00424194 0 0.00424194L0 86.6667Z"
                    fillRule="evenodd"
                    fill="#DDDDDD"
                />
            </g>
        </svg>
    );
};

const camelize = (source: string) => source.replace(/[-|_]./g, (x) => x[1].toUpperCase());
const compose = <R>(...fns: Array<(a: R) => R>) => (x: R) => fns.reduce((v, f) => f(v), x);
const removeLineBreak = (source: string) => source.replace(/\n/g, '');

const getSvgContent = (source: string) => (/<svg(.*?)>(.*?)<\/svg>/gm.exec(source) || [])[2];

const getViewBox = (source: string) => (/viewBox="(.*?)"/gm.exec(source) || [])[1];

const removeFillOpacity = (source: string) => source.replace(/fill-opacity="(.*?)"/gm, '');

const setFillCurrentColor = (source: string) => source.replace(/fill="(.*?)"/gm, 'fill="currentColor"');

const setStrokeCurrentColor = (source: string) => source.replace(/stroke="(.*?)"/gm, 'stroke="currentColor"');

const convertCSSProperty = (source: string) =>
    source.replace(
        /([a-zA-Z-]*):(.*)/g,
        (...match) => `${camelize(match[1])}: ${Number.isNaN(Number(match[2])) ? `'${match[2]}'` : match[2]}`,
    );

const getCSSProperties = (source: string) => source.split(';').map(convertCSSProperty).join(',');

const convertInlineStyleToObject = (source: string) =>
    source.replace(/style="(.*?)"/gm, (_, group) => `style={{ ${getCSSProperties(group)} }}`);

const camelizeAttributes = (source: string) => source.replace(/([\w-]+)=/g, camelize);

/**
 * Функция генерации файла `/Icon.assets/<Name>.tsx`. Здесь экспортируется иконка из figma
 * и возвращается svg компонент иконки.
 */
export const getIconAsset = (source: string, iconName: string) => {
    const viewBox = getViewBox(source);
    const svgContent = compose(
        removeLineBreak,
        getSvgContent,
        setFillCurrentColor,
        setStrokeCurrentColor,
        removeFillOpacity,
        convertInlineStyleToObject,
        camelizeAttributes,
    )(source);

    return `import React from 'react';

import { IconProps } from '../IconRoot';

export const ${iconName}: React.FC<IconProps> = (props) => (
    <svg width="100%" viewBox="${viewBox}" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        ${svgContent}
    </svg>
);
`;
};

/**
 * Функция генерации файла `/Icons/Icon<Name>.tsx`. Здесь формируется компонент иконки.
 */
export const getIconComponent = (iconName: string) => {
    return `import React from 'react';

import { ${iconName} as Icon16 } from '../Icon.assets.16/${iconName}';
import { ${iconName} as Icon24 } from '../Icon.assets.24/${iconName}';
import { ${iconName} as Icon36 } from '../Icon.assets.36/${iconName}';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const Icon${iconName}: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
`;
};

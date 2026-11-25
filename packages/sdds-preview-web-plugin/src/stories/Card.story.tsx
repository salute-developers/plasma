import {
    CardContent,
    CardInnerContent,
    cardConfig,
    component,
    mergeConfig,
} from '@salutejs/plasma-new-hope/styled-components';
import type { CSSProperties } from 'react';

const Card = component(mergeConfig(cardConfig as any, {}));

const toItems = (values: (string | number)[]) => values.map((value) => ({ value, label: String(value) }));

const orderMap: Record<string, number> = { left: 0, top: 0, center: 1, right: 2, bottom: 2 };
const alignContentValue: Record<string, string> = {
    left: 'flex-start',
    top: 'flex-start',
    center: 'center',
    right: 'flex-end',
    bottom: 'flex-end',
};
const itemsPerLineMap: Record<number, number> = { 1: 1, 2: 2, 4: 2 };

const contentStyle: CSSProperties = {
    display: 'flex',
    flex: 1,
    padding: '1rem',
    boxSizing: 'border-box',
    alignItems: 'center',
    justifyContent: 'center',
};

const dotStyle: CSSProperties = {
    width: '2rem',
    height: '2rem',
    margin: '1rem',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'var(--surface-warning)',
};

const SvgBackground = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMinYMin slice"
        viewBox="1 0.5 8 8"
        width="100%"
        height="100%"
        style={{ width: '100%', height: '100%', background: 'var(--text-tertiary)' }}
    >
        <path stroke="#fff" strokeDasharray={1} d="M1 1h7M2 2h7M1 3h7M2 4h7M1 5h7M2 6h7M1 7h7M2 8h7" />
    </svg>
);

const CardDefault = {
    name: 'Default',
    args: [
        {
            name: 'width',
            value: '500px',
        },
        {
            name: 'text',
            value: 'Title',
        },
        {
            name: 'orientation',
            value: 'horizontal',
            items: toItems(['horizontal', 'vertical']),
        },
        {
            name: 'selected',
            value: true,
        },
        {
            name: 'backgroundType',
            value: 'none',
            items: toItems(['none', 'solid']),
        },
        {
            name: 'textPosition',
            value: 'inner',
            items: toItems(['inner', 'outer']),
        },
        {
            name: 'contentPosition',
            value: 'inner',
            items: toItems(['inner', 'outer']),
        },
        {
            name: 'textAlign',
            value: 'left',
            items: toItems(['left', 'center', 'right', 'top', 'bottom']),
        },
        {
            name: 'contentAlign',
            value: 'left',
            items: toItems(['left', 'center', 'right', 'top', 'bottom']),
        },
        {
            name: 'hasText',
            value: true,
        },
        {
            name: 'hasContent',
            value: true,
        },
        {
            name: 'hasImage',
            value: true,
        },
        {
            name: 'quantity',
            value: 2,
            items: toItems([1, 2, 4]),
        },
        {
            name: 'aspectRatio',
            value: '4 / 3',
        },
    ],
    render: function Story(args: any) {
        const {
            hasContent,
            hasImage,
            hasText,
            text,
            quantity,
            width,
            orientation,
            textPosition,
            contentPosition,
            textAlign,
            contentAlign,
            aspectRatio,
            ...rest
        } = args;
        const count = Number(quantity) || 1;
        const vertical = orientation === 'vertical';

        const onlyInnerText = Boolean(
            (!hasContent || contentPosition === 'outer') && hasText && text && textPosition === 'inner',
        );
        const onlyInnerContent = (!hasText || textPosition === 'outer') && hasContent && contentPosition === 'inner';
        const alignProp = vertical ? 'alignItems' : 'justifyContent';

        const cardTitleNode = (
            <div
                style={{
                    ...contentStyle,
                    order: orderMap[textAlign],
                    [alignProp]: onlyInnerText ? alignContentValue[textAlign] : 'center',
                }}
            >
                {text}
            </div>
        );

        const perLine = itemsPerLineMap[count] ?? count;
        const cardContentNode = (
            <div
                style={{
                    ...contentStyle,
                    order: orderMap[contentAlign],
                    [alignProp]: onlyInnerContent ? alignContentValue[contentAlign] : 'center',
                }}
            >
                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: `repeat(${perLine}, auto)`,
                        justifyContent: vertical ? 'center' : 'space-around',
                        alignContent: 'center',
                        height: vertical ? '10rem' : '100%',
                    }}
                >
                    {Array.from({ length: count }, (_, i) => (
                        <div key={i} style={dotStyle}>
                            {i + 1}
                        </div>
                    ))}
                </div>
            </div>
        );

        return (
            <Card {...rest} orientation={orientation} style={{ width }}>
                {hasText && textPosition === 'outer' && cardTitleNode}
                {hasContent && contentPosition === 'outer' && cardContentNode}
                <CardContent orientation={orientation} aspectRatio={aspectRatio}>
                    <CardInnerContent orientation={orientation}>
                        {hasText && textPosition === 'inner' && cardTitleNode}
                        {hasContent && contentPosition === 'inner' && cardContentNode}
                    </CardInnerContent>
                    {hasImage && <SvgBackground />}
                </CardContent>
            </Card>
        );
    },
};

const CardVertical = {
    name: 'Vertical',
    args: CardDefault.args.map((arg) => {
        switch (arg.name) {
            case 'width':
                return { ...arg, value: '450px' };
            case 'orientation':
                return { ...arg, value: 'vertical' };
            case 'textAlign':
            case 'contentAlign':
                return { ...arg, value: 'top', items: toItems(['top', 'center', 'bottom']) };
            default:
                return arg;
        }
    }),
    render: CardDefault.render,
};

export const CardStories = [CardDefault, CardVertical];

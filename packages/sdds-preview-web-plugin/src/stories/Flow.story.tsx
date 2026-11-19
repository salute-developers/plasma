import { component, flowConfig, mergeConfig } from '@salutejs/plasma-new-hope/styled-components';

const Flow = component(mergeConfig(flowConfig as any, {}));

const toItems = (values: string[]) => values.map((value) => ({ value, label: value }));

const widths = [100, 32, 171, 74, 179, 55];
const heights = [10, 50, 45, 33, 14, 55];

const itemStyle = {
    padding: '0.5rem 1rem',
    borderRadius: '0.5rem',
    background: 'var(--surface-transparent-secondary)',
    color: 'var(--text-primary)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxSizing: 'content-box' as const,
};

const FlowDefault = {
    name: 'Default',
    args: [
        {
            name: 'itemsCount',
            value: 6,
        },
        {
            name: 'containerWidth',
            value: '450px',
        },
        {
            name: 'containerHeight',
            value: '200px',
        },
        {
            name: 'orientation',
            value: 'horizontal',
            items: toItems(['vertical', 'horizontal']),
        },
        {
            name: 'arrangement',
            value: 'start',
            items: toItems(['start', 'center', 'end', 'spaceBetween', 'spaceAround']),
        },
        {
            name: 'alignment',
            value: 'start',
            items: toItems(['start', 'center', 'end']),
        },
        {
            name: 'mainAxisGap',
            value: '10',
        },
        {
            name: 'crossAxisGap',
            value: '10',
        },
        {
            name: 'itemsPerLine',
            value: '',
        },
    ],
    render: function Story(args: any) {
        const { itemsCount, containerWidth, containerHeight, itemsPerLine, ...rest } = args;
        const count = Math.max(1, Number(itemsCount) || 1);
        const hasLines = Boolean(itemsPerLine);

        return (
            <Flow
                {...rest}
                itemsPerLine={hasLines ? itemsPerLine : undefined}
                style={{
                    width: containerWidth,
                    height: containerHeight,
                    background: 'var(--surface-transparent-primary)',
                    borderRadius: '0.5rem',
                }}
            >
                {Array.from({ length: count }, (_, index) => {
                    const width = widths[index % widths.length];
                    const height = heights[index % heights.length];

                    return (
                        <div
                            key={index}
                            style={{
                                ...itemStyle,
                                ...(hasLines ? { minWidth: width, minHeight: height } : { width, height }),
                            }}
                        >
                            {index + 1}
                        </div>
                    );
                })}
            </Flow>
        );
    },
};

export const FlowStories = [FlowDefault];

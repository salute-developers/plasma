import { IconPlasma } from '@salutejs/plasma-icons';
import {
    SegmentProvider,
    component,
    counterConfig,
    mergeConfig,
    segmentGroupConfig,
    segmentItemConfig,
} from '@salutejs/plasma-new-hope/styled-components';

const toItems = (values: string[]) => values.map((value) => ({ value, label: value }));

const segmentItemViews = ['default', 'secondary', 'accent', 'clear'];

const segmentArgs = [
    {
        name: 'itemsCount',
        value: 4,
    },
    {
        name: 'segmentItemView',
        value: 'default',
        items: toItems(segmentItemViews),
    },
    {
        name: 'selectionMode',
        value: 'single',
        items: toItems(['single', 'multiple']),
    },
    {
        name: 'hasBackground',
        value: false,
    },
    {
        name: 'singleSelectedRequired',
        value: false,
    },
    {
        name: 'maxItemWidth',
        value: '',
    },
    {
        name: 'contentLeft',
        value: 'icon',
        items: toItems(['none', 'icon']),
    },
    {
        name: 'contentRight',
        value: 'counter',
        items: toItems(['none', 'icon', 'counter', 'text']),
    },
    {
        name: 'disabled',
        value: false,
    },
];

const renderGroup = (relatedComponents: any, args: any, itemProps: Record<string, any> = {}) => {
    const { itemsCount, segmentItemView, selectionMode, contentLeft, contentRight, maxItemWidth, ...rest } = args;
    const count = Math.max(1, Number(itemsCount) || 1);

    const Counter = component(mergeConfig(counterConfig as any, relatedComponents?.CounterConfig ?? {}));
    const SegmentGroup = component(mergeConfig(segmentGroupConfig as any, relatedComponents?.SegmentGroupConfig ?? {}));
    const SegmentItem = component(mergeConfig(segmentItemConfig as any, relatedComponents?.SegmentItemConfig ?? {}));

    const iconSize = rest.size === 'xs' ? 'xs' : 's';
    const leftNode = contentLeft === 'icon' ? <IconPlasma size={iconSize} color="inherit" /> : undefined;
    const rightNode = (() => {
        switch (contentRight) {
            case 'icon':
                return <IconPlasma size={iconSize} color="inherit" />;
            case 'counter':
                return <Counter size={iconSize} count={1} view="positive" />;
            case 'text':
                return 'Text';
            default:
                return undefined;
        }
    })();

    return (
        <SegmentProvider defaultSelected={['label_0']}>
            <SegmentGroup {...rest} selectionMode={selectionMode} clip={false}>
                {Array.from({ length: count }, (_, i) => (
                    <SegmentItem
                        key={`label_${i}`}
                        label={`Label ${i}`}
                        value={`label_${i}`}
                        view={segmentItemView}
                        size={rest.size}
                        pilled={rest.pilled}
                        contentLeft={leftNode}
                        contentRight={rightNode}
                        maxItemWidth={maxItemWidth || undefined}
                        {...itemProps}
                    />
                ))}
            </SegmentGroup>
        </SegmentProvider>
    );
};

const SegmentGroupDefault = {
    name: 'Default',
    args: segmentArgs,
    render: function Story({ relatedComponents, ...args }: any) {
        return renderGroup(relatedComponents, args);
    },
};

export const SegmentGroupStories = [SegmentGroupDefault];

const SegmentItemDefault = {
    name: 'Default',
    args: segmentArgs.filter((arg) => arg.name !== 'itemsCount' && arg.name !== 'segmentItemView'),
    render: function Story({ relatedComponents, ...args }: any) {
        const { view, size, pilled, ...rest } = args;

        return renderGroup(relatedComponents, { ...rest, itemsCount: 1, view: 'clear' }, { view, size, pilled });
    },
};

export const SegmentItemStories = [SegmentItemDefault];

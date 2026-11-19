import { IconPlasma } from '@salutejs/plasma-icons';
import {
    component,
    horizontalTabsConfig,
    horizontalTabItemConfig,
    verticalTabsConfig,
    verticalTabItemConfig,
    mergeConfig,
} from '@salutejs/plasma-new-hope/styled-components';
import { useState } from 'react';

const HorizontalTabs = component(mergeConfig(horizontalTabsConfig as any, {}));
const VerticalTabs = component(mergeConfig(verticalTabsConfig as any, {}));
const HorizontalTabItem = component(mergeConfig(horizontalTabItemConfig as any, {}));
const VerticalTabItem = component(mergeConfig(verticalTabItemConfig as any, {}));

const labels = ['Label', 'Middle label', 'Disabled', 'Very long label'];

const TabsDefault = {
    name: 'Default',
    args: [
        {
            name: 'itemQuantity',
            value: 4,
        },
        {
            // Appearance пакета: превью показывает значения первого appearance (horizontal).
            name: 'orientation',
            value: 'horizontal',
            items: [
                { value: 'horizontal', label: 'horizontal' },
                { value: 'vertical', label: 'vertical' },
            ],
        },
        {
            name: 'hasDivider',
            value: true,
        },
        {
            name: 'dividerAlign',
            value: 'left',
            items: [
                { value: 'left', label: 'left' },
                { value: 'right', label: 'right' },
            ],
        },
        {
            name: 'disabled',
            value: false,
        },
        {
            name: 'enableContentLeft',
            value: false,
        },
    ],
    render: function Story(args: any) {
        const [index, setIndex] = useState(0);
        const { itemQuantity, enableContentLeft, ...rest } = args;
        const vertical = rest.orientation === 'vertical';
        const Tabs = vertical ? VerticalTabs : HorizontalTabs;
        const TabItem = vertical ? VerticalTabItem : HorizontalTabItem;
        const count = Math.max(1, Number(itemQuantity) || 1);
        const items = Array.from({ length: count }, (_, i) => labels[i % labels.length]);

        return (
            <Tabs {...rest} style={{ maxWidth: '100%' }}>
                {items.map((label, i) => (
                    <TabItem
                        key={`item:${i}`}
                        orientation={rest.orientation}
                        size={rest.size}
                        view={rest.view === 'filled' ? 'divider' : rest.view}
                        pilled={rest.pilled}
                        selected={i === index}
                        itemIndex={i}
                        disabled={rest.disabled || label === 'Disabled'}
                        contentLeft={enableContentLeft ? <IconPlasma size="s" color="inherit" /> : undefined}
                        onClick={() => setIndex(i)}
                    >
                        {label}
                    </TabItem>
                ))}
            </Tabs>
        );
    },
};

export const TabsStories = [TabsDefault];

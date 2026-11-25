import { IconPlasma } from '@salutejs/plasma-icons';
import {
    component,
    horizontalTabsConfig,
    horizontalTabItemConfig,
    horizontalIconTabItemConfig,
    verticalTabsConfig,
    verticalTabItemConfig,
    verticalIconTabItemConfig,
    mergeConfig,
} from '@salutejs/plasma-new-hope/styled-components';
import { useState } from 'react';

const HorizontalTabs = component(mergeConfig(horizontalTabsConfig as any, {}));
const VerticalTabs = component(mergeConfig(verticalTabsConfig as any, {}));
const HorizontalTabItem = component(mergeConfig(horizontalTabItemConfig as any, {}));
const VerticalTabItem = component(mergeConfig(verticalTabItemConfig as any, {}));
const HorizontalIconTabItem = component(mergeConfig(horizontalIconTabItemConfig as any, {}));
const VerticalIconTabItem = component(mergeConfig(verticalIconTabItemConfig as any, {}));

const containerView = (view?: string) => (view === 'default' || view === 'secondary' ? 'clear' : view);

const TabItemDefault = {
    name: 'Default',
    args: [
        {
            name: 'label',
            value: 'Label',
        },
        {
            name: 'value',
            value: '',
        },
        {
            name: 'itemQuantity',
            value: 1,
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
            name: 'disabled',
            value: false,
        },
        {
            name: 'enableContentLeft',
            value: false,
        },
        {
            name: 'enableContentRight',
            value: false,
        },
    ],
    render: function Story(args: any) {
        const [index, setIndex] = useState(0);
        const { label, value, itemQuantity, enableContentLeft, enableContentRight, ...rest } = args;
        const vertical = rest.orientation === 'vertical';
        const Tabs = vertical ? VerticalTabs : HorizontalTabs;
        const TabItem = vertical ? VerticalTabItem : HorizontalTabItem;
        const count = Math.max(1, Number(itemQuantity) || 1);

        return (
            <Tabs orientation={rest.orientation} size={rest.size} view={containerView(rest.view)} pilled={rest.pilled}>
                {Array.from({ length: count }, (_, i) => (
                    <TabItem
                        key={`item:${i}`}
                        {...rest}
                        value={value || undefined}
                        selected={i === index}
                        itemIndex={i}
                        contentLeft={enableContentLeft ? <IconPlasma size="s" color="inherit" /> : undefined}
                        contentRight={enableContentRight ? <IconPlasma size="s" color="inherit" /> : undefined}
                        onClick={() => setIndex(i)}
                    >
                        {count > 1 ? `${label} ${i + 1}` : label}
                    </TabItem>
                ))}
            </Tabs>
        );
    },
};

const IconTabItemDefault = {
    name: 'Default',
    args: [
        {
            name: 'itemQuantity',
            value: 1,
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
            name: 'disabled',
            value: false,
        },
    ],
    render: function Story(args: any) {
        const [index, setIndex] = useState(0);
        const { itemQuantity, ...rest } = args;
        const vertical = rest.orientation === 'vertical';
        const Tabs = vertical ? VerticalTabs : HorizontalTabs;
        const IconTabItem = vertical ? VerticalIconTabItem : HorizontalIconTabItem;
        const count = Math.max(1, Number(itemQuantity) || 1);

        return (
            <Tabs orientation={rest.orientation} size={rest.size} view={containerView(rest.view)}>
                {Array.from({ length: count }, (_, i) => (
                    <IconTabItem
                        key={`item:${i}`}
                        {...rest}
                        selected={i === index}
                        itemIndex={i}
                        onClick={() => setIndex(i)}
                    >
                        <IconPlasma size={rest.size === 'xs' ? 'xs' : 's'} color="inherit" />
                    </IconTabItem>
                ))}
            </Tabs>
        );
    },
};

export const TabItemStories = [TabItemDefault];
export const IconTabItemStories = [IconTabItemDefault];

import { chipGroupConfig, component, mergeConfig } from '@salutejs/plasma-new-hope/styled-components';

const ChipGroup = component(mergeConfig(chipGroupConfig as any, {}));

const ChipGroupDefault = {
    name: 'Default',
    args: [
        {
            name: 'itemsCount',
            value: 5,
        },
        {
            name: 'isCommonChipStyles',
            value: true,
        },
        {
            name: 'isWrapped',
            value: false,
        },
    ],
    render: function Story({ relatedComponents, ...args }: any) {
        const { Chip } = relatedComponents;
        const { itemsCount, ...rest } = args;
        const count = Math.max(1, Number(itemsCount) || 1);

        return (
            <ChipGroup {...rest}>
                {Array.from({ length: count }, (_, i) => (
                    <Chip key={`chip:${i}`} text={`Chip ${i}`} hasClear={false} />
                ))}
            </ChipGroup>
        );
    },
};

export const ChipGroupStories = [ChipGroupDefault];

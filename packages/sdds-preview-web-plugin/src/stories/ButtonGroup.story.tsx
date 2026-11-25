import { buttonGroupConfig, component, mergeConfig } from '@salutejs/plasma-new-hope/styled-components';

const ButtonGroup = component(mergeConfig(buttonGroupConfig as any, {}));

const ButtonGroupDefault = {
    name: 'Default',
    args: [
        {
            name: 'itemsCount',
            value: 5,
        },
        {
            name: 'isCommonButtonStyles',
            value: true,
        },
    ],
    render: function Story({ relatedComponents, ...args }: any) {
        const { Button } = relatedComponents;
        const { itemsCount, ...rest } = args;
        const count = Math.max(1, Number(itemsCount) || 1);

        return (
            <ButtonGroup {...rest}>
                {Array.from({ length: count }, (_, i) => (
                    <Button key={`item:${i}`} text={`Button ${i}`} />
                ))}
            </ButtonGroup>
        );
    },
};

export const ButtonGroupStories = [ButtonGroupDefault];

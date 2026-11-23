import { IconPlasma } from '@salutejs/plasma-icons';
import { component, emptyStateConfig, mergeConfig } from '@salutejs/plasma-new-hope/styled-components';

const EmptyState = component(mergeConfig(emptyStateConfig as any, {}));

const EmptyStateDefault = {
    name: 'Default',
    args: [
        {
            name: 'description',
            value: 'Описание',
        },
        {
            name: 'buttonText',
            value: 'Кнопка',
        },
        {
            name: 'enableIcon',
            value: true,
        },
    ],
    render: function Story(args: any) {
        return <EmptyState {...args} icon={args.enableIcon ? <IconPlasma size="s" /> : undefined} />;
    },
};

export const EmptyStateStories = [EmptyStateDefault];

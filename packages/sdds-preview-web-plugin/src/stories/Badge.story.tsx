import { IconPlasma, IconShazam } from '@salutejs/plasma-icons';
import { component, badgeConfig, mergeConfig } from '@salutejs/plasma-new-hope/styled-components';

const Badge = component(mergeConfig(badgeConfig as any, {}));

const BadgeDefault = {
    name: 'Default',
    args: [
        {
            name: 'text',
            value: 'Text',
        },
        {
            name: 'clear',
            value: false,
        },
        {
            name: 'transparent',
            value: false,
        },
        {
            name: 'maxWidth',
            value: '100px',
        },
        {
            name: 'enableContentLeft',
            value: true,
        },
        {
            name: 'enableContentRight',
            value: false,
        },
    ],
    render: function Story(args: any) {
        return (
            <Badge
                {...args}
                contentLeft={args.enableContentLeft ? <IconPlasma color="inherit" size="xs" /> : undefined}
                contentRight={args.enableContentRight ? <IconShazam color="inherit" size="xs" /> : undefined}
            />
        );
    },
};

export const BadgeStories = [BadgeDefault];

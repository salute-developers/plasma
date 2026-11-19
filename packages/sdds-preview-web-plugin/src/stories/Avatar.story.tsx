import { avatarConfig, component, mergeConfig } from '@salutejs/plasma-new-hope/styled-components';

const Avatar = component(mergeConfig(avatarConfig as any, {}));

const toItems = (values: string[]) => values.map((value) => ({ value, label: value }));

const AvatarDefault = {
    name: 'Default',
    args: [
        {
            name: 'name',
            value: 'Иван Фадеев',
        },
        {
            name: 'url',
            value: 'https://avatars.githubusercontent.com/u/1813468?v=4',
        },
        {
            name: 'status',
            value: 'active',
            items: toItems(['active', 'inactive']),
        },
        {
            name: 'isScalable',
            value: false,
        },
        {
            name: 'hasExtra',
            value: false,
        },
        {
            name: 'type',
            value: 'counter',
            items: toItems(['badge', 'counter']),
        },
        {
            name: 'extraPlacement',
            value: 'top-right',
            items: toItems(['top-left', 'top-right', 'bottom-left', 'bottom-right']),
        },
        {
            name: 'count',
            value: 3,
        },
        {
            name: 'maxCount',
            value: 10,
        },
        {
            name: 'text',
            value: '31',
        },
        {
            name: 'isPilled',
            value: true,
        },
    ],
    render: function Story(args: any) {
        const { isPilled, count, maxCount, ...rest } = args;

        return <Avatar {...rest} pilled={isPilled} count={Number(count) || 0} maxCount={Number(maxCount) || 0} />;
    },
};

const AvatarAccessibility = {
    name: 'Accessibility',
    args: [
        {
            name: 'name',
            value: 'Иван Фадеев',
        },
        {
            name: 'status',
            value: 'active',
            items: toItems(['active', 'inactive']),
        },
        {
            name: 'hasExtra',
            value: false,
        },
        {
            name: 'type',
            value: 'counter',
            items: toItems(['badge', 'counter']),
        },
        {
            name: 'count',
            value: 3,
        },
        {
            name: 'maxCount',
            value: 10,
        },
        {
            name: 'text',
            value: '31',
        },
    ],
    render: function Story(args: any) {
        const { count, maxCount, ...rest } = args;

        return (
            <Avatar {...rest} role="button" tabIndex={0} count={Number(count) || 0} maxCount={Number(maxCount) || 0} />
        );
    },
};

export const AvatarStories = [AvatarDefault, AvatarAccessibility];

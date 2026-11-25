import { CSSProperties } from 'styled-components';
import { avatarGroupConfig, avatarTokens, component, mergeConfig } from '@salutejs/plasma-new-hope/styled-components';

const AvatarGroup = component(mergeConfig(avatarGroupConfig as any));

const AvatarGroupDefault = {
    name: 'Default',
    args: [
        {
            name: 'itemsCount',
            value: 5,
        },
    ],
    render: function Story({ relatedComponents, ...args }: any) {
        const { Avatar } = relatedComponents;
        const { itemsCount, ...rest } = args;
        const count = Math.max(1, Number(itemsCount) || 1);

        return (
            <AvatarGroup {...rest}>
                {Array.from({ length: count }, (_, i) => (
                    <Avatar key={`avatar:${i}`} size="xxl" url="https://avatars.githubusercontent.com/u/1813468?v=4" />
                ))}
            </AvatarGroup>
        );
    },
};

const digitStyle = { [avatarTokens.color]: 'var(--text-primary)' } as CSSProperties;

const AvatarGroupDynamicSize = {
    name: 'DynamicSize',
    args: [
        {
            name: 'totalCount',
            value: 10,
        },
        {
            name: 'visibleCount',
            value: 3,
        },
    ],
    render: function Story({ relatedComponents, ...args }: any) {
        const { Avatar } = relatedComponents;
        const { totalCount, visibleCount, ...rest } = args;
        const total = Math.max(0, Number(totalCount) || 0);
        const visible = Math.max(0, Math.min(total, Number(visibleCount) || 0));

        return (
            <AvatarGroup {...rest}>
                {Array.from({ length: visible }, (_, i) => (
                    <Avatar key={`avatar:${i}`} size="xxl" customText={String(i + 1)} style={digitStyle} />
                ))}
                {total > visible && <Avatar size="xxl" customText={`+${total - visible}`} style={digitStyle} />}
            </AvatarGroup>
        );
    },
};

export const AvatarGroupStories = [AvatarGroupDefault, AvatarGroupDynamicSize];

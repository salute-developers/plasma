import { component, linkConfig, mergeConfig } from '@salutejs/plasma-new-hope/styled-components';

const Link = component(mergeConfig(linkConfig as any, {}));

const LinkDefault = {
    name: 'Default',
    args: [
        {
            name: 'disabled',
            value: false,
        },
        {
            name: 'target',
            value: '_blank',
        },
        {
            name: 'href',
            value: 'https://google.com',
        },
        {
            name: 'text',
            value: 'Hello',
        },
    ],
    render: function Story(args: any) {
        const onClick = () => {
            alert('onClick');
        };

        return (
            <Link onClick={onClick} {...args}>
                {args.text}
            </Link>
        );
    },
};

export const LinkStories = [LinkDefault];

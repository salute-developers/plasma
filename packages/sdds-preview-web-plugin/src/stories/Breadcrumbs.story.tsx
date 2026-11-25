import { breadcrumbsConfig, component, mergeConfig } from '@salutejs/plasma-new-hope/styled-components';

const Breadcrumbs = component(mergeConfig(breadcrumbsConfig as any, {}));

const items = [
    { title: 'Home', href: '/' },
    { title: 'About us', href: '/' },
    { title: 'Catalog', href: '/' },
    { title: 'Contacts' },
];

const BreadcrumbsDefault = {
    name: 'Default',
    args: [
        {
            name: 'showItems',
            value: 2,
        },
        {
            name: 'separator',
            value: '/',
        },
    ],
    render: function Story(args: any) {
        const { showItems, separator, ...rest } = args;

        return (
            <Breadcrumbs
                {...rest}
                items={items}
                showItems={Number(showItems) || undefined}
                separator={separator || undefined}
            />
        );
    },
};

const BreadcrumbsCustomShorter = {
    name: 'CustomShorter',
    args: [],
    render: function Story(args: any) {
        const shorterItems = [
            { title: 'Home', href: '/' },
            { title: 'About us', href: '/' },
            { renderItem: () => <span style={{ cursor: 'pointer' }}>...</span> },
            { title: 'Contacts' },
        ];

        return <Breadcrumbs {...args} items={shorterItems} />;
    },
};

export const BreadcrumbsStories = [BreadcrumbsDefault, BreadcrumbsCustomShorter];

import React from 'react';

export const createDefaultStory = (Breadcrumbs: any) => {
    return (args: any) => <Breadcrumbs {...args} />;
};

export const createCustomShorterStory = (Breadcrumbs: any, Dropdown: React.ComponentType<any>) => {
    return ({ size, ...rest }: any) => {
        const items = [
            { title: 'Home', href: '/' },
            { title: 'About as', href: '/' },
            {
                renderItem: () => (
                    <Dropdown
                        variant="tight"
                        placement="bottom"
                        items={[
                            { value: 'Custom Item 1', label: 'Custom Item 1' },
                            { value: 'Custom Item 2', label: 'Custom Item 2' },
                        ]}
                        trigger="hover"
                        size={size}
                    >
                        <span>...</span>
                    </Dropdown>
                ),
            },
            { title: 'Contacts' },
        ];

        return <Breadcrumbs {...rest} size={size} items={items} />;
    };
};

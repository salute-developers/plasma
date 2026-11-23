import { IconChevronRight } from '@salutejs/plasma-icons';
import { component, listConfig, ListItem, mergeConfig } from '@salutejs/plasma-new-hope/styled-components';
import styled from 'styled-components';

const List = component(mergeConfig(listConfig as any, {}));

const ChevronRight = styled(IconChevronRight)`
    transform: rotate(0deg);
`;

const ListDefault = {
    name: 'Default',
    args: [
        {
            name: 'disabled',
            value: false,
        },
        {
            name: 'variant',
            value: 'normal',
            items: [
                {
                    value: 'normal',
                    label: 'normal',
                },
                {
                    value: 'tight',
                    label: 'tight',
                },
            ],
        },
    ],
    render: function Story(args: any) {
        return (
            <div style={{ width: '20rem' }}>
                <List {...args}>
                    <ListItem contentRight={<ChevronRight color="inherit" size="xs" />}>Test Item 1</ListItem>
                    <ListItem contentRight={<ChevronRight color="inherit" size="xs" />}>Test Item 2</ListItem>
                    <ListItem contentRight={<ChevronRight color="inherit" size="xs" />} disabled>
                        Test Item 3
                    </ListItem>
                    <ListItem contentRight={<ChevronRight color="inherit" size="xs" />}>Test Item 4</ListItem>
                </List>
            </div>
        );
    },
};

export const ListStories = [ListDefault];

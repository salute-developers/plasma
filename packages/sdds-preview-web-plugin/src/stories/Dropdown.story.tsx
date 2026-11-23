import { component, dropdownConfig, mergeConfig } from '@salutejs/plasma-new-hope/styled-components';

import { regionItems } from './fixtures/regions';

const Dropdown = component(mergeConfig(dropdownConfig as any, {}));

const placements = ['top', 'top-start', 'top-end', 'bottom', 'bottom-start', 'bottom-end', 'left', 'right', 'auto'];
const toItems = (values: string[]) => values.map((value) => ({ value, label: value }));

const DropdownDefault = {
    name: 'Default',
    args: [
        {
            name: 'variant',
            value: 'normal',
            items: toItems(['normal', 'tight']),
        },
        {
            name: 'placement',
            value: 'bottom',
            items: toItems(placements),
        },
        {
            name: 'trigger',
            value: 'click',
            items: toItems(['click', 'hover']),
        },
        {
            name: 'listWidth',
            value: '300px',
        },
        {
            name: 'alwaysOpened',
            value: true,
        },
        {
            name: 'closeOnOverlayClick',
            value: true,
        },
        {
            name: 'closeOnSelect',
            value: true,
        },
        {
            name: 'openByRightClick',
            value: false,
        },
    ],
    render: function Story({ relatedComponents, ...args }: any) {
        const { Button } = relatedComponents;
        const { ...rest } = args;
        return (
            <div style={{ padding: '1rem 1rem 16rem' }}>
                <Dropdown {...rest} items={regionItems} offset={[0, 8]}>
                    <Button text="Список стран" />
                </Dropdown>
            </div>
        );
    },
};

export const DropdownStories = [DropdownDefault];

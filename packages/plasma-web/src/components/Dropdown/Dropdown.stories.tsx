import React, { useState } from 'react';
import styled from 'styled-components';
import type { StoryObj, Meta } from '@storybook/react';
import { accent, success, warning, critical } from '@salutejs/plasma-core';
import { IconEye, IconMagicWand, IconAccessibility, IconHeart, IconTrash, IconLocation } from '@salutejs/plasma-icons';
import { action } from '@storybook/addon-actions';
import { InSpacingDecorator } from '@salutejs/plasma-sb-utils';

import { Button } from '../Button';

import { Dropdown, DropdownList, DropdownItem, DropdownPopup } from '.';
import type { DropdownProps } from '.';

const meta: Meta<DropdownProps> = {
    title: 'Controls/Dropdown',
    component: Dropdown,
    decorators: [InSpacingDecorator],
};

export default meta;

const Styled25Rem = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    width: 25rem;
`;

const StyledDashedBorder = styled.div`
    padding: 0.25rem;
    border: 1px dashed #00000030;
    border-radius: 0.75rem;
`;

const items = [
    { value: 'each', label: 'Каждый' },
    { value: 'hunter', label: 'Охотник' },
    {
        value: 'wants',
        label: 'Желает',
        contentLeft: <IconHeart color="inherit" />,
        items: [
            { value: '_nestedLabel', label: 'Лейбл во вложенном списке' },
            { value: '_thePheasant', label: 'Фазан' },
            { value: '_is', label: 'Сидит' },
        ],
    },
    { value: 'toKnow', label: 'Знать', isDisabled: true, contentLeft: <IconEye color="inherit" /> },
    { value: 'where', label: 'Где', color: accent, contentLeft: <IconLocation color="inherit" /> },
    { value: 'is', label: 'Сидит', color: success, contentLeft: <IconAccessibility color="inherit" /> },
    { value: 'thePheasant', label: 'Фазан', color: warning, contentLeft: <IconMagicWand color="inherit" /> },
    {
        value: 'fullLabel',
        label: 'Длинный лейбл: каждый охотник желает знать, где сидит фазан',
        contentLeft: <IconTrash color="inherit" />,
        color: critical,
    },
];

export const Trigger = () => {
    return (
        <Styled25Rem>
            <StyledDashedBorder>
                <Dropdown
                    id="example-dropdown-click"
                    items={items}
                    trigger="click"
                    placement="bottom"
                    onItemSelect={action('onItemSelect')}
                >
                    <Button text="Нажмите" stretching="filled" />
                </Dropdown>
            </StyledDashedBorder>

            <StyledDashedBorder>
                <Dropdown
                    id="example-dropdown-hover"
                    items={items}
                    trigger="hover"
                    placement={['top', 'bottom']}
                    onItemSelect={action('onItemSelect')}
                >
                    <Button text="Наведите" stretching="filled" />
                </Dropdown>
            </StyledDashedBorder>
        </Styled25Rem>
    );
};

const placements = ['top', 'bottom', 'left', 'right', 'auto', ['left', 'right']];

export const Placements: StoryObj<DropdownProps> = {
    args: {
        placement: 'bottom',
    },
    argTypes: {
        placement: {
            options: placements,
            control: {
                type: 'select',
            },
            mapping: {
                top: 'top',
                bottom: 'bottom',
                right: 'right',
                left: 'left',
                auto: 'auto',
            },
        },
    },
    render: (args) => {
        const placement = args.placement?.includes(',') ? args.placement?.split(',') : args.placement;

        return (
            <div style={{ width: '300px' }}>
                <Dropdown id="example-dropdown-placements1" items={items} placement={placement}>
                    <Button text="Меню" stretching="filled" />
                </Dropdown>
            </div>
        );
    },
};

export const Composition = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div
            style={{
                height: '350px',
                display: 'block',
            }}
        >
            <DropdownPopup
                isOpen={isOpen}
                trigger="click"
                placement="bottom"
                onToggle={(is) => setIsOpen(is)}
                disclosure={<Button text="Меню" />}
            >
                <DropdownList>
                    <DropdownItem
                        index={5}
                        value={100001}
                        label="Новости"
                        onHover={(index) => console.log(index)}
                        isActive
                    />
                    <DropdownItem value={100002} label="Каталог" color="var(--plasma-colors-accent)" />
                    <DropdownItem
                        value={100003}
                        label="О нас"
                        color="var(--plasma-colors-critical)"
                        contentLeft={<IconHeart color="inherit" />}
                    />
                    <DropdownItem value={100004} label="Недоступно" isDisabled />
                </DropdownList>
            </DropdownPopup>
        </div>
    );
};

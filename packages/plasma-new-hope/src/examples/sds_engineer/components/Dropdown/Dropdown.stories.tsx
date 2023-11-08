import React, { useRef, useState } from 'react';
import type { ComponentProps } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { styled } from '@linaria/react';
import { css } from '@linaria/core';
import { action } from '@storybook/addon-actions';

import { WithTheme, argTypesFromConfig } from '../../../_helpers';
import { mergeConfig } from '../../../../engines';
import { dropdownConfig } from '../../../../components/Dropdown';
import { Checkbox } from '../Checkbox/Checkbox';
import { Radiobox } from '../Radiobox/Radiobox';
import { Button } from '../Button/Button';

import { Dropdown, DropdownDivider, DropdownFooter, DropdownGroup, DropdownHeader, DropdownItem } from './Dropdown';
import { config } from './Dropdown.config';

type StoryDropdownPropsCustom = {
    skidding?: number;
    distance?: number;
};

type StoryDropdownProps = ComponentProps<typeof Dropdown> & StoryDropdownPropsCustom;

const placements: Array<string> = ['top', 'bottom', 'right', 'left', 'auto'];
const triggers: Array<string> = ['click', 'hover'];

const meta: Meta<StoryDropdownProps> = {
    title: 'sds_engineer/Dropdown',
    decorators: [WithTheme],
    component: Dropdown,
    argTypes: {
        placement: {
            options: placements,
            control: {
                type: 'select',
            },
        },
        trigger: {
            options: triggers,
            control: {
                type: 'select',
            },
        },
        ...argTypesFromConfig(mergeConfig(dropdownConfig, config)),
    },
    args: {
        placement: 'bottom',
        trigger: 'click',
        closeOnOverlayClick: true,
        closeOnEsc: true,
        isFocusTrapped: true,
        skidding: 0,
        distance: 6,
    },
};

export default meta;

const StyledCheckbox = styled(Checkbox)`
    margin-left: 0rem;
    margin-bottom: 0rem;
`;

const StyledRadiobox = styled(Radiobox)`
    margin-left: 0rem;
    margin-bottom: 0rem;
`;

const headerClass = css`
    text-transform: uppercase;
    color: rgba(23, 23, 23, 0.56);
`;

const TrashIcon = (props) => (
    <svg width="100%" viewBox="0 0 24 24" fill="none" {...props}>
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8 5.5A2.5 2.5 0 0110.5 3h3A2.5 2.5 0 0116 5.5V6h-2v-.5a.5.5 0 00-.5-.5h-3a.5.5 0 00-.5.5V6H8v-.5zM4 8a1 1 0 011-1h14a1 1 0 110 2h-1v9.5a2.5 2.5 0 01-2.5 2.5h-7A2.5 2.5 0 016 18.5V9H5a1 1 0 01-1-1z"
            fill="currentColor"
        />
    </svg>
);

const StyledTrashIcon = styled(TrashIcon)`
    width: 1.25rem;
    height: 1.25rem;
`;

const onChange = action('onChange');
const onSelect = action('onSelect');
const onClick = action('onClick');

const dropdownItems = [...Array(4).keys()].map((num) => ({
    value: `item_${num}`,
    child: `Item ${num}`,
}));

const StoryDefault = (args: StoryDropdownProps) => {
    const [selected, setSelected] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    const [isOpenDropdown2, setIsOpenDropdown2] = useState(false);

    const onMainClose = () => {
        setIsOpen(false);
        setIsOpenDropdown2(false);
    };

    const onMainToggle = (openValue: boolean) => {
        setIsOpen(openValue);

        if (!openValue) {
            onMainClose();
        }
    };

    const handleSelect = (value: string, text: string) => {
        setSelected(value);
        onSelect(value, text);
    };

    return (
        <div>
            <h3>This is header</h3>
            <Dropdown target={<Button>Target</Button>} isOpen={isOpen} onToggle={onMainToggle} {...args}>
                <DropdownHeader className={headerClass}>Header</DropdownHeader>
                <DropdownDivider />
                {dropdownItems.map((item) => (
                    <DropdownItem
                        key={item.value}
                        isSelected={item.value === selected}
                        onSelect={() => handleSelect(item.value, item.child)}
                        onClick={onClick}
                        value={item.value}
                    >
                        {item.child}
                    </DropdownItem>
                ))}
                <Dropdown
                    target={<DropdownItem>Nested dropdown ➞</DropdownItem>}
                    onToggle={(is) => setIsOpenDropdown2(is)}
                    isOpen={isOpenDropdown2}
                    offset={[0, 0]}
                    isNested
                >
                    <DropdownGroup label="This is radiogroup">
                        <DropdownItem
                            contentLeft={StyledRadiobox}
                            name="test"
                            value="1"
                            onChange={onChange}
                            text="Nested 1"
                        />

                        <DropdownItem
                            contentLeft={StyledRadiobox}
                            name="test"
                            value="2"
                            onChange={onChange}
                            text="Nested 2"
                        />
                        <DropdownItem
                            contentLeft={StyledRadiobox}
                            name="test"
                            value="3"
                            onChange={onChange}
                            text="Nested 3"
                        />
                    </DropdownGroup>
                    <DropdownItem contentLeft={StyledCheckbox} text="Nested 4" />
                    <DropdownItem contentRight={StyledCheckbox} text="Nested 5" />

                    <DropdownItem contentLeft={StyledTrashIcon} text="Nested 6" />
                    <Button onClick={() => setIsOpenDropdown2(false)}>Close nested</Button>
                </Dropdown>

                <DropdownItem onClick={onClick} value="disabled" disabled>
                    disabled
                </DropdownItem>

                <DropdownGroup label="Group">
                    <DropdownItem
                        contentLeft={StyledRadiobox}
                        name="test"
                        value="1"
                        disabled
                        onChange={onChange}
                        text="Disabled 1"
                    />

                    <DropdownItem name="test" value="2" disabled text="Disabled group 2" />
                </DropdownGroup>

                <DropdownDivider />
                <DropdownFooter className={headerClass}>Footer</DropdownFooter>
            </Dropdown>
        </div>
    );
};

export const Default: StoryObj<StoryDropdownProps> = {
    render: (args) => <StoryDefault {...args} />,
};

const StoryContextMenu = (args: StoryDropdownProps) => {
    const [contextPosition, setContextPosition] = useState([0, 0]);
    const dropdownRef = useRef<HTMLDivElement | null>(null);
    const [selected, setSelected] = useState('');
    const [isOpen, setIsOpen] = useState(false);

    const onMainToggle = (openValue: boolean) => {
        setIsOpen(openValue);
    };

    const handleSelect = (value: string, text: string) => {
        setSelected(value);
        onSelect(value, text);
        setIsOpen(false);
    };

    const onClickAway = (event: React.MouseEvent<HTMLDivElement>) => {
        event.preventDefault();
        if (dropdownRef?.current && !dropdownRef.current?.contains(event.target as Element)) {
            setIsOpen(false);
        }
    };

    const onContextMenu = (event: React.MouseEvent<HTMLDivElement>) => {
        event.preventDefault();

        const { clientX, clientY } = event;

        setContextPosition([clientX, clientY]);
        setIsOpen(true);
    };

    return (
        <div
            style={{
                width: '100%',
                height: '100%',
                background: 'gainsboro',
            }}
            onClick={onClickAway}
            onContextMenu={onContextMenu}
        >
            <div>Right-click the mouse button - to open</div>
            <div>Left-click the mouse button - to close</div>
            <div
                ref={dropdownRef}
                style={{ position: 'absolute', top: `${contextPosition[1]}px`, left: `${contextPosition[0]}px` }}
            >
                <Dropdown isOpen={isOpen} onToggle={onMainToggle} {...args}>
                    <DropdownHeader className={headerClass}>Header</DropdownHeader>
                    <DropdownDivider />
                    {dropdownItems.map((item) => (
                        <DropdownItem
                            key={item.value}
                            isSelected={item.value === selected}
                            onSelect={() => handleSelect(item.value, item.child)}
                            onClick={onClick}
                            value={item.value}
                        >
                            {item.child}
                        </DropdownItem>
                    ))}
                    <DropdownDivider />
                    <DropdownFooter className={headerClass}>Footer</DropdownFooter>
                </Dropdown>
            </div>
        </div>
    );
};

export const ContextMenu: StoryObj<StoryDropdownProps> = {
    render: (args) => <StoryContextMenu {...args} />,
};

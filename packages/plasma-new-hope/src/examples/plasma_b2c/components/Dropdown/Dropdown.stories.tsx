import React, { useState } from 'react';
import { Meta, Story } from '@storybook/react';
import { styled } from '@linaria/react';

import { WithTheme, argTypesFromConfig } from '../../../_helpers';
import { mergeConfig } from '../../../../engines';
import { dropdownConfig } from '../../../../components/Dropdown';
import { Checkbox } from '../Checkbox/Checkbox';
import { Radiobox } from '../Radiobox/Radiobox';

import { Dropdown } from './Dropdown';
import { DropdownHeader } from './DropdownHeader';
import { DropdownGroup } from './DropdownGroup';
import { DropdownItem } from './DropdownItem';
import { DropdownDivider } from './DropdownDivider';
import { DropdownFooter } from './DropdownFooter';
import { config } from './Dropdown.config';

const placements: Array<string> = ['top', 'bottom', 'right', 'left', 'auto'];
const triggers: Array<string> = ['click', 'hover'];

type DropdownStoryProps = {
    skidding?: number;
    distance?: number;
};

export default ({
    title: 'plasma_b2c/Dropdown',
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
} as unknown) as Meta<typeof Dropdown>;

const StyledCheckbox = styled(Checkbox)`
    /* Скорее всего это нужно перенести в конфиг checkbox'a и radiobutton'а */
    margin-left: 0rem;
    margin-bottom: 0rem;
`;

const StyledRadiobox = styled(Radiobox)`
    /* Скорее всего это нужно перенести в конфиг checkbox'a и radiobutton'а */
    margin-left: 0rem;
    margin-bottom: 0rem;
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

/*
Компоненты
    Dropdown
    [ ] -

    DropdownItem
    [ ] -
    [ ] - * минор * Попробовать реализовать изомфорную типизацию в зависимости от прокинутого компонента

    DropdownGroup
    [ ] -

    DropdownHeader
    [ ] -

    DropdownFooter
    [ ] -

    DropdownDivider
    [x] - Придумать визуальное API (токены и конфиг)
    [x] - Реализовать визуальное API
    [ ] - Придумать функциональное API (пропсы)
    [ ] - Реализовать функциональное API
    [ ] - Покрыть всё типами

    Идеи
    [ ] - Можно ли реализовать простое API, которое позволит делать "вложенные" дропдауны
*/

export const Default: Story<typeof Dropdown & DropdownStoryProps> = (args) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isOpenDropdown2, setIsOpenDropdown2] = useState(false);
    const [isOpenDropdown3, setIsOpenDropdown3] = useState(false);

    const onMainClose = () => {
        setIsOpen(false);
        setIsOpenDropdown2(false);
        setIsOpenDropdown3(false);
    };

    const onMainToggle = (value: boolean) => {
        setIsOpen(value);

        if (value === false) {
            setIsOpen(false);
            setIsOpenDropdown2(false);
            setIsOpenDropdown3(false);
        }
    };

    const onChange = (event: any) => {
        console.log('onChange event', event.target.checked, event.target.value);
    };

    const [selected, setSelected] = useState(false);

    const onSelect = (value: boolean) => {
        console.log('onSelect value', value);

        setSelected(value);
    };

    return (
        <div>
            <h3>This is header</h3>
            <div>
                <Dropdown target={<>Target</>} isOpen={isOpen} onToggle={onMainToggle} {...args}>
                    <DropdownHeader>This is dropdown header</DropdownHeader>
                    <DropdownItem selected={selected} onSelect={onSelect}>
                        Item 1 (selectable)
                    </DropdownItem>
                    <DropdownItem disabled>Item 2</DropdownItem>
                    <DropdownDivider />
                    <DropdownItem onMouseEnter={() => setIsOpenDropdown2(true)}>Item 3 ➞</DropdownItem>
                    <DropdownItem>Item 4</DropdownItem>
                    <DropdownItem>Item 5</DropdownItem>
                    <DropdownGroup label="This is group">
                        <DropdownItem>Item 6</DropdownItem>
                        <DropdownItem>Item 7</DropdownItem>
                        <DropdownItem>Item 8</DropdownItem>
                    </DropdownGroup>
                    <DropdownFooter>
                        Footer{' '}
                        <button type="button" onClick={onMainClose}>
                            close
                        </button>
                    </DropdownFooter>
                </Dropdown>

                <Dropdown offset={[260, 92]} isOpen={isOpenDropdown2}>
                    <DropdownItem>Item 3.1</DropdownItem>
                    <DropdownItem disabled>Item 3.2</DropdownItem>
                    <DropdownItem onMouseEnter={() => setIsOpenDropdown3(true)}>Item 3.3 ➞</DropdownItem>
                    <DropdownItem disabled>Item 3.4</DropdownItem>
                    <DropdownItem>Item 3.5</DropdownItem>
                    <button
                        type="button"
                        onClick={() => {
                            setIsOpenDropdown2(false);
                            setIsOpenDropdown3(false);
                        }}
                    >
                        close
                    </button>
                </Dropdown>

                <Dropdown offset={[520, 128]} isOpen={isOpenDropdown3}>
                    <DropdownItem>
                        <StyledCheckbox label="Item 3.3.1" />
                    </DropdownItem>
                    <DropdownItem>
                        <StyledRadiobox label="Item 3.3.2" />
                    </DropdownItem>
                    <DropdownDivider />
                    <DropdownItem contentLeft={StyledCheckbox} text="Item 3.3.3" />
                    <DropdownItem contentRight={StyledCheckbox} text="Item 3.3.4" />
                    <DropdownItem
                        contentLeft={StyledCheckbox}
                        contentRight={StyledCheckbox}
                        onChange={onChange}
                        value="item-3-3-5"
                        text="Item 3.3.5"
                    />
                    <DropdownGroup label="This is radiogroup">
                        <DropdownItem
                            contentLeft={StyledRadiobox}
                            name="test"
                            value="1"
                            onChange={onChange}
                            text="Item 3.3.6"
                        />

                        <DropdownItem
                            contentLeft={StyledRadiobox}
                            name="test"
                            value="2"
                            onChange={onChange}
                            text="Item 3.3.7"
                        />
                        <DropdownItem
                            contentLeft={StyledRadiobox}
                            name="test"
                            value="3"
                            onChange={onChange}
                            text="Item 3.3.8"
                        />
                    </DropdownGroup>
                    <DropdownItem contentLeft={StyledTrashIcon} text="Item 3.3.9" />
                    <button type="button" onClick={() => setIsOpenDropdown3(false)}>
                        close
                    </button>
                </Dropdown>
            </div>
        </div>
    );
};

export const ContextMenu: Story<typeof Dropdown & DropdownStoryProps> = (args) => {
    const [contextPosition, setContextPosition] = useState([0, 0]);

    const [isOpen, setIsOpen] = useState(false);
    const [isOpenDropdown2, setIsOpenDropdown2] = useState(false);
    const [isOpenDropdown3, setIsOpenDropdown3] = useState(false);

    const onMainClose = () => {
        setIsOpen(false);
        setIsOpenDropdown2(false);
        setIsOpenDropdown3(false);
    };

    const onMainToggle = (value: boolean) => {
        setIsOpen(value);

        if (value === false) {
            setIsOpen(false);
            setIsOpenDropdown2(false);
            setIsOpenDropdown3(false);
        }
    };

    const onClick = (event: React.MouseEvent<HTMLDivElement>) => {
        event.preventDefault();

        onMainClose();
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
            onClick={onClick}
            onContextMenu={onContextMenu}
        >
            <div>Right-click the mouse button - to open</div>
            <div>Left-click the mouse button - to close</div>
            <div style={{ position: 'absolute', top: `${contextPosition[1]}px`, left: `${contextPosition[0]}px` }}>
                <Dropdown isOpen={isOpen} onToggle={onMainToggle} {...args}>
                    <DropdownHeader>This is dropdown header</DropdownHeader>
                    <DropdownItem>Item 1</DropdownItem>
                    <DropdownItem disabled>Item 2</DropdownItem>
                    <DropdownDivider />
                    <DropdownItem onMouseEnter={() => setIsOpenDropdown2(true)}>Item 3 ➞</DropdownItem>
                    <DropdownItem>Item 4</DropdownItem>
                    <DropdownItem>Item 5</DropdownItem>
                    <DropdownGroup label="This is group">
                        <DropdownItem>Item 6</DropdownItem>
                        <DropdownItem>Item 7</DropdownItem>
                        <DropdownItem>Item 8</DropdownItem>
                    </DropdownGroup>
                    <DropdownFooter>
                        Footer{' '}
                        <button type="button" onClick={onMainClose}>
                            close
                        </button>
                    </DropdownFooter>
                </Dropdown>

                <Dropdown offset={[260, 92]} isOpen={isOpenDropdown2}>
                    <DropdownItem>Item 3.1</DropdownItem>
                    <DropdownItem disabled>Item 3.2</DropdownItem>
                    <DropdownItem onMouseEnter={() => setIsOpenDropdown3(true)}>Item 3.3 ➞</DropdownItem>
                    <DropdownItem disabled>Item 3.4</DropdownItem>
                    <DropdownItem>Item 3.5</DropdownItem>
                    <button
                        type="button"
                        onClick={() => {
                            setIsOpenDropdown2(false);
                            setIsOpenDropdown3(false);
                        }}
                    >
                        close
                    </button>
                </Dropdown>

                <Dropdown offset={[520, 128]} isOpen={isOpenDropdown3}>
                    <DropdownItem>Item 3.3.1</DropdownItem>
                    <DropdownItem>Item 3.3.2</DropdownItem>
                    <DropdownDivider />
                    <DropdownItem>Item 3.3.3</DropdownItem>
                    <DropdownItem>Item 3.3.4</DropdownItem>
                    <button type="button" onClick={() => setIsOpenDropdown3(false)}>
                        close
                    </button>
                </Dropdown>
            </div>
        </div>
    );
};

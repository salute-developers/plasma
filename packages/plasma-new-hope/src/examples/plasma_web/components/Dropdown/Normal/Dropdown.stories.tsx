import React, { useState } from 'react';
import type { ComponentProps } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { styled } from '@linaria/react';

import { WithTheme, argTypesFromConfig } from '../../../../_helpers';
import { mergeConfig } from '../../../../../engines';
import { dropdownConfig } from '../../../../../components/Dropdown';
import { Button } from '../../Button/Button';
import { Radiobox } from '../../Radiobox/Radiobox';
import { Checkbox } from '../../Checkbox/Checkbox';
import type { DropdownPlacement, DropdownTrigger } from '../../../../../components/Dropdown/Dropdown.types';

import { Dropdown, DropdownItem } from './Dropdown';
import { config } from './Dropdown.config';

const placements: Array<DropdownPlacement> = ['top', 'bottom', 'right', 'left', 'auto'];
const triggers: Array<DropdownTrigger> = ['click', 'hover'];

type StoryDropdownPropsCustom = {
    skidding?: number;
    distance?: number;
};

type StoryDropdownProps = ComponentProps<typeof Dropdown> & StoryDropdownPropsCustom;

const meta: Meta<StoryDropdownProps> = {
    title: 'plasma_web/Dropdown',
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
        closeOnOverlayClick: false,
        closeOnEsc: true,
        isFocusTrapped: true,
        skidding: 0,
        distance: 6,
    },
};

export default meta;

const onSelect = action('onSelect');
const onClick = action('onClick');
const onChange = action('onChange');

const getDropdownItems = (slug: string, elemCount: number) =>
    [...Array(elemCount).keys()].map((num) => ({
        value: `${slug}_${num}`,
        child: `${slug} ${num}`,
    }));

const StyledRadiobox = styled(Radiobox)`
    margin-right: 0.5rem;
`;

const StyledCheckbox = styled(Checkbox)`
    margin-left: auto;
`;

const StyledDisclosureRightIcon = styled.div`
    width: 1.25rem;
    height: 1.25rem;
    margin-left: auto;
`;

const DisclosureRightIcon = (props) => (
    <StyledDisclosureRightIcon>
        <svg width="100%" viewBox="0 0 24 24" fill="none" {...props}>
            <path
                d="M9.883 8.707a1 1 0 011.414-1.414L16.004 12l-4.707 4.707a1 1 0 01-1.414-1.414L13.176 12 9.883 8.707z"
                fill="currentColor"
            />
        </svg>
    </StyledDisclosureRightIcon>
);

const StoryNormal = (args: StoryDropdownProps) => {
    const [selected, setSelected] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    const [isOpenDropdown2, setIsOpenDropdown2] = useState(false);

    const { skidding, distance, placement, ...rest } = args;

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
        setIsOpen(false);
    };

    return (
        <div>
            <h3>This is header</h3>
            <Dropdown
                target={<Button>Target</Button>}
                isOpen={isOpen}
                onToggle={onMainToggle}
                offset={[Number(skidding), Number(distance)]}
                placement={placement}
                {...rest}
            >
                {getDropdownItems('item', 6).map((item) => (
                    <DropdownItem
                        key={item.value}
                        isSelected={Boolean(item.value === selected)}
                        onSelect={() => handleSelect(item.value, item.child)}
                        onClick={onClick}
                        value={item.value}
                    >
                        {item.child}
                    </DropdownItem>
                ))}
                <Dropdown
                    target={<DropdownItem contentRight={DisclosureRightIcon} name="test" text="Nested dropdown" />}
                    onToggle={(is) => setIsOpenDropdown2(is)}
                    isOpen={isOpenDropdown2}
                    offset={[0, 0]}
                    isNested
                    {...rest}
                >
                    <DropdownItem contentRight={StyledCheckbox} value="checked" onChange={onChange} text="Checkbox" />
                    {getDropdownItems('nested', 4).map((item) => (
                        <DropdownItem
                            key={item.value}
                            isSelected={Boolean(item.value === selected)}
                            onSelect={() => handleSelect(item.value, item.child)}
                            onClick={onClick}
                            value={item.value}
                        >
                            {item.child}
                        </DropdownItem>
                    ))}
                    <DropdownItem
                        contentLeft={StyledRadiobox}
                        name="radio"
                        value="1"
                        onChange={onChange}
                        text="Radiobox 1"
                    />
                    <DropdownItem
                        contentLeft={StyledRadiobox}
                        name="radio"
                        value="2"
                        onChange={onChange}
                        text="Radiobox 2"
                    />
                </Dropdown>

                <DropdownItem
                    isSelected={selected === 'disabled'}
                    onSelect={() => handleSelect('disabled', 'disabled')}
                    onClick={onClick}
                    value="disabled"
                    disabled
                >
                    disabled
                </DropdownItem>
            </Dropdown>
        </div>
    );
};

export const Normal: StoryObj<StoryDropdownProps> = {
    render: (args) => <StoryNormal {...args} />,
};

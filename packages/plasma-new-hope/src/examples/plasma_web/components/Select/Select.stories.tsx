import React, { useState } from 'react';
import type { ComponentProps } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { mergeConfig } from '../../../../engines';
import { Checkbox } from '../Checkbox/Checkbox';
import { Button } from '../Button/Button';
import { SelectPrimitiveValue, selectConfig } from '../../../../components/Select';
import { WithTheme, argTypesFromConfig } from '../../../_helpers';
import { IconDone, IconClose } from '../../../../components/_Icon';

import { Select, SelectDivider, SelectItem } from './Select';
import { config } from './Select.config';

const placements: Array<string> = ['top', 'bottom', 'right', 'left', 'auto'];
const enumerations: Array<string> = ['comma', 'chip'];

type StorySelectPropsCustom = {
    skidding?: number;
    distance?: number;
};

type StorySelectProps = ComponentProps<typeof Select> & StorySelectPropsCustom;

const meta: Meta<StorySelectProps> = {
    title: 'plasma_web/Select',
    decorators: [WithTheme],
    component: Select,
    argTypes: {
        placement: {
            options: placements,
            control: {
                type: 'select',
            },
        },
        enumerationType: {
            options: enumerations,
            control: {
                type: 'select',
            },
        },
        ...argTypesFromConfig(mergeConfig(selectConfig, config)),
    },
    args: {
        disabled: false,
        readOnly: false,
        label: 'Label',
        target: 'button-like',
        enumerationType: 'comma',
        size: 'm',
        view: 'default',
        placement: 'bottom',
    },
};

export default meta;

const onChangeAction = action('onChange');

const iconDoneToSelectSizeMap: Record<string, 'xs' | 's'> = {
    xs: 'xs',
    s: 's',
    m: 's',
    l: 's',
};

const checkboxToSelectSizeMap: Record<string, 's' | 'm'> = {
    xs: 's',
    s: 'm',
    m: 'm',
    l: 'm',
};

const getSelectItems = (slug: string, elemCount: number) =>
    [...Array(elemCount).keys()].map((num) => ({
        value: `${slug}_${num}`,
        child: `${slug} ${num}`,
    }));

const StorySingle = (args: StorySelectProps) => {
    const { placement, label, readOnly, disabled, size = 'm', view, target } = args;

    const [value, setValue] = useState<SelectPrimitiveValue | undefined>('item_0');

    const onChangeValue = (newValue?: SelectPrimitiveValue) => {
        setValue(newValue);
        onChangeAction(newValue);
    };

    return (
        <div style={{ width: '50%' }}>
            <Select
                selectType="single"
                value={value}
                placement={placement}
                label={label}
                size={size}
                view={view}
                target={target}
                disabled={disabled}
                readOnly={readOnly}
                onChangeValue={onChangeValue}
            >
                <SelectItem value={undefined} text="Clear" />
                {getSelectItems('item', 6).map((item) => (
                    <SelectItem
                        key={item.value}
                        contentLeft={
                            item.value === value ? <IconDone size={iconDoneToSelectSizeMap[size]} /> : undefined
                        }
                        value={item.value}
                        text={item.child}
                    />
                ))}
            </Select>
        </div>
    );
};

export const Single: StoryObj<StorySelectProps> = {
    render: (args) => <StorySingle {...args} />,
};

const StoryMultiple = (args: StorySelectProps) => {
    const { placement, label, readOnly, disabled, enumerationType, size = 'm', view, target } = args;

    const [value, setValue] = useState<Array<SelectPrimitiveValue> | undefined>(['item_2', 'item_3']);

    const onChangeValue = (newValue?: Array<SelectPrimitiveValue>) => {
        setValue(newValue);
        onChangeAction(newValue);
    };

    return (
        <div style={{ width: '50%' }}>
            <Select
                selectType="multiple"
                value={value}
                placement={placement}
                label={label}
                size={size}
                view={view}
                target={target}
                enumerationType={enumerationType}
                disabled={disabled}
                readOnly={readOnly}
                onChangeValue={onChangeValue}
            >
                {getSelectItems('item', 6).map((item) => (
                    <SelectItem
                        key={item.value}
                        contentLeft={<Checkbox size={checkboxToSelectSizeMap[size]} />}
                        value={item.value}
                        text={item.child}
                    />
                ))}
            </Select>
        </div>
    );
};

export const Multiple: StoryObj<StorySelectProps> = {
    render: (args) => <StoryMultiple {...args} />,
};

const StoryNative = (args: StorySelectProps) => {
    const { placement, label, readOnly, disabled, size = 'm', view, target } = args;

    const [value, setValue] = useState<SelectPrimitiveValue | undefined>('item_0');

    const onChangeValue = (newValue?: SelectPrimitiveValue) => {
        setValue(newValue);
        onChangeAction(newValue);
    };

    return (
        <div style={{ width: '50%' }}>
            <Select
                selectType="native"
                value={value}
                placement={placement}
                label={label}
                size={size}
                view={view}
                target={target}
                disabled={disabled}
                readOnly={readOnly}
                onChangeValue={onChangeValue}
            >
                {getSelectItems('item', 6).map((item) => (
                    <option key={item.value} value={item.value}>
                        {item.child}
                    </option>
                ))}
            </Select>
        </div>
    );
};

export const Native: StoryObj<StorySelectProps> = {
    render: (args) => <StoryNative {...args} />,
};

const StoryControlledOpen = (args: StorySelectProps) => {
    const { placement, label, readOnly, disabled, size = 'm', view, target } = args;

    const [isOpen, setIsOpen] = useState(true);
    const [iconColor, setIconColor] = useState('green');
    const [value, setV] = useState<string | number | boolean | undefined>('item_0');

    const onChangeValue = (newValue?: SelectPrimitiveValue) => {
        setV(newValue);
        onChangeAction(newValue);
    };
    const onToggle = (openValue: boolean) => setIsOpen(openValue);
    const onOpen = () => setIsOpen((v) => !v);
    const onMouseEnter = () => setIconColor('red');
    const onMouseLeave = () => setIconColor('green');

    return (
        <>
            <Button onClick={onOpen}>Open select</Button>
            <div style={{ width: '50%' }}>
                <Select
                    value={value}
                    isOpen={isOpen}
                    onToggle={onToggle}
                    placement={placement}
                    label={label}
                    size={size}
                    view={view}
                    target={target}
                    disabled={disabled}
                    readOnly={readOnly}
                    onChangeValue={onChangeValue}
                >
                    {getSelectItems('item', 6).map((item) => (
                        <SelectItem
                            key={item.value}
                            contentLeft={
                                item.value === value ? <IconDone size={iconDoneToSelectSizeMap[size]} /> : undefined
                            }
                            value={item.value}
                            text={item.child}
                        />
                    ))}
                    <SelectDivider />
                    <SelectItem value="custom">
                        <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                            <IconClose color={iconColor} />
                        </div>
                        <div>Custom item element</div>
                    </SelectItem>
                </Select>
            </div>
        </>
    );
};

export const ControlledOpen: StoryObj<StorySelectProps> = {
    render: (args) => <StoryControlledOpen {...args} />,
};

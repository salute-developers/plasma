import React, { useState } from 'react';
import type { ComponentProps } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { mergeConfig } from '../../../../engines';
import { Checkbox } from '../../Checkbox/Checkbox';
import { comboboxOldConfig } from '../../../../components/Combobox';
import { WithTheme, argTypesFromConfig } from '../../../_helpers';
import { IconDone } from '../../../../components/_Icon';

import { Combobox, ComboboxDivider, ComboboxItem } from './Combobox';
import { config } from './Combobox.config';

const placements: Array<string> = ['top', 'bottom', 'right', 'left', 'auto'];
const enumerations: Array<string> = ['comma', 'chip'];

type ComboboxPrimitiveValue = string | number | boolean;

type StorySelectPropsCustom = {
    skidding?: number;
    distance?: number;
};

type StorySelectProps = ComponentProps<typeof Combobox> & StorySelectPropsCustom;

const meta: Meta<StorySelectProps> = {
    title: 'Data Entry/Combobox',
    decorators: [WithTheme],
    component: Combobox,
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
        ...argTypesFromConfig(mergeConfig(comboboxOldConfig, config)),
    },
    args: {
        usePortal: false,
        disabled: false,
        readOnly: false,
        label: 'Label',
        placeholder: 'Placeholder',
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

const SingleDemo = (args: StorySelectProps) => {
    const { usePortal, placement, label, placeholder, readOnly, disabled, size = 'm', view } = args;

    const [value, setValue] = useState<ComboboxPrimitiveValue | undefined>('item_0');

    const onChangeValue = (newValue?: ComboboxPrimitiveValue) => {
        setValue(newValue);
        onChangeAction(newValue);
    };

    return (
        <div style={{ width: '50%', margin: '3rem 0' }}>
            <h4>Combobox с единичным выбором</h4>
            <Combobox
                frame="theme-root"
                usePortal={usePortal}
                valueType="single"
                value={value}
                placement={placement}
                label={label}
                placeholder={placeholder}
                size={size}
                view={view}
                disabled={disabled}
                readOnly={readOnly}
                onChangeValue={onChangeValue}
            >
                <ComboboxItem value={undefined} text="Clear" />
                {getSelectItems('item', 6).map((item) => (
                    <ComboboxItem
                        key={item.value}
                        contentLeft={
                            item.value === value ? (
                                <IconDone size={iconDoneToSelectSizeMap[size]} color="inherit" />
                            ) : undefined
                        }
                        value={item.value}
                        text={item.child}
                    />
                ))}
            </Combobox>
        </div>
    );
};

const MultipleDemo = (args: StorySelectProps) => {
    const { usePortal, placement, label, placeholder, readOnly, disabled, enumerationType, size = 'm', view } = args;

    const [value, setValue] = useState<Array<ComboboxPrimitiveValue> | undefined>(['item_2', 'item_3']);

    const onChangeValue = (newValue?: Array<ComboboxPrimitiveValue>) => {
        setValue(newValue);
        onChangeAction(newValue);
    };

    return (
        <div style={{ width: '50%', marginBottom: '3rem' }}>
            <h4>Combobox с множественным выбором</h4>
            <Combobox
                frame="theme-root"
                usePortal={usePortal}
                valueType="multiple"
                enumerationType={enumerationType}
                value={value}
                placement={placement}
                label={label}
                placeholder={placeholder}
                size={size}
                view={view}
                disabled={disabled}
                readOnly={readOnly}
                onChangeValue={onChangeValue}
            >
                <ComboboxItem value={undefined} text="Clear" />
                {getSelectItems('item', 6).map((item) => (
                    <ComboboxItem
                        key={item.value}
                        contentLeft={<Checkbox size={checkboxToSelectSizeMap[size]} />}
                        value={item.value}
                        text={item.child}
                    />
                ))}
            </Combobox>
        </div>
    );
};

const AddCustomItemDemo = (args: StorySelectProps) => {
    const { usePortal, placement, label, placeholder, readOnly, disabled, size = 'm', view } = args;

    const [opened, setOpened] = useState(false);
    const [items, setItems] = useState(getSelectItems('item', 1));
    const [value, setValue] = useState<ComboboxPrimitiveValue | undefined>('item_0');

    const onChangeValue = (newValue?: ComboboxPrimitiveValue) => {
        setValue(newValue);
        onChangeAction(newValue);
    };

    const onToggle = (openValue: boolean) => setOpened(openValue);

    const onKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        const { code } = event;

        if (code === 'Enter') {
            const newValue = (event.target as HTMLInputElement).value;
            const newItems = [...items];

            if (newItems.find((item) => item.child === newValue)) {
                return;
            }

            newItems.push({
                value: `${newValue}_`,
                child: (newValue || '').toString(),
            });

            setOpened(false);
            setItems(newItems);
        }
    };

    const filterFunction = () => true;

    return (
        <div style={{ width: '50%' }}>
            <h4>Combobox с добавлением пользовательского элемента</h4>
            <Combobox
                frame="theme-root"
                usePortal={usePortal}
                valueType="single"
                value={value}
                placement={placement}
                label={label}
                placeholder={placeholder}
                size={size}
                view={view}
                disabled={disabled}
                readOnly={readOnly}
                opened={opened}
                onToggle={onToggle}
                onChangeValue={onChangeValue}
                onKeyDown={onKeyDown}
                filterFunction={filterFunction}
            >
                <ComboboxItem value={undefined} text="Clear" />
                <ComboboxDivider />
                {items.map((item) => (
                    <ComboboxItem
                        key={item.value}
                        contentLeft={
                            item.value === value ? (
                                <IconDone size={iconDoneToSelectSizeMap[size]} color="inherit" />
                            ) : undefined
                        }
                        value={item.value}
                        text={item.child}
                    />
                ))}
            </Combobox>
        </div>
    );
};

export const Legacy: StoryObj<StorySelectProps> = {
    render: (args) => (
        <>
            <h3>Combobox на композиционной архитектуре (deprecated)</h3>
            <SingleDemo {...args} />
            <MultipleDemo {...args} />
            <AddCustomItemDemo {...args} />
        </>
    ),
};

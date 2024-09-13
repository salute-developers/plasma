import { useForm, Controller } from 'react-hook-form';
import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { WithTheme } from '../../../_helpers';
import { Button } from '../Button/Button';
import { TextField } from '../TextField/TextField';
import { TextArea } from '../TextArea/TextArea'; // TextArea.tsx 120 строка, не работает из-за некорректного ref
import { Checkbox } from '../Checkbox/Checkbox';
import { Switch } from '../Switch/Switch';
import { Radiobox } from '../Radiobox/Radiobox';
import { RadioGroup } from '../../../../components/Radiobox';
import { Slider } from '../Slider/Slider';
import { useFormPlasma } from '../../../../hooks';
import { DatePicker, DatePickerRange } from '../DatePicker/DatePicker';

type StoryDropdownProps = {};

const langName = 'language';
const itemsRadiobox = [
    { langName, value: 'c', label: 'C', disabled: false },
    { langName, value: 'cpp', label: 'C++', disabled: false },
    { langName, value: 'assembly', label: 'Assembly', disabled: false },
];

const DefaultForm = () => {
    const onSubmit = (data) => {
        console.log(data);
    };

    const { formRef, formData } = useFormPlasma(onSubmit, {
        textfield: 'textfield',
        textarea: 'textarea',
        checkbox: 'checkobox',
        switch: true,
        radiobox: 'c',
        slider: 10,
        sliderd: [10, 20],
        datepicker: '12.09.2024',
        datepickerRange: ['09.09.2024', '12.09.2024'],
    });

    return (
        <form onSubmit={formData} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }} ref={formRef}>
            <TextField name="textfield" placeholder="Textfield" required={false} />
            <TextArea name="textarea" autoResize placeholder="Textarea" />
            <Checkbox name="checkbox" label="Checkbox" />
            <Switch name="switch" label="Switch" labelPosition="after" />
            <RadioGroup aria-labelledby="radiogroup-title-id">
                <div id="radiogroup-title-id" style={{ margin: '1rem 0', fontWeight: '600' }}>
                    Выберите язык программирования для изучения.
                </div>
                {itemsRadiobox.map((item) => (
                    <Radiobox
                        name="radiobox"
                        key={item.value}
                        value={item.value}
                        label={item.label}
                        disabled={item.disabled}
                    />
                ))}
            </RadioGroup>
            <Slider name="slider" label="Slider" type="single" min={0} max={100} />
            <Slider name="sliderd" label="Slider" type="double" min={0} max={100} />
            <DatePicker label="DatePicker" name="datepicker" />
            <DatePickerRange label="DatePicker" name="datepickerRange" />
            <Button type="submit">Отправить</Button>
        </form>
    );
};

const meta: Meta<StoryDropdownProps> = {
    title: 'plasma_b2c/Form',
    decorators: [WithTheme],
    component: DefaultForm,
};

export default meta;

const StoryPlasmaForm = () => {
    return <DefaultForm />;
};

export const Default: StoryObj<StoryDropdownProps> = {
    render: () => <StoryPlasmaForm />,
};

const DefaultUseForm = () => {
    const { register, handleSubmit } = useForm({
        defaultValues: {
            textfield: 'John Doe',
            textarea: 'Default description',
            checkbox: true,
            switch: true,
            radiobox: 'c',
            slider: 10,
        },
    });
    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <TextField {...register('textfield')} placeholder="Textfield" required={false} />
            <TextArea {...register('textarea')} autoResize placeholder="Textarea" />
            <Checkbox {...register('checkbox')} label="Checkbox" />
            <Switch {...register('switch')} label="Switch" labelPosition="after" />
            <RadioGroup aria-labelledby="radiogroup-title-id">
                <div id="radiogroup-title-id" style={{ margin: '1rem 0', fontWeight: '600' }}>
                    Выберите язык программирования для изучения.
                </div>
                {itemsRadiobox.map((item) => (
                    <Radiobox
                        {...register('radiobox')}
                        key={item.value}
                        value={item.value}
                        label={item.label}
                        disabled={item.disabled}
                    />
                ))}
            </RadioGroup>
            <Button type="submit">Отправить</Button>
        </form>
    );
};

const StoryHookForm = () => {
    return <DefaultUseForm />;
};

export const UseHookForm: StoryObj<StoryDropdownProps> = {
    render: () => <StoryHookForm />,
};

const DefaultUseFormController = () => {
    const { control, handleSubmit } = useForm({
        defaultValues: {
            textfield: 'John Doe',
            textarea: 'Default description',
            checkbox: true,
            switch: true,
            radiobox: 'c',
            slider: 10,
            sliderd: [10, 20],
        },
    });
    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <Controller
                name="textfield"
                control={control}
                render={({ field }) => <TextField {...field} label="TextField" />}
            />
            <Controller
                name="textarea"
                control={control}
                render={({ field }) => <TextArea {...field} label="TextArea" />}
            />
            <Controller
                name="checkbox"
                control={control}
                render={({ field }) => <Checkbox {...field} checked={field.value} label="Checkbox" />}
            />
            <Controller
                name="switch"
                control={control}
                render={({ field }) => <Switch {...field} checked={field.value} labelPosition="after" label="Switch" />}
            />
            <Controller
                name="slider"
                control={control}
                render={({ field }) => <Slider {...field} type="single" label="Slider" min={0} max={100} />}
            />
            <Controller
                name="sliderd"
                control={control}
                render={({ field }) => <Slider {...field} type="double" label="Slider" min={0} max={100} />}
            />
            <Button type="submit">Отправить</Button>
        </form>
    );
};

const StoryHookFormController = () => {
    return <DefaultUseFormController />;
};

export const UseHookFormController: StoryObj<StoryDropdownProps> = {
    render: () => <StoryHookFormController />,
};

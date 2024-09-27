import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import styled from 'styled-components';

import { Button } from '../components/Button/Button';
import { TextField } from '../components/TextField/TextField';
import { TextArea } from '../components/TextArea/TextArea';
import { Checkbox } from '../components/Checkbox/Checkbox';
import { Switch } from '../components/Switch/Switch';
import { Radiobox } from '../components/Radiobox/Radiobox';
import { RadioGroup } from '../components/Radiobox';
import { Slider } from '../components/Slider/Slider';
import { DatePicker, DatePickerRange } from '../components/DatePicker/DatePicker';

import { useForm } from './index';

type StoryDropdownProps = {};

const langName = 'language';
const radioboxItems = [
    { langName, value: 'c', label: 'C', disabled: false },
    { langName, value: 'cpp', label: 'C++', disabled: false },
    { langName, value: 'assembly', label: 'Assembly', disabled: false },
];

const FormStyled = styled.form`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

const PlasmaForm = () => {
    const onSubmit = (data) => {
        console.log(data);
    };

    const { formRef, formData } = useForm(onSubmit, {
        textfield: 'textfield',
        textarea: 'textarea',
        checkbox: 'checkbox',
        switch: true,
        radiobox: 'c',
        slider: 10,
        sliderd: [10, 20],
        datepicker: '12.09.2024',
        datepickerRange: ['09.09.2024', '12.09.2024'],
    });

    return (
        <FormStyled onSubmit={formData} ref={formRef}>
            <TextField name="textfield" placeholder="Textfield" />
            <TextArea name="textarea" autoResize placeholder="Textarea" />
            <Checkbox name="checkbox" label="Checkbox" />
            <Switch name="switch" label="Switch" labelPosition="after" />
            <RadioGroup aria-labelledby="radiogroup-title-id">
                <div id="radiogroup-title-id" style={{ margin: '1rem 0', fontWeight: '600' }}>
                    Выберите язык программирования для изучения.
                </div>
                {radioboxItems.map((item) => (
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
        </FormStyled>
    );
};

const meta: Meta<StoryDropdownProps> = {
    title: 'Hooks/useForm',
    component: PlasmaForm,
};

export default meta;

const StoryPlasmaForm = () => {
    return <PlasmaForm />;
};

export const DefaultPlasmaForm: StoryObj<StoryDropdownProps> = {
    render: () => <StoryPlasmaForm />,
};

const DefaultForm = () => {
    const onSubmit = (event) => {
        event.preventDefault();

        const formData = new FormData(event.target);

        for (const [name, value] of formData) {
            console.log(name, value);
        }
    };
    return (
        <FormStyled onSubmit={onSubmit}>
            <TextField name="textfield" placeholder="Textfield" />
            <TextArea name="textarea" autoResize placeholder="Textarea" />
            <Checkbox name="checkbox" label="Checkbox" />
            <Switch name="switch" label="Switch" labelPosition="after" />
            <RadioGroup aria-labelledby="radiogroup-title-id">
                <div id="radiogroup-title-id" style={{ margin: '1rem 0', fontWeight: '600' }}>
                    Выберите язык программирования для изучения.
                </div>
                {radioboxItems.map((item) => (
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
        </FormStyled>
    );
};

const StoryDefaultForm = () => {
    return <DefaultForm />;
};

export const FormDefault: StoryObj<StoryDropdownProps> = {
    render: () => <StoryDefaultForm />,
};

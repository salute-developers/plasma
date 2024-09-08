import { useForm } from 'react-hook-form';
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

type StoryDropdownProps = {};

const langName = 'language';
const itemsRadiobox = [
    { langName, value: 'c', label: 'C', disabled: false },
    { langName, value: 'cpp', label: 'C++', disabled: false },
    { langName, value: 'assembly', label: 'Assembly', disabled: false },
];

const DefaultForm = () => {
    const { register, handleSubmit } = useForm();
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
                        key={item.value}
                        value={item.value}
                        label={item.label}
                        disabled={item.disabled}
                        {...register('radiobox')}
                    />
                ))}
            </RadioGroup>
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

const StoryNormal = () => {
    return <DefaultForm />;
};

export const Default: StoryObj<StoryDropdownProps> = {
    render: () => <StoryNormal />,
};

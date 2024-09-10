import { useForm } from 'react-hook-form';
import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { WithTheme } from '../../../_helpers';
import { useFormComponent } from '../../../../hooks';
import { Button } from '../Button/Button';
import { TextField } from '../TextField/TextField';
import { Slider } from '../Slider/Slider'; // TextArea.tsx 120 строка, не работает из-за некорректного ref

type StoryDropdownProps = {};

const DefaultForm = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        console.log(data);
    };

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    const FormSlider = useFormComponent(Slider, register('slider'));

    return (
        <form onSubmit={handleSubmit(onSubmit)} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <TextField {...register('textfield')} placeholder="Textfield" required={false} />
            <FormSlider placeholder="Textfield" min={0} max={100} value={0} />
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

import React from 'react';

type FormStoryComponents = {
    TextField: any;
    Select?: any;
};

const cities = [
    { value: 'moscow', label: 'Москва' },
    { value: 'spb', label: 'Санкт-Петербург' },
];

export const createDefaultStory = (Form: any, { TextField, Select }: FormStoryComponents) => {
    const DefaultStory = (args: any) => (
        <Form {...args}>
            <TextField name="name" label="Имя" placeholder="Имя" />
            <TextField name="email" label="Почта" placeholder="Почта" />
            {Select ? <Select name="city" label="Город" placeholder="Город" items={cities} /> : null}
        </Form>
    );

    return DefaultStory;
};

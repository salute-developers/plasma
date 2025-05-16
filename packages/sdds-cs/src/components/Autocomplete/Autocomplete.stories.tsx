import type { ComponentProps } from 'react';
import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { disableProps, InSpacingDecorator } from '@salutejs/plasma-sb-utils';
import { IconPlasma } from '@salutejs/plasma-icons';

import { Autocomplete } from './Autocomplete';

const views = ['default', 'negative'];

const suggestions = [
    { label: 'Алексей Смирнов' },
    { label: 'Екатерина Иванова' },
    { label: 'Дмитрий Петров' },
    { label: 'Ольга Васильева' },
    { label: 'Сергей Сидоров' },
    { label: 'Мария Кузнецова' },
    { label: 'Андрей Попов' },
    { label: 'Анна Николаева' },
    { label: 'Иван Федоров' },
    { label: 'Наталья Морозова' },
    { label: 'Михаил Павлов' },
    { label: 'Елена Романова' },
    { label: 'Владимир Киселев' },
    { label: 'Татьяна Захарова' },
    { label: 'Николай Семенов' },
    { label: 'Юлия Белова' },
    { label: 'Александр Гусев' },
    { label: 'Оксана Яковлева' },
    { label: 'Игорь Егорова' },
    { label: 'Вера Тихомирова' },
    { label: 'Артем Григорьев' },
    { label: 'Евгения Козлова' },
    { label: 'Максим Лебедев' },
    { label: 'Виктория Калашникова' },
    { label: 'Константин Абрамов' },
    { label: 'Светлана Новикова' },
    { label: 'Юрий Волков' },
    { label: 'Валентина Воробьева' },
    { label: 'Павел Сергеев' },
    { label: 'Людмила Виноградова' },
    { label: 'Антон Соловьев' },
    { label: 'Маргарита Цветкова' },
    { label: 'Роман Трофимов' },
    { label: 'Лариса Зайцева' },
    { label: 'Евгений Никитин' },
    { label: 'Галина Михайлова' },
    { label: 'Владислав Антонов' },
    { label: 'Дарья Филатова' },
    { label: 'Олег Буров' },
    { label: 'Инна Медведева' },
    { label: 'Вячеслав Крылов' },
    { label: 'Тамара Беляева' },
    { label: 'Кирилл Марков' },
    { label: 'Марина Пономарева' },
    { label: 'Борис Захаров' },
    { label: 'Жанна Савельева' },
    { label: 'Федор Жуков' },
    { label: 'Елизавета Логинова' },
    { label: 'Виктор Рыбаков' },
    { label: 'Лилия Макарова' },
];

type StoryProps = ComponentProps<typeof Autocomplete> & {
    enableContentLeft: boolean;
    enableContentRight: boolean;
};

const meta: Meta<StoryProps> = {
    title: 'Data Entry/Autocomplete',
    decorators: [InSpacingDecorator],
    component: Autocomplete,
    argTypes: {
        view: {
            options: views,
            control: {
                type: 'select',
            },
        },
        requiredPlacement: {
            options: ['left', 'right'],
            control: {
                type: 'select',
            },
            if: { arg: 'required', truthy: true },
        },
        required: {
            control: {
                type: 'boolean',
            },
            if: { arg: 'optional', truthy: false },
        },
        hasRequiredIndicator: {
            control: {
                type: 'boolean',
            },
            if: {
                arg: 'required',
                truthy: true,
            },
        },
        optional: {
            control: {
                type: 'boolean',
            },
            if: { arg: 'required', truthy: false },
        },
        listWidth: {
            control: { type: 'text' },
        },
        listMaxHeight: {
            control: { type: 'text' },
        },
        virtual: {
            control: { type: 'boolean' },
        },
        ...disableProps([
            'hintText',
            'hintTrigger',
            'hintView',
            'hintSize',
            'hintTargetIcon',
            'hintTargetPlacement',
            'hintPlacement',
            'hintHasArrow',
            'hintOffset',
            'hintWidth',
            'hintContentLeft',
        ]),
    },
    args: {
        view: 'default',
        disabled: false,
        readOnly: false,
        label: 'Label',
        textBefore: '',
        textAfter: '',
        placeholder: 'Заполните поле',
        leftHelper: 'Введите имя Алексей',
        threshold: 2,
        enableContentLeft: true,
        enableContentRight: true,
        optional: false,
        required: false,
        requiredPlacement: 'right',
        hasRequiredIndicator: true,
        virtual: false,
    },
};

export default meta;

const DefaultStory = (args: StoryProps) => {
    const { enableContentLeft, enableContentRight } = args;

    const iconSize = 's';

    return (
        <Autocomplete
            {...args}
            suggestions={suggestions}
            contentLeft={enableContentLeft ? <IconPlasma size={iconSize} /> : undefined}
            contentRight={enableContentRight ? <IconPlasma size={iconSize} /> : undefined}
        />
    );
};

export const Default: StoryObj<StoryProps> = {
    render: (args) => <DefaultStory {...args} />,
};

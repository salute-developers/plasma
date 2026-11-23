import { IconPlasma } from '@salutejs/plasma-icons';
import { autocompleteConfig, component, mergeConfig } from '@salutejs/plasma-new-hope/styled-components';
import { useState } from 'react';

const Autocomplete = component(mergeConfig(autocompleteConfig as any, {}));

const hintPlacements = [
    'top',
    'top-start',
    'top-end',
    'bottom',
    'bottom-start',
    'bottom-end',
    'left',
    'left-start',
    'left-end',
    'right',
    'right-start',
    'right-end',
    'auto',
];

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

const toItems = (values: string[]) => values.map((value) => ({ value, label: value }));

const AutocompleteDefault = {
    name: 'Default',
    args: [
        {
            name: 'label',
            value: 'Label',
        },
        {
            name: 'placeholder',
            value: 'Заполните поле',
        },
        {
            name: 'titleCaption',
            value: 'Подпись к полю',
        },
        {
            name: 'leftHelper',
            value: 'Введите имя Алексей',
        },
        {
            name: 'textBefore',
            value: '',
        },
        {
            name: 'textAfter',
            value: '',
        },
        {
            name: 'keepPlaceholder',
            value: false,
        },
        {
            name: 'threshold',
            value: 2,
        },
        {
            name: 'listWidth',
            value: '',
        },
        {
            name: 'listMaxHeight',
            value: '',
        },
        {
            name: 'virtual',
            value: false,
        },
        {
            name: 'flip',
            value: false,
        },
        {
            name: 'disabled',
            value: false,
        },
        {
            name: 'readOnly',
            value: false,
        },
        {
            name: 'enableContentLeft',
            value: true,
        },
        {
            name: 'enableContentRight',
            value: true,
        },
        {
            name: 'required',
            value: false,
        },
        {
            name: 'requiredPlacement',
            value: 'right',
            items: toItems(['left', 'right']),
        },
        {
            name: 'hasRequiredIndicator',
            value: false,
        },
        {
            name: 'optional',
            value: false,
        },
        {
            name: 'hasHint',
            value: false,
        },
        {
            name: 'hintText',
            value: 'Текст подсказки',
        },
        {
            name: 'hintTrigger',
            value: 'hover',
            items: toItems(['hover', 'click']),
        },
        {
            name: 'hintTargetPlacement',
            value: 'outer',
            items: toItems(['outer', 'inner']),
        },
        {
            name: 'hintPlacement',
            value: 'auto',
            items: toItems(hintPlacements),
        },
        {
            name: 'hintWidth',
            value: '10rem',
        },
        {
            name: 'hintHasArrow',
            value: true,
        },
    ],
    render: function Story(args: any) {
        const [value, setValue] = useState('');
        const {
            enableContentLeft,
            enableContentRight,
            hasHint,
            hintText,
            hintTrigger,
            hintTargetPlacement,
            hintPlacement,
            hintWidth,
            hintHasArrow,
            titleCaption,
            leftHelper,
            textBefore,
            textAfter,
            threshold,
            listWidth,
            listMaxHeight,
            ...rest
        } = args;

        const hintProps = hasHint
            ? {
                  hintText,
                  hintTrigger,
                  hintTargetPlacement,
                  hintPlacement,
                  hintWidth: hintWidth || undefined,
                  hintHasArrow,
              }
            : {};

        const iconSize = rest.size === 'xs' ? 'xs' : 's';

        return (
            <div style={{ width: '25rem', paddingTop: '3.25rem' }}>
                <Autocomplete
                    {...rest}
                    {...hintProps}
                    suggestions={suggestions}
                    value={value}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => setValue(event.target.value)}
                    onSuggestionSelect={(item: { label: string }) => setValue(item.label)}
                    threshold={Number(threshold) || 0}
                    listWidth={listWidth || undefined}
                    listMaxHeight={listMaxHeight || undefined}
                    titleCaption={titleCaption || undefined}
                    leftHelper={leftHelper || undefined}
                    textBefore={textBefore || undefined}
                    textAfter={textAfter || undefined}
                    contentLeft={enableContentLeft ? <IconPlasma size={iconSize} color="inherit" /> : undefined}
                    contentRight={enableContentRight ? <IconPlasma size={iconSize} color="inherit" /> : undefined}
                />
            </div>
        );
    },
};

export const AutocompleteStories = [AutocompleteDefault];

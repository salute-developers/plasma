// Вложенный список регионов, как в fixtures plasma-sb-utils для Select, Combobox и Dropdown.
export const regionItems = [
    { value: 'north_america', label: 'Северная Америка' },
    {
        value: 'south_america',
        label: 'Южная Америка',
        items: [
            {
                value: 'brazil',
                label: 'Бразилия',
                items: [
                    { value: 'rio_de_janeiro', label: 'Рио-де-Жанейро' },
                    { value: 'sao_paulo', label: 'Сан-Паулу' },
                ],
            },
            { value: 'argentina', label: 'Аргентина' },
            { value: 'colombia', label: 'Колумбия' },
        ],
    },
    {
        value: 'europe',
        label: 'Европа',
        items: [
            { value: 'france', label: 'Франция' },
            { value: 'germany', label: 'Германия' },
            { value: 'italy', label: 'Италия' },
            { value: 'spain', label: 'Испания' },
        ],
    },
    { value: 'asia', label: 'Азия' },
    { value: 'africa', label: 'Африка' },
];

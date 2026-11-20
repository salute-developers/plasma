import React from 'react';
import { mount, getComponent, getDescribeFN, hasComponent, getBaseVisualTests } from '@salutejs/plasma-cy-utils';

import type { TableProps } from './Table.types';

const componentExists = hasComponent('Table');
const describeFn = getDescribeFN('Table');

const rows = [
    {
        id: '0',
        country: 'Канада',
        capital: 'Оттава',
        population: 38,
        continent: 'Северная Америка',
        currency: 'Канадский доллар',
        officialLanguage: 'Английский, Французский',
        area: 9984,
    },
    {
        id: '1',
        country: 'Бразилия',
        capital: 'Бразилиа',
        population: 213,
        continent: 'Южная Америка',
        currency: 'Бразильский реал',
        officialLanguage: 'Португальский',
        area: 8515,
    },
    {
        id: '2',
        country: 'Германия',
        capital: 'Берлин',
        population: 83,
        continent: 'Европа',
        currency: 'Евро',
        officialLanguage: 'Немецкий',
        area: 357,
    },
    {
        id: '3',
        country: 'Япония',
        capital: 'Токио',
        population: 126,
        continent: 'Азия',
        currency: 'Йена',
        officialLanguage: 'Японский',
        area: 377,
    },
    {
        id: '4',
        country: 'Австралия',
        capital: 'Канберра',
        population: 26,
        continent: 'Океания',
        currency: 'Австралийский доллар',
        officialLanguage: 'Английский',
        area: 7692,
    },
    {
        id: '5',
        country: 'Нигерия',
        capital: 'Абуджа',
        population: 206,
        continent: 'Африка',
        currency: 'Найра',
        officialLanguage: 'Английский',
        area: 923,
    },
    {
        id: '6',
        country: 'Индия',
        capital: 'Нью-Дели',
        population: 1400,
        continent: 'Азия',
        currency: 'Индийская рупия',
        officialLanguage: 'Хинди, Английский',
        area: 3287,
    },
    {
        id: '7',
        country: 'Франция',
        capital: 'Париж',
        population: 67,
        continent: 'Европа',
        currency: 'Евро',
        officialLanguage: 'Французский',
        area: 643,
    },
    {
        id: '8',
        country: 'Россия',
        capital: 'Москва',
        population: 143,
        continent: 'Европа/Азия',
        currency: 'Российский рубль',
        officialLanguage: 'Русский',
        area: 17098,
    },
    {
        id: '9',
        country: 'Южная Африка',
        capital: 'Претория',
        population: 59,
        continent: 'Африка',
        currency: 'Южноафриканский ранд',
        officialLanguage: 'Зулу, Коса, Африкаанс, Английский',
        area: 1221,
    },
];

const complexRows = [
    {
        id: '1',
        array: [1, 2, 3],
        object: {
            a: 1,
            b: 2,
            c: 3,
        },
        function: (n: number) => `Число ${n}`,
    },
];

const columnsBasic = [
    {
        id: 'country',
        label: 'Страна',
    },
    {
        id: 'capital',
        label: 'Столица',
    },
    {
        id: 'population',
        label: 'Население, млн',
    },
    {
        id: 'continent',
        label: 'Континент',
    },
    {
        id: 'currency',
        label: 'Валюта',
    },
    {
        id: 'officialLanguage',
        label: 'Язык',
    },
    {
        id: 'area',
        label: 'Площадь, тыс. км²',
    },
];

const columnsSorting = [
    {
        id: 'country',
        label: 'Страна',
    },
    {
        id: 'capital',
        label: 'Столица',
    },
    {
        id: 'population',
        label: 'Население, млн',
        enableSorting: true,
    },
    {
        id: 'continent',
        label: 'Континент',
    },
    {
        id: 'currency',
        label: 'Валюта',
    },
    {
        id: 'officialLanguage',
        label: 'Язык',
    },
    {
        id: 'area',
        label: 'Площадь, тыс. км²',
    },
];

const columnsFiltering = [
    {
        id: 'country',
        label: 'Страна',
    },
    {
        id: 'capital',
        label: 'Столица',
    },
    {
        id: 'population',
        label: 'Население, млн',
        filters: [
            { value: 'small', label: '< 50' },
            { value: 'big', label: '> 100' },
        ],
        filterFn: (filteredValue, cellValue) => {
            switch (filteredValue) {
                case 'small': {
                    if (cellValue < 50) return true;
                    break;
                }

                case 'big': {
                    if (cellValue > 100) return true;
                    break;
                }

                default: {
                    return false;
                }
            }
        },
    },
    {
        id: 'continent',
        label: 'Континент',
    },
    {
        id: 'currency',
        label: 'Валюта',
    },
    {
        id: 'officialLanguage',
        label: 'Язык',
    },
    {
        id: 'area',
        label: 'Площадь, тыс. км²',
    },
];

const columnsResizing = [
    {
        id: 'country',
        label: 'Страна',
    },
    {
        id: 'capital',
        label: 'Столица',
    },
    {
        id: 'population',
        label: 'Население, млн',
        enableResizing: true,
    },
    {
        id: 'continent',
        label: 'Континент',
    },
    {
        id: 'currency',
        label: 'Валюта',
    },
    {
        id: 'officialLanguage',
        label: 'Язык',
    },
    {
        id: 'area',
        label: 'Площадь, тыс. км²',
    },
];

const columnsEditing = [
    {
        id: 'country',
        label: 'Страна',
    },
    {
        id: 'capital',
        label: 'Столица',
    },
    {
        id: 'population',
        label: 'Население, млн',
        enableEditing: true,
    },
    {
        id: 'continent',
        label: 'Континент',
    },
    {
        id: 'currency',
        label: 'Валюта',
    },
    {
        id: 'officialLanguage',
        label: 'Язык',
    },
    {
        id: 'area',
        label: 'Площадь, тыс. км²',
    },
];

const columnsCustomNodes = [
    {
        id: 'country',
        label: 'Страна',
    },
    {
        id: 'capital',
        label: 'Столица',
    },
    {
        id: 'population',
        label: 'Население, млн',
    },
    {
        id: 'continent',
        label: 'Континент',
    },
    {
        id: 'currency',
        label: 'Валюта',
    },
    {
        id: 'officialLanguage',
        label: 'Язык',
    },
    {
        id: 'area',
        label: 'Площадь, тыс. км²',
    },
    {
        id: 'control',
        label: '',
        renderCell: () => <div>custom text</div>,
    },
];

const columnsComplexNodes = [
    {
        id: 'id',
        label: 'ID',
    },
    {
        id: 'array',
        label: 'Массив',
        renderCell: (arr) => {
            return arr.join(' + ');
        },
    },
    {
        id: 'object',
        label: 'Объект',
        renderCell: (obj) => {
            return JSON.stringify(obj);
        },
    },
    {
        id: 'function',
        label: 'Функция',
        renderCell: (func) => {
            return func(1);
        },
    },
];

const tableProps = {
    data: rows,
    columns: columnsBasic
};

getBaseVisualTests({
    component: 'Table',
    componentProps: tableProps,
    configPropsForMatrix: ['size', 'view'],
    actionBeforeSnapshot: () => {
        cy.viewport(1200, 650);
    },
});

describeFn('Table', () => {
    const Table = componentExists ? getComponent<TableProps>('Table') : () => null;

    it('borderVariant all', () => {
        cy.viewport(1280, 600);

        mount(
            <Table borderVariant="all" data={rows} columns={columnsBasic} />
        );

        cy.matchImageSnapshot();
    });

    it('borderVariant rows', () => {
        cy.viewport(1280, 600);

        mount(
            <Table borderVariant="rows" data={rows} columns={columnsBasic} />
        );

        cy.matchImageSnapshot();
    });

    it('borderVariant header', () => {
        cy.viewport(1280, 600);

        mount(
            <Table borderVariant="header" data={rows} columns={columnsBasic} />
        );

        cy.matchImageSnapshot();
    });

    it('maxHeight', () => {
        cy.viewport(1280, 600);

        mount(
            <Table maxHeight="400px" data={rows} columns={columnsBasic} />
        );

        cy.matchImageSnapshot();
    });

    it('stickyHeader', () => {
        cy.viewport(1280, 600);

        mount(
            <Table id="table" stickyHeader maxHeight="400px" data={rows} columns={columnsBasic} />
        );

        cy.get('.table-scrollable-container').scrollTo('bottom');

        cy.matchImageSnapshot();
    });

    it('enableSelection', () => {
        cy.viewport(1280, 600);

        mount(
            <Table enableSelection data={rows} columns={columnsBasic} />
        );

        cy.matchImageSnapshot();
    });

    it('renderCell', () => {
        cy.viewport(1280, 600);

        mount(
            <Table data={complexRows} columns={columnsComplexNodes} />
        );

        cy.matchImageSnapshot();
    });

    it('client sorting', () => {
        cy.viewport(1280, 600);

        mount(
            <Table data={rows} columns={columnsSorting} />
        );

        cy.get('.sorting-default-icon').should('be.visible');
        cy.get('.sorting-default-icon').click();
        cy.get('.sorting-desc-icon').should('be.visible');
        cy.get('table tbody tr:first td:first').should('have.text', 'Индия');
        cy.get('table tbody tr:last td:first').should('have.text', 'Австралия');
        cy.get('.sorting-desc-icon').click();
        cy.get('.sorting-asc-icon').should('be.visible');
        cy.get('table tbody tr:first td:first').should('have.text', 'Австралия');
        cy.get('table tbody tr:last td:first').should('have.text', 'Индия');

        cy.matchImageSnapshot();
    });

    it('client filtering', () => {
        cy.viewport(1280, 600);

        mount(
            <Table data={rows} columns={columnsFiltering} />
        );

        cy.get('.filter-icon').should('be.visible');
        cy.get('.filter-icon').click();
        cy.get('li').contains('> 100').click();
        cy.get('button').contains('Применить').click();
        cy.get('table tbody tr:first td:first').should('have.text', 'Бразилия');
        cy.get('table tbody tr:last td:first').should('have.text', 'Россия');

        cy.matchImageSnapshot();
    });

    it('resizing', () => {
        cy.viewport(1280, 600);

        mount(
            <Table data={rows} columns={columnsResizing} />
        );

        cy.get('th').contains('Население').trigger('mouseover');
        cy.get('.resize-divider').trigger('mousedown', { force: true });
        cy.get('.resize-divider').trigger('mouseup', 50, 0, { force: true });

        cy.matchImageSnapshot();

        cy.get('body').trigger('mouseover', { position: 'bottomRight' });
    });

    it('editing', () => {
        cy.viewport(1280, 600);

        mount(
            <Table data={rows} columns={columnsEditing} />
        );

        cy.get('td').contains('1400').click();

        cy.matchImageSnapshot();
    });

    it('custom nodes', () => {
        cy.viewport(1280, 600);

        mount(
            <Table data={rows} columns={columnsCustomNodes} />
        );

        cy.matchImageSnapshot();
    });

    it('semantic DOM', () => {
        mount(
                <Table
                    data={rows}
                    columns={columnsBasic}
                    classNames={{
                        root: 'root-class',
                        table: 'table-class',
                        header: { wrapper: 'header-wrapper-class', row: 'header-row-class', cell: 'header-cell-class' },
                        body: { wrapper: 'body-wrapper-class', row: 'body-row-class', cell: 'body-cell-class' },
                    }}
                />
        );

        cy.get('.table__root-element').should('be.visible').should('have.class', 'root-class');
        cy.get('.table__table-element').should('be.visible').should('have.class', 'table-class');
        cy.get('.table__header-wrapper-element').should('be.visible').should('have.class', 'header-wrapper-class');
        cy.get('.table__header-row-element').should('be.visible').should('have.class', 'header-row-class');
        cy.get('.table__header-cell-element').should('be.visible').should('have.class', 'header-cell-class');
        cy.get('.table__body-wrapper-element').should('be.visible').should('have.class', 'body-wrapper-class');
        cy.get('.table__body-row-element').should('be.visible').should('have.class', 'body-row-class');
        cy.get('.table__body-cell-element').should('be.visible').should('have.class', 'body-cell-class');
    });
});

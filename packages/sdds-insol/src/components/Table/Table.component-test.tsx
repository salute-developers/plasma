import * as React from 'react';
import { CypressTestDecorator, getComponent, mount } from '@salutejs/plasma-cy-utils';

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

describe('sdds-insol: Table', () => {
    const Table = getComponent('Table');

    it('basic', () => {
        cy.viewport(1500, 1000);

        mount(
            <CypressTestDecorator>
                <Table data={rows} columns={columnsBasic} />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('prop: size l', () => {
        cy.viewport(1500, 1000);

        mount(
            <CypressTestDecorator>
                <Table size="l" data={rows} columns={columnsBasic} />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('prop: size m', () => {
        cy.viewport(1500, 1000);

        mount(
            <CypressTestDecorator>
                <Table size="m" data={rows} columns={columnsBasic} />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('prop: size s', () => {
        cy.viewport(1500, 1000);

        mount(
            <CypressTestDecorator>
                <Table size="s" data={rows} columns={columnsBasic} />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('prop: view clear', () => {
        cy.viewport(1500, 1000);

        mount(
            <CypressTestDecorator>
                <Table view="clear" data={rows} columns={columnsBasic} />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('prop: borderVariant all', () => {
        cy.viewport(1500, 1000);

        mount(
            <CypressTestDecorator>
                <Table borderVariant="all" data={rows} columns={columnsBasic} />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('prop: borderVariant rows', () => {
        cy.viewport(1500, 1000);

        mount(
            <CypressTestDecorator>
                <Table borderVariant="rows" data={rows} columns={columnsBasic} />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('prop: borderVariant header', () => {
        cy.viewport(1500, 1000);

        mount(
            <CypressTestDecorator>
                <Table borderVariant="header" data={rows} columns={columnsBasic} />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('prop: maxHeight', () => {
        cy.viewport(1500, 1000);

        mount(
            <CypressTestDecorator>
                <Table maxHeight="400px" data={rows} columns={columnsBasic} />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('prop: stickyHeader', () => {
        cy.viewport(1500, 1000);

        mount(
            <CypressTestDecorator>
                <Table id="table" stickyHeader maxHeight="400px" data={rows} columns={columnsBasic} />
            </CypressTestDecorator>,
        );

        cy.get('.table-scrollable-container').scrollTo('bottom');

        cy.matchImageSnapshot();
    });

    it('prop: enableSelection', () => {
        cy.viewport(1500, 1000);

        mount(
            <CypressTestDecorator>
                <Table enableSelection data={rows} columns={columnsBasic} />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('prop: renderCell', () => {
        cy.viewport(1500, 1000);

        mount(
            <CypressTestDecorator>
                <Table data={complexRows} columns={columnsComplexNodes} />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('feature: client sorting', () => {
        cy.viewport(1500, 1000);

        mount(
            <CypressTestDecorator>
                <Table data={rows} columns={columnsSorting} />
            </CypressTestDecorator>,
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

    it('feature: client filtering', () => {
        cy.viewport(1500, 1000);

        mount(
            <CypressTestDecorator>
                <Table data={rows} columns={columnsFiltering} />
            </CypressTestDecorator>,
        );

        cy.get('.filter-icon').should('be.visible');
        cy.get('.filter-icon').click();
        cy.get('li').contains('> 100').click();
        cy.get('button').contains('Применить').click();
        cy.get('table tbody tr:first td:first').should('have.text', 'Бразилия');
        cy.get('table tbody tr:last td:first').should('have.text', 'Россия');

        cy.matchImageSnapshot();
    });

    it('feature: resizing', () => {
        cy.viewport(1500, 1000);

        mount(
            <CypressTestDecorator>
                <Table data={rows} columns={columnsResizing} />
            </CypressTestDecorator>,
        );

        cy.get('th').contains('Население').realHover();
        cy.get('.resize-divider').trigger('mousedown');
        cy.get('.resize-divider').trigger('mouseup', 50, 0, { force: true });

        cy.matchImageSnapshot();

        cy.get('body').realHover({ position: 'bottomRight' });
    });

    it('feature: editing', () => {
        cy.viewport(1500, 1000);

        mount(
            <CypressTestDecorator>
                <Table data={rows} columns={columnsEditing} />
            </CypressTestDecorator>,
        );

        cy.get('td').contains('1400').click();

        cy.matchImageSnapshot();
    });

    it('feature: custom nodes', () => {
        cy.viewport(1500, 1000);

        mount(
            <CypressTestDecorator>
                <Table data={rows} columns={columnsCustomNodes} />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });
});

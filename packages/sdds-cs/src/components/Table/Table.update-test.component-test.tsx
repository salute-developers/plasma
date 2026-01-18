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

describe('sdds-cs: Table', () => {
    const Table = getComponent('Table');

    it('[PLASMA-T2166] Table: size=l, view=default, borderVariant=all', () => {
        cy.viewport(1200, 681);

        mount(
            <CypressTestDecorator>
                <Table data={rows} columns={columnsBasic} size="l" view="default" borderVariant="all" />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T2167] Table: size=m, view=default, borderVariant=rows', () => {
        cy.viewport(1280, 601);

        mount(
            <CypressTestDecorator>
                <Table data={rows} columns={columnsBasic} size="m" view="default" borderVariant="rows" />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T2168] Table: size=s, view=default, borderVariant=header', () => {
        cy.viewport(1280, 599);

        mount(
            <CypressTestDecorator>
                <Table data={rows} columns={columnsBasic} size="s" view="default" borderVariant="header" />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T2169] Table: size=l, view=clear, borderVariant=all', () => {
        cy.viewport(1280, 681);

        mount(
            <CypressTestDecorator>
                <Table data={rows} columns={columnsBasic} size="l" view="clear" borderVariant="all" />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T2170] Table: enableSelection', () => {
        cy.viewport(1000, 601);

        mount(
            <CypressTestDecorator>
                <Table data={rows} columns={columnsBasic} enableSelection />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T2171] Table: without enableSelection', () => {
        cy.viewport(1000, 601);

        mount(
            <CypressTestDecorator>
                <Table data={rows} columns={columnsBasic} enableSelection={false} />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T2172] Table: with stickyHeader, maxHeight=400px', () => {
        cy.viewport(1280, 599);

        mount(
            <CypressTestDecorator>
                <Table id="table" data={rows} columns={columnsBasic} stickyHeader maxHeight="400px" />
            </CypressTestDecorator>,
        );

        cy.get('.table-scrollable-container').scrollTo('bottom');

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T2173] Table: without stickyHeader, maxHeight=200px', () => {
        cy.viewport(1280, 599);

        mount(
            <CypressTestDecorator>
                <Table id="table" data={rows} columns={columnsBasic} stickyHeader={false} maxHeight="200px" />
            </CypressTestDecorator>,
        );

        cy.get('.table-scrollable-container').scrollTo('bottom');

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T2174] Table: maxHeight=0px', () => {
        cy.viewport(1280, 599);

        mount(
            <CypressTestDecorator>
                <Table data={rows} columns={columnsBasic} maxHeight="0px" />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T2263] Table: sorting', () => {
        cy.viewport(1280, 601);

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

    it('[PLASMA-T2264] Table: filtering', () => {
        cy.viewport(1280, 599);

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

    it('[PLASMA-T2265] Table: resizing', () => {
        cy.viewport(1280, 601);

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

    it('[PLASMA-T2266] Table: editing', () => {
        cy.viewport(1280, 601);

        mount(
            <CypressTestDecorator>
                <Table data={rows} columns={columnsEditing} />
            </CypressTestDecorator>,
        );

        cy.get('td').contains('1400').click();

        cy.matchImageSnapshot();
    });
});

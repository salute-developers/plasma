import React from 'react';
import { mount, CypressTestDecorator, getComponent, SpaceMe } from '@salutejs/plasma-cy-utils';
import { IconSleep, IconEye } from '@salutejs/plasma-icons';

describe('plasma-b2c: TextField', () => {
    const TextField = getComponent('TextField');

    const propsDefault = {
        caption: 'Имя [label]',
        placeholder: 'Введите имя [placeholder]',
        helperText: 'Используйте только кириллицу',
    };

    it('_size :empty', () => {
        mount(
            <CypressTestDecorator>
                <TextField size="l" {...propsDefault} />
                <SpaceMe />
                <TextField size="m" {...propsDefault} />
                <SpaceMe />
                <TextField size="s" {...propsDefault} />
                <SpaceMe />
                <TextField size="xs" {...propsDefault} />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('_size', () => {
        const props = {
            value: 'Кирилл',
            ...propsDefault,
        };

        mount(
            <CypressTestDecorator>
                <TextField size="l" {...props} />
                <SpaceMe />
                <TextField size="m" {...props} />
                <SpaceMe />
                <TextField size="s" {...props} />
                <SpaceMe />
                <TextField size="xs" {...props} />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('_view_innerLabel :empty', () => {
        const props = {
            view: 'innerLabel',
            ...propsDefault,
        };

        mount(
            <CypressTestDecorator>
                <TextField size="l" {...props} />
                <SpaceMe />
                <TextField size="m" {...props} />
                <SpaceMe />
                <TextField size="s" {...props} />
                <SpaceMe />
                <TextField size="xs" {...props} />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('_view_innerLabel', () => {
        const props = {
            value: 'Кирилл',
            view: 'innerLabel',
            ...propsDefault,
        };

        mount(
            <CypressTestDecorator>
                <TextField size="l" {...props} />
                <SpaceMe />
                <TextField size="m" {...props} />
                <SpaceMe />
                <TextField size="s" {...props} />
                <SpaceMe />
                <TextField size="xs" {...props} />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('_size with content', () => {
        const props = {
            value: 'Кирилл',
            contentLeft: <IconSleep color="inherit" size="s" />,
            contentRight: <IconEye color="inherit" size="s" />,
            ...propsDefault,
        };

        mount(
            <CypressTestDecorator>
                <TextField size="l" {...props} />
                <SpaceMe />
                <TextField size="m" {...props} />
                <SpaceMe />
                <TextField size="s" {...props} />
                <SpaceMe />
                <TextField size="xs" {...props} />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });
});

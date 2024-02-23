import React from 'react';
import { mount, CypressTestDecorator, getComponent, SpaceMe } from '@salutejs/plasma-cy-utils';
import { IconSleep, IconEye } from '@salutejs/plasma-icons';

import { TextField as TextFieldB2C } from './TextField';

describe('plasma-b2c: TextField', () => {
    const TextField = getComponent('TextField') as typeof TextFieldB2C;

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
        const props: React.ComponentProps<typeof TextFieldB2C> = {
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
        const props: React.ComponentProps<typeof TextFieldB2C> = {
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
                <TextField
                    size="xs"
                    {...props}
                    contentLeft={<IconSleep color="inherit" size="xs" />}
                    contentRight={<IconEye color="inherit" size="xs" />}
                />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });
});

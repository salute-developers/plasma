import React from 'react';
import { mount, CypressTestDecorator, getComponent, SpaceMe } from '@salutejs/plasma-cy-utils';
import { IconEye } from '@salutejs/plasma-icons';

describe('plasma-b2c: TextArea', () => {
    const TextArea = getComponent('TextArea');

    const propsDefault = {
        placeholder: 'Оставьте ваш комментарий [placeholder]',
        leftHelper: 'Максимум 300 символов',
        rightHelper: '125 слов',
    };

    it('_size :empty', () => {
        mount(
            <CypressTestDecorator>
                <TextArea size="l" {...propsDefault} />
                <SpaceMe />
                <TextArea size="m" {...propsDefault} />
                <SpaceMe />
                <TextArea size="s" {...propsDefault} />
                <SpaceMe />
                <TextArea size="xs" {...propsDefault} />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('_size', () => {
        const props = {
            value: 'Ваш сервис - пушка',
            ...propsDefault,
        };

        mount(
            <CypressTestDecorator>
                <TextArea size="l" {...props} />
                <SpaceMe />
                <TextArea size="m" {...props} />
                <SpaceMe />
                <TextArea size="s" {...props} />
                <SpaceMe />
                <TextArea size="xs" {...props} />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('_size with content', () => {
        const props = {
            value: 'Ваш сервис - пушка',
            contentRight: <IconEye color="inherit" size="s" />,
            ...propsDefault,
        };

        mount(
            <CypressTestDecorator>
                <TextArea size="l" {...props} />
                <SpaceMe />
                <TextArea size="m" {...props} />
                <SpaceMe />
                <TextArea size="s" {...props} />
                <SpaceMe />
                <TextArea size="xs" {...props} />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });
});

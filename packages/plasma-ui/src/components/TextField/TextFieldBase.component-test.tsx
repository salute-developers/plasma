import React from 'react';
import { mount, CypressTestDecorator, getComponent, SpaceMe } from '@salutejs/plasma-cy-utils';
import { IconSleep, IconEye } from '@salutejs/plasma-icons';

describe('plasma-ui: TextField', () => {
    const TextField = getComponent('TextField');

    it('trailing symbols', () => {
        const props = {
            value: '1 500',
            contentLeft: <IconSleep color="inherit" size="s" />,
            contentRight: <IconEye color="inherit" size="s" />,
            rightTrailingSymbols: '₽',
            label: 'Label',
        };

        mount(
            <CypressTestDecorator>
                <TextField size="l" {...props} />
                <SpaceMe />
                <TextField size="m" {...props} />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('trailing symbols: long input text', () => {
        const props = {
            value: '1 500 000 000 000 000 000 000 000 000 000 000 000',
            contentLeft: <IconSleep color="inherit" size="s" />,
            contentRight: <IconEye color="inherit" size="s" />,
            rightTrailingSymbols: '₽',
            label: 'Label',
        };

        mount(
            <CypressTestDecorator>
                <TextField size="l" {...props} />
                <SpaceMe />
                <TextField size="m" {...props} />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('trailing symbols: long text', () => {
        const props = {
            value: '1 500 000 000 000 000 000 000 000 000 000',
            contentLeft: <IconSleep color="inherit" size="s" />,
            contentRight: <IconEye color="inherit" size="s" />,
            rightTrailingSymbols: 'million',
            label: 'Label',
        };

        mount(
            <CypressTestDecorator>
                <TextField size="l" {...props} />
                <SpaceMe />
                <TextField size="m" {...props} />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('trailing symbols: placeholder', () => {
        const props = {
            value: '',
            contentLeft: <IconSleep color="inherit" size="s" />,
            contentRight: <IconEye color="inherit" size="s" />,
            rightTrailingSymbols: 'million',
            placeholder: 'Ваша цена в',
        };

        mount(
            <CypressTestDecorator>
                <TextField size="l" {...props} />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });
});

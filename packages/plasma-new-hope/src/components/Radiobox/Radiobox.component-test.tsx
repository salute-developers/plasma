import React, { PropsWithChildren } from 'react';
import { mount, getComponent, getDescribeFN, hasComponent, getBaseVisualTests } from '@salutejs/plasma-cy-utils';

import type { RadioboxProps } from './Radiobox.types';

const componentExists = hasComponent('Radiobox');
const componentLinkExists = hasComponent('Link');
const componentListExists = hasComponent('List');
const componentListItemExists = hasComponent('ListItem');
const describeFn = getDescribeFN('Radiobox');

const componentProps = {
    name: 'test',
    value: 'test',
    label: 'Label',
    checked: true,
};

getBaseVisualTests({
    component: 'Radiobox',
    componentProps,
    configPropsForMatrix: ['view', 'size'],
});

describeFn('Radiobox', () => {
    const Radiobox = componentExists ? getComponent<RadioboxProps>('Radiobox') : () => null;
    const Link = componentLinkExists ? getComponent('Link') : () => null;
    const List = componentListExists
        ? getComponent('List')
        : ({ children, ...rest }: PropsWithChildren) => <div {...rest}>{children}</div>;
    const ListItem = componentListItemExists
        ? getComponent('ListItem')
        : ({ children, ...rest }: PropsWithChildren) => <div {...rest}>{children}</div>;

    const name = 'languages';
    const items = [
        {
            name,
            value: 'natural',
            label: 'Естественные языки',
            disabled: false,
            checked: true,
            indeterminate: false,
            description: 'Языки, на которых говорят люди. Они не были созданы искуственно и развивались естественно.',
        },
        { name, value: 'russian', label: 'Русский', checked: true, disabled: false, parent: 'natural' },
        {
            name,
            value: 'english',
            label: 'Английский',
            checked: true,
            disabled: false,
            description: (
                <>
                    Самый распространенный язык в <Link href="/#">мире</Link>
                </>
            ),
            parent: 'natural',
        },
        { name, value: 'french', label: 'Французский', checked: true, disabled: false, parent: 'natural' },
        {
            name,
            value: 'chinese',
            label: (
                <>
                    Китайский <Link href="/#">язык</Link>
                </>
            ),
            checked: true,
            parent: 'natural',
        },
        {
            name,
            value: 'artificial',
            label: 'Искусственные языки',
            checked: false,
            indeterminate: true,
            disabled: false,
        },
        {
            name,
            value: 'klingon',
            label: 'Клингонский',
            disabled: false,
            checked: false,
            description: 'Язык одной из раз в сериале СтарТрек',
            parent: 'artificial',
        },
        {
            name,
            value: 'elvish',
            label: 'Эльфийский',
            disabled: true,
            checked: true,
            description: 'Искусственный язык из вселенной Властелина колец',
            parent: 'artificial',
        },
        {
            name,
            value: 'dothraki',
            label: 'Дотракийский',
            disabled: true,
            checked: false,
            description: 'Язык, разработанный для реплик дотракийских племен из вселенной Песнь Льда и Огня',
            parent: 'artificial',
        },
    ];

    it('radiobox group', () => {
        mount(
            <List>
                {items.map((item) => (
                    <ListItem
                        key={item.value}
                        style={{
                            marginLeft: item.parent ? '32px' : undefined,
                        }}
                    >
                        <Radiobox {...item} />
                    </ListItem>
                ))}
            </List>,
        );

        cy.get('input[type="radio"]').first().focus();

        cy.viewport(500, 556);
        cy.matchImageSnapshot();
    });

    it('with focus', () => {
        mount(<Radiobox label="checkbox with focus" />);

        cy.get('input').focus();

        cy.matchImageSnapshot();
    });

    it('label', () => {
        mount(
            <>
                <Radiobox name="robots" label="simple radiobox" />
                <Radiobox
                    name="robots"
                    label={
                        <span>
                            radiobox with <a href="https://plasma.sberdevices.ru/">link</a>
                        </span>
                    }
                />
            </>,
        );
        cy.matchImageSnapshot();
    });

    it('description', () => {
        mount(
            <>
                <Radiobox name="robots" label="simple radiobox" description="О чём мечтают роботы?" />
                <Radiobox
                    name="robots"
                    label="simple radiobox"
                    description={
                        <span>
                            Об <a href="https://plasma.sberdevices.ru">электроовцах</a>
                        </span>
                    }
                />
            </>,
        );
        cy.matchImageSnapshot();
    });

    it('checked', () => {
        mount(
            <>
                <Radiobox name="robots" checked label="radiobox checked" description="О чём мечтают роботы?" />
                <Radiobox name="robots" label="radiobox" description="О чём мечтают роботы?" />
            </>,
        );
        cy.matchImageSnapshot();
    });

    it('focused', () => {
        mount(
            <>
                <Radiobox name="robots" focused label="radiobox checked" description="О чём мечтают роботы?" />
                <Radiobox name="robots" focused checked label="radiobox" description="О чём мечтают роботы?" />
            </>,
        );
        cy.matchImageSnapshot();
    });

    it('disabled', () => {
        mount(
            <>
                <Radiobox checked disabled label="radiobox checked" description="О чём мечтают роботы?" />
                <Radiobox disabled label="radiobox" description="О чём мечтают роботы?" />
            </>,
        );
        cy.matchImageSnapshot();
    });

    it('squeezes', () => {
        mount(
            <div style={{ overflow: 'hidden', width: 150 }}>
                <Radiobox
                    checked
                    disabled
                    label="Radiobox with a very very very very very long label"
                    description="Radiobox description with a very very very very very long text"
                    singleLine
                />
                <Radiobox disabled label="Radiobox 2" description="Radiobox 2 description" />
            </div>,
        );
        cy.matchImageSnapshot();
    });
});

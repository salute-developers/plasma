import React from 'react';
import { mount, getComponent, getDescribeFN, hasComponent, PadMe } from '@salutejs/plasma-cy-utils';

type ListProps = {
    appearance?: 'default' | 'numbered';
    size?: string;
    disabled?: boolean;
};

type ListItemProps = {
    contentLeft?: React.ReactNode;
    disabled?: boolean;
};

type CounterProps = {
    count: number;
    size?: string;
    view?: string;
};

const componentExists = hasComponent('List') && hasComponent('ListItem') && hasComponent('Counter');
const describeFn = getDescribeFN('List');

const items = [
    'Откройте настройки устройства',
    'Выберите раздел «Аккаунты» и войдите под своей учетной записью',
    'Подтвердите вход кодом из СМС',
    'Готово',
];

describeFn('List numbered', () => {
    const List = componentExists ? getComponent<ListProps>('List') : () => null;
    const ListItem = componentExists ? getComponent<ListItemProps>('ListItem') : () => null;
    const Counter = componentExists ? getComponent<CounterProps>('Counter') : () => null;

    const Demo = ({ size = 'm', disabled = false }: ListProps) => (
        <List appearance="numbered" size={size} disabled={disabled}>
            {items.map((item, index) => (
                <ListItem key={index} contentLeft={<Counter size="s" view="secondary" count={index + 1} />}>
                    {item}
                </ListItem>
            ))}
        </List>
    );

    it('size', () => {
        mount(
            <>
                <Demo size="s" />
                <PadMe />
                <Demo size="m" />
            </>,
        );

        cy.matchImageSnapshot();
    });

    it('disabled', () => {
        mount(<Demo disabled />);

        cy.matchImageSnapshot();
    });
});

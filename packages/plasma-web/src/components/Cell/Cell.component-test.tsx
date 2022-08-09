import React, { FC } from 'react';
import { createGlobalStyle } from 'styled-components';
import { standard as standardTypo } from '@salutejs/plasma-typo';
import { mount, CypressTestDecorator, getComponent } from '@salutejs/plasma-cy-utils';
import { IconHelp } from '@salutejs/plasma-icons';

const StandardTypoStyle = createGlobalStyle(standardTypo);

describe('plasma-web: Cell', () => {
    const Cell = getComponent('Cell');

    // TODO: Перетащить подключение StandardTypoStyle в @salutejs/plasma-cy-utils
    // после переезда на новую типографику для @salutejs/plasma-web - https://github.com/salute-developers/plasma/issues/69
    const CypressTestDecoratorWithTypo: FC = ({ children }) => (
        <CypressTestDecorator>
            <StandardTypoStyle />
            {children}
        </CypressTestDecorator>
    );

    it('simple', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Cell content={<IconHelp />} description="Тестовый контент для ячейки" />
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });
});

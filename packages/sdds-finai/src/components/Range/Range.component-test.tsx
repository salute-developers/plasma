import React from 'react';
import { mount, getComponent, PadMe } from '@salutejs/plasma-cy-utils';
// @ts-ignore
import { IconPlasma } from '@salutejs/plasma-icons';

describe('sdds-finai: Range', () => {
    const Range = getComponent('Range') as any;
    const IconButton = getComponent('IconButton') as any;

    const sharedProps = {
        leftHelper: 'Подсказка к полю',
        firstPlaceholder: 'Заполните поле 1',
        secondPlaceholder: 'Заполните поле 2',
        firstTextfieldTextBefore: 'С',
        secondTextfieldTextBefore: 'ПО',
    };

    it('firstValueEdited, secondValueEdited', () => {
        const contentLeft = <IconPlasma size="s" color="inherit" />;
        const contentRight = (
            <IconButton size="s" view="clear">
                <IconPlasma size="s" color="inherit" />
            </IconButton>
        );

        mount(
            <>
                <Range {...sharedProps} contentLeft={contentLeft} contentRight={contentRight} firstValueEdited />
                <PadMe />
                <Range {...sharedProps} contentLeft={contentLeft} contentRight={contentRight} secondValueEdited />
                <PadMe />
                <Range
                    {...sharedProps}
                    contentLeft={contentLeft}
                    contentRight={contentRight}
                    firstValueEdited
                    secondValueEdited
                />
            </>,
        );
        cy.get('input').last().click();
        cy.matchImageSnapshot();
    });
});

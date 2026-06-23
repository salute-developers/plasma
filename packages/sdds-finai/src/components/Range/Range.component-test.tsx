import React from 'react';
import { mount, CypressTestDecorator, getComponent, PadMe } from '@salutejs/plasma-cy-utils';
// @ts-ignore
import { IconPlasma } from '@salutejs/plasma-icons';
import type { RangeProps } from '@salutejs/plasma-new-hope';

const sizes = ['s', 'xs'];

describe('sdds-finai: Range', () => {
    const Range = getComponent<RangeProps>('Range');
    const IconButton = getComponent('IconButton') as any;

    const Demo = (props: any) => {
        const contentLeft = <IconPlasma size="s" color="inherit" />;
        const contentRight = (
            <IconButton size="s" view="clear">
                <IconPlasma size="s" color="inherit" />
            </IconButton>
        );

        return (
            <Range
                firstPlaceholder="Заполните поле 1"
                secondPlaceholder="Заполните поле 2"
                leftHelper="Подсказка к полю"
                firstTextfieldTextBefore="С"
                secondTextfieldTextBefore="ПО"
                contentLeft={contentLeft}
                contentRight={contentRight}
                {...props}
            />
        );
    };

    it('firstValueEdited, secondValueEdited', () => {
        mount(
            <>
                <Demo firstValueEdited />
                <PadMe />
                <Demo secondValueEdited />
                <PadMe />
                <Demo firstValueEdited secondValueEdited />
            </>,
        );
        cy.get('input').last().click();
        cy.matchImageSnapshot();
    });

    it(':size appearance=viewMode', () => {
        mount(
            <CypressTestDecorator>
                {sizes.map((size) => (
                    <>
                        <Demo key={size} appearance="viewMode" size={size} />
                        <PadMe />
                    </>
                ))}
            </CypressTestDecorator>,
        );
        cy.matchImageSnapshot();
    });
});

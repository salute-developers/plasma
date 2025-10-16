import React from 'react';
import type { ComponentProps, ReactNode } from 'react';
import { mount, CypressTestDecorator, getComponent, PadMe } from '@salutejs/plasma-cy-utils';

import { Rating as RatingCS } from '.';

type RatingDemoProps = {
    view?: ComponentProps<typeof RatingCS>['view'];
    size?: ComponentProps<typeof RatingCS>['size'];
    precision?: number;
    hasValue?: boolean;
    value?: number;
    valuePlacement?: 'before' | 'after';
    iconQuantity?: 1 | 5 | 10;
    hasIcons?: boolean;
    iconSlot?: ReactNode;
    iconSlotOutline?: ReactNode;
    iconSlotHalf?: ReactNode;
    helperTextStretching?: 'fixed' | 'filled';
    helperText?: string;
};

describe('sdds-cs: Rating', () => {
    const Rating = getComponent('Rating') as typeof RatingCS;

    const Demo = ({
        view = 'default',
        size = 's',
        precision,
        hasValue = true,
        value,
        valuePlacement,
        iconQuantity = 5,
        hasIcons = true,
        helperTextStretching = 'fixed',
        ...rest
    }: RatingDemoProps) => {
        return (
            <Rating
                view={view}
                size={size}
                precision={precision}
                hasValue={hasValue}
                value={value}
                valuePlacement={valuePlacement}
                iconQuantity={iconQuantity}
                hasIcons={hasIcons}
                helperText=""
                helperTextStretching={helperTextStretching}
                {...rest}
            />
        );
    };

    it('[PLASMA-T1749] Rating: view=default, size=l, hasValue, value=5, precision=1, valuePlacement=before, hasIcons, iconQuantity=1, helperText, helperTextStretching=fixed', () => {
        mount(
            <CypressTestDecorator>
                <Demo
                    view="default"
                    size="s"
                    hasValue
                    value={5}
                    precision={1}
                    hasIcons
                    iconQuantity={1}
                    helperTextStretching="fixed"
                    helperText="Helper Text"
                />
            </CypressTestDecorator>,
        );
        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1750] Rating: view=accent, size=m, value=0, iconQuantity=5', () => {
        mount(
            <CypressTestDecorator>
                <Demo view="accent" size="s" hasValue={false} value={0} hasIcons iconQuantity={5} helperText="" />
            </CypressTestDecorator>,
        );
        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1751] Rating: view=default, size=s, hasValue, value=3.8, precision=1, valuePlacement=before, hasIcons, iconQuantity=10, helperText, helperTextStretching=fixed', () => {
        mount(
            <CypressTestDecorator>
                <Demo
                    view="default"
                    size="s"
                    hasValue
                    value={3.8}
                    precision={1}
                    valuePlacement="before"
                    hasIcons
                    iconQuantity={10}
                    helperText="Helper Text"
                    helperTextStretching="fixed"
                />
            </CypressTestDecorator>,
        );
        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1752] Rating: view=accent, size=xs, value=1, iconQuantity=1', () => {
        mount(
            <CypressTestDecorator>
                <Demo view="accent" size="s" hasValue={false} value={1} iconQuantity={1} />
            </CypressTestDecorator>,
        );
        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1753] Rating: view=default, size=xxs, hasValue, value=7.6, precision=2, valuePlacement=after, hasIcons=true, iconQuantity=10, helperText, helperTextStretching=filled', () => {
        mount(
            <CypressTestDecorator>
                <Demo
                    view="default"
                    size="s"
                    hasValue
                    value={7.6}
                    precision={2}
                    valuePlacement="after"
                    hasIcons
                    iconQuantity={10}
                    helperText="Helper Text"
                    helperTextStretching="filled"
                />
            </CypressTestDecorator>,
        );
        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1754] Rating: view=accent, size=h1, value=5, iconQuantity=5, helperText', () => {
        mount(
            <CypressTestDecorator>
                <Demo
                    view="accent"
                    size="h4"
                    hasValue={false}
                    value={5}
                    hasIcons
                    iconQuantity={5}
                    helperText="Helper Text"
                />
            </CypressTestDecorator>,
        );
        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1755] Rating: view=default, size=h5, hasValue, value=2.75, precision=2, valuePlacement=before, hasIcons, iconQuantity=1, helperText, helperTextStretching=filled', () => {
        mount(
            <CypressTestDecorator>
                <Demo
                    view="default"
                    size="h4"
                    hasValue
                    value={2.75}
                    precision={2}
                    valuePlacement="before"
                    hasIcons
                    iconQuantity={1}
                    helperText="Helper Text"
                    helperTextStretching="filled"
                />
            </CypressTestDecorator>,
        );
        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1756] Rating: view=accent, size=displayL, hasValue, value=4.5, precision=1, valuePlacement=before, hasIcons, iconQuantity=5', () => {
        mount(
            <CypressTestDecorator>
                <Demo
                    view="accent"
                    size="s"
                    hasValue
                    value={4.5}
                    precision={1}
                    valuePlacement="before"
                    hasIcons
                    iconQuantity={5}
                />
            </CypressTestDecorator>,
        );
        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1757] Rating: view=default, size=displayS, hasValue, value=0.5, precision=2, valuePlacement=after, hasIcons, iconQuantity=5, helperText, helpterTextStretching=fixed', () => {
        mount(
            <CypressTestDecorator>
                <Demo
                    view="default"
                    size="h4"
                    hasValue
                    value={0.5}
                    precision={2}
                    valuePlacement="after"
                    hasIcons
                    iconQuantity={5}
                    helperText="Helper Text"
                    helperTextStretching="fixed"
                />
            </CypressTestDecorator>,
        );
        cy.matchImageSnapshot();
    });
});

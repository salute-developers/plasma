import React from 'react';
import type { ReactNode } from 'react';
import { IconKeyFill, IconKeyOutline, IconLockFill } from '@salutejs/plasma-icons';
import { mount, getComponent, getDescribeFN, hasComponent, getBaseVisualTests, PadMe } from '@salutejs/plasma-cy-utils';
import { ratingClasses } from '@salutejs/plasma-new-hope/styled-components';

import type { RatingProps } from './Rating.types';

type RatingDemoProps = {
    view?: string;
    size?: string;
    precision?: number;
    hasValue?: boolean;
    value?: number;
    valuePlacement?: 'before' | 'after';
    iconQuantity?: 1 | 5 | 10;
    hasIcons?: boolean;
    iconSlot?: ReactNode;
    iconSlotOutline?: ReactNode;
    iconSlotHalf?: ReactNode;
    decimalSeparator?: string;
    helperText?: string;
    helpterTextStretching?: 'filled' | 'fixed';
};

const componentExists = hasComponent('Rating');
const describeFn = getDescribeFN('Rating');

const ratingProps = {
    precision: 1,
    hasValue: true,
    value: 3.8,
    valuePlacement: 'before',
    iconQuantity: 5,
    hasIcons: true
};

getBaseVisualTests({
    component: 'Rating',
    componentProps: ratingProps,
    configPropsForMatrix: ['view', 'size'],
});

describeFn('Rating', () => {
    const Rating = componentExists ? getComponent<RatingProps>('Rating') : () => null;

    const Demo = ({
        view = 'default',
        size = 's',
        precision,
        hasValue = true,
        value,
        valuePlacement,
        iconQuantity = 5,
        hasIcons = true,
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
                helperText="Helper text"
                {...rest}
            />
        );
    };

    it('precision', () => {
        mount(
            <>
                <Demo value={3.8758} precision={1} />
                <PadMe />
                <Demo value={3.8758} precision={2} />
                <PadMe />
                <Demo value={3.8758} precision={3} />
            </>
        );

        cy.matchImageSnapshot();
    });

    it('valuePlacement', () => {
        mount(
            <>
                <Demo value={3.8} valuePlacement="before" />
                <PadMe />
                <Demo value={3.8} valuePlacement="after" />
            </>
        );

        cy.matchImageSnapshot();
    });

    it('iconQuantity', () => {
        mount(
            <>
                <Demo value={3.8} hasIcons={false} />
                <PadMe />
                <Demo value={3.8} iconQuantity={5} />
                <PadMe />
                <Demo value={3.8} iconQuantity={10} />
                <PadMe />
                <Demo value={3.8} iconQuantity={1} />
            </>
        );

        cy.matchImageSnapshot();
    });

    it('value, decimalSeparator', () => {
        mount(
            <>
                <Demo value={5} hasValue={false} />
                <PadMe />
                <Demo value={0} />
                <PadMe />
                <Demo value={0.5} precision={2} />
                <PadMe />
                <Demo value={1}/>
                <PadMe />
                <Demo value={2.25} precision={2} decimalSeparator=','/>
                <PadMe />
                <Demo value={3.75} precision={2} decimalSeparator='-' />
                <PadMe />
                <Demo value={5}/>
                <PadMe />
                <Demo value={6.75} precision={2} />
            </>
            
        );

        cy.matchImageSnapshot();
    });

    it('custom icons', () => {
        mount(
            <Demo
                value={3.8}
                iconSlot={<IconKeyFill size="s" className={ratingClasses.customIconSizing} />}
                iconSlotOutline={<IconLockFill size="s" className={ratingClasses.customIconSizing} />}
                iconSlotHalf={<IconKeyOutline size="s" className={ratingClasses.customIconSizing} />}
            />
        );

        cy.matchImageSnapshot();
    });
});

import React from 'react';
import type { ComponentProps, ReactNode } from 'react';
import { IconKeyFill, IconKeyOutline, IconLockFill } from '@salutejs/plasma-icons';
import { mount, CypressTestDecorator, getComponent, PadMe } from '@salutejs/plasma-cy-utils';
import { ratingClasses } from '@salutejs/plasma-new-hope/styled-components';

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
};

const sizes = ['s', 'h4'];

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

    it(':view', () => {
        mount(
            <CypressTestDecorator>
                <Demo view="default" value={3.8} />
                <PadMe />
                <Demo view="accent" value={3.8} />
            </CypressTestDecorator>,
        );
        cy.matchImageSnapshot();
    });

    it(':precision', () => {
        mount(
            <CypressTestDecorator>
                <Demo view="default" value={3.8758} precision={1} />
                <PadMe />
                <Demo view="default" value={3.8758} precision={2} />
                <PadMe />
                <Demo view="default" value={3.8758} precision={3} />
            </CypressTestDecorator>,
        );
        cy.matchImageSnapshot();
    });

    it(':valuePlacement', () => {
        mount(
            <CypressTestDecorator>
                <Demo view="default" value={3.8} valuePlacement="before" />
                <PadMe />
                <Demo view="default" value={3.8} valuePlacement="after" />
            </CypressTestDecorator>,
        );
        cy.matchImageSnapshot();
    });

    it(':iconQuantity', () => {
        mount(
            <CypressTestDecorator>
                <Demo view="default" value={3.8} iconQuantity={5} />
                <PadMe />
                <Demo view="default" value={3.8} iconQuantity={10} />
            </CypressTestDecorator>,
        );
        cy.matchImageSnapshot();
    });

    it(':without icons', () => {
        mount(
            <CypressTestDecorator>
                <Demo view="default" value={3.8} hasIcons={false} />
            </CypressTestDecorator>,
        );
        cy.matchImageSnapshot();
    });

    it(':without value', () => {
        mount(
            <CypressTestDecorator>
                <Demo view="default" value={3.8} hasValue={false} />
            </CypressTestDecorator>,
        );
        cy.matchImageSnapshot();
    });

    it(':custom icons', () => {
        mount(
            <CypressTestDecorator>
                <Demo
                    view="default"
                    value={3.8}
                    iconSlot={<IconKeyFill size="s" className={ratingClasses.customIconSizing} />}
                    iconSlotOutline={<IconLockFill size="s" className={ratingClasses.customIconSizing} />}
                    iconSlotHalf={<IconKeyOutline size="s" className={ratingClasses.customIconSizing} />}
                />
            </CypressTestDecorator>,
        );
        cy.matchImageSnapshot();
    });

    it(':size', () => {
        mount(
            <CypressTestDecorator>
                {sizes.map((size) => (
                    <>
                        <Demo key={size} value={3.8} size={size} iconQuantity={5} />
                        <PadMe />
                        <Demo key={size} value={3.8} size={size} iconQuantity={1} />
                        <PadMe />
                    </>
                ))}
            </CypressTestDecorator>,
        );
        cy.matchImageSnapshot();
    });
});

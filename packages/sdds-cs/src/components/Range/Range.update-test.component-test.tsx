import React, { ComponentProps } from 'react';
import { IconDownload, IconSearch } from '@salutejs/plasma-icons';
import { mount, CypressTestDecorator, getComponent } from '@salutejs/plasma-cy-utils';

import { IconButton as IconButtonCS } from '../IconButton';

import { Range as RangeCS } from '.';

const Icon = () => <IconDownload color="inherit" />;

type RangeDemoProps = {
    size?: ComponentProps<typeof RangeCS>['size'];
    dividerVariant?: ComponentProps<typeof RangeCS>['dividerVariant'];
    disabled?: boolean;
    readOnly?: boolean;
    firstValueError?: boolean;
    secondValueError?: boolean;
    firstValueSuccess?: boolean;
    secondValueSuccess?: boolean;
};

describe('sdds-cs: Range', () => {
    const Range = getComponent('Range') as typeof RangeCS;
    const IconButton = getComponent('IconButton') as typeof IconButtonCS;

    const Demo = ({
        size = 's',
        dividerVariant = 'dash',
        disabled,
        readOnly,
        firstValueError,
        secondValueError,
        firstValueSuccess,
        secondValueSuccess,
    }: RangeDemoProps) => {
        return (
            <Range
                size={size}
                dividerVariant={dividerVariant}
                disabled={disabled}
                readOnly={readOnly}
                firstValueError={firstValueError}
                secondValueError={secondValueError}
                firstValueSuccess={firstValueSuccess}
                secondValueSuccess={secondValueSuccess}
                label="Лейбл"
                leftHelper="Подсказка к полю"
                firstPlaceholder="Заполните поле 1"
                secondPlaceholder="Заполните поле 2"
                firstTextfieldTextBefore="С"
                secondTextfieldTextBefore="ПО"
                contentLeft={<Icon />}
                contentRight={
                    <IconButton size="s" view="clear">
                        <IconSearch />
                    </IconButton>
                }
            />
        );
    };

    it('[PLASMA-T1383] Range: dividerVariant=none', () => {
        mount(
            <CypressTestDecorator>
                <Demo dividerVariant="none" />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1384] Range: size=s, dividerVariant=dash, enableContentLeft, enableFirstTextfieldContentLeft, enableSecondTextfieldContentLeft, firstValueError', () => {
        mount(
            <CypressTestDecorator>
                <Range
                    size="s"
                    label="Лейбл"
                    leftHelper="Подсказка к полю"
                    firstPlaceholder="Заполните поле 1"
                    secondPlaceholder="Заполните поле 2"
                    firstTextfieldTextBefore="С"
                    secondTextfieldTextBefore="ПО"
                    contentLeft={<Icon />}
                    firstTextfieldContentLeft={<Icon />}
                    secondTextfieldContentLeft={<Icon />}
                    dividerVariant="dash"
                    firstValueError
                />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1532] Range: size=s, dividerVariant=icon, enableContentRight, enableFirstTextfieldContentRight, enableSecondTextfieldContentRight, secondValueError', () => {
        mount(
            <CypressTestDecorator>
                <Range
                    size="s"
                    label="Лейбл"
                    leftHelper="Подсказка к полю"
                    firstPlaceholder="Заполните поле 1"
                    secondPlaceholder="Заполните поле 2"
                    firstTextfieldTextBefore="С"
                    secondTextfieldTextBefore="ПО"
                    contentRight={
                        <IconButton size="s" view="clear">
                            <IconSearch />
                        </IconButton>
                    }
                    firstTextfieldContentRight={<Icon />}
                    secondTextfieldContentRight={<Icon />}
                    dividerVariant="icon"
                    secondValueError
                />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1533] Range: size=s, firstValueSuccess', () => {
        mount(
            <CypressTestDecorator>
                <Demo size="s" firstValueSuccess />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1534] Range: secondValueSuccess', () => {
        mount(
            <CypressTestDecorator>
                <Demo secondValueSuccess />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1535] Range: firstValueError, secondValueSuccess', () => {
        mount(
            <CypressTestDecorator>
                <Demo size="s" firstValueError secondValueSuccess />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1536] Range: firstValueSuccess, secondValueError', () => {
        mount(
            <CypressTestDecorator>
                <Demo size="s" firstValueSuccess secondValueError />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1537] Range: readOnly', () => {
        mount(
            <CypressTestDecorator>
                <Demo readOnly />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1538] Range: disabled', () => {
        mount(
            <CypressTestDecorator>
                <Demo disabled />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1006] Range: firstField clicked', () => {
        mount(
            <CypressTestDecorator>
                <Demo />
            </CypressTestDecorator>,
        );
        cy.get('input').first().click();

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1016] Range: secondField clicked', () => {
        mount(
            <CypressTestDecorator>
                <Demo />
            </CypressTestDecorator>,
        );
        cy.get('input').last().click();

        cy.matchImageSnapshot();
    });
});

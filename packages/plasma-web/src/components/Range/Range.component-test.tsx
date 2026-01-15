import React from 'react';
import type { FC, PropsWithChildren } from 'react';
import { createGlobalStyle } from 'styled-components';
import { standard as standardTypo } from '@salutejs/plasma-typo';
import { IconDownload, IconSearch } from '@salutejs/plasma-icons';
import { mount, CypressTestDecorator, getComponent, PadMe } from '@salutejs/plasma-cy-utils';

const StandardTypoStyle = createGlobalStyle(standardTypo);
const Icon = () => <IconDownload color="inherit" />;

type RangeDemoProps = {
    appearance?: 'default' | 'clear';
    hasClearDivider?: boolean;
    size?: string;
    disabled?: boolean;
    readOnly?: boolean;
    firstValueError?: boolean;
    secondValueError?: boolean;
    firstValueSuccess?: boolean;
    secondValueSuccess?: boolean;
    required?: boolean;
    requiredPlacement?: 'left' | 'right';
    label?: string;
};

describe('plasma-web: Range', () => {
    const Range = getComponent('Range');
    const IconButton = getComponent('IconButton');

    const CypressTestDecoratorWithTypo: FC<PropsWithChildren> = ({ children }) => (
        <CypressTestDecorator>
            <StandardTypoStyle />
            {children}
        </CypressTestDecorator>
    );

    const Demo = ({
        appearance = 'default',
        hasClearDivider,
        size = 'm',
        label,
        disabled,
        readOnly,
        firstValueError,
        secondValueError,
        firstValueSuccess,
        secondValueSuccess,
        ...rest
    }: RangeDemoProps) => {
        return (
            <Range
                appearance={appearance}
                hasClearDivider={hasClearDivider}
                size={size}
                disabled={disabled}
                readOnly={readOnly}
                firstValueError={firstValueError}
                secondValueError={secondValueError}
                firstValueSuccess={firstValueSuccess}
                secondValueSuccess={secondValueSuccess}
                label={label}
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
                {...rest}
            />
        );
    };

    it('simple', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Demo />
            </CypressTestDecoratorWithTypo>,
        );
        cy.matchImageSnapshot();
    });

    it('simple: filled value', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Range
                    label="Лейбл"
                    leftHelper="Подсказка к полю"
                    firstValue="1"
                    secondValue="10"
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
            </CypressTestDecoratorWithTypo>,
        );
        cy.matchImageSnapshot();
    });

    it('simple: divider as icon', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Range
                    label="Лейбл"
                    leftHelper="Подсказка к полю"
                    firstValue="1"
                    secondValue="10"
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
                    dividerVariant="icon"
                    dividerIcon={<Icon />}
                />
            </CypressTestDecoratorWithTypo>,
        );
        cy.matchImageSnapshot();
    });

    it('_size', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Demo label="Лейбл" size="xl" />
                <PadMe />
                <Demo label="Лейбл" size="l" />
                <PadMe />
                <Demo label="Лейбл" size="m" />
                <PadMe />
                <Demo label="Лейбл" size="s" />
                <PadMe />
                <Demo label="Лейбл" size="xs" />
            </CypressTestDecoratorWithTypo>,
        );
        cy.matchImageSnapshot();
    });

    it('_disabled & _readOnly', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Demo label="Лейбл" disabled />
                <PadMe />
                <Demo label="Лейбл" readOnly />
            </CypressTestDecoratorWithTypo>,
        );
        cy.matchImageSnapshot();
    });

    it('_error & _success', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Demo label="Лейбл" firstValueError />
                <PadMe />
                <Demo label="Лейбл" secondValueError />
                <PadMe />
                <Demo label="Лейбл" firstValueError secondValueError />
                <PadMe />
                <Demo label="Лейбл" firstValueSuccess />
                <PadMe />
                <Demo label="Лейбл" secondValueSuccess />
                <PadMe />
                <Demo label="Лейбл" firstValueSuccess secondValueSuccess />
            </CypressTestDecoratorWithTypo>,
        );
        cy.matchImageSnapshot();
    });

    it('_required', () => {
        cy.viewport(500, 800);

        mount(
            <CypressTestDecoratorWithTypo>
                <div style={{ padding: '1rem' }}>
                    <Demo required label="Лейбл" />
                    <PadMe />
                    <Demo required requiredPlacement="left" label="Лейбл" />
                    <PadMe />
                    <Demo required />
                    <PadMe />
                    <Demo required requiredPlacement="left" />
                </div>
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-] Range: appearance=clear, hasClearDivider', () => {
        mount(
            <CypressTestDecorator>
                <Demo renderFromDate={new Date(2024, 11, 14)} appearance="clear" />
                <PadMe />
                <Demo renderFromDate={new Date(2024, 11, 14)} appearance="clear" hasClearDivider />
            </CypressTestDecorator>,
        );
        cy.get('input').last().click();

        cy.matchImageSnapshot();
    });

    it('[PLASMA-] Range: appearance=clear, firstValueSuccess, secondValueSuccess', () => {
        mount(
            <CypressTestDecorator>
                <Demo renderFromDate={new Date(2024, 11, 14)} appearance="clear" firstValueSuccess hasClearDivider />
                <PadMe />
                <Demo renderFromDate={new Date(2024, 11, 14)} appearance="clear" secondValueSuccess hasClearDivider />
                <PadMe />
                <Demo
                    renderFromDate={new Date(2024, 11, 14)}
                    appearance="clear"
                    firstValueSuccess
                    secondValueSuccess
                    hasClearDivider
                />
            </CypressTestDecorator>,
        );
        cy.get('input').last().click();

        cy.matchImageSnapshot();
    });

    it('[PLASMA-] Range: appearance=clear, firstValueError, secondValueError', () => {
        mount(
            <CypressTestDecorator>
                <Demo renderFromDate={new Date(2024, 11, 14)} appearance="clear" firstValueError hasClearDivider />
                <PadMe />
                <Demo renderFromDate={new Date(2024, 11, 14)} appearance="clear" secondValueError hasClearDivider />
                <PadMe />
                <Demo
                    renderFromDate={new Date(2024, 11, 14)}
                    appearance="clear"
                    firstValueError
                    secondValueError
                    hasClearDivider
                />
            </CypressTestDecorator>,
        );
        cy.get('input').last().click();

        cy.matchImageSnapshot();
    });
});

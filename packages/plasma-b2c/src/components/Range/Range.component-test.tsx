import React from 'react';
import { IconDownload, IconSearch } from '@salutejs/plasma-icons';
import { CypressTestDecorator, getComponent, PadMe } from '@salutejs/plasma-cy-utils';
import { mount } from '@cypress/react';

const Icon = () => <IconDownload color="inherit" />;

type RangeDemoProps = {
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

describe('plasma-b2c: Range', () => {
    const Range = getComponent('Range');
    const IconButton = getComponent('IconButton');

    const Demo = ({
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
            <CypressTestDecorator>
                <Demo label="Лейбл" />
            </CypressTestDecorator>,
        );
        cy.matchImageSnapshot();
    });

    it('simple: filled value', () => {
        mount(
            <CypressTestDecorator>
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
            </CypressTestDecorator>,
        );
        cy.matchImageSnapshot();
    });

    it('simple: divider as icon', () => {
        mount(
            <CypressTestDecorator>
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
            </CypressTestDecorator>,
        );
        cy.matchImageSnapshot();
    });

    it('_size', () => {
        mount(
            <CypressTestDecorator>
                <Demo label="Лейбл" size="xl" />
                <PadMe />
                <Demo label="Лейбл" size="l" />
                <PadMe />
                <Demo label="Лейбл" size="m" />
                <PadMe />
                <Demo label="Лейбл" size="s" />
                <PadMe />
                <Demo label="Лейбл" size="xs" />
            </CypressTestDecorator>,
        );
        cy.matchImageSnapshot();
    });

    it('_disabled & _readOnly', () => {
        mount(
            <CypressTestDecorator>
                <Demo label="Лейбл" disabled />
                <PadMe />
                <Demo label="Лейбл" readOnly />
            </CypressTestDecorator>,
        );
        cy.matchImageSnapshot();
    });

    it('_error & _success', () => {
        mount(
            <CypressTestDecorator>
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
            </CypressTestDecorator>,
        );
        cy.matchImageSnapshot();
    });

    it('_required', () => {
        cy.viewport(500, 800);

        mount(
            <CypressTestDecorator>
                <div style={{ padding: '1rem' }}>
                    <Demo required label="Лейбл" />
                    <PadMe />
                    <Demo required requiredPlacement="left" label="Лейбл" />
                    <PadMe />
                    <Demo required />
                    <PadMe />
                    <Demo required requiredPlacement="left" />
                </div>
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });
});

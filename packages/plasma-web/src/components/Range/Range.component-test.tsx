import React from 'react';
import type { FC, PropsWithChildren } from 'react';
import { createGlobalStyle } from 'styled-components';
import { standard as standardTypo } from '@salutejs/plasma-typo';
import { IconDownload, IconSearch } from '@salutejs/plasma-icons';
import { mount, CypressTestDecorator, getComponent, PadMe } from '@salutejs/plasma-cy-utils';

const StandardTypoStyle = createGlobalStyle(standardTypo);
const Icon = () => <IconDownload color="inherit" />;

type RangeDemoProps = {
    size?: string;
    disabled?: boolean;
    readOnly?: boolean;
    firstValueError?: boolean;
    secondValueError?: boolean;
    firstValueSuccess?: boolean;
    secondValueSuccess?: boolean;
};

describe('plasma-b2c: Range', () => {
    const Range = getComponent('Range');
    const IconButton = getComponent('IconButton');

    const CypressTestDecoratorWithTypo: FC<PropsWithChildren> = ({ children }) => (
        <CypressTestDecorator>
            <StandardTypoStyle />
            {children}
        </CypressTestDecorator>
    );

    const Demo = ({
        size = 'm',
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
                <Demo size="l" />
                <PadMe />
                <Demo size="m" />
                <PadMe />
                <Demo size="s" />
                <PadMe />
                <Demo size="xs" />
            </CypressTestDecoratorWithTypo>,
        );
        cy.matchImageSnapshot();
    });

    it('_disabled & _readOnly', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Demo disabled />
                <PadMe />
                <Demo readOnly />
            </CypressTestDecoratorWithTypo>,
        );
        cy.matchImageSnapshot();
    });

    it('_error & _success', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Demo firstValueError />
                <PadMe />
                <Demo secondValueError />
                <PadMe />
                <Demo firstValueError secondValueError />
                <PadMe />
                <Demo firstValueSuccess />
                <PadMe />
                <Demo secondValueSuccess />
                <PadMe />
                <Demo firstValueSuccess secondValueSuccess />
            </CypressTestDecoratorWithTypo>,
        );
        cy.matchImageSnapshot();
    });
});

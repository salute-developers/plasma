import React from 'react';
import { IconDownload, IconSearch } from '@salutejs/plasma-icons';
import { mount, CypressTestDecorator, getComponent } from '@salutejs/plasma-cy-utils';

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

    it('[PLASMA-T984] Range: size=l', () => {
        mount(
            <CypressTestDecorator>
                <Demo size="l" />
            </CypressTestDecorator>,
        );
        cy.matchImageSnapshot();
    });

    it('[PLASMA-T985] Range: disabled', () => {
        mount(
            <CypressTestDecorator>
                <Demo disabled />
            </CypressTestDecorator>,
        );
        cy.matchImageSnapshot();
    });

    it('[PLASMA-T986] Range: readOnly', () => {
        mount(
            <CypressTestDecorator>
                <Demo readOnly />
            </CypressTestDecorator>,
        );
        cy.matchImageSnapshot();
    });

    it('[PLASMA-T987] Range: enableContentRight, size=m', () => {
        mount(
            <CypressTestDecorator>
                <Range
                    size="m"
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
                />
            </CypressTestDecorator>,
        );
        cy.matchImageSnapshot();
    });

    it('[PLASMA-T988] Range: enableContentLeft, size=s', () => {
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
                />
            </CypressTestDecorator>,
        );
        cy.matchImageSnapshot();
    });

    it('[PLASMA-T989] Range: dividerVariant=none, size=xs', () => {
        mount(
            <CypressTestDecorator>
                <Range
                    size="xs"
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
                    dividerVariant="none"
                />
            </CypressTestDecorator>,
        );
        cy.matchImageSnapshot();
    });

    it('[PLASMA-T990] Range: enableFirstTextfieldContentLeft, dividerVariant=none', () => {
        mount(
            <CypressTestDecorator>
                <Range
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
                    firstTextfieldContentLeft={<Icon />}
                    dividerVariant="icon"
                    dividerIcon={<Icon />}
                />
            </CypressTestDecorator>,
        );
        cy.matchImageSnapshot();
    });

    it('[PLASMA-T991] Range: enableFirstTextfieldContentRight, enableSecondTextfieldContentLeft', () => {
        mount(
            <CypressTestDecorator>
                <Range
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
                    firstTextfieldContentRight={<Icon />}
                    secondTextfieldContentLeft={<Icon />}
                />
            </CypressTestDecorator>,
        );
        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1001] Range: enableSecondTextfieldContentRight', () => {
        mount(
            <CypressTestDecorator>
                <Range
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
                    secondTextfieldContentRight={<Icon />}
                />
            </CypressTestDecorator>,
        );
        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1002] Range: firstValueError', () => {
        mount(
            <CypressTestDecorator>
                <Demo firstValueError />
            </CypressTestDecorator>,
        );
        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1003] Range: firstValueSuccess', () => {
        mount(
            <CypressTestDecorator>
                <Demo firstValueSuccess />
            </CypressTestDecorator>,
        );
        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1192] Range: secondValueError', () => {
        mount(
            <CypressTestDecorator>
                <Demo secondValueError />
            </CypressTestDecorator>,
        );
        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1193] Range: secondValueSuccess', () => {
        mount(
            <CypressTestDecorator>
                <Demo secondValueSuccess />
            </CypressTestDecorator>,
        );
        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1004] Range: firstValueSuccess, secondValueSuccess', () => {
        mount(
            <CypressTestDecorator>
                <Demo firstValueSuccess secondValueSuccess />
            </CypressTestDecorator>,
        );
        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1005] Range: firstValueError, secondValueError', () => {
        mount(
            <CypressTestDecorator>
                <Demo firstValueError secondValueError />
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

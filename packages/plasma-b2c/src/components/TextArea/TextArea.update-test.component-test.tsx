import React from 'react';
import { mount, CypressTestDecorator, getComponent, SpaceMe } from '@salutejs/plasma-cy-utils';
import { IconEye } from '@salutejs/plasma-icons';

describe('plasma-b2c: TextArea', () => {
    const TextArea = getComponent('TextArea');
    const LONG_TEXT = 'TEXT FOR RESIZE TEST ';

    const propsDefault = {
        placeholder: 'Placeholder Text',
        leftHelper: 'Left Helper Text',
        rightHelper: 'Right Helper Text',
    };

    const propsWithContent = {
        contentRight: <IconEye color="inherit" size="s" />,
        ...propsDefault,
    };

    it('[PLASMA-T700] TextArea: size=m, with content', () => {
        mount(
            <CypressTestDecorator>
                <TextArea size="m" {...propsWithContent} />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T742] TextArea: with value, without content', () => {
        mount(
            <CypressTestDecorator>
                <TextArea value="Value Text" {...propsDefault} />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T745] TextArea: status=success, size=s', () => {
        mount(
            <CypressTestDecorator>
                <TextArea status="success" size="s" {...propsWithContent} />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T746] TextArea: status=warning, size=l', () => {
        mount(
            <CypressTestDecorator>
                <TextArea status="warning" size="l" {...propsWithContent} />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T747] TextArea: status=error, size=xs', () => {
        mount(
            <CypressTestDecorator>
                <TextArea status="error" size="xs" {...propsWithContent} />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T743] TextArea: disabled', () => {
        mount(
            <CypressTestDecorator>
                <TextArea disabled {...propsDefault} />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T744] TextArea: readOnly', () => {
        mount(
            <CypressTestDecorator>
                <TextArea readOnly {...propsDefault} />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T766] TextArea: focused', () => {
        mount(
            <CypressTestDecorator>
                <TextArea {...propsDefault} />
            </CypressTestDecorator>,
        );

        cy.get('textarea').focus();

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T768] TextArea: autoResize', () => {
        mount(
            <CypressTestDecorator>
                <TextArea autoResize {...propsDefault} />
            </CypressTestDecorator>,
        );

        cy.get('textarea').type(LONG_TEXT.repeat(10));

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1041] TextArea: autoResize, minAuto', () => {
        mount(
            <CypressTestDecorator>
                <TextArea autoResize minAuto={5} {...propsDefault} />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1234] TextArea: autoResize, maxAuto', () => {
        mount(
            <CypressTestDecorator>
                <TextArea autoResize maxAuto={3} {...propsDefault} />
            </CypressTestDecorator>,
        );

        cy.get('textarea').type(LONG_TEXT.repeat(10));

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1235] TextArea: custom height and width', () => {
        mount(
            <CypressTestDecorator>
                <TextArea height={10} width={10} {...propsDefault} />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1236] TextArea: resize=horizontal', () => {
        mount(
            <CypressTestDecorator>
                <TextArea resize="horizontal" {...propsDefault} />
            </CypressTestDecorator>,
        );

        cy.get('textarea').invoke('attr', 'style', 'width: 140px');

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1237] TextArea: resize=vertical', () => {
        mount(
            <CypressTestDecorator>
                <TextArea resize="vertical" {...propsDefault} />
            </CypressTestDecorator>,
        );

        cy.get('textarea').invoke('attr', 'style', 'height: 280px');

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1238] TextArea: resize=both', () => {
        mount(
            <CypressTestDecorator>
                <TextArea resize="both" {...propsDefault} />
            </CypressTestDecorator>,
        );

        cy.get('textarea').invoke('attr', 'style', 'height: 280px; width: 140px');

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1239] TextArea: labelPlacement=inner, requiredPlacement=left', () => {
        mount(
            <CypressTestDecorator>
                <TextArea label="Label" labelPlacement="inner" required requiredPlacement="left" {...propsDefault} />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1240] TextArea: labelPlacement=inner, requiredPlacement=right', () => {
        mount(
            <CypressTestDecorator>
                <TextArea label="Label" labelPlacement="inner" required requiredPlacement="right" {...propsDefault} />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1241] TextArea: labelPlacement=outer, requiredPlacement=left', () => {
        mount(
            <CypressTestDecorator>
                <div style={{ marginLeft: '1rem' }}>
                    <TextArea
                        label="Label"
                        labelPlacement="outer"
                        required
                        requiredPlacement="left"
                        {...propsDefault}
                    />
                </div>
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1242] TextArea: labelPlacement=outer, requiredPlacement=right', () => {
        mount(
            <CypressTestDecorator>
                <TextArea label="Label" labelPlacement="outer" required requiredPlacement="right" {...propsDefault} />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });
});

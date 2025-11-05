import React from 'react';
import type { ComponentProps, FC } from 'react';
import { CypressTestDecorator, getComponent } from '@salutejs/plasma-cy-utils';
import { mount } from '@cypress/react';

import { TextField } from '../TextField/TextField';
import { TextArea } from '../TextArea/TextArea';

import { InformationWrapper as InformationWrapperB2c } from '.';

const SvgPlaceholder = () => {
    return (
        <div
            style={{
                height: '3rem',
                background:
                    'linear-gradient(to right, #9747FF 0.063rem, transparent 0.063rem) 0 0, linear-gradient(to right, #9747FF 0.063rem, transparent 0.063rem) 0 100%, linear-gradient(to left, #9747FF 0.063rem, transparent 0.063rem) 100% 0, linear-gradient(to left, #9747FF 0.063rem, transparent 0.063rem) 100% 100%, linear-gradient(to bottom, #9747FF 0.063rem, transparent 0.063rem) 0 0, linear-gradient(to bottom, #9747FF 0.063rem, transparent 0.063rem) 100% 0, linear-gradient(to top, #9747FF 0.063rem, transparent 0.063rem) 0 100%, linear-gradient(to top, #9747FF 0.063rem, transparent 0.063rem) 100% 100%',
                backgroundRepeat: 'no-repeat',
                backgroundSize: '3rem 1rem',
            }}
        />
    );
};

describe('plasma-giga: InformationWrapper', () => {
    const InformationWrapper = getComponent('InformationWrapper') as FC<ComponentProps<typeof InformationWrapperB2c>>;

    const commonProps = {
        label: 'Лейбл',
        titleCaption: 'Подпись к полю',
        leftHelper: 'Подсказка слева',
        rightHelper: 'Подсказка справа',
    };

    it('[PLASMA-T2287] InformationWrapper: size=l, view=default, componentContent=placeholder, labelPlacement=top, requiredIndicatorPlacement=right', () => {
        mount(
            <CypressTestDecorator>
                <div style={{ padding: '3rem' }}>
                    <InformationWrapper
                        {...commonProps}
                        view="default"
                        size="l"
                        labelPlacement="top"
                        hasRequiredIndicator
                        requiredIndicatorPlacement="right"
                        hintText="Текст тултипа"
                    >
                        <SvgPlaceholder />
                    </InformationWrapper>
                </div>
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T2288] InformationWrapper: size=m, view=positive, componentContent=textfield, labelPlacement=left, requiredIndicatorPlacement=right', () => {
        mount(
            <CypressTestDecorator>
                <div style={{ padding: '3rem' }}>
                    <InformationWrapper
                        {...commonProps}
                        view="positive"
                        size="m"
                        labelPlacement="left"
                        hasRequiredIndicator
                        requiredIndicatorPlacement="right"
                        hintText="Текст тултипа"
                    >
                        <TextField size="m" />
                    </InformationWrapper>
                </div>
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T2289] InformationWrapper: size=s, view=warning, componentContent=textfield, labelPlacement=top, requiredIndicatorPlacement=left', () => {
        mount(
            <CypressTestDecorator>
                <div style={{ padding: '3rem' }}>
                    <InformationWrapper
                        {...commonProps}
                        view="warning"
                        size="s"
                        labelPlacement="top"
                        hasRequiredIndicator
                        requiredIndicatorPlacement="left"
                        hintText="Текст тултипа"
                    >
                        <TextField size="s" />
                    </InformationWrapper>
                </div>
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T2290] InformationWrapper: size=xs, view=negative, componentContent=textarea, labelPlacement=left, requiredIndicatorPlacement=left', () => {
        mount(
            <CypressTestDecorator>
                <div style={{ padding: '3rem' }}>
                    <InformationWrapper
                        {...commonProps}
                        view="negative"
                        size="xs"
                        labelPlacement="left"
                        hasRequiredIndicator
                        requiredIndicatorPlacement="left"
                        hintText="Текст тултипа"
                    >
                        <TextArea size="xs" />
                    </InformationWrapper>
                </div>
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T2291] InformationWrapper: optional, labelPlacement=top', () => {
        mount(
            <CypressTestDecorator>
                <div style={{ padding: '3rem' }}>
                    <InformationWrapper
                        {...commonProps}
                        optional
                        labelPlacement="top"
                        optionalText="опционально"
                        hintText="Текст тултипа"
                    >
                        <SvgPlaceholder />
                    </InformationWrapper>
                </div>
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T2292] InformationWrapper: optional, labelPlacement=left', () => {
        mount(
            <CypressTestDecorator>
                <div style={{ padding: '3rem' }}>
                    <InformationWrapper
                        {...commonProps}
                        optional
                        labelPlacement="left"
                        optionalText="опционально"
                        hintText="Текст тултипа"
                    >
                        <SvgPlaceholder />
                    </InformationWrapper>
                </div>
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T2293] InformationWrapper: withoutLabel, requiredIndicatorPlacement=right', () => {
        mount(
            <CypressTestDecorator>
                <div style={{ padding: '3rem' }}>
                    <InformationWrapper
                        titleCaption="Подпись к полю"
                        leftHelper="Подсказка слева"
                        rightHelper="Подсказка справа"
                        hasRequiredIndicator
                        requiredIndicatorPlacement="right"
                        hintText="Текст тултипа"
                    >
                        <SvgPlaceholder />
                    </InformationWrapper>
                </div>
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T2294] InformationWrapper: withoutLabel, requiredIndicatorPlacement=left', () => {
        mount(
            <CypressTestDecorator>
                <div style={{ padding: '3rem' }}>
                    <InformationWrapper
                        titleCaption="Подпись к полю"
                        leftHelper="Подсказка слева"
                        rightHelper="Подсказка справа"
                        hasRequiredIndicator
                        requiredIndicatorPlacement="left"
                        hintText="Текст тултипа"
                    >
                        <SvgPlaceholder />
                    </InformationWrapper>
                </div>
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T2295] InformationWrapper: empty optional, empty titleCaption, empty leftHelper, empty rightHelper', () => {
        mount(
            <CypressTestDecorator>
                <div style={{ padding: '3rem' }}>
                    <InformationWrapper
                        label="Лейбл"
                        labelPlacement="top"
                        titleCaption=""
                        leftHelper=""
                        rightHelper=""
                        optional
                        optionalText=""
                    >
                        <SvgPlaceholder />
                    </InformationWrapper>
                </div>
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T2296] InformationWrapper: disabled', () => {
        mount(
            <CypressTestDecorator>
                <div style={{ padding: '3rem' }}>
                    <InformationWrapper {...commonProps} hasRequiredIndicator hintText="Текст тултипа" disabled>
                        <SvgPlaceholder />
                    </InformationWrapper>
                </div>
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });
});

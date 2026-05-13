import React from 'react';
import { mount, getComponent, getDescribeFN, hasComponent, getBaseVisualTests, PadMe } from '@salutejs/plasma-cy-utils';

import type { InformationWrapperProps } from './InformationWrapper.types';

const componentExists = hasComponent('InformationWrapper');
const describeFn = getDescribeFN('InformationWrapper');

const SvgPlaceholder = () => (
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

const componentProps = {
    label: 'Лейбл',
    titleCaption: 'Подпись к полю',
    leftHelper: 'Подсказка слева',
    rightHelper: 'Подсказка справа',
};

getBaseVisualTests({
    component: 'InformationWrapper',
    componentProps,
    configPropsForMatrix: ['view', 'size'],
});

describeFn('InformationWrapper', () => {
    const InformationWrapper = componentExists
        ? getComponent<InformationWrapperProps>('InformationWrapper')
        : () => null;

    const commonProps = {
        label: 'Лейбл',
        titleCaption: 'Подпись к полю',
        leftHelper: 'Подсказка слева',
        rightHelper: 'Подсказка справа',
    };

    it('labelPlacement', () => {
        mount(
            <>
                <InformationWrapper labelPlacement="top" {...commonProps} hasRequiredIndicator hintText="Текст тултипа">
                    <SvgPlaceholder />
                </InformationWrapper>

                <PadMe />

                <InformationWrapper
                    labelPlacement="left"
                    {...commonProps}
                    hasRequiredIndicator
                    hintText="Текст тултипа"
                >
                    <SvgPlaceholder />
                </InformationWrapper>
            </>,
        );
        cy.matchImageSnapshot();
    });

    it('requiredIndicatorPlacement', () => {
        mount(
            <div style={{ padding: '3rem' }}>
                <InformationWrapper
                    requiredIndicatorPlacement="right"
                    {...commonProps}
                    hasRequiredIndicator
                    hintText="Текст тултипа"
                >
                    <SvgPlaceholder />
                </InformationWrapper>

                <PadMe />

                <InformationWrapper
                    requiredIndicatorPlacement="left"
                    {...commonProps}
                    hasRequiredIndicator
                    hintText="Текст тултипа"
                >
                    <SvgPlaceholder />
                </InformationWrapper>
            </div>,
        );
        cy.matchImageSnapshot();
    });

    it('optional', () => {
        mount(
            <InformationWrapper {...commonProps} optional optionalText="опционально" hintText="Текст тултипа">
                <SvgPlaceholder />
            </InformationWrapper>,
        );
        cy.matchImageSnapshot();
    });

    it('withoutLabel', () => {
        mount(
            <div style={{ padding: '3rem' }}>
                <InformationWrapper
                    titleCaption="Подпись к полю"
                    leftHelper="Подсказка слева"
                    rightHelper="Подсказка справа"
                    requiredIndicatorPlacement="right"
                    hasRequiredIndicator
                    hintText="Текст тултипа"
                >
                    <SvgPlaceholder />
                </InformationWrapper>

                <PadMe />

                <InformationWrapper
                    titleCaption="Подпись к полю"
                    leftHelper="Подсказка слева"
                    rightHelper="Подсказка справа"
                    requiredIndicatorPlacement="left"
                    hasRequiredIndicator
                    hintText="Текст тултипа"
                >
                    <SvgPlaceholder />
                </InformationWrapper>
            </div>,
        );
        cy.matchImageSnapshot();
    });

    it('disabled', () => {
        mount(
            <InformationWrapper {...commonProps} hasRequiredIndicator hintText="Текст тултипа" disabled>
                <SvgPlaceholder />
            </InformationWrapper>,
        );
        cy.matchImageSnapshot();
    });
});

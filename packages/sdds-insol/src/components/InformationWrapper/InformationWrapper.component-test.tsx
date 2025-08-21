import React from 'react';
import type { ComponentProps, FC } from 'react';
import { mount, CypressTestDecorator, getComponent, PadMe } from '@salutejs/plasma-cy-utils';

import { InformationWrapper as InformationWrapperINSOL } from '.';

const views = ['default', 'positive', 'warning', 'negative'] as const;
const sizes = ['l', 'm', 's', 'xs'] as const;

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
    const InformationWrapper = getComponent('InformationWrapper') as FC<ComponentProps<typeof InformationWrapperINSOL>>;

    const commonProps = {
        label: 'Лейбл',
        titleCaption: 'Подпись к полю',
        leftHelper: 'Подсказка слева',
        rightHelper: 'Подсказка справа',
    };

    it(':view', () => {
        mount(
            <CypressTestDecorator>
                {views.map((view) => (
                    <>
                        <InformationWrapper
                            {...commonProps}
                            key={view}
                            view={view}
                            hasRequiredIndicator
                            hintText="Текст тултипа"
                        >
                            <SvgPlaceholder />
                        </InformationWrapper>
                        <PadMe />
                    </>
                ))}
            </CypressTestDecorator>,
        );
        cy.matchImageSnapshot();
    });

    it(':size', () => {
        mount(
            <CypressTestDecorator>
                {sizes.map((size) => (
                    <>
                        <InformationWrapper
                            {...commonProps}
                            key={size}
                            size={size}
                            hasRequiredIndicator
                            hintText="Текст тултипа"
                        >
                            <SvgPlaceholder />
                        </InformationWrapper>
                        <PadMe />
                    </>
                ))}
            </CypressTestDecorator>,
        );
        cy.matchImageSnapshot();
    });

    it(':labelPlacement', () => {
        mount(
            <CypressTestDecorator>
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
            </CypressTestDecorator>,
        );
        cy.matchImageSnapshot();
    });

    it(':requiredIndicatorPlacement', () => {
        mount(
            <CypressTestDecorator>
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
                </div>
            </CypressTestDecorator>,
        );
        cy.matchImageSnapshot();
    });

    it(':optional', () => {
        mount(
            <CypressTestDecorator>
                <InformationWrapper {...commonProps} optional optionalText="опционально" hintText="Текст тултипа">
                    <SvgPlaceholder />
                </InformationWrapper>
            </CypressTestDecorator>,
        );
        cy.matchImageSnapshot();
    });

    it(':withoutLabel', () => {
        mount(
            <CypressTestDecorator>
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
                </div>
            </CypressTestDecorator>,
        );
        cy.matchImageSnapshot();
    });

    it(':disabled', () => {
        mount(
            <CypressTestDecorator>
                <InformationWrapper {...commonProps} hasRequiredIndicator hintText="Текст тултипа" disabled>
                    <SvgPlaceholder />
                </InformationWrapper>
            </CypressTestDecorator>,
        );
        cy.matchImageSnapshot();
    });
});

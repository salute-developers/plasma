import * as React from 'react';
import type { ComponentProps, ReactNode, CSSProperties, AriaRole } from 'react';
import { describe, it } from 'node:test';
import { expectTypeOf } from 'expect-type';
import { InformationWrapper } from '@salutejs/plasma-b2c';

type InformationWrapperProps = ComponentProps<typeof InformationWrapper>;

describe('Basics', () => {
    it('Common', () => {
        // Layout
        expectTypeOf<InformationWrapperProps>().toHaveProperty('children').toEqualTypeOf<ReactNode>();
        expectTypeOf<InformationWrapperProps>().toHaveProperty('label').toEqualTypeOf<string | undefined>();
        expectTypeOf<InformationWrapperProps>()
            .toHaveProperty('labelPlacement')
            .toEqualTypeOf<'top' | 'left' | undefined>();
        expectTypeOf<InformationWrapperProps>().toHaveProperty('labelHtmlFor').toEqualTypeOf<string | undefined>();
        expectTypeOf<InformationWrapperProps>().toHaveProperty('titleCaption').toEqualTypeOf<ReactNode>();
        expectTypeOf<InformationWrapperProps>().toHaveProperty('leftHelper').toEqualTypeOf<ReactNode>();
        expectTypeOf<InformationWrapperProps>().toHaveProperty('rightHelper').toEqualTypeOf<ReactNode>();

        // Form-related
        expectTypeOf<InformationWrapperProps>()
            .toHaveProperty('hasRequiredIndicator')
            .toEqualTypeOf<boolean | undefined>();
        expectTypeOf<InformationWrapperProps>()
            .toHaveProperty('requiredIndicatorPlacement')
            .toEqualTypeOf<'right' | 'left' | undefined>();
        expectTypeOf<InformationWrapperProps>().toHaveProperty('optional').toEqualTypeOf<boolean | undefined>();
        expectTypeOf<InformationWrapperProps>().toHaveProperty('optionalText').toEqualTypeOf<string | undefined>();

        // State
        expectTypeOf<InformationWrapperProps>().toHaveProperty('disabled').toEqualTypeOf<boolean | undefined>();
        expectTypeOf<InformationWrapperProps>().toHaveProperty('readOnly').toEqualTypeOf<boolean | undefined>();

        // Hint
        expectTypeOf<InformationWrapperProps>().toHaveProperty('hintText').toEqualTypeOf<string | undefined>();
        expectTypeOf<InformationWrapperProps>()
            .toHaveProperty('hintTrigger')
            .toEqualTypeOf<'hover' | 'click' | undefined>();
        expectTypeOf<InformationWrapperProps>().toHaveProperty('hintOpened').toEqualTypeOf<boolean | undefined>();
        expectTypeOf<InformationWrapperProps>().toHaveProperty('hintTargetIcon').toEqualTypeOf<ReactNode>();
        expectTypeOf<InformationWrapperProps>().toHaveProperty('hintHasArrow').toEqualTypeOf<boolean | undefined>();
        expectTypeOf<InformationWrapperProps>()
            .toHaveProperty('hintOffset')
            .toEqualTypeOf<[number, number] | undefined>();
        expectTypeOf<InformationWrapperProps>().toHaveProperty('hintWidth').toEqualTypeOf<string | undefined>();
        expectTypeOf<InformationWrapperProps>().toHaveProperty('hintContentLeft').toEqualTypeOf<ReactNode>();
    });

    it('Variations', () => {
        type View = NonNullable<InformationWrapperProps['view']>;
        expectTypeOf<View>().toExtend<string>();
        expectTypeOf<string>().not.toExtend<View>();

        type Size = NonNullable<InformationWrapperProps['size']>;
        expectTypeOf<Size>().toExtend<string>();
        expectTypeOf<string>().not.toExtend<Size>();

        type HintView = NonNullable<InformationWrapperProps['hintView']>;
        expectTypeOf<HintView>().toExtend<string>();
        expectTypeOf<string>().not.toExtend<HintView>();

        type HintSize = NonNullable<InformationWrapperProps['hintSize']>;
        expectTypeOf<HintSize>().toExtend<string>();
        expectTypeOf<string>().not.toExtend<HintSize>();
    });

    it('HTMLDivElement', () => {
        expectTypeOf<InformationWrapperProps>().toHaveProperty('id').toEqualTypeOf<string | undefined>();
        expectTypeOf<InformationWrapperProps>().toHaveProperty('className').toEqualTypeOf<string | undefined>();
        expectTypeOf<InformationWrapperProps>().toHaveProperty('style').toEqualTypeOf<CSSProperties | undefined>();
        expectTypeOf<InformationWrapperProps>().toHaveProperty('aria-label').toEqualTypeOf<string | undefined>();
        expectTypeOf<InformationWrapperProps>().toHaveProperty('role').toEqualTypeOf<AriaRole | undefined>();
        expectTypeOf<InformationWrapperProps>()
            .toHaveProperty('onClick')
            .toEqualTypeOf<React.MouseEventHandler<HTMLDivElement> | undefined>();
        expectTypeOf<InformationWrapperProps>()
            .toHaveProperty('onMouseEnter')
            .toEqualTypeOf<React.MouseEventHandler<HTMLDivElement> | undefined>();
        expectTypeOf<InformationWrapperProps>()
            .toHaveProperty('onMouseLeave')
            .toEqualTypeOf<React.MouseEventHandler<HTMLDivElement> | undefined>();
    });
});

describe('Unions', () => {
    it('HintProps', () => {
        // Valid: with hintText, all hint-related props are available
        expectTypeOf<InformationWrapperProps>({ hintText: 'Текст подсказки' });
        expectTypeOf<InformationWrapperProps>({
            hintText: 'Текст подсказки',
            hintTrigger: 'hover',
            hintHasArrow: true,
            hintWidth: '10rem',
        });

        // Valid: without any hint props
        expectTypeOf<InformationWrapperProps>({ label: 'Лейбл' });

        // Неправильная работа юниона HintProps. Должна быть ошибка при передаче hint-пропсов без hintText.
        // @ts-expect-error
        expectTypeOf<InformationWrapperProps>({ hintTrigger: 'hover' });
    });
});

describe('Examples', () => {
    it('Basic', () => {
        () => {
            return (
                <InformationWrapper label="Лейбл" labelPlacement="top">
                    <div />
                </InformationWrapper>
            );
        };
    });

    it('With hint', () => {
        () => {
            return (
                <InformationWrapper
                    label="Лейбл"
                    titleCaption="Подпись к полю"
                    leftHelper="Подсказка слева"
                    rightHelper="Подсказка справа"
                    hintText="Текст подсказки"
                    hintTrigger="hover"
                    hintHasArrow
                    hintWidth="10rem"
                >
                    <div />
                </InformationWrapper>
            );
        };
    });

    it('Required indicator', () => {
        () => {
            return (
                <InformationWrapper
                    label="Лейбл"
                    hasRequiredIndicator
                    requiredIndicatorPlacement="right"
                    labelPlacement="top"
                >
                    <div />
                </InformationWrapper>
            );
        };
    });

    it('Optional', () => {
        () => {
            return (
                <InformationWrapper label="Лейбл" optional optionalText="опционально">
                    <div />
                </InformationWrapper>
            );
        };
    });

    it('Disabled', () => {
        () => {
            return (
                <InformationWrapper label="Лейбл" disabled>
                    <div />
                </InformationWrapper>
            );
        };
    });
});

import * as React from 'react';
import type { ComponentProps, ReactNode, CSSProperties, AriaRole, HTMLAttributes } from 'react';
import { describe, it } from 'node:test';
import { expectTypeOf } from 'expect-type';
import { Accordion, AccordionItem } from '@salutejs/plasma-b2c';

type AccordionProps = ComponentProps<typeof Accordion>;
type AccordionItemProps = ComponentProps<typeof AccordionItem>;

describe('Accordion', () => {
    describe('Basics', () => {
        it('Common', () => {
            expectTypeOf<AccordionProps>().toHaveProperty('singleActive').toEqualTypeOf<boolean | undefined>();
            expectTypeOf<AccordionProps>()
                .toHaveProperty('defaultActiveEventKey')
                .toEqualTypeOf<number[] | undefined>();
            expectTypeOf<AccordionProps>().toHaveProperty('disabled').toEqualTypeOf<boolean | undefined>();
            expectTypeOf<AccordionProps>().toHaveProperty('stretching').toEqualTypeOf<'fixed' | 'filled' | undefined>();
            expectTypeOf<AccordionProps>()
                .toHaveProperty('onChange')
                .toEqualTypeOf<((index?: number, value?: boolean) => void) | undefined>();
            expectTypeOf<AccordionProps>().toHaveProperty('children').toEqualTypeOf<ReactNode>();
            expectTypeOf<AccordionProps>().toHaveProperty('className').toEqualTypeOf<string | undefined>();
        });

        it('Variations', () => {
            type View = NonNullable<AccordionProps['view']>;
            expectTypeOf<View>().toExtend<string>();
            expectTypeOf<string>().not.toExtend<View>();

            type Size = NonNullable<AccordionProps['size']>;
            expectTypeOf<Size>().toExtend<string>();
            expectTypeOf<string>().not.toExtend<Size>();
        });

        it('HTMLDivElement', () => {
            expectTypeOf<AccordionProps>().toHaveProperty('id').toEqualTypeOf<string | undefined>();
            expectTypeOf<AccordionProps>().toHaveProperty('style').toEqualTypeOf<CSSProperties | undefined>();
            expectTypeOf<AccordionProps>().toHaveProperty('aria-label').toEqualTypeOf<string | undefined>();
            expectTypeOf<AccordionProps>().toHaveProperty('role').toEqualTypeOf<AriaRole | undefined>();
            expectTypeOf<AccordionProps>()
                .toHaveProperty('onClick')
                .toEqualTypeOf<React.MouseEventHandler<HTMLDivElement> | undefined>();
            // Microdata support
            expectTypeOf<AccordionProps>().toHaveProperty('itemScope').toEqualTypeOf<boolean | undefined>();
            expectTypeOf<AccordionProps>().toHaveProperty('itemType').toEqualTypeOf<string | undefined>();
            expectTypeOf<AccordionProps>().toHaveProperty('itemProp').toEqualTypeOf<string | undefined>();
        });
    });
});

describe('AccordionItem', () => {
    describe('Basics', () => {
        it('Common', () => {
            expectTypeOf<AccordionItemProps>().toHaveProperty('value').toEqualTypeOf<boolean | undefined>();
            expectTypeOf<AccordionItemProps>()
                .toHaveProperty('type')
                .toEqualTypeOf<'clear' | 'arrow' | 'sign' | undefined>();
            expectTypeOf<AccordionItemProps>().toHaveProperty('contentLeft').toEqualTypeOf<ReactNode>();
            expectTypeOf<AccordionItemProps>().toHaveProperty('alignWithTitle').toEqualTypeOf<boolean | undefined>();
            expectTypeOf<AccordionItemProps>().toHaveProperty('contentRight').toEqualTypeOf<ReactNode>();
            expectTypeOf<AccordionItemProps>()
                .toHaveProperty('pin')
                .toEqualTypeOf<
                    | 'square-square'
                    | 'square-clear'
                    | 'clear-square'
                    | 'clear-clear'
                    | 'clear-circle'
                    | 'circle-clear'
                    | 'circle-circle'
                    | undefined
                >();
            expectTypeOf<AccordionItemProps>().toHaveProperty('title').toEqualTypeOf<ReactNode>();
            expectTypeOf<AccordionItemProps>().toHaveProperty('children').toEqualTypeOf<ReactNode>();
            expectTypeOf<AccordionItemProps>().toHaveProperty('disabled').toEqualTypeOf<boolean | undefined>();
            expectTypeOf<AccordionItemProps>().toHaveProperty('opened').toEqualTypeOf<boolean | undefined>();
            expectTypeOf<AccordionItemProps>()
                .toHaveProperty('titleProps')
                .toEqualTypeOf<HTMLAttributes<HTMLElement> | undefined>();
            expectTypeOf<AccordionItemProps>()
                .toHaveProperty('bodyProps')
                .toEqualTypeOf<HTMLAttributes<HTMLDivElement> | undefined>();
        });

        it('HTMLElement', () => {
            expectTypeOf<AccordionItemProps>().toHaveProperty('id').toEqualTypeOf<string | undefined>();
            expectTypeOf<AccordionItemProps>().toHaveProperty('className').toEqualTypeOf<string | undefined>();
            expectTypeOf<AccordionItemProps>().toHaveProperty('style').toEqualTypeOf<CSSProperties | undefined>();
            expectTypeOf<AccordionItemProps>().toHaveProperty('aria-label').toEqualTypeOf<string | undefined>();
            expectTypeOf<AccordionItemProps>().toHaveProperty('role').toEqualTypeOf<AriaRole | undefined>();
            // Microdata support
            expectTypeOf<AccordionItemProps>().toHaveProperty('itemScope').toEqualTypeOf<boolean | undefined>();
            expectTypeOf<AccordionItemProps>().toHaveProperty('itemType').toEqualTypeOf<string | undefined>();
            expectTypeOf<AccordionItemProps>().toHaveProperty('itemProp').toEqualTypeOf<string | undefined>();
        });
    });
});

describe('Examples', () => {
    it('Basic', () => {
        () => (
            <Accordion view="default" singleActive onChange={(index, value) => {}}>
                <AccordionItem title="Первый вопрос">Первый ответ</AccordionItem>
                <AccordionItem title="Второй вопрос" disabled>
                    Второй ответ
                </AccordionItem>
            </Accordion>
        );
    });

    it('Microdata FAQ', () => {
        () => (
            <Accordion itemScope itemType="https://schema.org/FAQPage">
                <AccordionItem
                    itemScope
                    itemProp="mainEntity"
                    itemType="https://schema.org/Question"
                    title="Как оформить заказ?"
                    titleProps={{ itemProp: 'name' }}
                    bodyProps={{
                        itemScope: true,
                        itemProp: 'acceptedAnswer',
                        itemType: 'https://schema.org/Answer',
                    }}
                >
                    <span itemProp="text">Оформить заказ можно через корзину.</span>
                </AccordionItem>
            </Accordion>
        );
    });
});

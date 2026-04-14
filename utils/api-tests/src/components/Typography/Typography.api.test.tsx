import React, { createRef } from 'react';
import type { ComponentProps } from 'react';
import { describe, it } from 'vitest';
import { expectTypeOf } from 'expect-type';
import { TextL } from '@salutejs/plasma-b2c';

type TextLProps = ComponentProps<typeof TextL>;

describe('Basics', () => {
    it('Common props', () => {
        expectTypeOf<TextLProps>().toHaveProperty('color').toEqualTypeOf<string | undefined>();
        expectTypeOf<TextLProps>().toHaveProperty('noWrap').toEqualTypeOf<boolean | undefined>();
        expectTypeOf<TextLProps>().toHaveProperty('breakWord').toEqualTypeOf<boolean | undefined>();
        expectTypeOf<TextLProps>().toHaveProperty('isNumeric').toEqualTypeOf<boolean | undefined>();
        expectTypeOf<TextLProps>().toHaveProperty('isItalic').toEqualTypeOf<boolean | undefined>();
    });

    it('Font weight props', () => {
        expectTypeOf<TextLProps>().toHaveProperty('bold');
        expectTypeOf<TextLProps>().toHaveProperty('medium');
        expectTypeOf<TextLProps>().toHaveProperty('extraBold');
    });

    it('Font size props', () => {
        expectTypeOf<TextLProps>().toHaveProperty('size');
        expectTypeOf<TextLProps>({ size: 'l' });
        // @ts-expect-error — Размера 'm' не существует
        expectTypeOf<TextLProps>({ size: 'm' });
    });
});

describe('Unions (FontWeight)', () => {
    it('Allowed weight combinations', () => {
        expectTypeOf<TextLProps>({ bold: true });
        expectTypeOf<TextLProps>({ medium: true });
        expectTypeOf<TextLProps>({ extraBold: true });
        expectTypeOf<TextLProps>({ bold: false, medium: true });
        expectTypeOf<TextLProps>({ bold: false, extraBold: true });
        // @ts-expect-error - нельзя одновременно задавать medium=true и extraBold=true
        expectTypeOf<TextLProps>({ bold: true, extraBold: true, medium: true });
    });
});

describe('Generics (polymorphic `as`)', () => {
    it('Allowed tags for `as`', () => {
        expectTypeOf<TextLProps>({ as: 'div' });
        expectTypeOf<TextLProps>({ as: 'p' });
        expectTypeOf<TextLProps>({ as: 'span' });
        expectTypeOf<TextLProps>({ as: 'h1' });
        expectTypeOf<TextLProps>({ as: 'h2' });
        expectTypeOf<TextLProps>({ as: 'h6' });
        expectTypeOf<TextLProps>({ as: 'label' });
        expectTypeOf<TextLProps>({ as: 'blockquote' });
        expectTypeOf<TextLProps>({ as: 'em' });
        expectTypeOf<TextLProps>({ as: 'code' });
        // @ts-expect-error — тег 'use' не разрешён
        expectTypeOf<TextLProps>({ as: 'use' });
    });
});

describe('Ref typing (polymorphic ref)', () => {
    it('as="h1" → ref: Ref<HTMLHeadingElement>', () => {
        const ok = createRef<HTMLHeadingElement>();
        const bad = createRef<HTMLBodyElement>();
        expectTypeOf(<TextL as="h1" ref={ok} />);
        // @ts-expect-error — HTMLBodyElement несовместим с HTMLHeadingElement
        expectTypeOf(<TextL as="h1" ref={bad} />);
    });

    it('as="time" → ref: Ref<HTMLTimeElement>', () => {
        const ok = createRef<HTMLTimeElement>();
        const bad = createRef<HTMLBodyElement>();
        expectTypeOf(<TextL as="time" ref={ok} />);
        // @ts-expect-error — HTMLBodyElement несовместим с HTMLTimeElement
        expectTypeOf(<TextL as="time" ref={bad} />);
    });

    it('as="p" → ref: Ref<HTMLParagraphElement>', () => {
        const ok = createRef<HTMLParagraphElement>();
        const bad = createRef<HTMLBodyElement>();
        expectTypeOf(<TextL as="p" ref={ok} />);
        // @ts-expect-error — HTMLBodyElement несовместим с HTMLParagraphElement
        expectTypeOf(<TextL as="p" ref={bad} />);
    });

    it('as="label" → ref: Ref<HTMLLabelElement>', () => {
        const ok = createRef<HTMLLabelElement>();
        const bad = createRef<HTMLBodyElement>();
        expectTypeOf(<TextL as="label" ref={ok} />);
        // @ts-expect-error — HTMLBodyElement несовместим с HTMLLabelElement
        expectTypeOf(<TextL as="label" ref={bad} />);
    });

    it('as="blockquote" → ref: Ref<HTMLQuoteElement>', () => {
        const ok = createRef<HTMLQuoteElement>();
        const bad = createRef<HTMLBodyElement>();
        expectTypeOf(<TextL as="blockquote" ref={ok} />);
        // @ts-expect-error — HTMLBodyElement несовместим с HTMLQuoteElement
        expectTypeOf(<TextL as="blockquote" ref={bad} />);
    });

    it('as="div" → ref: Ref<HTMLHeadingElement>', () => {
        const ok = createRef<HTMLHeadingElement>();
        expectTypeOf(<TextL as="div" ref={ok} />);
    });
});

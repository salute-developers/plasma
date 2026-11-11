import * as React from 'react';
import type { AriaRole, ComponentProps, ComponentPropsWithRef, CSSProperties, FC, ReactNode } from 'react';
import { useState } from 'react';
import { describe, it } from 'node:test';
import { expectTypeOf } from 'expect-type';
import { IconDownload } from '@salutejs/plasma-icons';
import { Editable, H5, editableTokens } from '@salutejs/plasma-b2c';

type EditableProps = ComponentProps<typeof Editable>;

describe('Basics', () => {
    it('Common', () => {
        expectTypeOf<EditableProps>().toHaveProperty('textComponent').toEqualTypeOf<FC<ComponentPropsWithRef<'div'>>>();
        expectTypeOf<EditableProps>().toHaveProperty('value').toEqualTypeOf<string | undefined>();
        expectTypeOf<EditableProps>().toHaveProperty('placeholder').toEqualTypeOf<string | undefined>();
        expectTypeOf<EditableProps>().toHaveProperty('maxLength').toEqualTypeOf<number | undefined>();
        expectTypeOf<EditableProps>().toHaveProperty('spellCheck').toEqualTypeOf<'true' | 'false' | undefined>();
        expectTypeOf<EditableProps>().toHaveProperty('icon').toEqualTypeOf<ReactNode>();
        expectTypeOf<EditableProps>().toHaveProperty('multiline').toEqualTypeOf<boolean | undefined>();
    });

    it('Variations', () => {
        type View = NonNullable<EditableProps['view']>;
        expectTypeOf<View>().toExtend<string>();
        expectTypeOf<string>().not.toExtend<View>();

        type Size = NonNullable<EditableProps['size']>;
        expectTypeOf<Size>().toExtend<string>();
        expectTypeOf<string>().not.toExtend<Size>();
    });

    it('HTMLInputElement', () => {
        expectTypeOf<EditableProps>().toHaveProperty('id').toEqualTypeOf<string | undefined>();
        expectTypeOf<EditableProps>().toHaveProperty('className').toEqualTypeOf<string | undefined>();
        expectTypeOf<EditableProps>().toHaveProperty('style').toEqualTypeOf<CSSProperties | undefined>();
        expectTypeOf<EditableProps>().toHaveProperty('aria-label').toEqualTypeOf<string | undefined>();
        expectTypeOf<EditableProps>().toHaveProperty('role').toEqualTypeOf<AriaRole | undefined>();
        expectTypeOf<EditableProps>()
            .toHaveProperty('defaultValue')
            .toEqualTypeOf<string | number | readonly string[] | undefined>();
        expectTypeOf<EditableProps>()
            .toHaveProperty('onChange')
            .toEqualTypeOf<React.ChangeEventHandler<HTMLInputElement> | undefined>();
        expectTypeOf<EditableProps>()
            .toHaveProperty('onFocus')
            .toEqualTypeOf<React.FocusEventHandler<HTMLInputElement> | undefined>();
        expectTypeOf<EditableProps>()
            .toHaveProperty('onBlur')
            .toEqualTypeOf<React.FocusEventHandler<HTMLInputElement> | undefined>();
        expectTypeOf<EditableProps>()
            .toHaveProperty('onKeyDown')
            .toEqualTypeOf<React.KeyboardEventHandler<HTMLInputElement> | undefined>();
        expectTypeOf<EditableProps>()
            .toHaveProperty('onPaste')
            .toEqualTypeOf<React.ClipboardEventHandler<HTMLInputElement> | undefined>();
    });
});

describe('Tokens', () => {
    it('iconGap', () => {
        expectTypeOf(editableTokens).toHaveProperty('iconGap').toEqualTypeOf<string>();
        expectTypeOf(editableTokens).toHaveProperty('editButtonBackground').toEqualTypeOf<string>();
        expectTypeOf(editableTokens).toHaveProperty('editButtonColor').toEqualTypeOf<string>();
        expectTypeOf(editableTokens).toHaveProperty('editButtonColorHover').toEqualTypeOf<string>();
        expectTypeOf(editableTokens).toHaveProperty('editButtonPaddingLeft').toEqualTypeOf<string>();
        expectTypeOf(editableTokens).toHaveProperty('placeholderColor').toEqualTypeOf<string>();
        expectTypeOf(editableTokens).toHaveProperty('caretColor').toEqualTypeOf<string>();
        expectTypeOf(editableTokens).toHaveProperty('textBoxMarginRight').toEqualTypeOf<string>();
        expectTypeOf(editableTokens).toHaveProperty('textBoxPaddingRight').toEqualTypeOf<string>();
    });
});

describe('Examples', () => {
    it('With icon and gap', () => {
        () => {
            const [value, setValue] = useState('Header 5');

            return (
                <Editable
                    textComponent={H5}
                    value={value}
                    multiline={false}
                    placeholder="Введите текст"
                    spellCheck="false"
                    maxLength={120}
                    icon={<IconDownload color="inherit" />}
                    style={{ maxWidth: '20rem', [editableTokens.iconGap]: '6px' }}
                    onChange={(event) => setValue(event.target.value)}
                />
            );
        };
    });

    it('Multiline', () => {
        () => {
            return (
                <Editable
                    textComponent={H5}
                    value="Очень длинное название документа, которое не помещается в одну строку"
                    multiline
                    style={{ maxWidth: '20rem', [editableTokens.iconGap]: '6px' }}
                    icon={<IconDownload color="inherit" />}
                />
            );
        };
    });
});

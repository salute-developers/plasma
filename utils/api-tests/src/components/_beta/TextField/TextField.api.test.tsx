import * as React from 'react';
import type { ComponentProps, CSSProperties, ReactNode } from 'react';
import { describe, it } from 'node:test';
import { expectTypeOf } from 'expect-type';
// Новый компонент пока поставляется только из beta ядра, без конфигураций вертикалей.
import { TextField, textFieldTokens, inputTokens } from '@salutejs/plasma-new-hope/beta';
import type { TextFieldProps, TextFieldLabelPlacement, InputProps } from '@salutejs/plasma-new-hope/beta';

type Props = ComponentProps<typeof TextField>;

describe('Beta TextField API', () => {
    it('Common', () => {
        expectTypeOf<Props>().toHaveProperty('label').toEqualTypeOf<string | undefined>();
        expectTypeOf<Props>().toHaveProperty('labelPlacement').toEqualTypeOf<TextFieldLabelPlacement | undefined>();
        expectTypeOf<TextFieldLabelPlacement>().toEqualTypeOf<'outer' | 'inner' | 'none'>();
        expectTypeOf<Props>().toHaveProperty('keepPlaceholder').toEqualTypeOf<boolean | undefined>();
        expectTypeOf<Props>().toHaveProperty('requiredIndicator').toEqualTypeOf<boolean | undefined>();
        expectTypeOf<Props>().toHaveProperty('requiredPlacement').toEqualTypeOf<'left' | 'right' | undefined>();
        expectTypeOf<Props>().toHaveProperty('optionalText').toEqualTypeOf<string | undefined>();
        expectTypeOf<Props>().toHaveProperty('caption').toEqualTypeOf<ReactNode>();
        expectTypeOf<Props>().toHaveProperty('counter').toEqualTypeOf<ReactNode>();
        expectTypeOf<Props>().toHaveProperty('titleCaption').toEqualTypeOf<ReactNode>();
        expectTypeOf<Props>().toHaveProperty('contentBefore').toEqualTypeOf<ReactNode>();
        expectTypeOf<Props>().toHaveProperty('contentAfter').toEqualTypeOf<ReactNode>();
        expectTypeOf<Props>().toHaveProperty('textBefore').toEqualTypeOf<string | undefined>();
        expectTypeOf<Props>().toHaveProperty('textAfter').toEqualTypeOf<string | undefined>();
        expectTypeOf<Props['hint']>().toEqualTypeOf<TextFieldProps['hint']>();
        expectTypeOf<NonNullable<InputProps['hint']>['size']>().toEqualTypeOf<'s' | 'm' | undefined>();
        expectTypeOf<NonNullable<Props['hint']>['size']>().toEqualTypeOf<'s' | 'm' | undefined>();
        expectTypeOf<Props['rootProps']>().toEqualTypeOf<TextFieldProps['rootProps']>();
        expectTypeOf<Props>().not.toHaveProperty('chips');
        expectTypeOf<Props>().not.toHaveProperty('hidePlaceholderOnChips');
        expectTypeOf<Props>().not.toHaveProperty('indicator');
        expectTypeOf<typeof textFieldTokens>().toHaveProperty('caretColor').toEqualTypeOf<string>();
        expectTypeOf<typeof inputTokens>().toHaveProperty('caretColor').toEqualTypeOf<string>();
        expectTypeOf<typeof textFieldTokens>().toHaveProperty('backgroundColorDisabled').toEqualTypeOf<string>();
        expectTypeOf<typeof inputTokens>().toHaveProperty('backgroundColorDisabled').toEqualTypeOf<string>();
        expectTypeOf<typeof textFieldTokens>().toHaveProperty('headerContentGap').toEqualTypeOf<string>();
        expectTypeOf<typeof inputTokens>().toHaveProperty('headerContentGap').toEqualTypeOf<string>();
        expectTypeOf<typeof textFieldTokens>().toHaveProperty('hintSize').toEqualTypeOf<string>();
        expectTypeOf<typeof inputTokens>().toHaveProperty('hintSize').toEqualTypeOf<string>();
        expectTypeOf<typeof textFieldTokens>().not.toHaveProperty('hintSizeS');
        expectTypeOf<typeof textFieldTokens>().not.toHaveProperty('hintSizeM');
        expectTypeOf<typeof inputTokens>().not.toHaveProperty('hintSizeS');
        expectTypeOf<typeof inputTokens>().not.toHaveProperty('hintSizeM');
        expectTypeOf<typeof textFieldTokens>().not.toHaveProperty('headerHintSize');
        expectTypeOf<typeof inputTokens>().not.toHaveProperty('headerHintSize');
        expectTypeOf<typeof textFieldTokens>().not.toHaveProperty('chipBackgroundColor');
    });

    it('HTMLInputElement', () => {
        expectTypeOf<Props>().toHaveProperty('id').toEqualTypeOf<string | undefined>();
        expectTypeOf<Props>().toHaveProperty('className').toEqualTypeOf<string | undefined>();
        expectTypeOf<Props>().toHaveProperty('style').toEqualTypeOf<CSSProperties | undefined>();
        expectTypeOf<Props>().toHaveProperty('value').toEqualTypeOf<string | number | readonly string[] | undefined>();
        expectTypeOf<Props>()
            .toHaveProperty('defaultValue')
            .toEqualTypeOf<string | number | readonly string[] | undefined>();
        expectTypeOf<Props>().toHaveProperty('disabled').toEqualTypeOf<boolean | undefined>();
        expectTypeOf<Props>().toHaveProperty('readOnly').toEqualTypeOf<boolean | undefined>();
        expectTypeOf<Props>().toHaveProperty('required').toEqualTypeOf<boolean | undefined>();
        expectTypeOf<Props>()
            .toHaveProperty('onChange')
            .toEqualTypeOf<React.ChangeEventHandler<HTMLInputElement> | undefined>();
        expectTypeOf<Props>()
            .toHaveProperty('onFocus')
            .toEqualTypeOf<React.FocusEventHandler<HTMLInputElement> | undefined>();
        expectTypeOf<Props>()
            .toHaveProperty('onBlur')
            .toEqualTypeOf<React.FocusEventHandler<HTMLInputElement> | undefined>();
        expectTypeOf<Props>()
            .toHaveProperty('onKeyDown')
            .toEqualTypeOf<React.KeyboardEventHandler<HTMLInputElement> | undefined>();
        expectTypeOf<Props>().toHaveProperty('aria-label').toEqualTypeOf<string | undefined>();
    });

    it('Indicators', () => {
        expectTypeOf<TextFieldProps>({ requiredIndicator: true, requiredPlacement: 'left' });
        expectTypeOf<TextFieldProps>({ optionalText: 'Необязательно' });
        expectTypeOf<TextFieldProps>({ requiredIndicator: false, optionalText: 'Необязательно' });
        expectTypeOf<TextFieldProps>({ requiredIndicator: true, optionalText: 'Необязательно' });
        const indicators: { requiredIndicator?: boolean; optionalText?: string } = {
            requiredIndicator: true,
            optionalText: 'Необязательно',
        };
        expectTypeOf<TextFieldProps>(indicators);
        void (<TextField {...indicators} />);
        // @ts-expect-error API чипов остаётся во внутреннем Input.
        expectTypeOf<TextFieldProps>({ chips: { value: ['Чип'] } });
        // @ts-expect-error Скрытие placeholder при наличии чипов не входит в API TextField.
        expectTypeOf<TextFieldProps>({ hidePlaceholderOnChips: true });
        // @ts-expect-error Положение подписи ограничено тремя вариантами.
        expectTypeOf<TextFieldProps>({ labelPlacement: 'left' });
    });

    it('Controlled and uncontrolled examples', () => {
        () => {
            const [value, setValue] = React.useState('');
            const ref = React.useRef<HTMLInputElement>(null);
            const rootRef = React.useRef<HTMLDivElement>(null);
            return (
                <TextField
                    ref={ref}
                    rootProps={{ ref: rootRef, style: { [textFieldTokens.caretColor]: 'red' } as CSSProperties }}
                    label="Имя"
                    labelPlacement="inner"
                    value={value}
                    onChange={(event) => setValue(event.currentTarget.value)}
                    requiredIndicator
                    required
                    hint={{ value: 'Введите имя', targetPlacement: 'inner', size: 'm' }}
                />
            );
        };
        void (
            <TextField
                label="Почта"
                labelPlacement="none"
                type="email"
                defaultValue="a@example.com"
                optionalText="Необязательно"
            />
        );
        void (<TextField requiredIndicator optionalText="Необязательно" />);
    });
    it('Hint size', () => {
        expectTypeOf<TextFieldProps>({ hint: { value: 'Подсказка', size: 's' } });
        expectTypeOf<InputProps>({ hint: { value: 'Подсказка', size: 'm' } });
        // @ts-expect-error В Structure доступны только Hint S и M.
        expectTypeOf<TextFieldProps>({ hint: { value: 'Подсказка', size: 'l' } });
        // @ts-expect-error Внутренний Input использует тот же набор размеров подсказки.
        expectTypeOf<InputProps>({ hint: { value: 'Подсказка', size: 'xs' } });
    });
});

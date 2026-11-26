import React, { createRef, useState } from 'react';
import { describe, expect, it, vi } from 'vitest';
import { render } from 'vitest-browser-react';
import { page, userEvent } from 'vitest/browser';
import { TextField } from 'src/examples/components/_beta/TextField/TextField';
import type { TextFieldProps } from 'src/examples/components/_beta/TextField/TextField';

import { inputClasses } from '../../Input';
import { classes } from '../TextField.tokens';

const textbox = () => page.getByRole('textbox', { name: 'Поле', exact: true });
const input = () => textbox().element() as HTMLInputElement;
const node = (name: keyof typeof inputClasses) => document.querySelector<HTMLElement>(`.${inputClasses[name]}`)!;
const mount = (props: TextFieldProps = {}) => render(<TextField label="Поле" {...props} />);

describe('Beta TextField', () => {
    it.each(['outer', 'inner', 'none'] as const)(
        'supports %s labels with an accessible input name',
        async (labelPlacement) => {
            await mount({ labelPlacement, hint: { value: 'Подсказка' } });
            await expect.element(textbox()).toBeVisible();
            const label = document.querySelector<HTMLLabelElement>(`.${inputClasses.inputLabel}`);
            if (labelPlacement === 'none') {
                expect(label).toBeNull();
                await expect.element(textbox()).toHaveAttribute('aria-label', 'Поле');
                return;
            }
            expect(label?.htmlFor).toBe(input().id);
            expect(node(labelPlacement === 'outer' ? 'inputHeader' : 'inputEditor').contains(label)).toBe(true);
            expect(input().hasAttribute('aria-label')).toBe(false);
        },
    );

    it('preserves an explicit accessible name without a visible label', async () => {
        await render(<TextField label="Скрытая подпись" labelPlacement="none" aria-label="Другое имя" />);
        await expect.element(page.getByRole('textbox', { name: 'Другое имя' })).toBeVisible();
    });

    it('places the hint beside an outer label', async () => {
        await mount({ labelPlacement: 'outer', hint: { value: 'Подсказка', targetPlacement: 'inner' } });
        const hint = page.getByRole('button', { name: 'Подсказка' }).element();
        expect(node('inputHeader').contains(hint)).toBe(true);
        expect(node('inputField').contains(hint)).toBe(false);
    });

    it.each(['inner', 'none'] as const)(
        'supports hints inside and outside a field with %s label',
        async (labelPlacement) => {
            const result = await mount({ labelPlacement, hint: { value: 'Подсказка', targetPlacement: 'inner' } });
            expect(node('inputField').contains(page.getByRole('button', { name: 'Подсказка' }).element())).toBe(true);
            await result.rerender(
                <TextField
                    label="Поле"
                    labelPlacement={labelPlacement}
                    hint={{ value: 'Подсказка', targetPlacement: 'outer' }}
                />,
            );
            const hint = page.getByRole('button', { name: 'Подсказка' }).element();
            expect(node('inputBody').contains(hint)).toBe(true);
            expect(node('inputField').contains(hint)).toBe(false);
        },
    );

    it('opens the hint with the keyboard', async () => {
        await mount({ hint: { value: 'Содержимое подсказки' } });
        await userEvent.tab();
        await expect.element(page.getByRole('button', { name: 'Содержимое подсказки' })).toHaveFocus();
        await userEvent.keyboard('{Enter}');
        await expect.element(page.getByRole('tooltip')).toHaveTextContent('Содержимое подсказки');
    });

    it.each(['s', 'm'] as const)('changes hint size %s without losing focus, popup or input value', async (size) => {
        const result = await mount({ defaultValue: 'Текст', hint: { value: 'Подсказка', trigger: 'click', size } });
        const target = page.getByRole('button', { name: 'Подсказка', exact: true });
        const control = input();
        const button = target.element();

        expect(control.hasAttribute('size')).toBe(false);
        await target.click();
        await expect.element(target).toHaveFocus();
        await expect.element(page.getByRole('tooltip')).toHaveTextContent('Подсказка');

        const nextSize = size === 's' ? 'm' : 's';
        await result.rerender(
            <TextField
                label="Поле"
                defaultValue="Текст"
                hint={{ value: 'Подсказка', trigger: 'click', size: nextSize }}
            />,
        );
        expect(target.element()).toBe(button);
        expect(input()).toBe(control);
        await expect.element(target).toHaveFocus();
        await expect.element(page.getByRole('tooltip')).toHaveTextContent('Подсказка');
        await expect.element(textbox()).toHaveValue('Текст');
    });

    it.each(['outer', 'inner', 'none'] as const)(
        'exposes the required indicator for %s labels',
        async (labelPlacement) => {
            await mount({ labelPlacement, requiredIndicator: true, requiredPlacement: 'left' });
            await expect.element(textbox()).toHaveAttribute('aria-required', 'true');
            expect(input().required).toBe(false);
            const indicator = node('inputIndicator');
            expect(indicator.getAttribute('aria-hidden')).toBe('true');
            expect(indicator.dataset.placement).toBe('left');
            expect(indicator.dataset.kind).toBe('required');
            expect(node(labelPlacement === 'outer' ? 'inputHeader' : 'inputField').contains(indicator)).toBe(true);
        },
    );

    it('preserves native required validation and explicit ARIA attributes', async () => {
        await mount({ required: true, requiredIndicator: true, 'aria-required': false });
        expect(input().required).toBe(true);
        await expect.element(textbox()).toHaveAttribute('aria-required', 'false');
    });

    it('displays optional text without a required indicator', async () => {
        await mount({ optionalText: 'Необязательно' });
        await expect.element(page.getByText('Необязательно', { exact: true })).toBeVisible();
        expect(node('inputIndicator').dataset.kind).toBe('optional');
        expect(input().hasAttribute('aria-required')).toBe(false);
    });

    it('prefers the required indicator for an invalid JavaScript combination', async () => {
        const props = ({ requiredIndicator: true, optionalText: 'Необязательно' } as unknown) as TextFieldProps;
        await mount(props);
        expect(node('inputIndicator').dataset.kind).toBe('required');
        expect(document.querySelector('[data-kind="optional"]')).toBeNull();
    });

    it('does not pass internal chip properties to Input at runtime', async () => {
        const props = ({ chips: { value: ['Чип'] }, hidePlaceholderOnChips: true } as unknown) as TextFieldProps;
        await mount({ ...props, placeholder: 'Введите значение' });
        await expect.element(textbox()).toHaveAttribute('placeholder', 'Введите значение');
        expect(document.querySelector(`.${inputClasses.inputChip}`)).toBeNull();
        expect(input().hasAttribute('hideplaceholderonchips')).toBe(false);
        expect(node('inputRoot').hasAttribute('data-has-chips')).toBe(false);
    });

    it('keeps wrapper properties off the native input', async () => {
        await mount({
            labelPlacement: 'inner',
            keepPlaceholder: true,
            requiredIndicator: true,
            requiredPlacement: 'left',
        });
        for (const attribute of [
            'labelplacement',
            'keepplaceholder',
            'requiredindicator',
            'requiredplacement',
            'optionaltext',
        ]) {
            expect(input().hasAttribute(attribute)).toBe(false);
        }
    });

    it('preserves native refs, root attributes and helper descriptions', async () => {
        const ref = createRef<HTMLInputElement>();
        const rootRef = createRef<HTMLDivElement>();
        await render(
            <TextField
                ref={ref}
                label="Поле"
                caption="Подпись"
                counter="1 / 20"
                aria-describedby="external-help"
                rootProps={{ ref: rootRef, className: 'custom-root', 'aria-label': 'Контейнер' }}
            />,
        );
        expect(ref.current).toBe(input());
        expect(rootRef.current?.classList.contains(classes.textFieldRoot)).toBe(true);
        expect(rootRef.current?.classList.contains('custom-root')).toBe(true);
        expect(rootRef.current?.getAttribute('aria-label')).toBe('Контейнер');
        expect(input().getAttribute('aria-describedby')?.split(' ')).toEqual([
            'external-help',
            node('inputCaption').id,
            node('inputCounter').id,
        ]);
    });

    it('supports controlled values and native callbacks', async () => {
        const onChange = vi.fn();
        const Controlled = () => {
            const [value, setValue] = useState('');
            return (
                <TextField
                    label="Поле"
                    value={value}
                    onChange={(event) => {
                        setValue(event.currentTarget.value);
                        onChange(event.currentTarget);
                    }}
                />
            );
        };
        await render(<Controlled />);
        await textbox().fill('Текст');
        await expect.element(textbox()).toHaveValue('Текст');
        expect(onChange).toHaveBeenLastCalledWith(input());
    });

    it('focuses the input from its background while preserving content slot actions', async () => {
        const onClick = vi.fn();
        await mount({
            contentAfter: (
                <button type="button" onClick={onClick}>
                    Действие
                </button>
            ),
        });
        await page.elementLocator(node('inputField')).click({ position: { x: 20, y: 3 } });
        await expect.element(textbox()).toHaveFocus();
        await page.getByRole('button', { name: 'Действие' }).click();
        expect(onClick).toHaveBeenCalledOnce();
        await expect.element(textbox()).not.toHaveFocus();
    });

    it('keeps readonly fields focusable and prevents edits', async () => {
        const onChange = vi.fn();
        await mount({ readOnly: true, defaultValue: 'Текст', onChange });
        await textbox().click();
        await expect.element(textbox()).toHaveFocus();
        await userEvent.keyboard('1{Backspace}');
        await expect.element(textbox()).toHaveValue('Текст');
        expect(onChange).not.toHaveBeenCalled();
    });

    it('does not focus disabled fields', async () => {
        await mount({ disabled: true });
        input().focus();
        await expect.element(textbox()).not.toHaveFocus();
        await expect.element(textbox()).toBeDisabled();
    });
});

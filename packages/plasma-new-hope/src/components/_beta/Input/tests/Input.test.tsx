import React, { createRef, useState } from 'react';
import { describe, expect, it, vi } from 'vitest';
import { render } from 'vitest-browser-react';
import { page, userEvent } from 'vitest/browser';
import { expectTypeOf } from 'expect-type';
import { Input } from 'src/examples/components/_beta/Input/Input';
import type { InputProps } from 'src/examples/components/_beta/Input/Input';

import { classes } from '../Input.tokens';
import type { InputProps as CoreInputProps } from '../index';

const getInput = () => page.getByRole('textbox', { name: 'Поле' });
const getControl = () => getInput().element() as HTMLInputElement;
const getNode = (className: string) => document.querySelector<HTMLElement>(`.${className}`)!;
const getElement = (className: string) => page.elementLocator(getNode(className));
const renderInput = (props: InputProps = {}) =>
    render(<Input label={{ value: 'Поле' }} rootProps={{ style: { width: 320 } }} {...props} />);

describe('Input', () => {
    describe('placeholder with chips', () => {
        it.each([undefined, false])('keeps the placeholder when hidePlaceholderOnChips is %s', async (option) => {
            expectTypeOf<CoreInputProps>()
                .toHaveProperty('hidePlaceholderOnChips')
                .toEqualTypeOf<boolean | undefined>();

            await renderInput({
                hidePlaceholderOnChips: option,
                placeholder: 'Введите значение',
                chips: { value: ['Первый'] },
            });
            await expect.element(getInput()).toHaveAttribute('placeholder', 'Введите значение');
        });

        it.each([{ value: undefined }, { value: [] }])(
            'keeps the placeholder without chips ($value)',
            async ({ value }) => {
                await renderInput({
                    hidePlaceholderOnChips: true,
                    placeholder: 'Введите значение',
                    chips: { value },
                });
                await expect.element(getInput()).toHaveAttribute('placeholder', 'Введите значение');
            },
        );

        it.each(['outer', 'inner'])('hides the placeholder with chips and an %s label', async (placement) => {
            await renderInput({
                hidePlaceholderOnChips: true,
                placeholder: 'Введите значение',
                label: { value: 'Поле', placement, keepPlaceholder: true },
                chips: { value: ['Первый'] },
            });
            expect(getControl().placeholder.trim()).toBe('');
            expect(getControl().hasAttribute('hideplaceholderonchips')).toBe(false);
            await getInput().fill('Значение');
            await expect.element(getInput()).toHaveValue('Значение');
        });

        it('restores the placeholder after removing the last chip', async () => {
            const ChipsInput = () => {
                const [values, setValues] = useState(['Первый']);
                return (
                    <Input
                        label={{ value: 'Поле' }}
                        placeholder="Введите значение"
                        hidePlaceholderOnChips
                        chips={{ value: values, onRemove: () => setValues([]) }}
                    />
                );
            };
            await render(<ChipsInput />);
            expect(getControl().placeholder).toBe('');
            await page.getByRole('button', { name: 'Удалить Первый' }).click();
            await expect.element(getInput()).toHaveAttribute('placeholder', 'Введите значение');
        });

        it('restores the placeholder when the option is turned off', async () => {
            const props: InputProps = {
                label: { value: 'Поле' },
                placeholder: 'Введите значение',
                chips: { value: ['Первый'] },
            };
            const { rerender } = await render(<Input {...props} hidePlaceholderOnChips />);
            expect(getControl().placeholder).toBe('');
            await rerender(<Input {...props} hidePlaceholderOnChips={false} />);
            await expect.element(getInput()).toHaveAttribute('placeholder', 'Введите значение');
        });
    });

    describe('native input contract', () => {
        it('forwards native attributes, refs and separate root attributes', async () => {
            const inputRef = createRef<HTMLInputElement>();
            const rootRef = createRef<HTMLDivElement>();
            await renderInput({
                ref: inputRef,
                id: 'custom-input',
                name: 'login',
                autoComplete: 'username',
                inputMode: 'email',
                maxLength: 20,
                className: 'native-class',
                rootProps: { ref: rootRef, className: 'root-class', 'aria-label': 'Оболочка' },
            });

            const input = getControl();
            expect(inputRef.current).toBe(input);
            expect(rootRef.current).toBe(input.closest(`.${classes.inputRoot}`));
            expect(input.id).toBe('custom-input');
            expect(input.name).toBe('login');
            expect(input.autocomplete).toBe('username');
            expect(input.inputMode).toBe('email');
            expect(input.maxLength).toBe(20);
            expect(input.classList.contains('native-class')).toBe(true);
            expect(rootRef.current?.classList.contains('root-class')).toBe(true);
            expect(input.classList.contains('root-class')).toBe(false);
            expect(rootRef.current?.getAttribute('aria-label')).toBe('Оболочка');
        });

        it('supports native typing, selection replacement and deletion with defaultValue', async () => {
            const onChange = vi.fn();
            const onInput = vi.fn();
            await renderInput({ defaultValue: '1234', onChange, onInput });

            await getInput().click();
            getControl().setSelectionRange(1, 3);
            await userEvent.keyboard('X');
            await expect.element(getInput()).toHaveValue('1X4');
            expect(onChange).toHaveBeenLastCalledWith(expect.objectContaining({ target: getControl() }));
            expect(onInput).toHaveBeenCalledTimes(1);

            await userEvent.keyboard('{Backspace}{Delete}');
            await expect.element(getInput()).toHaveValue('1');
            expect(onChange).toHaveBeenCalledTimes(3);
        });

        it('keeps a controlled value in the consumer and accepts external updates', async () => {
            const ControlledInput = () => {
                const [value, setValue] = useState('');
                return (
                    <>
                        <Input
                            label={{ value: 'Поле' }}
                            value={value}
                            onChange={(event) => setValue(event.target.value)}
                        />
                        <output aria-label="Значение">{value}</output>
                        <button type="button" onClick={() => setValue('Снаружи')}>
                            Обновить
                        </button>
                    </>
                );
            };
            await render(<ControlledInput />);

            await getInput().fill('Ввод');
            await expect.element(page.getByLabelText('Значение')).toHaveTextContent('Ввод');
            await page.getByRole('button', { name: 'Обновить' }).click();
            await expect.element(getInput()).toHaveValue('Снаружи');
        });

        it('forwards focus, blur and keyboard events once', async () => {
            const onFocus = vi.fn();
            const onBlur = vi.fn();
            const onKeyDown = vi.fn();
            await renderInput({ onFocus, onBlur, onKeyDown });

            await getInput().click();
            await userEvent.keyboard('a');
            expect(onFocus).toHaveBeenCalledTimes(1);
            expect(onBlur).not.toHaveBeenCalled();
            expect(onKeyDown).toHaveBeenLastCalledWith(expect.objectContaining({ key: 'a', target: getControl() }));

            await userEvent.tab();
            expect(onBlur).toHaveBeenCalledTimes(1);
        });

        it('preserves consumer cancellation of native keyboard behavior', async () => {
            await renderInput({ onKeyDown: (event) => event.preventDefault() });
            await getInput().click();
            await userEvent.keyboard('a');
            await expect.element(getInput()).toHaveValue('');
        });
    });

    describe('accessibility', () => {
        it.each(['outer', 'inner'])('associates the %s label with the native input', async (placement) => {
            await renderInput({ label: { value: 'Поле', placement } });
            const input = getControl();

            expect(input.id).not.toBe('');
            expect(input.labels?.length).toBe(1);
            expect(input.labels?.[0].htmlFor).toBe(input.id);
            await page.getByText('Поле', { exact: true }).click();
            await expect.element(getInput()).toHaveFocus();
        });

        it('generates unique IDs for fields and descriptions even with explicit input IDs', async () => {
            await render(
                <>
                    <Input id="first" label={{ value: 'Первое' }} caption="Описание 1" counter="1 / 10" />
                    <Input id="second" label={{ value: 'Второе' }} caption="Описание 2" counter="2 / 10" />
                </>,
            );
            const ids = Array.from(document.querySelectorAll('[id]'), (element) => element.id);
            expect(new Set(ids).size).toBe(ids.length);

            for (const name of ['Первое', 'Второе']) {
                const input = page.getByRole('textbox', { name }).element();
                const descriptions = input.getAttribute('aria-describedby')!.split(' ');
                expect(descriptions).toHaveLength(2);
                descriptions.forEach((id) => expect(document.getElementById(id)).not.toBeNull());
            }
        });

        it('merges external descriptions and removes helper IDs when helpers disappear', async () => {
            const { rerender } = await renderInput({
                'aria-describedby': 'external-help external-error',
                caption: 'Описание',
                counter: 0,
            });
            const descriptions = getControl().getAttribute('aria-describedby')!.split(' ');
            expect(descriptions.slice(0, 2)).toEqual(['external-help', 'external-error']);
            expect(descriptions.slice(2).map((id) => document.getElementById(id)?.textContent)).toEqual([
                'Описание',
                '0',
            ]);

            await rerender(
                <Input label={{ value: 'Поле' }} aria-describedby="external-help external-error" caption={false} />,
            );
            expect(getControl().getAttribute('aria-describedby')).toBe('external-help external-error');
            descriptions.slice(2).forEach((id) => expect(document.getElementById(id)).toBeNull());
        });

        it.each([
            ['indicator', { indicator: { value: 'required' } }, 'true', false],
            ['explicit ARIA false', { indicator: { value: 'required' }, 'aria-required': false }, 'false', false],
            ['explicit ARIA true', { 'aria-required': true }, 'true', false],
            ['native required', { required: true }, null, true],
            ['optional indicator', { indicator: { value: 'optional' } }, null, false],
        ] as const)('preserves required semantics: %s', async (_, props, ariaRequired, required) => {
            await renderInput(props);
            expect(getControl().getAttribute('aria-required')).toBe(ariaRequired);
            expect(getControl().required).toBe(required);
            if ('indicator' in props && props.indicator.value === 'required') {
                expect(document.querySelector(`.${classes.inputIndicator}`)?.getAttribute('aria-hidden')).toBe('true');
            }
        });

        it('forwards validation semantics supplied by the consumer', async () => {
            await renderInput({ 'aria-invalid': true, 'aria-errormessage': 'error-message' });
            await expect.element(getInput()).toHaveAttribute('aria-invalid', 'true');
            await expect.element(getInput()).toHaveAttribute('aria-errormessage', 'error-message');
        });
    });

    describe('click targets', () => {
        it.each([
            classes.inputField,
            classes.inputEditor,
            classes.inputViewport,
            classes.inputContainer,
            classes.inputTextBefore,
            classes.inputTextAfter,
        ])('focuses the input when clicking %s', async (className) => {
            await renderInput({ textBefore: 'До', textAfter: 'После' });
            // Точный target проверяет маршрутизацию клика независимо от размеров пустой подложки.
            getElement(className)
                .element()
                .dispatchEvent(new MouseEvent('click', { bubbles: true }));
            await expect.element(getInput()).toHaveFocus();
        });

        it('lets clicks beside an empty inner label reach the input', async () => {
            await renderInput({ label: { value: 'Поле', placement: 'inner' } });
            await getElement(classes.inputEditor).click({ position: { x: 220, y: 12 } });
            await expect.element(getInput()).toHaveFocus();
        });

        it.each(['contentBefore', 'contentAfter'] as const)('does not focus the input from %s', async (slot) => {
            await renderInput({ [slot]: <span>Содержимое слота</span> });
            await page.getByText('Содержимое слота').click();
            await expect.element(getInput()).not.toHaveFocus();
        });

        it('preserves interactive slot behavior', async () => {
            const onClick = vi.fn();
            await renderInput({
                contentAfter: (
                    <button type="button" onClick={onClick}>
                        Действие
                    </button>
                ),
            });
            await page.getByRole('button', { name: 'Действие' }).click();
            expect(onClick).toHaveBeenCalledTimes(1);
            await expect.element(getInput()).not.toHaveFocus();
        });
    });

    describe('disabled and readOnly', () => {
        it('disables the input and hint without emitting focus or change events', async () => {
            const onFocus = vi.fn();
            const onChange = vi.fn();
            await renderInput({
                disabled: true,
                defaultValue: 'Значение',
                hint: { value: 'Подсказка' },
                onFocus,
                onChange,
            });

            await expect.element(getInput()).toBeDisabled();
            await expect.element(page.getByRole('button', { name: 'Подсказка' })).toBeDisabled();
            await getInput().click({ force: true });
            getNode(classes.inputField).click();
            await userEvent.keyboard('a');

            await expect.element(getInput()).not.toHaveFocus();
            await expect.element(getInput()).toHaveValue('Значение');
            expect(onFocus).not.toHaveBeenCalled();
            expect(onChange).not.toHaveBeenCalled();
        });

        it('keeps readOnly keyboard focus and selection without synthetic blur events', async () => {
            const onFocus = vi.fn();
            const onBlur = vi.fn();
            const onChange = vi.fn();
            await render(
                <>
                    <button type="button">До поля</button>
                    <Input
                        label={{ value: 'Поле' }}
                        readOnly
                        defaultValue="Для копирования"
                        onFocus={onFocus}
                        onBlur={onBlur}
                        onChange={onChange}
                    />
                    <button type="button">После поля</button>
                </>,
            );
            await page.getByRole('button', { name: 'До поля' }).click();
            await userEvent.tab();
            await expect.element(getInput()).toHaveFocus();
            await userEvent.keyboard('{Control>}a{/Control}');
            expect(getControl().selectionStart).toBe(0);
            expect(getControl().selectionEnd).toBe(getControl().value.length);
            await userEvent.keyboard('X{Backspace}');
            await getInput().click();

            await expect.element(getInput()).toHaveValue('Для копирования');
            expect(onFocus).toHaveBeenCalledTimes(1);
            expect(onBlur).not.toHaveBeenCalled();
            expect(onChange).not.toHaveBeenCalled();
            await userEvent.tab();
            await expect.element(page.getByRole('button', { name: 'После поля' })).toHaveFocus();
            expect(onBlur).toHaveBeenCalledTimes(1);
        });

        it('does not forward readOnly background clicks to the input', async () => {
            await renderInput({ readOnly: true });
            getNode(classes.inputField).click();
            await expect.element(getInput()).not.toHaveFocus();
        });
    });

    describe('hint', () => {
        it.each(['click', 'hover'] as const)('opens the hint by %s without focusing the input', async (trigger) => {
            await renderInput({ hint: { value: 'Подсказка', trigger } });
            const target = page.getByRole('button', { name: 'Подсказка' });
            if (trigger === 'click') {
                await target.click();
            } else {
                await target.hover();
            }

            await expect.element(page.getByRole('tooltip')).toHaveTextContent('Подсказка');
            await expect.element(getInput()).not.toHaveFocus();
            await userEvent.keyboard('{Escape}');
            await expect.element(page.getByRole('tooltip')).not.toBeInTheDocument();
        });
    });
});

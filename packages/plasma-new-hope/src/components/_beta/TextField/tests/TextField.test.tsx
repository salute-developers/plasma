import React, { createRef, useState } from 'react';
import { describe, expect, it, vi } from 'vitest';
import { render } from 'vitest-browser-react';
import { page, userEvent } from 'vitest/browser';
import { TextField } from 'src/examples/components/_beta/TextField/TextField';
import type { TextFieldProps } from 'src/examples/components/_beta/TextField/TextField';

import { inputClasses } from '../../Input';

const getInput = (name = 'Поле') => page.getByRole('textbox', { name, exact: true });
const getInputElement = (name = 'Поле') => getInput(name).element() as HTMLInputElement;
const queryTooltip = () => document.querySelector('[role="tooltip"]');

const getElement = <T extends Element = HTMLElement>(selector: string, index = 0) => {
    const element = document.querySelectorAll<T>(selector)[index];

    if (!element) {
        throw new Error(`Element not found: ${selector} [${index}]`);
    }

    return element;
};

const clickInputWrapper = () =>
    userEvent.click(getElement(`.${inputClasses.inputField}`), { position: { x: 8, y: 8 } });

describe('TextField', () => {
    describe('onChange', () => {
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
                            onChange(event.currentTarget.value, event.currentTarget);
                        }}
                    />
                );
            };
            await render(<Controlled />);

            await getInput().fill('Текст');

            await expect.element(getInput()).toHaveValue('Текст');
            expect(onChange).toHaveBeenCalledExactlyOnceWith('Текст', getInputElement());
        });

        it('reports a proposed value while allowing a controlled consumer to reject it', async () => {
            const onChange = vi.fn();
            await render(
                <TextField label="Поле" value="Текст" onChange={(event) => onChange(event.currentTarget.value)} />,
            );

            await getInput().fill('Другое');

            expect(onChange).toHaveBeenCalledExactlyOnceWith('Другое');
            await expect.element(getInput()).toHaveValue('Текст');
        });
    });

    describe('onInput, onSelect', () => {
        it('forwards input and selection callbacks with the native input as currentTarget', async () => {
            const onInput = vi.fn();
            const onChange = vi.fn();
            const onSelect = vi.fn();
            await render(
                <TextField
                    label="Поле"
                    onInput={(event) => onInput(event.currentTarget.value, event.currentTarget)}
                    onChange={(event) => onChange(event.currentTarget.value, event.currentTarget)}
                    onSelect={(event) => onSelect(event.currentTarget.selectionStart, event.currentTarget.selectionEnd)}
                />,
            );

            await getInput().fill('Текст');
            expect(onInput).toHaveBeenCalledExactlyOnceWith('Текст', getInputElement());
            expect(onChange).toHaveBeenCalledExactlyOnceWith('Текст', getInputElement());

            await getInput().click();
            await userEvent.keyboard('{Home}{ArrowRight}{Shift>}{ArrowRight}{ArrowRight}{/Shift}');
            await expect.poll(() => onSelect.mock.lastCall).toEqual([1, 3]);
        });
    });

    describe('onKeyDown, onKeyUp', () => {
        it('preserves native navigation and forwards keyboard events', async () => {
            const onKeyDown = vi.fn();
            const onKeyUp = vi.fn();
            await render(
                <TextField
                    label="Поле"
                    defaultValue="Текст"
                    onKeyDown={(event) => onKeyDown(event.key, event.currentTarget, event.defaultPrevented)}
                    onKeyUp={(event) => onKeyUp(event.key, event.currentTarget)}
                />,
            );

            await getInput().click();
            await userEvent.keyboard('{ArrowLeft}{Home}{End}{Escape}');

            const keys = ['ArrowLeft', 'Home', 'End', 'Escape'];
            expect(onKeyDown.mock.calls).toEqual(keys.map((key) => [key, getInputElement(), false]));
            expect(onKeyUp.mock.calls).toEqual(keys.map((key) => [key, getInputElement()]));
            expect(getInputElement().selectionStart).toBe(5);
            await expect.element(getInput()).toHaveFocus();
        });

        it('honors preventDefault in onKeyDown', async () => {
            const onChange = vi.fn();
            await render(
                <TextField
                    label="Поле"
                    onKeyDown={(event) => {
                        if (event.key === 'x') {
                            event.preventDefault();
                        }
                    }}
                    onChange={(event) => onChange(event.currentTarget.value)}
                />,
            );

            await getInput().click();
            await userEvent.keyboard('axb');

            await expect.element(getInput()).toHaveValue('ab');
            expect(onChange.mock.calls).toEqual([['a'], ['ab']]);
        });
    });

    describe('onBeforeInput', () => {
        it('honors preventDefault in onBeforeInput', async () => {
            const onBeforeInput = vi.fn();
            const onChange = vi.fn();
            await render(
                <TextField
                    label="Поле"
                    onBeforeInput={(event) => {
                        onBeforeInput(event.currentTarget);
                        event.preventDefault();
                    }}
                    onChange={onChange}
                />,
            );

            await getInput().click();
            await userEvent.keyboard('a');

            expect(onBeforeInput).toHaveBeenCalledExactlyOnceWith(getInputElement());
            await expect.element(getInput()).toHaveValue('');
            expect(onChange).not.toHaveBeenCalled();
        });
    });

    describe('onCopy, onCut, onPaste', () => {
        it('copies, cuts and pastes selected text through native clipboard events', async () => {
            const onCopy = vi.fn();
            const onCut = vi.fn();
            const onPaste = vi.fn();
            const sourceChange = vi.fn();
            const targetChange = vi.fn();
            await render(
                <>
                    <TextField
                        label="Источник"
                        defaultValue="ABCDE"
                        onCopy={(event) => onCopy(event.currentTarget)}
                        onCut={(event) => onCut(event.currentTarget)}
                        onChange={(event) => sourceChange(event.currentTarget.value)}
                    />
                    <TextField
                        label="Получатель"
                        onPaste={(event) => onPaste(event.clipboardData.getData('text/plain'), event.currentTarget)}
                        onChange={(event) => targetChange(event.currentTarget.value)}
                    />
                </>,
            );
            await getInput('Источник').click();
            getInputElement('Источник').setSelectionRange(1, 3);
            await userEvent.copy();
            await getInput('Получатель').click();
            await userEvent.paste();
            await expect.element(getInput('Получатель')).toHaveValue('BC');
            await expect.element(getInput('Источник')).toHaveValue('ABCDE');

            await getInput('Источник').click();
            getInputElement('Источник').setSelectionRange(3, 5);
            await userEvent.cut();
            await expect.element(getInput('Источник')).toHaveValue('ABC');
            await getInput('Получатель').click();
            getInputElement('Получатель').setSelectionRange(2, 2);
            await userEvent.paste();
            await expect.element(getInput('Получатель')).toHaveValue('BCDE');

            expect(onCopy).toHaveBeenCalledExactlyOnceWith(getInputElement('Источник'));
            expect(onCut).toHaveBeenCalledExactlyOnceWith(getInputElement('Источник'));
            expect(onPaste.mock.calls).toEqual([
                ['BC', getInputElement('Получатель')],
                ['DE', getInputElement('Получатель')],
            ]);
            expect(sourceChange.mock.calls).toEqual([['ABC']]);
            expect(targetChange.mock.calls).toEqual([['BC'], ['BCDE']]);
        });

        it('allows a consumer to cancel paste', async () => {
            const onPaste = vi.fn();
            const onChange = vi.fn();
            await render(
                <>
                    <TextField label="Источник" defaultValue="Вставка" />
                    <TextField
                        label="Поле"
                        defaultValue="Текст"
                        onPaste={(event) => {
                            onPaste(event.clipboardData.getData('text/plain'));
                            event.preventDefault();
                        }}
                        onChange={onChange}
                    />
                </>,
            );
            await getInput('Источник').click();
            getInputElement('Источник').select();
            await userEvent.copy();
            await getInput().click();
            getInputElement().select();
            await userEvent.paste();

            expect(onPaste).toHaveBeenCalledExactlyOnceWith('Вставка');
            await expect.element(getInput()).toHaveValue('Текст');
            expect(onChange).not.toHaveBeenCalled();
        });
    });

    describe('onFocus, onBlur', () => {
        it('forwards focus and blur once when navigating with Tab', async () => {
            const onFocus = vi.fn();
            const onBlur = vi.fn();
            await render(
                <>
                    <TextField
                        label="Поле"
                        onFocus={(event) => onFocus(event.currentTarget)}
                        onBlur={(event) => onBlur(event.currentTarget)}
                    />
                    <button type="button">Далее</button>
                </>,
            );
            await userEvent.tab();
            await expect.element(getInput()).toHaveFocus();
            expect(onFocus).toHaveBeenCalledExactlyOnceWith(getInputElement());
            expect(onBlur).not.toHaveBeenCalled();

            await userEvent.tab();
            await expect.element(page.getByRole('button', { name: 'Далее' })).toHaveFocus();
            expect(onBlur).toHaveBeenCalledExactlyOnceWith(getInputElement());
        });
    });

    describe('click targets', () => {
        it.each(['inputField', 'inputEditor', 'inputViewport', 'inputContainer'] as const)(
            'focuses the input from the %s background',
            async (target) => {
                const onFocus = vi.fn();
                await render(<TextField label="Поле" onFocus={onFocus} />);

                await userEvent.click(getElement(`.${inputClasses[target]}`), { position: { x: 8, y: 8 } });

                await expect.element(getInput()).toHaveFocus();
                expect(onFocus).toHaveBeenCalledTimes(1);
            },
        );

        it.each(['contentBefore', 'contentAfter'] as const)(
            'preserves actions in %s without redirecting focus to the input',
            async (slot) => {
                const onClick = vi.fn();
                const action = (
                    <button type="button" onClick={onClick}>
                        <span>Действие</span>
                    </button>
                );
                await render(<TextField label="Поле" {...{ [slot]: action }} />);

                await page.getByText('Действие', { exact: true }).click();

                expect(onClick).toHaveBeenCalledTimes(1);
                await expect.element(page.getByRole('button', { name: 'Действие' })).toHaveFocus();
                await expect.element(getInput()).not.toHaveFocus();
            },
        );

        it('does not delegate background focus when the click is canceled', async () => {
            const onClick = vi.fn();
            const onFocus = vi.fn();
            await render(
                <TextField
                    label="Поле"
                    onFocus={onFocus}
                    rootProps={{
                        onClickCapture: (event) => {
                            onClick(event.currentTarget);
                            event.preventDefault();
                        },
                    }}
                />,
            );
            await clickInputWrapper();

            expect(onClick).toHaveBeenCalledTimes(1);
            expect(onFocus).not.toHaveBeenCalled();
            await expect.element(getInput()).not.toHaveFocus();
        });
    });

    describe('value, defaultValue', () => {
        it('accepts external controlled updates without emitting change events', async () => {
            const onChange = vi.fn();
            const result = await render(<TextField label="Поле" value="Первое" onChange={onChange} />);
            const control = getInputElement();

            await result.rerender(<TextField label="Поле" value="Второе" onChange={onChange} />);
            await expect.element(getInput()).toHaveValue('Второе');
            await result.rerender(<TextField label="Поле" value="" onChange={onChange} />);
            await expect.element(getInput()).toHaveValue('');
            expect(getInputElement()).toBe(control);
            expect(onChange).not.toHaveBeenCalled();
        });

        it('retains an edited uncontrolled value when defaultValue changes', async () => {
            const result = await render(<TextField label="Поле" defaultValue="Начальное" />);
            await getInput().fill('Изменено');
            await result.rerender(<TextField label="Поле" defaultValue="Новое начальное" />);

            await expect.element(getInput()).toHaveValue('Изменено');
            expect(getInputElement().defaultValue).toBe('Новое начальное');
        });

        it('retains value, focus and selection when presentation properties change', async () => {
            const result = await render(<TextField label="Поле" defaultValue="Начальное" />);
            await getInput().fill('Изменено');
            getInputElement().setSelectionRange(1, 4);
            const control = getInputElement();

            await result.rerender(
                <TextField
                    label="Поле"
                    defaultValue="Начальное"
                    labelPlacement="none"
                    appearance="clear"
                    size="s"
                    view="negative"
                />,
            );
            expect(getInputElement()).toBe(control);
            await expect.element(getInput()).toHaveFocus();
            await expect.element(getInput()).toHaveValue('Изменено');
            expect(getInputElement().selectionStart).toBe(1);
            expect(getInputElement().selectionEnd).toBe(4);
        });
    });

    describe('text editing', () => {
        it('inserts, deletes and replaces selected text without resetting the caret', async () => {
            const onChange = vi.fn();
            await render(
                <TextField
                    label="Поле"
                    defaultValue="ABCD"
                    onChange={(event) => onChange(event.currentTarget.value)}
                />,
            );
            await getInput().click();
            getInputElement().setSelectionRange(2, 2);

            await userEvent.keyboard('X');
            await expect.element(getInput()).toHaveValue('ABXCD');
            expect(getInputElement().selectionStart).toBe(3);
            await userEvent.keyboard('{Backspace}');
            await expect.element(getInput()).toHaveValue('ABCD');
            expect(getInputElement().selectionStart).toBe(2);
            await userEvent.keyboard('{Delete}');
            await expect.element(getInput()).toHaveValue('ABD');
            expect(getInputElement().selectionStart).toBe(2);
            getInputElement().setSelectionRange(0, 2);
            await userEvent.keyboard('Z');
            await expect.element(getInput()).toHaveValue('ZD');
            expect(getInputElement().selectionStart).toBe(1);
            expect(getInputElement().selectionEnd).toBe(1);
            expect(onChange.mock.calls).toEqual([['ABXCD'], ['ABCD'], ['ABD'], ['ZD']]);
        });

        it('respects maxLength during keyboard input', async () => {
            const onChange = vi.fn();
            await render(
                <TextField label="Поле" maxLength={3} onChange={(event) => onChange(event.currentTarget.value)} />,
            );
            await getInput().click();
            await userEvent.keyboard('abcdef');

            await expect.element(getInput()).toHaveValue('abc');
            expect(onChange.mock.calls).toEqual([['a'], ['ab'], ['abc']]);
        });
    });

    describe('readOnly', () => {
        it('keeps readonly fields focusable and prevents edits', async () => {
            const onChange = vi.fn();
            const onFocus = vi.fn();
            const onBlur = vi.fn();
            await render(
                <TextField
                    label="Поле"
                    readOnly
                    defaultValue="Текст"
                    onChange={onChange}
                    onFocus={onFocus}
                    onBlur={onBlur}
                />,
            );
            await clickInputWrapper();
            await expect.element(getInput()).not.toHaveFocus();
            await getInput().click();
            await getInput().click();
            await expect.element(getInput()).toHaveFocus();
            await userEvent.keyboard('1{Backspace}');
            await expect.element(getInput()).toHaveValue('Текст');
            expect(onChange).not.toHaveBeenCalled();
            expect(onFocus).toHaveBeenCalledTimes(1);
            expect(onBlur).not.toHaveBeenCalled();
        });

        it('allows selecting and copying a readonly value', async () => {
            const onChange = vi.fn();
            await render(
                <>
                    <TextField label="Источник" defaultValue="Текст" readOnly onChange={onChange} />
                    <TextField label="Получатель" />
                </>,
            );
            await getInput('Источник').click();
            getInputElement('Источник').select();
            await userEvent.copy();
            await getInput('Получатель').click();
            await userEvent.paste();

            await expect.element(getInput('Получатель')).toHaveValue('Текст');
            await expect.element(getInput('Источник')).toHaveValue('Текст');
            expect(onChange).not.toHaveBeenCalled();
        });

        it('resumes editing when readOnly is removed without remounting the input', async () => {
            const onChange = vi.fn();
            const result = await render(<TextField label="Поле" readOnly defaultValue="Текст" onChange={onChange} />);
            const control = getInputElement();
            await getInput().click();
            getInputElement().setSelectionRange(5, 5);
            await userEvent.keyboard('1');
            expect(onChange).not.toHaveBeenCalled();

            await result.rerender(<TextField label="Поле" defaultValue="Текст" onChange={onChange} />);
            expect(getInputElement()).toBe(control);
            await expect.element(getInput()).toHaveFocus();
            await userEvent.keyboard('1');
            await expect.element(getInput()).toHaveValue('Текст1');
            expect(onChange).toHaveBeenCalledTimes(1);
        });
    });

    describe('disabled', () => {
        it('does not focus disabled fields', async () => {
            await render(<TextField label="Поле" disabled />);
            getInputElement().focus();
            await expect.element(getInput()).not.toHaveFocus();
            await expect.element(getInput()).toBeDisabled();
        });

        it('skips disabled fields during keyboard navigation and prevents delegated focus', async () => {
            const onFocus = vi.fn();
            const onChange = vi.fn();
            await render(
                <>
                    <TextField label="Поле" disabled defaultValue="Текст" onFocus={onFocus} onChange={onChange} />
                    <button type="button">Далее</button>
                </>,
            );
            getInputElement().focus();
            await clickInputWrapper();
            await userEvent.tab();
            await expect.element(page.getByRole('button', { name: 'Далее' })).toHaveFocus();
            await expect.element(getInput()).toHaveValue('Текст');
            expect(onFocus).not.toHaveBeenCalled();
            expect(onChange).not.toHaveBeenCalled();
        });
    });

    describe('label, labelPlacement', () => {
        it.each(['outer', 'inner', 'none'] as const)(
            'supports %s labels with an accessible input name',
            async (labelPlacement) => {
                await render(<TextField label="Поле" labelPlacement={labelPlacement} hint={{ value: 'Подсказка' }} />);
                await expect.element(getInput()).toBeVisible();
                const label = document.querySelector<HTMLLabelElement>(`.${inputClasses.inputLabel}`);
                if (labelPlacement === 'none') {
                    expect(label).toBeNull();
                    await expect.element(getInput()).toHaveAttribute('aria-label', 'Поле');
                    return;
                }
                expect(label?.htmlFor).toBe(getInputElement().id);
                expect(getInputElement().hasAttribute('aria-label')).toBe(false);
            },
        );

        it('preserves an explicit accessible name without a visible label', async () => {
            await render(<TextField label="Скрытая подпись" labelPlacement="none" aria-label="Другое имя" />);
            await expect.element(page.getByRole('textbox', { name: 'Другое имя' })).toBeVisible();
        });

        it('supports an external accessible label', async () => {
            await render(
                <>
                    <span id="external-label">Внешняя подпись</span>
                    <TextField label="Поле" labelPlacement="none" aria-labelledby="external-label" />
                </>,
            );
            await expect.element(page.getByRole('textbox', { name: 'Внешняя подпись' })).toBeVisible();
        });
    });

    describe('hint', () => {
        it.each(['outer', 'inner', 'none'] as const)(
            'opens and dismisses the hint with the keyboard for %s labels',
            async (labelPlacement) => {
                await render(
                    <TextField label="Поле" labelPlacement={labelPlacement} hint={{ value: 'Содержимое подсказки' }} />,
                );
                const target = page.getByRole('button', { name: 'Содержимое подсказки' });
                (target.element() as HTMLButtonElement).focus();
                await userEvent.keyboard('{Enter}');

                const tooltip = page.getByRole('tooltip');
                await expect.element(tooltip).toHaveTextContent('Содержимое подсказки');
                await expect.element(target).toHaveAttribute('aria-describedby', tooltip.element().id);
                await expect.element(target).toHaveFocus();

                await userEvent.keyboard('{Escape}');
                await expect.poll(queryTooltip).toBeNull();
                await expect.element(target).not.toHaveAttribute('aria-describedby');
                await expect.element(target).toHaveFocus();
            },
        );

        it.each(['s', 'm'] as const)(
            'changes hint size %s without losing focus, popup or input value',
            async (size) => {
                const result = await render(
                    <TextField
                        label="Поле"
                        defaultValue="Текст"
                        hint={{ value: 'Подсказка', trigger: 'click', size }}
                    />,
                );
                const target = page.getByRole('button', { name: 'Подсказка', exact: true });
                const control = getInputElement();
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
                expect(getInputElement()).toBe(control);
                await expect.element(target).toHaveFocus();
                await expect.element(page.getByRole('tooltip')).toHaveTextContent('Подсказка');
                await expect.element(getInput()).toHaveValue('Текст');
            },
        );
    });

    describe('requiredIndicator, optionalText', () => {
        it.each(['outer', 'inner', 'none'] as const)(
            'exposes the required indicator for %s labels',
            async (labelPlacement) => {
                await render(
                    <TextField
                        label="Поле"
                        labelPlacement={labelPlacement}
                        requiredIndicator
                        requiredPlacement="left"
                    />,
                );
                await expect.element(getInput()).toHaveAttribute('aria-required', 'true');
                expect(getInputElement().required).toBe(false);
                const indicator = getElement(`.${inputClasses.inputIndicator}`);
                expect(indicator.getAttribute('aria-hidden')).toBe('true');
            },
        );

        it('preserves native required validation and explicit ARIA attributes', async () => {
            await render(<TextField label="Поле" required requiredIndicator aria-required={false} />);
            expect(getInputElement().required).toBe(true);
            await expect.element(getInput()).toHaveAttribute('aria-required', 'false');
        });

        it.each([undefined, false])('displays optional text when requiredIndicator=%s', async (requiredIndicator) => {
            await render(<TextField label="Поле" requiredIndicator={requiredIndicator} optionalText="Необязательно" />);
            await expect.element(page.getByText('Необязательно', { exact: true })).toBeVisible();
            expect(getElement(`.${inputClasses.inputIndicator}`).dataset.kind).toBe('optional');
            expect(getInputElement().hasAttribute('aria-required')).toBe(false);
        });

        it.each(['outer', 'inner', 'none'] as const)(
            'prefers the required indicator when both properties are passed with %s labels',
            async (labelPlacement) => {
                await render(
                    <TextField
                        label="Поле"
                        labelPlacement={labelPlacement}
                        requiredIndicator
                        optionalText="Необязательно"
                    />,
                );
                expect(getElement(`.${inputClasses.inputIndicator}`).dataset.kind).toBe('required');
                expect(document.querySelector('[data-kind="optional"]')).toBeNull();
                await expect.element(getInput()).toHaveAttribute('aria-required', 'true');
            },
        );

        it('updates required semantics without resetting the input', async () => {
            const result = await render(<TextField label="Поле" defaultValue="Текст" optionalText="Необязательно" />);
            const control = getInputElement();
            await getInput().fill('Изменено');

            await result.rerender(
                <TextField label="Поле" defaultValue="Текст" requiredIndicator optionalText="Необязательно" />,
            );
            await expect.element(getInput()).toHaveAttribute('aria-required', 'true');
            expect(document.querySelector('[data-kind="optional"]')).toBeNull();

            await result.rerender(
                <TextField label="Поле" defaultValue="Текст" requiredIndicator={false} optionalText="Необязательно" />,
            );
            await expect.element(page.getByText('Необязательно', { exact: true })).toBeVisible();
            await expect.element(getInput()).not.toHaveAttribute('aria-required');

            await result.rerender(<TextField label="Поле" defaultValue="Текст" />);
            await expect.element(getInput()).not.toHaveAttribute('aria-required');
            expect(document.querySelector(`.${inputClasses.inputIndicator}`)).toBeNull();
            expect(getInputElement()).toBe(control);
            await expect.element(getInput()).toHaveValue('Изменено');
        });
    });

    describe('aria-describedby', () => {
        it('updates helper descriptions while retaining external IDs', async () => {
            const Field = ({ caption, counter }: Pick<TextFieldProps, 'caption' | 'counter'>) => (
                <>
                    <span id="external-help">Внешняя подсказка</span>
                    <TextField label="Поле" aria-describedby="external-help" caption={caption} counter={counter} />
                </>
            );
            const result = await render(<Field caption="Подпись" counter="1 / 20" />);
            const captionId = getElement(`.${inputClasses.inputCaption}`).id;
            await result.rerender(<Field caption="Новая подпись" />);
            await expect.element(getInput()).toHaveAccessibleDescription('Внешняя подсказка Новая подпись');
            await expect.element(getInput()).toHaveAttribute('aria-describedby', `external-help ${captionId}`);

            await result.rerender(<Field />);
            await expect.element(getInput()).toHaveAccessibleDescription('Внешняя подсказка');
            await expect.element(getInput()).toHaveAttribute('aria-describedby', 'external-help');
        });

        it('generates independent labels and descriptions for multiple fields', async () => {
            await render(
                <>
                    <TextField label="Первое поле" caption="Первая подпись" counter="1 / 20" />
                    <TextField label="Второе поле" caption="Вторая подпись" counter="2 / 20" />
                </>,
            );
            const first = page.getByRole('textbox', { name: 'Первое поле' });
            const second = page.getByRole('textbox', { name: 'Второе поле' });
            await expect.element(first).toHaveAccessibleDescription('Первая подпись 1 / 20');
            await expect.element(second).toHaveAccessibleDescription('Вторая подпись 2 / 20');
            const ids = [first, second].flatMap((field) => [
                field.element().id,
                ...(field.element().getAttribute('aria-describedby')?.split(' ') ?? []),
            ]);
            expect(ids).toHaveLength(6);
            expect(new Set(ids).size).toBe(ids.length);
        });
    });

    describe('ref, rootProps', () => {
        it('preserves native refs, root attributes and helper descriptions', async () => {
            const ref = createRef<HTMLInputElement>();
            const rootRef = createRef<HTMLDivElement>();
            const result = await render(
                <>
                    <span id="external-help">Внешняя подсказка</span>
                    <TextField
                        ref={ref}
                        label="Поле"
                        caption="Подпись"
                        counter="1 / 20"
                        aria-describedby="external-help"
                        rootProps={{ ref: rootRef, className: 'custom-root', 'aria-label': 'Контейнер' }}
                    />
                </>,
            );
            expect(ref.current).toBe(getInputElement());
            expect(rootRef.current?.classList.contains('custom-root')).toBe(true);
            expect(rootRef.current?.getAttribute('aria-label')).toBe('Контейнер');
            expect(getInputElement().getAttribute('aria-describedby')?.split(' ')).toEqual([
                'external-help',
                getElement(`.${inputClasses.inputCaption}`).id,
                getElement(`.${inputClasses.inputCounter}`).id,
            ]);
            await expect.element(getInput()).toHaveAccessibleDescription('Внешняя подсказка Подпись 1 / 20');

            await result.unmount();
            expect(ref.current).toBeNull();
            expect(rootRef.current).toBeNull();
        });
    });

    describe('native forms', () => {
        it('submits native field values on Enter and excludes disabled fields', async () => {
            const onSubmit = vi.fn();
            await render(
                <form
                    onSubmit={(event) => {
                        event.preventDefault();
                        onSubmit(Array.from(new FormData(event.currentTarget).entries()));
                    }}
                >
                    <TextField label="Поле" name="value" defaultValue="Начальное" />
                    <TextField label="Только чтение" name="readonly" defaultValue="Доступно" readOnly />
                    <TextField label="Недоступное" name="disabled" defaultValue="Пропущено" disabled />
                    <button type="submit">Отправить</button>
                </form>,
            );
            await getInput().fill('Введено');
            await userEvent.keyboard('{Enter}');

            expect(onSubmit).toHaveBeenCalledExactlyOnceWith([
                ['value', 'Введено'],
                ['readonly', 'Доступно'],
            ]);
        });

        it('restores the uncontrolled default value on form reset without emitting change', async () => {
            const onChange = vi.fn();
            const onReset = vi.fn();
            await render(
                <form onReset={onReset}>
                    <TextField label="Поле" defaultValue="Начальное" onChange={onChange} />
                </form>,
            );
            await getInput().fill('Изменено');
            getInputElement().form?.reset();

            await expect.element(getInput()).toHaveValue('Начальное');
            expect(onReset).toHaveBeenCalledTimes(1);
            expect(onChange).toHaveBeenCalledTimes(1);
        });

        it('preserves native required validation and the invalid callback', async () => {
            const onInvalid = vi.fn();
            await render(<TextField label="Поле" required onInvalid={(event) => onInvalid(event.currentTarget)} />);

            expect(getInputElement().checkValidity()).toBe(false);
            expect(onInvalid).toHaveBeenCalledExactlyOnceWith(getInputElement());
            await getInput().fill('Текст');
            expect(getInputElement().checkValidity()).toBe(true);
            expect(onInvalid).toHaveBeenCalledTimes(1);
        });
    });

    describe('native input props', () => {
        it('keeps wrapper properties off the native input', async () => {
            await render(
                <TextField
                    label="Поле"
                    labelPlacement="inner"
                    keepPlaceholder
                    requiredIndicator
                    requiredPlacement="left"
                />,
            );
            for (const attribute of [
                'labelplacement',
                'keepplaceholder',
                'requiredindicator',
                'requiredplacement',
                'optionaltext',
            ]) {
                expect(getInputElement().hasAttribute(attribute)).toBe(false);
            }
        });

        it('does not pass internal chip properties to Input at runtime', async () => {
            const onRemove = vi.fn();
            const props = ({
                chips: { value: ['Чип'], onRemove },
                hidePlaceholderOnChips: true,
            } as unknown) as TextFieldProps;
            await render(<TextField label="Поле" {...props} placeholder="Введите значение" />);
            await getInput().click();
            await userEvent.keyboard('{Backspace}{ArrowLeft}{Backspace}');
            await expect.element(getInput()).toHaveFocus();
            expect(onRemove).not.toHaveBeenCalled();
            await expect.element(getInput()).toHaveAttribute('placeholder', 'Введите значение');
            expect(document.querySelector(`.${inputClasses.inputChip}`)).toBeNull();
            expect(getInputElement().hasAttribute('hideplaceholderonchips')).toBe(false);
            expect(getElement(`.${inputClasses.inputRoot}`).hasAttribute('data-has-chips')).toBe(false);
        });
    });
});

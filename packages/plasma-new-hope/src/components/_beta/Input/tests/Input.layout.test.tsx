import React, { useState } from 'react';
import type { CSSProperties } from 'react';
import { describe, expect, it, vi } from 'vitest';
import { render } from 'vitest-browser-react';
import { page, userEvent } from 'vitest/browser';
import { Input } from 'src/examples/components/_beta/Input/Input';
import type { InputProps } from 'src/examples/components/_beta/Input/Input';

import { classes } from '../Input.tokens';

const chips = ['Первый', 'Второй', 'Третий', 'Четвёртый'];
const longValue = 'Длинное значение, которое прокручивается внутри поля. '.repeat(10);
const getInput = () => page.getByRole('textbox', { name: 'Поле' });
const getControl = () => getInput().element() as HTMLInputElement;
const getNode = (className: string) => document.querySelector(`.${className}`) as HTMLElement;
const getChips = () => Array.from(document.querySelectorAll<HTMLElement>(`.${classes.inputChip}`));
const renderInput = (props: InputProps = {}) =>
    render(<Input label={{ value: 'Поле' }} rootProps={{ style: { width: 320 } }} {...props} />);
const blurInput = () => userEvent.click(document.body, { position: { x: 900, y: 700 } });

const expectNoHorizontalOverflow = () => {
    for (const className of [classes.inputRoot, classes.inputField, classes.inputViewport]) {
        const element = getNode(className);
        expect(element.scrollWidth).toBeLessThanOrEqual(element.clientWidth + 1);
        expect(element.scrollLeft).toBe(0);
    }
};

describe('Input / wrapping layout', () => {
    it('keeps fitting chips and the input on one row', async () => {
        await renderInput({ chips: { value: ['A', 'B'] }, placeholder: 'Введите значение' });
        const lastChip = getChips()[1].getBoundingClientRect();
        const input = getControl().getBoundingClientRect();

        expect(input.left).toBeGreaterThanOrEqual(lastChip.right);
        expect(input.top).toBeLessThan(lastChip.bottom);
        expect(input.bottom).toBeGreaterThan(lastChip.top);
        expectNoHorizontalOverflow();
    });

    it.each([
        { type: 'text', value: '12345678901234567890' },
        { type: 'email', value: 'long.address@example.com' },
        { type: 'password', value: 'p'.repeat(40) },
    ])('moves a growing $type input below the chips and returns it after clearing', async ({ type, value }) => {
        await renderInput({ type, chips: { value: ['Первый', 'Второй'] }, placeholder: 'Введите значение' });
        const chip = getChips()[1].getBoundingClientRect();
        const initialHeight = getNode(classes.inputField).clientHeight;
        expect(getControl().getBoundingClientRect().top).toBeLessThan(chip.bottom);

        await getInput().click();
        await userEvent.keyboard(value);

        await expect.poll(() => getControl().getBoundingClientRect().top).toBeGreaterThanOrEqual(chip.bottom);
        expect(getNode(classes.inputField).clientHeight).toBeGreaterThan(initialHeight);
        expect(getControl().clientWidth).toBe(getNode(classes.inputViewport).clientWidth);
        await expect.element(getInput()).toHaveFocus();
        expectNoHorizontalOverflow();

        await getInput().fill('');
        await expect.poll(() => getControl().getBoundingClientRect().top).toBeLessThan(chip.bottom);
        expect(getNode(classes.inputField).clientHeight).toBe(initialHeight);
        await expect.element(getInput()).toHaveFocus();
        expectNoHorizontalOverflow();
    });

    it('returns the input beside the chips when Backspace shortens the value', async () => {
        await renderInput({ chips: { value: ['Первый', 'Второй'] } });
        await getInput().fill('12345678901234567890');
        const chip = getChips()[1].getBoundingClientRect();
        expect(getControl().getBoundingClientRect().top).toBeGreaterThanOrEqual(chip.bottom);

        await userEvent.keyboard('{Backspace}'.repeat(15));
        await expect.element(getInput()).toHaveValue('12345');
        await expect.poll(() => getControl().getBoundingClientRect().top).toBeLessThan(chip.bottom);
        expect(getControl().selectionStart).toBe(5);
        expect(getControl().scrollLeft).toBe(0);
        expectNoHorizontalOverflow();
    });

    it('includes affixes in the width required to stay beside the chips', async () => {
        await renderInput({ chips: { value: ['Первый'] }, textBefore: 'До', textAfter: 'После' });
        const chip = getChips()[0].getBoundingClientRect();
        expect(getControl().getBoundingClientRect().top).toBeLessThan(chip.bottom);

        await getInput().fill('12345678901234567890');
        const input = getControl().getBoundingClientRect();
        const before = getNode(classes.inputTextBefore).getBoundingClientRect();
        const after = getNode(classes.inputTextAfter).getBoundingClientRect();
        expect(input.top).toBeGreaterThanOrEqual(chip.bottom);
        expect(before.top).toBe(input.top);
        expect(after.top).toBe(input.top);
        expect(before.right).toBeLessThan(input.left);
        expect(after.left).toBeGreaterThan(input.right);
        expectNoHorizontalOverflow();
    });

    it('keeps the layout of a controlled input whose consumer rejects the entered value', async () => {
        const onChange = vi.fn();
        const onInput = vi.fn();
        await renderInput({ value: '', onChange, onInput, chips: { value: ['Первый', 'Второй'] } });
        const initialHeight = getNode(classes.inputField).clientHeight;
        await getInput().fill(longValue);

        await expect.element(getInput()).toHaveValue('');
        expect(getNode(classes.inputField).clientHeight).toBe(initialHeight);
        expect(onChange).toHaveBeenCalledTimes(1);
        expect(onInput).toHaveBeenCalledTimes(1);
        expectNoHorizontalOverflow();
    });

    it.each([false, true])('respects native form reset (prevented: %s)', async (prevented) => {
        await render(
            <form onReset={(event) => prevented && event.preventDefault()}>
                <Input
                    label={{ value: 'Поле' }}
                    defaultValue="123"
                    chips={{ value: ['Первый', 'Второй'] }}
                    rootProps={{ style: { width: 320 } }}
                />
                <input type="reset" value="Сбросить" />
            </form>,
        );
        const initialHeight = getNode(classes.inputField).clientHeight;
        await getInput().fill(longValue);
        const expandedHeight = getNode(classes.inputField).clientHeight;
        expect(expandedHeight).toBeGreaterThan(initialHeight);
        await page.getByRole('button', { name: 'Сбросить' }).click();

        await expect.element(getInput()).toHaveValue(prevented ? longValue : '123');
        await expect
            .poll(() => getNode(classes.inputField).clientHeight)
            .toBe(prevented ? expandedHeight : initialHeight);
        expectNoHorizontalOverflow();
    });

    it.each([
        { name: 'editable', props: {} },
        { name: 'disabled', props: { disabled: true } },
        { name: 'readOnly', props: { readOnly: true } },
    ])('wraps overflowing chips and grows the field when $name', async ({ props }) => {
        await renderInput({ ...props, chips: { value: chips }, placeholder: 'Введите значение' });
        const items = getChips();
        const field = getNode(classes.inputField);

        expect(items[items.length - 1].getBoundingClientRect().top).toBeGreaterThan(
            items[0].getBoundingClientRect().top,
        );
        expect(field.getBoundingClientRect().height).toBeGreaterThan(parseFloat(getComputedStyle(field).minHeight));
        expectNoHorizontalOverflow();
    });

    it('moves the input to the next row when the remaining space is below its configured minimum', async () => {
        await renderInput({
            chips: { value: ['Первый'] },
            placeholder: 'Введите значение',
            rootProps: { style: { width: 320, '--sdds-core-input-min-width': '240px' } as CSSProperties },
        });
        const chip = getChips()[0].getBoundingClientRect();
        const input = getControl().getBoundingClientRect();
        const viewport = getNode(classes.inputViewport).getBoundingClientRect();

        expect(input.top).toBeGreaterThanOrEqual(chip.bottom);
        expect(input.width).toBeGreaterThanOrEqual(240);
        expect(input.left).toBeCloseTo(viewport.left);
        expect(input.right).toBeCloseTo(viewport.right);
        expectNoHorizontalOverflow();
    });

    it('limits the minimum input width to the available space in a narrow container', async () => {
        await renderInput({
            chips: { value: ['A', 'B'] },
            rootProps: { style: { width: 120, '--sdds-core-input-min-width': '200px' } as CSSProperties },
        });
        const viewport = getNode(classes.inputViewport);
        expect(getControl().clientWidth).toBeLessThanOrEqual(viewport.clientWidth);
        expectNoHorizontalOverflow();
    });

    it('truncates an oversized chip and preserves its remove action', async () => {
        const onRemove = vi.fn();
        const value = 'Очень длинное название чипа '.repeat(10);
        await renderInput({ chips: { value: [value], onRemove } });
        const chip = getChips()[0];
        const text = chip.querySelector(`.${classes.inputChipText}`) as HTMLElement;
        const remove = page.getByRole('button', { name: `Удалить ${value.trim()}` });

        expect(chip.clientWidth).toBeLessThanOrEqual(getNode(classes.inputViewport).clientWidth);
        expect(text.scrollWidth).toBeGreaterThan(text.clientWidth);
        await remove.click();
        expect(onRemove).toHaveBeenCalledExactlyOnceWith(value);
        expectNoHorizontalOverflow();
    });

    it.each([
        { name: 'no chips', values: [] },
        { name: 'fitting chips', values: ['A'] },
        { name: 'wrapped chips', values: chips },
    ])('scrolls long text natively with $name without changing the chip layout', async ({ values }) => {
        await renderInput({ chips: { value: values } });
        const initialChipPositions = getChips().map((chip) => chip.getBoundingClientRect().top);
        await getInput().fill(longValue);
        const expandedHeight = getNode(classes.inputField).getBoundingClientRect().height;
        const input = getControl();
        await expect.poll(() => input.scrollLeft).toBeGreaterThan(0);
        const previousScroll = input.scrollLeft;
        await userEvent.keyboard('Ш');

        await expect.element(getInput()).toHaveValue(`${longValue}Ш`);
        expect(input.selectionEnd).toBe(input.value.length);
        expect(input.scrollLeft).toBeGreaterThan(previousScroll);
        expectNoHorizontalOverflow();
        expect(getChips().map((chip) => chip.getBoundingClientRect().top)).toEqual(initialChipPositions);
        expect(getNode(classes.inputField).getBoundingClientRect().height).toBe(expandedHeight);
        if (values.length) {
            const lastChip = getChips()[values.length - 1].getBoundingClientRect();
            expect(input.getBoundingClientRect().top).toBeGreaterThanOrEqual(lastChip.bottom);
        }

        await blurInput();
        expect(input.scrollLeft).toBe(0);
        expectNoHorizontalOverflow();
    });

    it('keeps native caret navigation within the input', async () => {
        await renderInput({ chips: { value: chips } });
        await getInput().fill(longValue);
        await userEvent.keyboard('{Home}');
        expect(getControl().selectionStart).toBe(0);
        await expect.poll(() => getControl().scrollLeft).toBe(0);
        await userEvent.keyboard('{End}');
        expect(getControl().selectionStart).toBe(longValue.length);
        await expect.poll(() => getControl().scrollLeft).toBeGreaterThan(0);
        expectNoHorizontalOverflow();
    });

    it('reflows the input after external updates to a controlled value', async () => {
        const onChange = vi.fn();
        const { rerender } = await renderInput({ value: 'Начало', onChange, chips: { value: chips } });
        await getInput().click();
        const width = getControl().clientWidth;
        const height = getNode(classes.inputField).clientHeight;
        await rerender(
            <Input
                label={{ value: 'Поле' }}
                value={longValue}
                onChange={onChange}
                chips={{ value: chips }}
                rootProps={{ style: { width: 320 } }}
            />,
        );

        await expect.element(getInput()).toHaveValue(longValue);
        expect(getControl().clientWidth).toBeGreaterThan(width);
        expect(getControl().clientWidth).toBe(getNode(classes.inputViewport).clientWidth);
        expect(getNode(classes.inputField).clientHeight).toBeGreaterThan(height);
        expectNoHorizontalOverflow();
    });

    it('keeps email input scrolling native without relying on selection APIs', async () => {
        const onScroll = vi.fn();
        await renderInput({ type: 'email', chips: { value: chips }, onScroll });
        await getInput().fill(`${'long-address-'.repeat(30)}@example.com`);
        const input = getControl();
        expect(input.selectionEnd).toBeNull();
        await expect.poll(() => input.scrollLeft).toBeGreaterThan(0);
        input.dispatchEvent(new Event('scroll'));
        expect(onScroll).toHaveBeenCalledWith(expect.objectContaining({ target: input }));
        expectNoHorizontalOverflow();
        await blurInput();
        expect(input.scrollLeft).toBe(0);
    });

    it('reflows chips when the container becomes narrower or wider', async () => {
        await renderInput({ chips: { value: chips }, rootProps: { style: { width: 800 } } });
        const root = getNode(classes.inputRoot);
        const initialHeight = getNode(classes.inputField).clientHeight;
        root.style.width = '200px';

        await expect.poll(() => getNode(classes.inputField).clientHeight).toBeGreaterThan(initialHeight);
        expectNoHorizontalOverflow();
        root.style.width = '800px';
        await expect.poll(() => getNode(classes.inputField).clientHeight).toBe(initialHeight);
        expectNoHorizontalOverflow();
    });

    it('keeps side slots outside the wrapping area and preserves click behavior', async () => {
        const onClick = vi.fn();
        await renderInput({
            chips: { value: chips },
            contentBefore: <span>До</span>,
            contentAfter: (
                <button type="button" onClick={onClick}>
                    После
                </button>
            ),
        });
        const viewport = getNode(classes.inputViewport).getBoundingClientRect();
        const before = getNode(classes.inputContentLeft).getBoundingClientRect();
        const after = getNode(classes.inputContentRight).getBoundingClientRect();
        expect(before.right).toBeLessThanOrEqual(viewport.left);
        expect(after.left).toBeGreaterThanOrEqual(viewport.right);
        await page.getByRole('button', { name: 'После' }).click();
        expect(onClick).toHaveBeenCalledTimes(1);
        await expect.element(getInput()).not.toHaveFocus();
        getNode(classes.inputViewport).click();
        await expect.element(getInput()).toHaveFocus();
        expectNoHorizontalOverflow();
    });

    it('preserves two-step chip deletion and focus restoration across rows', async () => {
        const ChipsInput = () => {
            const [values, setValues] = useState(chips);
            return (
                <Input
                    label={{ value: 'Поле' }}
                    rootProps={{ style: { width: 200 } }}
                    chips={{
                        value: values,
                        onRemove: (value) => setValues((previous) => previous.filter((item) => item !== value)),
                    }}
                />
            );
        };
        await render(<ChipsInput />);
        const initialHeight = getNode(classes.inputField).clientHeight;
        await getInput().click();
        await userEvent.keyboard('{Backspace}');
        await expect.element(page.getByRole('button', { name: 'Удалить Четвёртый' })).toHaveFocus();
        await userEvent.keyboard('{Backspace}');
        await expect.element(page.getByRole('button', { name: 'Удалить Третий' })).toHaveFocus();
        await userEvent.keyboard('{Backspace}{Backspace}{Backspace}');
        await expect.element(getInput()).toHaveFocus();
        expect(getNode(classes.inputField).clientHeight).toBeLessThan(initialHeight);
        expectNoHorizontalOverflow();
    });
});

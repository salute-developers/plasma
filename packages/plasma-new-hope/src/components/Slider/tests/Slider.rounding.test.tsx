import React from 'react';
import { describe, expect, it, vi } from 'vitest';
import { render } from 'vitest-browser-react';
import { page, userEvent } from 'vitest/browser';
import { Slider } from 'src/examples/components/Slider/Slider';

describe('Slider roundingMode', () => {
    it.each([
        ['ceil', 50.1],
        ['floor', 50],
    ] as const)('rounds controlled values with %s in the label, input and callback', async (roundingMode, expected) => {
        const onChange = vi.fn();
        await render(
            <Slider
                min={0}
                max={100}
                step={0.1}
                value={50.05}
                roundingMode={roundingMode}
                showCurrentValue
                onChange={onChange}
            />,
        );

        await expect.element(page.getByRole('slider')).toHaveValue(String(expected));
        await expect.element(page.getByRole('slider')).toHaveAttribute('aria-valuenow', String(expected));
        await expect.element(page.getByText(String(expected), { exact: true })).toBeVisible();
        expect(onChange).toHaveBeenCalledExactlyOnceWith(expected);
    });

    it('updates the displayed value when roundingMode changes without requiring onChange', async () => {
        const screen = await render(
            <Slider min={0} max={100} step={0.1} value={50.05} roundingMode="ceil" showCurrentValue />,
        );

        await expect.element(page.getByText('50.1', { exact: true })).toBeVisible();
        await screen.rerender(
            <Slider min={0} max={100} step={0.1} value={50.05} roundingMode="floor" showCurrentValue />,
        );

        await expect.element(page.getByRole('slider')).toHaveValue('50');
        await expect.element(page.getByText('50', { exact: true })).toBeVisible();
    });

    it.each([
        ['ceil', 50.1],
        ['floor', 50],
    ] as const)('rounds defaultValue and tick selections with %s', async (roundingMode, expected) => {
        const onChange = vi.fn();
        const onChangeCommitted = vi.fn();
        await render(
            <Slider
                min={0}
                max={100}
                step={0.1}
                defaultValue={20.05}
                name="amount"
                roundingMode={roundingMode}
                scaleTicks={[{ value: 50.05, label: 'Choose' }]}
                onChange={onChange}
                onChangeCommitted={onChangeCommitted}
            />,
        );

        await expect.element(page.getByRole('slider')).toHaveValue(roundingMode === 'ceil' ? '20.1' : '20');
        expect(onChange).not.toHaveBeenCalled();

        await page.getByText('Choose', { exact: true }).click();

        await expect.element(page.getByRole('slider')).toHaveValue(String(expected));
        expect(onChange).toHaveBeenCalledExactlyOnceWith({ target: { value: expected, name: 'amount' } });
        expect(onChangeCommitted).toHaveBeenCalledExactlyOnceWith(expected);
    });

    it.each([
        ['ceil', 1.5],
        ['floor', 1.2],
    ] as const)('uses %s for PageUp and commits the displayed value', async (roundingMode, expected) => {
        const onChange = vi.fn();
        const onChangeCommitted = vi.fn();
        await render(
            <Slider
                min={0}
                max={10}
                step={0.3}
                defaultValue={0.3}
                name="amount"
                roundingMode={roundingMode}
                onChange={onChange}
                onChangeCommitted={onChangeCommitted}
            />,
        );

        page.getByRole('slider').element().focus();
        await userEvent.keyboard('{PageUp}');

        await expect.element(page.getByRole('slider')).toHaveValue(String(expected));
        expect(onChange).toHaveBeenLastCalledWith({ target: { value: expected, name: 'amount' } });
        expect(onChangeCommitted).toHaveBeenLastCalledWith(expected);
    });

    it.each([
        ['ceil', 100.05, 100],
        ['floor', -0.05, 0],
    ] as const)('keeps %s results within the range', async (roundingMode, value, expected) => {
        await render(<Slider min={0} max={100} step={0.1} value={value} roundingMode={roundingMode} />);

        await expect.element(page.getByRole('slider')).toHaveValue(String(expected));
        await expect.element(page.getByRole('slider')).toHaveAttribute('aria-valuenow', String(expected));
    });

    it.each([
        ['ceil', '20.1', '80.1'],
        ['floor', '20', '80'],
    ] as const)('rounds both controlled handles with %s', async (roundingMode, first, second) => {
        await render(<Slider min={0} max={100} step={0.1} value={[20.05, 80.05]} roundingMode={roundingMode} />);

        await expect.element(page.getByRole('slider').nth(0)).toHaveValue(first);
        await expect.element(page.getByRole('slider').nth(1)).toHaveValue(second);
        await expect.element(page.getByRole('textbox').nth(0)).toHaveValue(first);
        await expect.element(page.getByRole('textbox').nth(1)).toHaveValue(second);
    });

    it.each([
        ['ceil', 0, '50.05', 50.1, [50.1, 80]],
        ['floor', 0, '50.05', 50, [50, 80]],
        ['ceil', 1, '90.05', 90.1, [20, 90.1]],
        ['floor', 1, '90.05', 90, [20, 90]],
    ] as const)('rounds %s text input %s and its callbacks', async (roundingMode, index, text, expected, values) => {
        const onChange = vi.fn();
        const onChangeTextField = vi.fn();
        const onBlurTextField = vi.fn();
        await render(
            <Slider
                type="double"
                min={0}
                max={100}
                step={0.1}
                defaultValue={[20, 80]}
                name="range"
                roundingMode={roundingMode}
                onChange={onChange}
                onChangeTextField={onChangeTextField}
                onBlurTextField={onBlurTextField}
            />,
        );

        await page.getByRole('textbox').nth(index).fill(text);

        await expect.element(page.getByRole('textbox').nth(index)).toHaveValue(String(expected));
        await expect.element(page.getByRole('slider').nth(index)).toHaveValue(String(expected));
        expect(onChangeTextField).toHaveBeenLastCalledWith(values, expect.anything());
        expect(onChange).toHaveBeenLastCalledWith({ target: { value: values.join(' - '), name: 'range' } });

        await userEvent.tab();

        expect(onBlurTextField).toHaveBeenLastCalledWith(values, expect.anything());
    });

    it.each([
        ['ceil', 4.5],
        ['floor', 4.2],
    ] as const)('uses %s when moving the second handle with PageUp', async (roundingMode, expected) => {
        const onChange = vi.fn();
        const onChangeCommitted = vi.fn();
        await render(
            <Slider
                type="double"
                min={0}
                max={10}
                step={0.3}
                defaultValue={[0.3, 3.3]}
                name="range"
                roundingMode={roundingMode}
                onChange={onChange}
                onChangeCommitted={onChangeCommitted}
            />,
        );

        page.getByRole('slider').nth(1).element().focus();
        await userEvent.keyboard('{PageUp}');

        await expect.element(page.getByRole('slider').nth(1)).toHaveValue(String(expected));
        expect(onChange).toHaveBeenLastCalledWith({ target: { value: `0.3 - ${expected}`, name: 'range' } });
        expect(onChangeCommitted).toHaveBeenLastCalledWith([0.3, expected]);
    });

    it('preserves nearest-step rounding when roundingMode is omitted', async () => {
        const onChange = vi.fn();
        await render(<Slider min={0} max={100} step={0.1} value={50.05} onChange={onChange} />);

        expect(onChange).toHaveBeenCalledExactlyOnceWith(50);
    });
});

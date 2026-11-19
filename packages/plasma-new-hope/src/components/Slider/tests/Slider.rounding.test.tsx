import React, { useState } from 'react';
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

        await expect.element(page.getByRole('textbox').nth(index)).toHaveValue(text);
        await expect.element(page.getByRole('slider').nth(index)).toHaveValue(String(expected));
        expect(onChangeTextField).toHaveBeenLastCalledWith(values, expect.anything());
        expect(onChange).toHaveBeenLastCalledWith({ target: { value: values.join(' - '), name: 'range' } });

        await userEvent.tab();

        await expect.element(page.getByRole('textbox').nth(index)).toHaveValue(String(expected));
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
        await render(<Slider min={0} max={100} step={0.1} value={50.05} showCurrentValue onChange={onChange} />);

        expect(onChange).toHaveBeenCalledExactlyOnceWith(50);
        await expect.element(page.getByText('50.05', { exact: true })).toBeVisible();
        await expect.element(page.getByRole('slider')).toHaveAttribute('aria-valuenow', '50.05');
    });

    it('preserves off-step text values in double mode when roundingMode is omitted', async () => {
        const onChange = vi.fn();
        await render(<Slider min={0} max={100} step={0.1} value={[20.05, 80.05]} onChange={onChange} />);

        await expect.element(page.getByRole('textbox').nth(0)).toHaveValue('20.05');
        await expect.element(page.getByRole('textbox').nth(1)).toHaveValue('80.05');
        expect(onChange).not.toHaveBeenCalled();
    });

    describe('off-step maximum', () => {
        it.each(['ceil', 'floor'] as const)(
            'uses an attainable endpoint for the input, label, ARIA and callbacks with %s',
            async (roundingMode) => {
                const onChange = vi.fn();
                const onChangeCommitted = vi.fn();
                await render(
                    <Slider
                        min={0}
                        max={10}
                        step={3}
                        value={9.5}
                        roundingMode={roundingMode}
                        showCurrentValue
                        onChange={onChange}
                        onChangeCommitted={onChangeCommitted}
                    />,
                );

                const slider = page.getByRole('slider');
                await expect.element(slider).toHaveValue('9');
                await expect.element(slider).toHaveAttribute('aria-valuenow', '9');
                await expect.element(page.getByText('9', { exact: true })).toBeVisible();
                expect(onChange).toHaveBeenCalledExactlyOnceWith(9);

                slider.element().dispatchEvent(new MouseEvent('mouseup', { bubbles: true }));

                expect(onChangeCommitted).toHaveBeenCalledExactlyOnceWith(9);
            },
        );

        it.each(['ceil', 'floor'] as const)(
            'keeps both controlled handles on the native grid with %s',
            async (roundingMode) => {
                const onChangeCommitted = vi.fn();
                await render(
                    <Slider
                        min={0}
                        max={10}
                        step={3}
                        value={[0, 9.5]}
                        roundingMode={roundingMode}
                        onChangeCommitted={onChangeCommitted}
                    />,
                );

                const slider = page.getByRole('slider').nth(1);
                await expect.element(slider).toHaveValue('9');
                await expect.element(slider).toHaveAttribute('aria-valuenow', '9');
                await expect.element(page.getByRole('textbox').nth(1)).toHaveValue('9');

                slider.element().dispatchEvent(new MouseEvent('mouseup', { bubbles: true }));

                expect(onChangeCommitted).toHaveBeenCalledExactlyOnceWith([0, 9]);
            },
        );

        it.each([
            ['floor', '20', 9],
            ['ceil', '20', 9],
            ['floor', '6', 6],
            ['ceil', '6', 6],
        ] as const)('keeps %s text input %s stable before and after blur', async (roundingMode, text, expected) => {
            const onChange = vi.fn();
            const onChangeTextField = vi.fn();
            const onBlurTextField = vi.fn();
            await render(
                <>
                    <Slider
                        type="double"
                        min={0}
                        max={10}
                        step={3}
                        defaultValue={[0, 3]}
                        roundingMode={roundingMode}
                        onChange={onChange}
                        onChangeTextField={onChangeTextField}
                        onBlurTextField={onBlurTextField}
                    />
                    <button type="button">Outside</button>
                </>,
            );

            await page.getByRole('textbox').nth(1).fill(text);

            await expect.element(page.getByRole('textbox').nth(1)).toHaveValue(text);
            await expect.element(page.getByRole('slider').nth(1)).toHaveValue(String(expected));
            expect(onChangeTextField).toHaveBeenLastCalledWith([0, expected], expect.anything());
            expect(onChange).toHaveBeenLastCalledWith([0, expected]);

            await page.getByRole('button', { name: 'Outside' }).click();

            await expect.element(page.getByRole('textbox').nth(1)).toHaveValue(String(expected));
            expect(onBlurTextField).toHaveBeenLastCalledWith([0, expected], expect.anything());
            expect(onChange).toHaveBeenLastCalledWith([0, expected]);
        });

        it('keeps PageUp and tick selection on the last attainable step', async () => {
            const onChange = vi.fn();
            const onChangeCommitted = vi.fn();
            await render(
                <Slider
                    min={0}
                    max={10}
                    step={3}
                    defaultValue={6}
                    name="amount"
                    roundingMode="ceil"
                    scaleTicks={[{ value: 10, label: 'Maximum' }]}
                    onChange={onChange}
                    onChangeCommitted={onChangeCommitted}
                />,
            );

            await page.getByText('Maximum').click();

            expect(onChange).toHaveBeenLastCalledWith({ target: { name: 'amount', value: 9 } });
            expect(onChangeCommitted).toHaveBeenLastCalledWith(9);
            page.getByRole('slider').element().focus();
            await userEvent.keyboard('{PageUp}');

            await expect.element(page.getByRole('slider')).toHaveValue('9');
            expect(onChange).toHaveBeenLastCalledWith({ target: { name: 'amount', value: 9 } });
            expect(onChangeCommitted).toHaveBeenLastCalledWith(9);
        });
    });

    describe('text drafts', () => {
        it.each([
            ['floor', 0, false],
            ['floor', 1, false],
            ['ceil', 0, false],
            ['ceil', 1, false],
            ['floor', 0, true],
            ['floor', 1, true],
            ['ceil', 0, true],
            ['ceil', 1, true],
        ] as const)(
            'preserves each character with %s in field %s, controlled=%s',
            async (roundingMode, index, controlled) => {
                const onChangeTextField = vi.fn();
                const Example = () => {
                    const [values, setValues] = useState([0, 80]);
                    return controlled ? (
                        <Slider
                            min={0}
                            max={100}
                            step={10}
                            value={values}
                            roundingMode={roundingMode}
                            onChange={setValues}
                            onChangeTextField={onChangeTextField}
                        />
                    ) : (
                        <Slider
                            type="double"
                            min={0}
                            max={100}
                            step={10}
                            defaultValue={[0, 80]}
                            roundingMode={roundingMode}
                            onChangeTextField={onChangeTextField}
                        />
                    );
                };
                await render(
                    <>
                        <Example />
                        <button type="button">Outside</button>
                    </>,
                );
                const input = page.getByRole('textbox').nth(index);
                await input.click();
                await userEvent.keyboard('{Control>}a{/Control}2');

                await expect.element(input).toHaveValue('2');
                await expect
                    .element(page.getByRole('slider').nth(index))
                    .toHaveValue(roundingMode === 'floor' ? '0' : '10');

                await userEvent.keyboard('0');

                const expected = index === 0 ? [20, 80] : [0, 20];
                await expect.element(input).toHaveValue('20');
                await expect.element(page.getByRole('slider').nth(index)).toHaveValue('20');
                expect(onChangeTextField).toHaveBeenLastCalledWith(expected, expect.anything());

                await page.getByRole('button', { name: 'Outside' }).click();

                await expect.element(input).toHaveValue('20');
            },
        );

        it.each(['blur', 'Enter'] as const)('preserves a decimal draft until %s', async (finish) => {
            const onChangeTextField = vi.fn();
            await render(
                <>
                    <Slider
                        type="double"
                        min={0}
                        max={100}
                        step={0.1}
                        defaultValue={[0, 80]}
                        roundingMode="floor"
                        onChangeTextField={onChangeTextField}
                    />
                    <button type="button">Outside</button>
                </>,
            );
            const input = page.getByRole('textbox').nth(0);
            await input.click();
            await userEvent.keyboard('{Control>}a{/Control}2.34');

            await expect.element(input).toHaveValue('2.34');
            await expect.element(page.getByRole('slider').nth(0)).toHaveValue('2.3');
            expect(onChangeTextField).toHaveBeenLastCalledWith([2.3, 80], expect.anything());

            if (finish === 'Enter') await userEvent.keyboard('{Enter}');
            else await page.getByRole('button', { name: 'Outside' }).click();

            await expect.element(input).toHaveValue('2.3');
        });

        it('preserves a minus sign and restores the last value if an invalid draft is blurred', async () => {
            const onChangeTextField = vi.fn();
            await render(
                <>
                    <Slider
                        type="double"
                        min={-100}
                        max={100}
                        step={10}
                        defaultValue={[-20, 80]}
                        roundingMode="floor"
                        onChangeTextField={onChangeTextField}
                    />
                    <button type="button">Outside</button>
                </>,
            );
            const input = page.getByRole('textbox').nth(0);
            await input.click();
            await userEvent.keyboard('{Control>}a{/Control}-');

            await expect.element(input).toHaveValue('-');
            expect(onChangeTextField).not.toHaveBeenCalled();

            await userEvent.keyboard('20');
            await expect.element(input).toHaveValue('-20');
            await userEvent.keyboard('{Control>}a{/Control}-');
            await page.getByRole('button', { name: 'Outside' }).click();

            await expect.element(input).toHaveValue('-20');
        });
    });
});

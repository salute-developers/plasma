import React, { useState } from 'react';
import { describe, expect, it, vi } from 'vitest';
import { render } from 'vitest-browser-react';
import { page, userEvent } from 'vitest/browser';
import { Slider } from 'src/examples/components/Slider/Slider';

const getSlider = (index = 0) => page.getByRole('slider').nth(index);
const getTextField = (index = 0) => page.getByRole('textbox').nth(index);

const pressSliderKey = async (key: string, index = 0) => {
    getSlider(index).element().focus();
    await userEvent.keyboard(`{${key}}`);
};

const changeRangeValue = (value: number) => {
    const setValue = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, 'value')?.set;
    if (!setValue) {
        throw new Error('Native input value setter is unavailable');
    }

    const input = getSlider().element();
    setValue.call(input, value);
    input.dispatchEvent(new Event('input', { bubbles: true }));
};

describe('Slider', () => {
    describe('value', () => {
        it('keeps the controlled value until the parent accepts a change', async () => {
            const onChange = vi.fn();
            const screen = await render(<Slider min={0} max={100} step={5} value={40} onChange={onChange} />);

            await pressSliderKey('ArrowRight');

            expect(onChange).toHaveBeenCalledExactlyOnceWith(45);
            await expect.element(getSlider()).toHaveValue('40');

            await screen.rerender(<Slider min={0} max={100} step={5} value={45} onChange={onChange} />);

            await expect.element(getSlider()).toHaveValue('45');
            expect(onChange).toHaveBeenCalledTimes(1);
        });

        it('updates the current value and ARIA when a controlled parent handles onChange', async () => {
            const ControlledSlider = () => {
                const [value, setValue] = useState(40);
                return <Slider min={0} max={100} value={value} showCurrentValue onChange={setValue} />;
            };
            await render(<ControlledSlider />);

            await pressSliderKey('ArrowRight');

            await expect.element(getSlider()).toHaveValue('41');
            await expect.element(getSlider()).toHaveAttribute('aria-valuenow', '41');
            await expect.element(page.getByText('41', { exact: true })).toBeVisible();
        });

        it('uses min when defaultValue is omitted and emits form events on change', async () => {
            const onChange = vi.fn();
            await render(<Slider min={10} max={100} name="amount" onChange={onChange} />);

            await expect.element(getSlider()).toHaveValue('10');
            expect(onChange).not.toHaveBeenCalled();

            await pressSliderKey('ArrowRight');

            await expect.element(getSlider()).toHaveValue('11');
            expect(onChange).toHaveBeenCalledExactlyOnceWith({ target: { name: 'amount', value: 11 } });
        });

        it('uses defaultValue only for initialization', async () => {
            const screen = await render(<Slider min={0} max={100} defaultValue={30} name="amount" />);
            await pressSliderKey('ArrowRight');

            await screen.rerender(<Slider min={0} max={100} defaultValue={80} name="amount" />);

            await expect.element(getSlider()).toHaveValue('31');
        });

        it.each([
            [-10, 0],
            [110, 100],
        ])('clamps defaultValue=%s to %s', async (defaultValue, expected) => {
            await render(<Slider min={0} max={100} defaultValue={defaultValue} name="amount" />);

            await expect.element(getSlider()).toHaveValue(String(expected));
            await expect.element(getSlider()).toHaveAttribute('aria-valuenow', String(expected));
        });

        it.each([
            [20, 30, 80, 30],
            [80, 0, 50, 50],
        ])('clamps %s after the range changes to [%s, %s]', async (defaultValue, min, max, expected) => {
            const screen = await render(<Slider min={0} max={100} defaultValue={defaultValue} name="amount" />);

            await screen.rerender(<Slider min={min} max={max} defaultValue={defaultValue} name="amount" />);

            await expect.element(getSlider()).toHaveValue(String(expected));
            await expect.element(getSlider()).toHaveAttribute('aria-valuenow', String(expected));
        });

        it('snaps the current value when step changes', async () => {
            const screen = await render(<Slider min={0} max={100} step={2} defaultValue={14} name="amount" />);

            await screen.rerender(<Slider min={0} max={100} step={5} defaultValue={14} name="amount" />);

            await expect.element(getSlider()).toHaveValue('15');
            await expect.element(getSlider()).toHaveAttribute('aria-valuenow', '15');
        });

        it('uses the new min as the step origin', async () => {
            const screen = await render(<Slider min={0} max={100} step={5} defaultValue={10} name="amount" />);

            await screen.rerender(<Slider min={2} max={100} step={5} defaultValue={10} name="amount" />);

            await expect.element(getSlider()).toHaveValue('12');
        });
    });

    describe('keyboard', () => {
        it.each([
            ['ArrowRight', 16],
            ['ArrowLeft', 12],
            ['ArrowUp', 16],
            ['ArrowDown', 12],
            ['Home', 10],
            ['End', 20],
        ])('handles %s and commits %s', async (key, expected) => {
            const onChange = vi.fn();
            const onChangeCommitted = vi.fn();
            await render(
                <Slider
                    min={10}
                    max={20}
                    step={2}
                    defaultValue={14}
                    name="amount"
                    onChange={onChange}
                    onChangeCommitted={onChangeCommitted}
                />,
            );

            await pressSliderKey(String(key));

            await expect.element(getSlider()).toHaveValue(String(expected));
            expect(onChange).toHaveBeenCalledExactlyOnceWith({ target: { name: 'amount', value: expected } });
            expect(onChangeCommitted).toHaveBeenCalledExactlyOnceWith(expected);
        });

        it('preserves fractional steps relative to a fractional min', async () => {
            const onChange = vi.fn();
            await render(
                <Slider min={0.05} max={1.05} step={0.1} defaultValue={0.25} name="amount" onChange={onChange} />,
            );

            await pressSliderKey('ArrowRight');

            await expect.element(getSlider()).toHaveValue('0.35');
            expect(onChange).toHaveBeenLastCalledWith({ target: { name: 'amount', value: 0.35 } });
        });

        it.each([
            ['PageUp', undefined, 60],
            ['PageDown', undefined, 40],
            ['PageUp', 20, 70],
            ['PageDown', 20, 30],
        ] as const)('handles %s with multipleStepSize=%s', async (key, multipleStepSize, expected) => {
            const onChangeCommitted = vi.fn();
            await render(
                <Slider
                    min={10}
                    max={110}
                    step={5}
                    defaultValue={50}
                    name="amount"
                    multipleStepSize={multipleStepSize}
                    onChangeCommitted={onChangeCommitted}
                />,
            );

            await pressSliderKey(key);

            await expect.element(getSlider()).toHaveValue(String(expected));
            expect(onChangeCommitted).toHaveBeenLastCalledWith(expected);
        });

        it.each([
            ['PageUp', 95, 100],
            ['PageDown', 5, 0],
        ] as const)('keeps %s within the range', async (key, defaultValue, expected) => {
            await render(<Slider min={0} max={100} defaultValue={defaultValue} name="amount" />);

            await pressSliderKey(key);

            await expect.element(getSlider()).toHaveValue(String(expected));
        });

        it('commits an arrow-key change only after the key is released', async () => {
            const onChange = vi.fn();
            const onChangeCommitted = vi.fn();
            await render(
                <Slider
                    min={0}
                    max={100}
                    defaultValue={40}
                    name="amount"
                    onChange={onChange}
                    onChangeCommitted={onChangeCommitted}
                />,
            );
            getSlider().element().focus();

            await userEvent.keyboard('{ArrowRight>}');

            expect(onChange).toHaveBeenCalledExactlyOnceWith({ target: { name: 'amount', value: 41 } });
            expect(onChangeCommitted).not.toHaveBeenCalled();

            await userEvent.keyboard('{/ArrowRight}');

            expect(onChangeCommitted).toHaveBeenCalledExactlyOnceWith(41);
        });
    });

    describe('range events', () => {
        it('emits a number on native range input in controlled mode', async () => {
            const onChange = vi.fn();
            await render(<Slider min={0} max={100} value={50} onChange={onChange} />);

            changeRangeValue(75);

            expect(onChange).toHaveBeenCalledExactlyOnceWith(75);
        });

        it.each(['mouseup', 'touchend'] as const)('commits the latest value on %s', async (eventType) => {
            const onChangeCommitted = vi.fn();
            await render(
                <Slider min={0} max={100} defaultValue={50} name="amount" onChangeCommitted={onChangeCommitted} />,
            );

            changeRangeValue(75);
            await expect.element(getSlider()).toHaveValue('75');
            expect(onChangeCommitted).not.toHaveBeenCalled();

            getSlider()
                .element()
                .dispatchEvent(new Event(eventType, { bubbles: true }));

            expect(onChangeCommitted).toHaveBeenCalledExactlyOnceWith(75);
        });
    });

    describe('scaleTicks', () => {
        it.each(['bullet', 'separator'] as const)(
            'selects a numeric %s tick and emits both callbacks',
            async (tickType) => {
                const onChange = vi.fn();
                const onChangeCommitted = vi.fn();
                await render(
                    <Slider
                        min={0}
                        max={100}
                        defaultValue={20}
                        name="amount"
                        scaleTicks={[0, 50, 100]}
                        tickType={tickType}
                        onChange={onChange}
                        onChangeCommitted={onChangeCommitted}
                    />,
                );

                await page.getByText('50', { exact: true }).click();

                await expect.element(getSlider()).toHaveValue('50');
                expect(onChange).toHaveBeenCalledExactlyOnceWith({ target: { name: 'amount', value: 50 } });
                expect(onChangeCommitted).toHaveBeenCalledExactlyOnceWith(50);
            },
        );

        it('uses custom tick labels and falls back to the numeric value when a label is omitted', async () => {
            await render(
                <Slider
                    min={0}
                    max={100}
                    defaultValue={20}
                    name="amount"
                    scaleTicks={[{ value: 25 }, { value: 75, label: 'High' }]}
                />,
            );

            await expect.element(page.getByText('25', { exact: true })).toBeVisible();
            await page.getByText('High', { exact: true }).click();

            await expect.element(getSlider()).toHaveValue('75');
        });

        it.each([
            [-10, 0],
            [110, 100],
        ])('clamps an out-of-range tick %s to %s', async (tickValue, expected) => {
            const onChangeCommitted = vi.fn();
            await render(
                <div style={{ width: 400, marginLeft: 100 }}>
                    <Slider
                        min={0}
                        max={100}
                        defaultValue={50}
                        name="amount"
                        scaleTicks={[{ value: tickValue, label: 'Choose' }]}
                        onChangeCommitted={onChangeCommitted}
                    />
                </div>,
            );

            await page.getByText('Choose', { exact: true }).click();

            await expect.element(getSlider()).toHaveValue(String(expected));
            expect(onChangeCommitted).toHaveBeenCalledExactlyOnceWith(expected);
        });

        it('ignores tick selection when disabled', async () => {
            const onChange = vi.fn();
            const onChangeCommitted = vi.fn();
            await render(
                <Slider
                    min={0}
                    max={100}
                    value={20}
                    scaleTicks={[0, 50, 100]}
                    disabled
                    onChange={onChange}
                    onChangeCommitted={onChangeCommitted}
                />,
            );

            await page.getByText('50', { exact: true }).click();

            await expect.element(getSlider()).toBeDisabled();
            await expect.element(getSlider()).toHaveValue('20');
            expect(onChange).not.toHaveBeenCalled();
            expect(onChangeCommitted).not.toHaveBeenCalled();
        });

        it('suppresses the ordinary scale and current-value label when ticks are provided', async () => {
            await render(<Slider min={0} max={100} value={42} scaleTicks={[20, 80]} showScale showCurrentValue />);

            await expect.element(page.getByText('20', { exact: true })).toBeVisible();
            await expect.element(page.getByText('80', { exact: true })).toBeVisible();
            await expect.element(page.getByText('0', { exact: true })).not.toBeInTheDocument();
            await expect.element(page.getByText('100', { exact: true })).not.toBeInTheDocument();
            await expect.element(page.getByText('42', { exact: true })).not.toBeInTheDocument();
        });
    });

    describe('accessibility and visibility', () => {
        it.each(['horizontal', 'vertical'] as const)(
            'exposes its accessible name, range and %s orientation',
            async (orientation) => {
                await render(<Slider min={10} max={90} value={40} ariaLabel="Volume" orientation={orientation} />);

                const slider = page.getByRole('slider', { name: 'Volume' });
                await expect.element(slider).toHaveAttribute('aria-valuemin', '10');
                await expect.element(slider).toHaveAttribute('aria-valuemax', '90');
                await expect.element(slider).toHaveAttribute('aria-valuenow', '40');
                await expect.element(slider).toHaveAttribute('aria-orientation', orientation);
            },
        );

        it('shows the current value on hover and hides it after the pointer leaves', async () => {
            await render(
                <>
                    <Slider min={0} max={100} value={42} showCurrentValue currentValueVisibility="hover" />
                    <button type="button">Outside</button>
                </>,
            );
            await page.getByRole('button', { name: 'Outside' }).hover();
            await expect.element(page.getByText('42', { exact: true })).not.toBeInTheDocument();

            await getSlider().hover();

            await expect.element(page.getByText('42', { exact: true })).toBeVisible();

            await page.getByRole('button', { name: 'Outside' }).hover();

            await expect.element(page.getByText('42', { exact: true })).not.toBeInTheDocument();
        });

        it.each(['single', 'double'] as const)('forwards ref and HTML attributes in %s mode', async (type) => {
            const ref = React.createRef<HTMLDivElement>();
            const slider =
                type === 'single' ? (
                    <Slider
                        ref={ref}
                        min={0}
                        max={100}
                        value={40}
                        className="consumer-class"
                        id="slider-container"
                        data-testid="container"
                    />
                ) : (
                    <Slider
                        ref={ref}
                        min={0}
                        max={100}
                        value={[20, 80]}
                        className="consumer-class"
                        id="slider-container"
                        data-testid="container"
                    />
                );
            await render(slider);

            expect(ref.current).toBeInstanceOf(HTMLDivElement);
            await expect.element(ref.current).toHaveClass('consumer-class');
            await expect.element(page.getByTestId('container')).toHaveAttribute('id', 'slider-container');
            expect(ref.current?.contains(getSlider().element())).toBe(true);
        });
    });
});

describe('DoubleSlider', () => {
    describe('value and handles', () => {
        it('uses the range boundaries when defaultValue is omitted', async () => {
            await render(<Slider type="double" min={10} max={90} />);

            await expect.element(getSlider(0)).toHaveValue('10');
            await expect.element(getSlider(1)).toHaveValue('90');
            await expect.element(getTextField(0)).toHaveValue('10');
            await expect.element(getTextField(1)).toHaveValue('90');
        });

        it('infers double mode from an array value and waits for parent updates', async () => {
            const onChange = vi.fn();
            const screen = await render(<Slider min={0} max={100} step={5} value={[20, 80]} onChange={onChange} />);

            await pressSliderKey('ArrowRight', 0);

            expect(onChange).toHaveBeenCalledExactlyOnceWith([25, 80]);
            await expect.element(getSlider(0)).toHaveValue('20');

            await screen.rerender(<Slider min={0} max={100} step={5} value={[25, 75]} onChange={onChange} />);

            await expect.element(getSlider(0)).toHaveValue('25');
            await expect.element(getSlider(1)).toHaveValue('75');
            await expect.element(getTextField(0)).toHaveValue('25');
            await expect.element(getTextField(1)).toHaveValue('75');
            expect(onChange).toHaveBeenCalledTimes(1);
        });

        it('clamps controlled values to the range', async () => {
            await render(<Slider min={10} max={90} value={[-10, 110]} />);

            await expect.element(getSlider(0)).toHaveValue('10');
            await expect.element(getSlider(1)).toHaveValue('90');
            await expect.element(getTextField(0)).toHaveValue('10');
            await expect.element(getTextField(1)).toHaveValue('90');
        });

        it('keeps uncontrolled values when defaultValue changes', async () => {
            const screen = await render(<Slider type="double" min={0} max={100} defaultValue={[20, 80]} />);
            await pressSliderKey('ArrowRight', 0);

            await screen.rerender(<Slider type="double" min={0} max={100} defaultValue={[30, 70]} />);

            await expect.element(getSlider(0)).toHaveValue('21');
            await expect.element(getSlider(1)).toHaveValue('80');
        });

        it.each([
            [0, 'ArrowRight', [25, 80]],
            [1, 'ArrowLeft', [20, 75]],
        ] as const)('changes only handle %s and synchronizes its text field', async (index, key, expected) => {
            const onChange = vi.fn();
            const onChangeCommitted = vi.fn();
            await render(
                <Slider
                    type="double"
                    min={0}
                    max={100}
                    step={5}
                    defaultValue={[20, 80]}
                    name="range"
                    onChange={onChange}
                    onChangeCommitted={onChangeCommitted}
                />,
            );

            await pressSliderKey(key, index);

            await expect.element(getSlider(0)).toHaveValue(String(expected[0]));
            await expect.element(getSlider(1)).toHaveValue(String(expected[1]));
            await expect.element(getTextField(index)).toHaveValue(String(expected[index]));
            expect(onChange).toHaveBeenCalledExactlyOnceWith({
                target: { name: 'range', value: expected.join(' - ') },
            });
            expect(onChangeCommitted).toHaveBeenCalledExactlyOnceWith(expected);
        });

        it('emits an array in uncontrolled mode without a name', async () => {
            const onChange = vi.fn();
            await render(<Slider type="double" min={0} max={100} defaultValue={[20, 80]} onChange={onChange} />);

            await pressSliderKey('ArrowLeft', 1);

            expect(onChange).toHaveBeenCalledExactlyOnceWith([20, 79]);
        });

        it.each([
            [0, 'End', [80, 80]],
            [1, 'Home', [20, 20]],
        ] as const)('prevents handle %s from crossing the other handle', async (index, key, expected) => {
            const onChangeCommitted = vi.fn();
            await render(
                <Slider
                    type="double"
                    min={0}
                    max={100}
                    defaultValue={[20, 80]}
                    onChangeCommitted={onChangeCommitted}
                />,
            );

            await pressSliderKey(key, index);

            await expect.element(getSlider(0)).toHaveValue(String(expected[0]));
            await expect.element(getSlider(1)).toHaveValue(String(expected[1]));
            expect(onChangeCommitted).toHaveBeenCalledExactlyOnceWith(expected);
        });

        it('exposes separate accessible names and updates the allowed range of the other handle', async () => {
            await render(
                <Slider
                    type="double"
                    min={0}
                    max={100}
                    step={5}
                    defaultValue={[20, 80]}
                    ariaLabel={['Minimum', 'Maximum']}
                />,
            );

            const minimum = page.getByRole('slider', { name: 'Minimum' });
            const maximum = page.getByRole('slider', { name: 'Maximum' });
            await expect.element(minimum).toHaveAttribute('aria-valuemin', '0');
            await expect.element(minimum).toHaveAttribute('aria-valuemax', '80');
            await expect.element(maximum).toHaveAttribute('aria-valuemin', '20');
            await expect.element(maximum).toHaveAttribute('aria-valuemax', '100');

            await pressSliderKey('ArrowRight', 0);

            await expect.element(minimum).toHaveAttribute('aria-valuenow', '25');
            await expect.element(maximum).toHaveAttribute('aria-valuemin', '25');
        });

        it('disables both handles and text fields', async () => {
            await render(<Slider type="double" min={0} max={100} defaultValue={[20, 80]} disabled />);

            await expect.element(getSlider(0)).toBeDisabled();
            await expect.element(getSlider(1)).toBeDisabled();
            await expect.element(getTextField(0)).toBeDisabled();
            await expect.element(getTextField(1)).toBeDisabled();
        });
    });

    describe('text fields', () => {
        it.each([
            [0, '90', [90, 80], [80, 90]],
            [1, '10', [20, 10], [10, 20]],
            [0, '-5', [-5, 80], [0, 80]],
            [1, '150', [20, 150], [20, 100]],
        ] as const)('normalizes input %s on blur after entering %s', async (index, text, changed, normalized) => {
            const onChange = vi.fn();
            const onChangeTextField = vi.fn();
            const onBlurTextField = vi.fn();
            const onChangeCommitted = vi.fn();
            await render(
                <>
                    <Slider
                        type="double"
                        min={0}
                        max={100}
                        defaultValue={[20, 80]}
                        name="range"
                        onChange={onChange}
                        onChangeTextField={onChangeTextField}
                        onBlurTextField={onBlurTextField}
                        onChangeCommitted={onChangeCommitted}
                    />
                    <button type="button">Outside</button>
                </>,
            );

            await getTextField(index).fill(text);

            expect(onChangeTextField).toHaveBeenCalledExactlyOnceWith(
                changed,
                expect.objectContaining({ target: getTextField(index).element() }),
            );
            expect(onChange).toHaveBeenLastCalledWith({ target: { name: 'range', value: changed.join(' - ') } });
            expect(onBlurTextField).not.toHaveBeenCalled();

            await page.getByRole('button', { name: 'Outside' }).click();

            await expect.element(getTextField(0)).toHaveValue(String(normalized[0]));
            await expect.element(getTextField(1)).toHaveValue(String(normalized[1]));
            await expect.element(getSlider(0)).toHaveValue(String(normalized[0]));
            await expect.element(getSlider(1)).toHaveValue(String(normalized[1]));
            expect(onBlurTextField).toHaveBeenCalledExactlyOnceWith(normalized, expect.anything());
            expect(onChange).toHaveBeenLastCalledWith({ target: { name: 'range', value: normalized.join(' - ') } });
            expect(onChangeCommitted).not.toHaveBeenCalled();
        });

        it.each([0, 1])('ignores non-numeric input in field %s', async (index) => {
            const onChange = vi.fn();
            const onChangeTextField = vi.fn();
            await render(
                <Slider
                    type="double"
                    min={0}
                    max={100}
                    defaultValue={[20, 80]}
                    onChange={onChange}
                    onChangeTextField={onChangeTextField}
                />,
            );

            await getTextField(index).fill('invalid');

            await expect.element(getTextField(index)).toHaveValue(index === 0 ? '20' : '80');
            expect(onChange).not.toHaveBeenCalled();
            expect(onChangeTextField).not.toHaveBeenCalled();
        });

        it.each([0, 1])('waits for parent updates when controlled field %s changes', async (index) => {
            const onChange = vi.fn();
            const onChangeTextField = vi.fn();
            const onBlurTextField = vi.fn();
            await render(
                <>
                    <Slider
                        min={0}
                        max={100}
                        value={[20, 80]}
                        onChange={onChange}
                        onChangeTextField={onChangeTextField}
                        onBlurTextField={onBlurTextField}
                    />
                    <button type="button">Outside</button>
                </>,
            );

            await getTextField(index).fill('50');

            const changed = index === 0 ? [50, 80] : [20, 50];
            expect(onChange).toHaveBeenCalledExactlyOnceWith(changed);
            expect(onChangeTextField).toHaveBeenCalledExactlyOnceWith(changed, expect.anything());
            await expect.element(getTextField(index)).toHaveValue(index === 0 ? '20' : '80');
            onChange.mockClear();

            await page.getByRole('button', { name: 'Outside' }).click();

            expect(onBlurTextField).toHaveBeenCalledExactlyOnceWith([20, 80], expect.anything());
            expect(onChange).not.toHaveBeenCalled();
        });

        it('updates controlled text fields when the parent accepts input', async () => {
            const ControlledSlider = () => {
                const [value, setValue] = useState([20, 80]);
                return <Slider min={0} max={100} value={value} onChange={setValue} />;
            };
            await render(<ControlledSlider />);

            await getTextField(1).fill('65');

            await expect.element(getTextField(1)).toHaveValue('65');
            await expect.element(getSlider(1)).toHaveValue('65');
            await expect.element(getSlider(0)).toHaveValue('20');
        });

        it('sorts the form values on Enter without requiring blur', async () => {
            const onChange = vi.fn();
            const onKeyDownTextField = vi.fn();
            const onBlurTextField = vi.fn();
            await render(
                <Slider
                    type="double"
                    min={0}
                    max={100}
                    defaultValue={[20, 80]}
                    name="range"
                    onChange={onChange}
                    onKeyDownTextField={onKeyDownTextField}
                    onBlurTextField={onBlurTextField}
                />,
            );
            await getTextField(0).fill('90');
            onChange.mockClear();

            await userEvent.keyboard('{Enter}');

            expect(onKeyDownTextField).toHaveBeenCalledExactlyOnceWith(
                [90, 80],
                expect.objectContaining({ key: 'Enter', target: getTextField(0).element() }),
            );
            expect(onChange).toHaveBeenCalledExactlyOnceWith({ target: { name: 'range', value: '80 - 90' } });
            expect(onBlurTextField).not.toHaveBeenCalled();
            await expect.element(getTextField(0)).toHaveFocus();
        });

        it('does not emit a form change on Enter in controlled mode', async () => {
            const onChange = vi.fn();
            const onKeyDownTextField = vi.fn();
            await render(
                <Slider
                    min={0}
                    max={100}
                    value={[20, 80]}
                    onChange={onChange}
                    onKeyDownTextField={onKeyDownTextField}
                />,
            );

            await getTextField(1).click();
            await userEvent.keyboard('{Enter}');

            expect(onKeyDownTextField).toHaveBeenCalledExactlyOnceWith(
                [20, 80],
                expect.objectContaining({ key: 'Enter' }),
            );
            expect(onChange).not.toHaveBeenCalled();
        });
    });
});

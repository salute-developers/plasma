import React, { useState } from 'react';
import { createGlobalStyle } from 'styled-components';
import { mount, getComponent, getDescribeFN, hasComponent, getBaseVisualTests, PadMe } from '@salutejs/plasma-cy-utils';
// @ts-expect-error override path is resolved by webpack alias at build time
import { IconPlus, IconMinus, IconSber } from 'override/_Icon';

import type { NumberInputProps } from './NumberInput.types';

const componentExists = hasComponent('NumberInput');
const describeFn = getDescribeFN('NumberInput');

const NoAnimationStyle = createGlobalStyle`
    /* stylelint-disable-next-line selector-max-id, selector-max-universal */
    * {
        animation: none !important;
    }
`;

const numberInputProps = {
    value: 5,
};

getBaseVisualTests({
    component: 'NumberInput',
    componentProps: numberInputProps,
    configPropsForMatrix: ['view', 'size', 'segmentation', 'shape'],
});

describeFn('NumberInput', () => {
    const NumberInput = componentExists ? getComponent<NumberInputProps>('NumberInput') : () => null;
    const IconButton = componentExists ? getComponent('IconButton') : () => null;

    const InteractiveNumberInput = ({ value: outerValue, ...rest }: NumberInputProps) => {
        const [value, setValue] = useState<number | string | undefined>(outerValue as number | string | undefined);

        const handleChange = (_: any, newValue: number | string | undefined) => {
            setValue(newValue);
        };

        return <NumberInput value={value} onChange={handleChange} {...rest} />;
    };

    it('min,max', () => {
        mount(
            <>
                <NumberInput value={5} min={5} />
                <PadMe />
                <NumberInput value={10} max={10} />
            </>,
        );
        cy.matchImageSnapshot();
    });

    it('inputBackgroundType', () => {
        mount(
            <>
                <NumberInput value={5} inputBackgroundType="fill" />
                <PadMe />
                <NumberInput value={5} inputBackgroundType="clear" />
            </>,
        );
        cy.matchImageSnapshot();
    });

    it('customIncrementButton,customDecrementButton', () => {
        mount(
            <NumberInput
                value={5}
                customDecrementButton={
                    <IconButton view="negative">
                        <IconMinus color="inherit" />
                    </IconButton>
                }
                customIncrementButton={
                    <IconButton view="positive">
                        <IconPlus color="inherit" />
                    </IconButton>
                }
            />,
        );
        cy.matchImageSnapshot();
    });

    it('incrementIcon,decrementIcon', () => {
        mount(
            <NumberInput
                value={5}
                incrementIcon={<IconSber size="s" color="inherit" />}
                decrementIcon={<IconSber size="s" color="inherit" />}
            />,
        );
        cy.matchImageSnapshot();
    });

    it('disabled', () => {
        mount(<NumberInput value={5} disabled />);
        cy.matchImageSnapshot();
    });

    it('isLoading', () => {
        mount(
            <>
                <NoAnimationStyle />
                <NumberInput value={5} isLoading />
            </>,
        );
        cy.matchImageSnapshot();
    });

    it('step', () => {
        mount(
            <>
                <NoAnimationStyle />
                <InteractiveNumberInput value={5} step={2} />
            </>,
        );

        cy.get('input').should('have.value', '5');
        cy.get('button').first().click();
        cy.get('input').should('have.value', '3');
        cy.get('button').last().click();
        cy.get('button').last().click();
        cy.get('input').should('have.value', '7');

        cy.matchImageSnapshot();
    });

    it('defaultValue initializes the uncontrolled value', () => {
        mount(<NumberInput defaultValue={5} />);

        cy.get('input').should('have.value', '5');
        cy.get('button').last().click();
        cy.get('input').should('have.value', '6');
    });

    it('isAllowed prevents increment values', () => {
        const onChange = cy.stub().as('incrementOnChange');
        const onIncrement = cy.stub().as('onIncrement');

        mount(
            <NumberInput
                min={0}
                displayWithoutValue="increment"
                isAllowed={({ floatValue }) => floatValue !== 1}
                onChange={onChange}
                onIncrement={onIncrement}
            />,
        );

        cy.get('input').should('not.exist');
        cy.get('button').click();
        cy.get('input').should('not.exist');
        cy.get('@incrementOnChange').should('not.have.been.called');
        cy.get('@onIncrement').should('not.have.been.called');
    });

    it('isAllowed prevents decrement values', () => {
        const onChange = cy.stub().as('decrementOnChange');
        const onDecrement = cy.stub().as('onDecrement');

        mount(
            <NumberInput
                max={10}
                displayWithoutValue="decrement"
                isAllowed={({ floatValue }) => floatValue !== 9}
                onChange={onChange}
                onDecrement={onDecrement}
            />,
        );

        cy.get('input').should('not.exist');
        cy.get('button').click();
        cy.get('input').should('not.exist');
        cy.get('@decrementOnChange').should('not.have.been.called');
        cy.get('@onDecrement').should('not.have.been.called');
    });

    it('invalidValue, more than max', () => {
        mount(<InteractiveNumberInput value={5} max={10} min={0} isManualInput />);

        cy.get('input').type('15{enter}');
        cy.get('input').should('have.value', '10');

        cy.matchImageSnapshot({
            failureThreshold: 0.01,
            failureThresholdType: 'percent',
        });
    });

    it('invalidValue, less than min', () => {
        mount(<InteractiveNumberInput value={5} max={10} min={0} isManualInput />);

        cy.get('input').type('-15{enter}');
        cy.get('input').should('have.value', '0');

        cy.matchImageSnapshot({
            failureThreshold: 0.01,
            failureThresholdType: 'percent',
        });
    });

    it('empty input', () => {
        mount(<InteractiveNumberInput value={5} max={10} min={0} isManualInput />);

        cy.get('input').type('{backspace}{enter}');

        cy.matchImageSnapshot({
            failureThreshold: 0.01,
            failureThresholdType: 'percent',
        });
    });

    it('empty input, decrement', () => {
        mount(<InteractiveNumberInput max={10} min={0} />);

        cy.get('button').first().click();
        cy.get('input').should('have.value', '9');

        cy.matchImageSnapshot({
            failureThreshold: 0.01,
            failureThresholdType: 'percent',
        });
    });

    it('empty input, increment', () => {
        mount(<InteractiveNumberInput max={10} min={0} />);

        cy.get('button').last().click();
        cy.get('input').should('have.value', '1');

        cy.matchImageSnapshot({
            failureThreshold: 0.01,
            failureThresholdType: 'percent',
        });
    });

    it('dot at the end gets removed', () => {
        mount(<InteractiveNumberInput value={5} max={10} min={0} isManualInput />);

        cy.get('input').type('5.').blur();
        cy.get('input').should('have.value', '5');
    });

    it('dot at the end gets removed; value more than max', () => {
        mount(<InteractiveNumberInput value={5} max={10} min={0} isManualInput />);

        cy.get('input').type('200.').blur();
        cy.get('input').should('have.value', '10');
    });

    it('dot at the end gets removed; value less than min', () => {
        mount(<InteractiveNumberInput value={5} max={10} min={0} isManualInput />);

        cy.get('input').type('-200.').blur();
        cy.get('input').should('have.value', '0');
    });

    it('precision', () => {
        mount(<InteractiveNumberInput value={5} max={10} min={-10} precision={2} step={0.111} isManualInput />);

        cy.get('input').type('0').blur();
        cy.get('input').should('have.value', '0');

        cy.get('input').type('1.005').should('have.value', '1.005').blur();
        cy.get('input').should('have.value', '1.01');

        cy.get('input').type('-1.005').blur();
        cy.get('input').should('have.value', '-1.01');

        cy.get('input').type('5.115').blur();
        cy.get('input').should('have.value', '5.12');

        cy.get('input').type('5.11111').blur();
        cy.get('input').should('have.value', '5.11');

        cy.get('button').first().click();
        cy.get('input').should('have.value', '5');

        cy.get('button').last().click();
        cy.get('button').last().click();
        cy.get('input').should('have.value', '5.22');
    });

    it('precision preserves leading zeros when they are allowed', () => {
        mount(<InteractiveNumberInput value="" precision={2} allowLeadingZeros isManualInput />);

        cy.get('input').type('1.234').blur();
        cy.get('input').should('have.value', '1.23');

        cy.get('input').type('001.235').blur();
        cy.get('input').should('have.value', '001.24');
    });

    it('displayWithoutValue', () => {
        mount(
            <>
                <NumberInput min={0} max={10} displayWithoutValue="input" />
                <PadMe />
                <NumberInput min={0} max={10} displayWithoutValue="increment" />
                <PadMe />
                <NumberInput min={0} max={10} displayWithoutValue="decrement" />
            </>,
        );
        cy.matchImageSnapshot();
    });

    it('displayWithoutValue=increment, click shows full component', () => {
        mount(<InteractiveNumberInput min={0} max={10} displayWithoutValue="increment" />);

        cy.get('button').last().click();
        cy.get('input').should('have.value', '1');

        cy.matchImageSnapshot();
    });

    it('displayWithoutValue=decrement, click shows full component', () => {
        mount(<InteractiveNumberInput min={0} max={10} displayWithoutValue="decrement" />);

        cy.get('button').first().click();
        cy.get('input').should('have.value', '9');

        cy.matchImageSnapshot();
    });

    it('limitBehavior=disabled', () => {
        mount(
            <>
                <NumberInput value={0} min={0} max={10} limitBehavior="disabled" />
                <PadMe />
                <NumberInput value={10} min={0} max={10} limitBehavior="disabled" />
            </>,
        );
        cy.matchImageSnapshot();
    });

    it('limitBehavior=hidden', () => {
        mount(
            <>
                <NumberInput value={0} min={0} max={10} limitBehavior="hidden" />
                <PadMe />
                <NumberInput value={10} min={0} max={10} limitBehavior="hidden" />
            </>,
        );
        cy.matchImageSnapshot();
    });

    it('limitBehavior=hidden, decrement appears after increment from min', () => {
        mount(<InteractiveNumberInput value={0} min={0} max={10} limitBehavior="hidden" />);

        cy.get('button').last().click();
        cy.get('input').first().should('have.value', '1');

        cy.matchImageSnapshot();
    });

    it('limitBehavior=hidden, increment appears after decrement from max', () => {
        mount(<InteractiveNumberInput value={10} min={0} max={10} limitBehavior="hidden" />);

        cy.get('button').first().click();
        cy.get('input').should('have.value', '9');

        cy.matchImageSnapshot();
    });

    it('input is keyboard-focusable when isManualInput is false', () => {
        mount(<InteractiveNumberInput value={5} min={0} max={10} />);
        cy.get('input').should('have.attr', 'tabindex', '0');
    });

    it('buttons are not keyboard-focusable', () => {
        mount(<InteractiveNumberInput value={5} min={0} max={10} />);
        cy.get('button').first().should('have.attr', 'tabindex', '-1');
        cy.get('button').last().should('have.attr', 'tabindex', '-1');
    });

    it('arrow up increments value', () => {
        mount(<InteractiveNumberInput value={5} min={0} max={10} />);
        cy.get('input').focus().trigger('keydown', { keyCode: 38, which: 38, key: 'ArrowUp', force: true });
        cy.get('input').should('have.value', '6');
    });

    it('arrow down decrements value', () => {
        mount(<InteractiveNumberInput value={5} min={0} max={10} />);
        cy.get('input').focus().trigger('keydown', { keyCode: 40, which: 40, key: 'ArrowDown', force: true });
        cy.get('input').should('have.value', '4');
    });

    it('arrow up/down respect min/max', () => {
        mount(<InteractiveNumberInput value={0} min={0} max={10} />);
        cy.get('input').focus().trigger('keydown', { keyCode: 40, which: 40, key: 'ArrowDown', force: true });
        cy.get('input').should('have.value', '0');

        mount(<InteractiveNumberInput value={10} min={0} max={10} />);
        cy.get('input').focus().trigger('keydown', { keyCode: 38, which: 38, key: 'ArrowUp', force: true });
        cy.get('input').should('have.value', '10');
    });

    it('displayWithoutValue=increment, click focuses input', () => {
        mount(<InteractiveNumberInput min={0} max={10} displayWithoutValue="increment" />);
        cy.get('button').click();
        cy.focused().should('match', 'input');
    });

    it('displayWithoutValue=decrement, click focuses input', () => {
        mount(<InteractiveNumberInput min={0} max={10} displayWithoutValue="decrement" />);
        cy.get('button').click();
        cy.focused().should('match', 'input');
    });

    it('displayWithoutValue=increment button is keyboard-focusable', () => {
        mount(<InteractiveNumberInput min={0} max={10} displayWithoutValue="increment" />);
        cy.get('button').last().should('have.attr', 'tabindex', '0');
    });

    it('displayWithoutValue=decrement button is keyboard-focusable', () => {
        mount(<InteractiveNumberInput min={0} max={10} displayWithoutValue="decrement" />);
        cy.get('button').first().should('have.attr', 'tabindex', '0');
    });

    it('formatting parameters', () => {
        mount(
            <>
                <NumberInput
                    value={123456.5}
                    thousandSeparator=" "
                    decimalSeparator=","
                    decimalScale={2}
                    fixedDecimalScale
                />
                <PadMe />
                <NumberInput value={123456789} thousandSeparator=" " thousandsGroupStyle="lakh" />
                <PadMe />
                <NumberInput value="00123" allowLeadingZeros />
            </>,
        );

        cy.get('input').eq(0).should('have.value', '123 456,50');
        cy.get('input').eq(1).should('have.value', '12 34 56 789');
        cy.get('input').eq(2).should('have.value', '00123');
    });

    it('manual input is formatted and onChange receives a raw value', () => {
        const onChange = cy.stub().as('onChange');

        const Component = () => {
            const [value, setValue] = useState<number | string | undefined>('');

            const handleChange = (event: any, newValue: number | string | undefined) => {
                setValue(newValue);
                onChange(event, newValue);
            };

            return (
                <NumberInput
                    value={value}
                    thousandSeparator=" "
                    decimalSeparator=","
                    decimalScale={2}
                    isManualInput
                    onChange={handleChange}
                />
            );
        };

        mount(<Component />);

        cy.get('input').type('123456,78').should('have.value', '123 456,78');
        cy.get('@onChange').its('lastCall.args.1').should('eq', '123456.78');
    });

    it('allowNegative, allowLeadingZeros and isAllowed', () => {
        mount(<InteractiveNumberInput value="" allowNegative={false} allowLeadingZeros isManualInput />);

        cy.get('input').type('-001').blur().should('have.value', '001');

        mount(
            <InteractiveNumberInput
                value=""
                isManualInput
                isAllowed={({ floatValue }) => floatValue === undefined || floatValue <= 10}
            />,
        );

        cy.get('input').type('101').should('have.value', '10');
    });

    it('prop: onChange', () => {
        const onChange = cy.stub().as('onChange');

        mount(<NumberInput value={5} min={0} max={10} onChange={onChange} />);

        cy.get('button').last().click();

        cy.get('@onChange').should('have.been.calledOnce');
        cy.get('@onChange').its('firstCall.args.1').should('eq', 6);
    });
});

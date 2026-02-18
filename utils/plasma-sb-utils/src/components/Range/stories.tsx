import React, { useState } from 'react';
import type { ChangeEvent } from 'react';
import { action } from '@storybook/addon-actions';
import { IconPlasma, IconArrowRight, IconDisclosureRight } from '@salutejs/plasma-icons';

const onChangeFirstValue = action('onChangeFirstValue');
const onChangeSecondValue = action('onChangeSecondValue');
const onSearchFirstValue = action('onSearchFirstValue');
const onSearchSecondValue = action('onSearchSecondValue');
const onFocusFirstTextfield = action('onFocusFirstTextfield');
const onFocusSecondTextfield = action('onFocusSecondTextfield');
const onBlurFirstTextfield = action('onBlurFirstTextfield');
const onBlurSecondTextfield = action('onBlurSecondTextfield');

const getIconSize = (size?: string) => {
    return size === 'xs' ? 'xs' : 's';
};

export const createDefaultStory = (Range: any) => {
    return ({
        dividerVariant,
        enableContentLeft,
        enableContentRight,
        firstTextfieldTextBefore,
        secondTextfieldTextBefore,
        enableFirstTextfieldContentLeft,
        enableSecondTextfieldContentLeft,
        enableFirstTextfieldContentRight,
        enableSecondTextfieldContentRight,
        size,
        hasRequiredIndicator,
        firstInputView,
        secondInputView,
        appearance,
        ...rest
    }: any) => {
        const [firstValue, setFirstValue] = useState('');
        const [secondValue, setSecondValue] = useState('');

        const iconSize = getIconSize(size);
        const showDividerIcon = dividerVariant === 'icon';
        const showDefaultTextBefore = dividerVariant === 'none';

        const dividerIconProps = {
            dividerIcon: showDividerIcon ? <IconArrowRight color="inherit" size={iconSize} /> : null,
            dividerVariant,
        };

        const inputsViews = {
            firstValueSuccess: firstInputView === 'positive',
            secondValueSuccess: secondInputView === 'positive',
            firstValueError: firstInputView === 'negative',
            secondValueError: secondInputView === 'negative',
        };

        return (
            <Range
                appearance={appearance}
                size={size}
                hasRequiredIndicator={rest.required && hasRequiredIndicator}
                firstValue={firstValue}
                secondValue={secondValue}
                contentLeft={enableContentLeft ? <IconPlasma color="inherit" size={iconSize} /> : undefined}
                contentRight={
                    enableContentRight ? <IconDisclosureRight color="inherit" size={getIconSize(size)} /> : undefined
                }
                firstTextfieldContentLeft={
                    enableFirstTextfieldContentLeft ? <IconPlasma color="inherit" size={iconSize} /> : undefined
                }
                firstTextfieldContentRight={
                    enableFirstTextfieldContentRight ? <IconPlasma color="inherit" size={iconSize} /> : undefined
                }
                secondTextfieldContentLeft={
                    enableSecondTextfieldContentLeft ? <IconPlasma color="inherit" size={iconSize} /> : undefined
                }
                secondTextfieldContentRight={
                    enableSecondTextfieldContentRight ? <IconPlasma color="inherit" size={iconSize} /> : undefined
                }
                firstTextfieldTextBefore={
                    showDefaultTextBefore ? firstTextfieldTextBefore || 'С' : firstTextfieldTextBefore
                }
                secondTextfieldTextBefore={
                    showDefaultTextBefore ? secondTextfieldTextBefore || 'ПО' : secondTextfieldTextBefore
                }
                onChangeFirstValue={(e: ChangeEvent<HTMLInputElement>) => {
                    setFirstValue(e.target.value);
                    onChangeFirstValue(e, e.target.value);
                }}
                onChangeSecondValue={(e: ChangeEvent<HTMLInputElement>) => {
                    setSecondValue(e.target.value);
                    onChangeSecondValue(e, e.target.value);
                }}
                onSearchFirstValue={onSearchFirstValue}
                onSearchSecondValue={onSearchSecondValue}
                onFocusFirstTextfield={onFocusFirstTextfield}
                onFocusSecondTextfield={onFocusSecondTextfield}
                onBlurFirstTextfield={onBlurFirstTextfield}
                onBlurSecondTextfield={onBlurSecondTextfield}
                {...inputsViews}
                {...dividerIconProps}
                {...rest}
            />
        );
    };
};

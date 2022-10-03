import React from 'react';
import { DatePicker as UIDatePicker, DatePickerProps as UIDatePickerProps, Button } from '@salutejs/plasma-ui';

import { useFocusOnMount } from '../../../hooks/useFocusOnMount';
import { withWrapField } from '../hocs/withWrapField';
import { FieldComponentProps } from '../types';
import { isSberBoxLike } from '../../../utils';

type DatePickerProps = FieldComponentProps<
    UIDatePickerProps,
    'onSubmit' | 'onChange' | 'value',
    {
        onSubmit: () => void;
        onChange: (val: Date) => void;
        value?: Date;
    }
>;

export const DatePicker = withWrapField<Date, DatePickerProps>(
    // eslint-disable-next-line prefer-arrow-callback
    function DatePicker(props) {
        const { value, max, min, onChange, onSubmit } = props;

        const mountRef = React.useRef<HTMLButtonElement>(null);
        useFocusOnMount(mountRef, {
            delay: 250,
            prevent: !isSberBoxLike(),
        });

        return (
            <>
                <UIDatePicker value={new Date(value || max)} onChange={onChange} min={min} max={max} />
                <Button size="s" view="secondary" onClick={onSubmit} ref={mountRef}>
                    Сохранить
                </Button>
            </>
        );
    },
    'select',
);

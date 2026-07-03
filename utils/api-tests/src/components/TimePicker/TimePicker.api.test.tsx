import * as React from 'react';
import type { ComponentProps, ReactNode } from 'react';
import { describe, it } from 'node:test';
import { expectTypeOf } from 'expect-type';
// @ts-ignore
import { TimePicker } from '@salutejs/plasma-b2c';

import type { TimePickerMultiplicity } from '../../../../../../../packages/plasma-new-hope/src/components/TimePickerGrid/TimePickerGrid.types';

type Props = ComponentProps<typeof TimePicker>;

describe('Basics', () => {
    it('Common', () => {
        expectTypeOf<Props>().toHaveProperty('value').toEqualTypeOf<string | undefined>();
        expectTypeOf<Props>().toHaveProperty('disabled').toEqualTypeOf<boolean | undefined>();
        expectTypeOf<Props>().toHaveProperty('readonly').toEqualTypeOf<boolean | undefined>();
        expectTypeOf<Props>().toHaveProperty('stretched').toEqualTypeOf<boolean | undefined>();
        expectTypeOf<Props>().toHaveProperty('size').toEqualTypeOf<string | undefined>();
        expectTypeOf<Props>().toHaveProperty('view').toEqualTypeOf<string | undefined>();
        expectTypeOf<Props>().toHaveProperty('label').toEqualTypeOf<string | undefined>();
        expectTypeOf<Props>().toHaveProperty('placeholder').toEqualTypeOf<string | undefined>();
        expectTypeOf<Props>().toHaveProperty('contentLeft').toEqualTypeOf<ReactNode>();
        expectTypeOf<Props>().toHaveProperty('contentRight').toEqualTypeOf<ReactNode>();
        expectTypeOf<Props>().toHaveProperty('columnsQuantity').toEqualTypeOf<2 | 3 | undefined>();
        expectTypeOf<Props>().toHaveProperty('multiplicityMinutes').toEqualTypeOf<TimePickerMultiplicity | undefined>();
        expectTypeOf<Props>().toHaveProperty('multiplicitySeconds').toEqualTypeOf<TimePickerMultiplicity | undefined>();
    });

    it('Variations', () => {
        type View = NonNullable<Props['view']>;
        expectTypeOf<View>().toExtend<string>();
        expectTypeOf<string>().not.toExtend<View>();
    });
});

describe('Examples', () => {
    it('Basic', () => {
        () => {
            void (<TimePicker value="00:00" size="m" />);
            void (<TimePicker value="00:00:00" columnsQuantity={3} />);
        };
    });

    it('Multiplicity minutes and seconds', () => {
        () => {
            void (<TimePicker value="00:00" multiplicityMinutes={5} />);
            void (<TimePicker value="00:00:00" multiplicityMinutes={15} />);
            void (<TimePicker value="00:00:00" multiplicitySeconds={20} />);
            void (
                <TimePicker value="00:00:00" columnsQuantity={3} multiplicityMinutes={15} multiplicitySeconds={20} />
            );
        };

        // Negative cases
        // @ts-expect-error - 7 is not a valid multiplicity value
        expectTypeOf<Props>({ value: '00:00', multiplicityMinutes: 7 });

        // @ts-expect-error - 8 is not a valid multiplicity value
        expectTypeOf<Props>({ value: '00:00', multiplicitySeconds: 8 });
    });
});

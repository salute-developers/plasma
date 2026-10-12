import { dropdownConfig, component, mergeConfig, fixedForwardRef } from '@salutejs/plasma-new-hope/styled-components';
import type {
    DropdownItemOption,
    DropdownProps as NewHopeDropdownProps,
    DropdownTargetInteractionContext,
} from '@salutejs/plasma-new-hope';
import React, { ComponentProps, ForwardedRef, useMemo } from 'react';

import { config } from './Dropdown.config';
import { useLongPress } from './hooks/useLongPress';

const mergedConfig = mergeConfig(dropdownConfig, config);
const DropdownNewHope = component(mergedConfig);

type Props<T extends DropdownItemOption> = Omit<
    NewHopeDropdownProps<T>,
    'size' | 'view' | 'trigger' | 'useTargetInteraction'
> &
    Pick<ComponentProps<typeof DropdownNewHope>, 'size' | 'view'> & {
        /**
         * Способ открытия Dropdown окна - наведение, клик или долгое нажатие.
         * @default click
         */
        trigger?: NewHopeDropdownProps['trigger'] | 'longPress';
        /**
         * Время удержания (мс) для срабатывания trigger="longPress".
         * @default 500
         */
        longPressDelay?: number;
    };

const DropdownComponent = <T extends DropdownItemOption>(
    { trigger = 'click', longPressDelay, ...rest }: Props<T>,
    ref: ForwardedRef<HTMLButtonElement>,
) => {
    const isLongPress = trigger === 'longPress';

    const useTargetInteraction = useMemo(
        () =>
            function useLongPressInteraction({ opened, onToggle }: DropdownTargetInteractionContext) {
                const props = useLongPress({
                    enabled: isLongPress,
                    delay: longPressDelay,
                    opened,
                    onLongPress: (event) => onToggle(true, event),
                    onClickWhenOpened: (event) => onToggle(false, event),
                });

                return { props, replaceClick: isLongPress };
            },
        [isLongPress, longPressDelay],
    );

    return (
        <DropdownNewHope
            ref={ref}
            {...(rest as any)}
            trigger={isLongPress ? 'click' : trigger}
            useTargetInteraction={useTargetInteraction}
        />
    );
};

const Dropdown = fixedForwardRef(DropdownComponent);

export { Dropdown };
export type { Props as DropdownProps };

import { checkboxConfig, component, mergeConfig } from '@salutejs/plasma-new-hope/styled-components';
import React, { ComponentProps, forwardRef } from 'react';

import { config } from './Checkbox.config';

const mergedConfig = mergeConfig(checkboxConfig, config);
const CheckboxComponent = component(mergedConfig);

type CheckboxComponentProps = ComponentProps<typeof CheckboxComponent>;

export type CheckboxProps = Omit<CheckboxComponentProps, 'checkIcon'> & {
    /**
     * Иконка выбранного состояния.
     * Значение `check` включает стандартную галочку, `cross` — предустановленный крестик.
     * Также можно передать произвольную иконку.
     * @default check
     */
    checkIcon?: CheckboxComponentProps['checkIcon'] | 'check' | 'cross';
};

const CrossIcon = () => (
    <div style={{ display: 'inline-flex' }}>
        <svg width="100%" viewBox="0 0 24 24" fill="none" style={{ width: 'var(--plasma-checkbox-trigger-size)' }}>
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M15.5284 7.04302C15.9189 6.65253 16.5519 6.6525 16.9425 7.04302C17.3329 7.43354 17.3329 8.06659 16.9425 8.45708L13.4063 11.9922L16.9425 15.5284C17.3328 15.9189 17.3329 16.552 16.9425 16.9424C16.552 17.3329 15.9189 17.3328 15.5284 16.9424L11.9923 13.4063L8.45711 16.9424C8.06662 17.3329 7.43357 17.3328 7.04305 16.9424C6.65253 16.5519 6.65256 15.9189 7.04305 15.5284L10.5782 11.9922L7.04305 8.45708C6.65252 8.06655 6.65252 7.43354 7.04305 7.04302C7.43357 6.65249 8.06658 6.65249 8.45711 7.04302L11.9923 10.5782L15.5284 7.04302Z"
                fill="var(--plasma-checkbox-icon-color)"
            />
        </svg>
    </div>
);

const getCheckIcon = (checkIcon: CheckboxProps['checkIcon']) => {
    if (checkIcon === 'cross') {
        return <CrossIcon />;
    }

    if (checkIcon === 'check') {
        return undefined;
    }

    return checkIcon;
};

/**
 * Флажок или чекбокс. Позволяет пользователю управлять параметром с двумя состояниями — ☑ включено и ☐ отключено.
 */
export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(({ checkIcon = 'check', ...rest }, ref) => (
    <CheckboxComponent ref={ref} checkIcon={getCheckIcon(checkIcon)} {...rest} />
));

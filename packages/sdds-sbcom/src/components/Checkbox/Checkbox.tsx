import { checkboxConfig, component, mergeConfig, checkboxTokens } from '@salutejs/plasma-new-hope/styled-components';
import React, { forwardRef, ComponentProps } from 'react';

import { config } from './Checkbox.config';

const mergedConfig = mergeConfig(checkboxConfig, config);
const CheckboxComponent = component(mergedConfig);

export type CheckboxProps = ComponentProps<typeof CheckboxComponent>;

const CheckIcon = () => (
    <div style={{ display: 'inline-flex' }}>
        <svg
            width="9.657"
            height="6.758"
            viewBox="0 0 9.65723 6.75845"
            fill="none"
            style={{ width: `var(${checkboxTokens.triggerSize})`, overflow: 'visible' }}
        >
            <path
                d="M0.22 3.55L3.69 6.76L9.43 1.28"
                stroke={`var(${checkboxTokens.iconColor})`}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                pathLength="1"
            />
        </svg>
    </div>
);

/**
 * Флажок или чекбокс. Позволяет пользователю управлять параметром с двумя состояниями — ☑ включено и ☐ отключено.
 */
export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(({ checkIcon = <CheckIcon />, ...props }, ref) => (
    <CheckboxComponent ref={ref} checkIcon={checkIcon} {...props} />
));

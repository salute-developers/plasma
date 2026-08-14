import React, { forwardRef } from 'react';
import type { FunctionComponent, RefAttributes } from 'react';

import { typograph } from '.';
import type { TypographProps } from '.';

/**
 * Прогоняет строковые children через пайплайн типографики по пропу `typograph`.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const withTypograph = <P extends Record<string, any>>(Component: FunctionComponent<P>) => {
    const Wrapped = forwardRef<HTMLElement, P & TypographProps>((props, ref) => {
        const { typograph: typographProp, children, ...rest } = props;

        const nextChildren =
            typographProp && typeof children === 'string'
                ? typograph(children, typographProp === true ? undefined : typographProp)
                : children;

        const componentProps = ({
            ...rest,
            ref,
            children: nextChildren,
        } as unknown) as P & RefAttributes<HTMLElement>;

        return <Component {...componentProps} />;
    });

    Wrapped.displayName = `withTypograph(${Component.displayName || Component.name || 'Component'})`;

    return Wrapped;
};

import React, { useMemo, PropsWithChildren, forwardRef, HTMLAttributes } from 'react';

import { Container as ContainerWeb } from './views/web/Container';
import { Container as ContainerB2C } from './views/b2c/Container';

const componentMap = {
    web: ContainerWeb,
    b2c: ContainerB2C,
};

export type ContainerProps = HTMLAttributes<HTMLDivElement> & {
    design: 'b2c' | 'web';
};

/**
 * Блок с полями по бокам для размещения контента по вертикали.
 * Блок нельзя вкладывать сам в себя или дальше по дереву.
 */
export const Container = forwardRef<HTMLDivElement, PropsWithChildren<ContainerProps>>(
    ({ design, children, ...rest }, ref) => {
        const ContainerView = useMemo(() => componentMap[design], [design]);

        return (
            <ContainerView {...rest} ref={ref}>
                {children}
            </ContainerView>
        );
    },
);

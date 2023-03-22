import React, { useMemo, FC, PropsWithChildren } from 'react';

import { Container as ContainerWeb } from './views/web/Container';
import { Container as ContainerB2C } from './views/b2c/Container';

const componentMap = {
    web: ContainerWeb,
    b2c: ContainerB2C,
};

/**
 * Блок с полями по бокам для размещения контента по вертикали.
 * Блок нельзя вкладывать сам в себя или дальше по дереву.
 */
export const Container: FC<PropsWithChildren<{ design: 'b2c' | 'web' }>> = (props): JSX.Element => {
    const { design, children } = props;
    const ContainerView = useMemo(() => componentMap[design], [design]);

    return <ContainerView> {children} </ContainerView>;
};

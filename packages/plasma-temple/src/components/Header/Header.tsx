import React from 'react';
import { NeuHeader as UIKitHeader } from '@salutejs/plasma-ui';

import { HeaderProps } from './types';
import { useNewHeaderProps, useHeaderProps } from './useHeaderProps';

export { useHeaderProps };

/** Заголовок Canvas App. Работает только с компонентом PlasmaApp */
export const Header: React.FC<HeaderProps> = (props) => {
    const headerProps = useNewHeaderProps(props);

    return <UIKitHeader {...headerProps} />;
};

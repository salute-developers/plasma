import React from 'react';
import { Header as UIKitHeader } from '@salutejs/plasma-ui';

import { HeaderProps } from './types';
import { useHeaderProps } from './useHeaderProps';

export { useHeaderProps };

export const Header: React.FC<HeaderProps> = (props) => {
    const headerProps = useHeaderProps(props);

    return <UIKitHeader {...headerProps} />;
};

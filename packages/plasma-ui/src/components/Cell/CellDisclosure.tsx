import React from 'react';
import styled from 'styled-components';
import { IconDisclosureRight } from '@salutejs/plasma-icons';

import { Button, ButtonProps } from '../Button';

const DisclosureBtn = styled(Button)`
    left: 1rem;
    margin-left: -1rem;
`;

export interface DisclosureProps extends Omit<ButtonProps, 'children' | 'text' | 'contentLeft' | 'contentRight'> {}

export const Disclosure: React.FC<React.PropsWithChildren<DisclosureProps>> = (props) => {
    return (
        <DisclosureBtn
            {...props}
            size="s"
            view="clear"
            outlined={false}
            scaleOnInteraction={false}
            contentRight={<IconDisclosureRight size="s" />}
        />
    );
};

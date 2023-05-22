import React from 'react';
import styled from 'styled-components';

import { Switch } from '.';

const func = () => {};

const StyledWrapper = styled.div`
    width: 13.75rem;
`;

const defaultProps = {
    label: 'Label' as const,
    disabled: false,
};
export const Default = () => {
    return (
        <StyledWrapper>
            <Switch value={0} checked onChange={func} onFocus={func} onBlur={func} {...defaultProps} />
        </StyledWrapper>
    );
};

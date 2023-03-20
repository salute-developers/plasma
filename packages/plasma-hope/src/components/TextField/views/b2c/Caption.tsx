import React from 'react';
import styled from 'styled-components';
import { primary } from '@salutejs/plasma-core';

import { TextFieldProps } from '../../types';

interface Props extends Pick<TextFieldProps, 'caption' | 'id'> {
    visible: boolean;
}

const CaptionBase = styled.span`
    display: flex;
    margin-bottom: var(--label-margin-bottom);

    font-size: var(--font-size);
    line-height: var(--line-height);
    font-weight: var(--plasma-typo-body-m-font-weight);
    color: ${primary};
`;

export const Caption = ({ caption, id, visible = true }: Props) => {
    if (!caption || !visible) {
        return null;
    }

    return <CaptionBase id={id}>{caption}</CaptionBase>;
};

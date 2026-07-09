import styled, { css } from 'styled-components';
import { CSSProperties } from 'react';
import { isNumber } from 'lodash';

import { tokens } from './ColorPicker.tokens';

type FlexProps = {
    gap?: CSSProperties['gap'];
    align?: CSSProperties['alignItems'];
    justify?: CSSProperties['justifyContent'];
    mb?: CSSProperties['marginBottom'];
    pos?: CSSProperties['position'];
};

const flexMixin = {
    mb: (props: FlexProps) => (isNumber(props.mb) ? `${props.mb}px` : props.mb ?? '0'),
    gap: (props: FlexProps) => (isNumber(props.gap) ? `${props.gap}px` : props.gap ?? 'unset'),
    align: (props: FlexProps) => props.align ?? 'unset',
    pos: (props: FlexProps) => props.pos ?? 'unset',
};

export const base = css`
    box-sizing: border-box;
    background-color: var(${tokens.backgroundColor});
`;

export const Group = styled.div<FlexProps>`
    position: ${flexMixin.pos};
    display: flex;
    flex-direction: row;
    gap: ${flexMixin.gap};
    align-items: ${flexMixin.align};
    margin-bottom: ${flexMixin.mb};
`;

export const Stack = styled.div<FlexProps>`
    position: ${flexMixin.pos};
    display: flex;
    flex-direction: column;
    gap: ${flexMixin.gap};
    align-items: ${flexMixin.align};
    margin-bottom: ${flexMixin.mb};
`;

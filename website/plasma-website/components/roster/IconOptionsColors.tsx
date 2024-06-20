import React, { useContext } from 'react';
import styled, { css } from 'styled-components';
import { accent, primary, secondary, tertiary } from '@salutejs/plasma-tokens-b2c';

import { Context, setIconColor, initColorState } from '../../store';

import { AnimationSlideUp } from './AnimationSlideUp';

const colorsList = Object.entries({ accent, primary, secondary, tertiary }).map(([key, value]) => ({
    value,
    label: key,
}));

const StyledOptionsColors = styled.div`
    display: flex;
    column-gap: 0.75rem;
`;

const StyledOptions = styled.div`
    display: flex;
    column-gap: 0.125rem;
`;

const StyledOptionInfo = styled.span`
    position: absolute;
    top: -2.375rem;
    left: 0;
    display: none;
    align-items: center;
    justify-content: center;
    padding: 0.563rem 0.5rem;
    height: 2rem;
    border-radius: 1.75rem;
    background-color: rgba(23, 23, 23, 1);

    box-sizing: border-box;

    ${AnimationSlideUp};
`;

const StyledOptionCommon = styled.div<{ isActive?: boolean }>`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.75rem;
    line-height: 0.875rem;
    padding: 0.313rem 0.5rem;
    border-radius: 0.75rem;
    color: rgba(255, 255, 255, 0.56);

    transition: var(--color-transition), background-color var(--background-color-transition);

    cursor: pointer;

    ${({ isActive }) =>
        isActive &&
        css`
            color: rgba(255, 255, 255, 0.96);
            background-color: rgba(255, 255, 255, 0.06);

            cursor: default;

            &:hover {
                background-color: rgba(255, 255, 255, 0.06);
            }
        `}
`;

const StyledOption = styled(StyledOptionCommon)<{ color: string }>`
    width: 1.5rem;
    height: 1.5rem;
    padding: unset;
    border-radius: 50%;

    &::before {
        content: '';
        margin-top: 0.063rem;
        width: 0.75rem;
        height: 0.75rem;
        border-radius: 50%;
        background-color: ${({ color }) => color};
    }

    &:hover {
        color: rgba(255, 255, 255, 0.96);
        background-color: rgba(255, 255, 255, 0.06);
        border-radius: 50%;

        ${StyledOptionInfo} {
            display: flex;
        }
    }
`;

export const IconOptionsColors = () => {
    const { dispatch, state } = useContext(Context);

    return (
        <StyledOptionsColors>
            <StyledOptionCommon
                color={initColorState.value}
                isActive={state.color?.label === initColorState.label}
                onClick={() => {
                    dispatch(setIconColor(initColorState));
                }}
            >
                {initColorState.value}
            </StyledOptionCommon>
            <StyledOptions>
                {colorsList.map(({ value, label }) => {
                    return (
                        <StyledOption
                            key={label}
                            isActive={state.color?.label === label}
                            onClick={() => {
                                dispatch(setIconColor({ value, label }));
                            }}
                            color={value}
                        >
                            <StyledOptionInfo>{label}</StyledOptionInfo>
                        </StyledOption>
                    );
                })}
            </StyledOptions>
        </StyledOptionsColors>
    );
};

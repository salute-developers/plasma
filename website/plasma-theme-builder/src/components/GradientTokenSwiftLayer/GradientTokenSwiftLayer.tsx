import React, { ChangeEvent, useCallback } from 'react';
import styled from 'styled-components';
import { TextField } from '@salutejs/plasma-b2c';

import { PreviewColor } from '../PreviewColor/PreviewColor';

import { getSwiftUIColor } from '../../utils';
import type { Point, PointNameSwift, Swift } from '../../types';

const Root = styled.div`
    display: flex;
    gap: 1rem;
    flex-direction: column;
    border-radius: 1rem;

    font-size: 0.875rem;
`;

const LayerNumber = styled.div``;

const LayerHeader = styled.div`
    display: flex;
    justify-content: space-between;
`;

const LayerWrapper = styled.div`
    padding-left: 2rem;
`;

const LayerReadonlyContent = styled.div`
    display: flex;
    gap: 1rem;
    flex-direction: column;
`;

const LayerReadonlyValue = styled.span`
    display: flex;
    align-items: center;
`;

const LayerEditableContent = styled.div`
    margin-top: 0.5rem;

    display: flex;
    gap: 0.5rem;
    flex-direction: column;
`;

const LayerEditableValue = styled.div`
    display: flex;
    align-items: center;
`;

const LayerEditablePart = styled.span``;

const StyledInput = styled(TextField)`
    width: 3.75rem;
`;

interface GradientTokenSwiftLayerProps {
    originalColor: string;
    swift: Swift | undefined;
    index: number;
    onChangeSwiftValue: (value: Swift, index: number) => void;
}

export const GradientTokenSwiftLayer = ({
    originalColor,
    swift,
    index,
    onChangeSwiftValue,
}: GradientTokenSwiftLayerProps) => {
    const onChangeValue = useCallback(
        (event: ChangeEvent<HTMLInputElement>) => {
            if (!swift) {
                return;
            }

            const { name, value } = event.target;
            const [pointName, pointDirection] = name.split('_') as [PointNameSwift, keyof Point];

            onChangeSwiftValue(
                {
                    ...swift,
                    [pointName]: {
                        ...swift[pointName],
                        [pointDirection]: value,
                    },
                },
                index,
            );
        },
        [swift, index, onChangeSwiftValue],
    );

    if (!swift) {
        return null;
    }

    const { colors, locations, startPoint, endPoint } = swift;
    const [colorStart, colorStop] = [getSwiftUIColor(colors[0]), getSwiftUIColor(colors[1])];

    return (
        <Root>
            <LayerHeader>
                <LayerNumber>layer{index}</LayerNumber>
                <PreviewColor background={originalColor} borderRadius="50%" size="1.25rem" />
            </LayerHeader>
            <LayerWrapper>
                <LayerReadonlyContent>
                    <LayerReadonlyValue>colorStart: {colorStart}</LayerReadonlyValue>
                    <LayerReadonlyValue>colorStop: {colorStop}</LayerReadonlyValue>
                    <LayerReadonlyValue>locations: [{locations.join(', ')}]</LayerReadonlyValue>
                </LayerReadonlyContent>
                <LayerEditableContent>
                    <LayerEditableValue>
                        <LayerEditablePart>startPoint: CGPoint(x: </LayerEditablePart>
                        <StyledInput size="xs" name="startPoint_x" value={startPoint.x} onChange={onChangeValue} />
                        <LayerEditablePart>, y:</LayerEditablePart>
                        <StyledInput size="xs" name="startPoint_y" value={startPoint.y} onChange={onChangeValue} />
                        <LayerEditablePart>)</LayerEditablePart>
                    </LayerEditableValue>
                    <LayerEditableValue>
                        <LayerEditablePart>endPoint: CGPoint(x: </LayerEditablePart>
                        <StyledInput size="xs" name="endPoint_x" value={endPoint.x} onChange={onChangeValue} />
                        <LayerEditablePart>, y:</LayerEditablePart>
                        <StyledInput size="xs" name="endPoint_y" value={endPoint.y} onChange={onChangeValue} />
                        <LayerEditablePart>)</LayerEditablePart>
                    </LayerEditableValue>
                </LayerEditableContent>
            </LayerWrapper>
        </Root>
    );
};

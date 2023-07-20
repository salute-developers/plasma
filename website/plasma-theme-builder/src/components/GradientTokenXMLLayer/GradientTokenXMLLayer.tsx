import React, { ChangeEvent, useCallback } from 'react';
import styled from 'styled-components';
import { TextField } from '@salutejs/plasma-b2c';

import { PreviewColor } from '../PreviewColor/PreviewColor';

import { getAndroidColor } from '../../utils';
import { zeroPoint } from '../../types/';
import type { GradientType, Point, PointNameXML, XML } from '../../types';

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
    gap: 0.35rem;
    flex-direction: column;
`;

const LayerEditableValue = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
`;

const LayerEditablePart = styled.span``;

const StyledInput = styled(TextField)`
    width: 3.75rem;
`;

const getPointsName = (type: GradientType) => {
    if (type === '.linear') {
        return ['startPoint', 'endPoint'] as const;
    }

    if (type === '.radial') {
        return ['center', 'radius'] as const;
    }

    return ['startPoint', 'endPoint'] as const;
};

interface GradientTokenXMLLayerProps {
    originalColor: string;
    xml: XML | undefined;
    index: number;
    onChangeXMLValue: (value: XML, index: number) => void;
}

export const GradientTokenXMLLayer = ({ originalColor, xml, index, onChangeXMLValue }: GradientTokenXMLLayerProps) => {
    const onChangeValue = useCallback(
        (event: ChangeEvent<HTMLInputElement>) => {
            if (!xml) {
                return;
            }

            const { name, value } = event.target;
            const [pointName, pointDirection] = name.split('_') as [PointNameXML, keyof Point];

            onChangeXMLValue(
                {
                    ...xml,
                    [pointName]: {
                        ...xml[pointName],
                        [pointDirection]: value,
                    },
                },
                index,
            );
        },
        [xml, index, onChangeXMLValue],
    );

    if (!xml) {
        return null;
    }

    const { colors, locations, type } = xml;
    const xmlColors = colors.map(getAndroidColor);

    const [first, second] = getPointsName(type);
    const firstPoint = xml[first] || zeroPoint;
    const secondPoint = xml[second] || zeroPoint;

    return (
        <Root>
            <LayerHeader>
                <LayerNumber>z{index}</LayerNumber>
                <PreviewColor background={originalColor} borderRadius="50%" size="1.25rem" />
            </LayerHeader>
            <LayerWrapper>
                <LayerReadonlyContent>
                    <LayerReadonlyValue>colors: [{xmlColors.join(', ')}]</LayerReadonlyValue>
                    <LayerReadonlyValue>locations: [{locations.join(', ')}]</LayerReadonlyValue>
                </LayerReadonlyContent>
                <LayerEditableContent>
                    <LayerEditableValue>
                        <LayerEditablePart>{`${first}_x`}: </LayerEditablePart>
                        <StyledInput size="xs" name={`${first}_x`} value={firstPoint.x} onChange={onChangeValue} />
                        <LayerEditablePart>{`${first}_y`}: </LayerEditablePart>
                        <StyledInput size="xs" name={`${first}_y`} value={firstPoint.y} onChange={onChangeValue} />
                    </LayerEditableValue>
                    <LayerEditableValue>
                        <LayerEditablePart>{`${second}_x`}: </LayerEditablePart>
                        <StyledInput size="xs" name={`${second}_x`} value={secondPoint.x} onChange={onChangeValue} />
                        <LayerEditablePart>{`${second}_y`}: </LayerEditablePart>
                        <StyledInput size="xs" name={`${second}_y`} value={secondPoint.y} onChange={onChangeValue} />
                    </LayerEditableValue>
                </LayerEditableContent>
            </LayerWrapper>
        </Root>
    );
};

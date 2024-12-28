import React, { ChangeEvent, forwardRef, useEffect, useState } from 'react';
import styled from 'styled-components';
import { TextArea } from '@salutejs/plasma-b2c';

import { PreviewColor } from '../PreviewColor/PreviewColor';
import { GradientTokenCSSLayer } from '../GradientTokenCSSLayer/GradientTokenCSSLayer';

import { getBackgroundColor, parseGradient } from '../../utils';
import type { MultiplatformValue, InputDataValue } from '../../types';

const Root = styled.div``;

const GradientTokenWrapper = styled.div`
    display: flex;
    gap: 1rem;

    margin-top: 1rem;
`;

const GradientTokenLayers = styled.div`
    display: flex;
    gap: 1rem;
    flex-direction: column;
    margin-top: 1rem;

    height: 10rem;
    overflow-y: auto;
`;

const StyledTextArea = styled(TextArea)`
    flex: 1;
`;

interface GradientTokenValueProps {
    value: InputDataValue;
    onChangeValue: (value: Record<string, string> | Array<MultiplatformValue> | MultiplatformValue) => void;
}

export const GradientTokenValue = forwardRef<HTMLTextAreaElement, GradientTokenValueProps>(
    ({ value, onChangeValue }, ref) => {
        const platformTypeItems = ['CSS'] as const;

        const [selectPlatformType] = useState<typeof platformTypeItems[number]>(platformTypeItems[0]);

        const colorValue = getBackgroundColor(value.value);
        const [gradientValue, setGradientValue] = useState(colorValue);

        const [layers, setLayers] = useState<Array<MultiplatformValue> | null>();

        const onChangeGradientValue = (event: ChangeEvent<HTMLTextAreaElement>) => {
            const { value: currentValue } = event.target;
            const layers = parseGradient(currentValue);

            setGradientValue(currentValue);
            setLayers(layers);
        };

        useEffect(() => {
            if (Array.isArray(value.value)) {
                setLayers(value.value);
            }

            // TODO: Убрать после того, как переделаем схемы на новый формат градиентов
            if (typeof value.value === 'object' && ('swift' in value.value || 'xml' in value.value)) {
                const singleValue = value.value as MultiplatformValue;
                setLayers([singleValue]);
            }
        }, [value.value]);

        useEffect(() => {
            if (layers) {
                const newValue = layers.length === 1 ? layers[0] : layers;
                onChangeValue(newValue);
            }
        }, [layers, onChangeValue]);

        return (
            <Root>
                <GradientTokenWrapper>
                    <PreviewColor background={gradientValue} borderRadius="0.625rem" size="5rem" />
                    <StyledTextArea
                        ref={ref}
                        size="s"
                        resize="none"
                        helperText=""
                        value={gradientValue}
                        onChange={onChangeGradientValue}
                    />
                </GradientTokenWrapper>
                {layers?.length && (
                    <>
                        <GradientTokenLayers>
                            {selectPlatformType === 'CSS' &&
                                layers.map(({ origin }, index) => (
                                    <GradientTokenCSSLayer key={index} originalColor={origin} />
                                ))}
                        </GradientTokenLayers>
                    </>
                )}
            </Root>
        );
    },
);

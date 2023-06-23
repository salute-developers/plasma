import React, { ChangeEvent, useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import { TextArea } from '@salutejs/plasma-b2c';

import { PreviewColor } from '../PreviewColor/PreviewColor';
import { TypeTabs } from '../TypeTabs/TypeTabs';
import { GradientTokenCSSLayer } from '../GradientTokenCSSLayer/GradientTokenCSSLayer';
import { GradientTokenSwiftLayer } from '../GradientTokenSwiftLayer/GradientTokenSwiftLayer';
import { GradientTokenXMLLayer } from '../GradientTokenXMLLayer/GradientTokenXMLLayer';

import { getColorValue, parseGradient } from '../../utils';
import type { MultiplatformValue, InputDataValue, Swift, XML } from '../../types';

const Root = styled.div``;

const GradientTokenWrapper = styled.div`
    display: flex;
    gap: 1rem;
    height: 5rem;

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

    textarea {
        height: 5rem;
    }
`;

interface GradientTokenValueProps {
    value: InputDataValue;
    onChangeValue: (value: Record<string, string> | Array<MultiplatformValue> | MultiplatformValue) => void;
}

export const GradientTokenValue = ({ value, onChangeValue }: GradientTokenValueProps) => {
    const platformTypeItems = ['CSS', 'Swift', 'XML'] as const;

    const [selectPlatformType, setSelectPlatformType] = useState<typeof platformTypeItems[number]>(
        platformTypeItems[0],
    );

    const colorValue = getColorValue(value.value);
    const [gradientValue, setGradientValue] = useState(colorValue === value.value ? '' : colorValue);

    const onSelectPlatformType = useCallback((value: string) => {
        setSelectPlatformType(value as typeof platformTypeItems[number]);
    }, []);

    const [layers, setLayers] = useState<Array<MultiplatformValue> | null>();

    const onChangeGradientValue = useCallback((event: ChangeEvent<HTMLTextAreaElement>) => {
        const { value: currentValue } = event.target;

        setGradientValue(currentValue);
        setLayers(parseGradient(currentValue));
    }, []);

    const onChangeSwiftGradientValue = useCallback(
        (value: Swift, index: number) => {
            if (!layers) {
                return;
            }

            const newValues = layers.map((item, i) =>
                index === i
                    ? {
                          ...item,
                          swift: value,
                      }
                    : item,
            );

            setLayers(newValues);
        },
        [layers],
    );

    const onChangeXMLGradientValue = useCallback(
        (value: XML, index: number) => {
            if (!layers) {
                return;
            }

            const newValues = layers.map((item, i) =>
                index === i
                    ? {
                          ...item,
                          xml: value,
                      }
                    : item,
            );

            setLayers(newValues);
        },
        [layers],
    );

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
                <StyledTextArea size="s" resize="none" value={gradientValue} onChange={onChangeGradientValue} />
            </GradientTokenWrapper>

            {layers?.length && (
                <>
                    <TypeTabs
                        items={platformTypeItems}
                        selectedItem={selectPlatformType}
                        onSelectTab={onSelectPlatformType}
                    />

                    <GradientTokenLayers>
                        {selectPlatformType === 'CSS' &&
                            layers.map(({ origin }, index) => (
                                <GradientTokenCSSLayer key={index} originalColor={origin} />
                            ))}

                        {selectPlatformType === 'Swift' &&
                            layers.map(({ swift, origin }, index) => (
                                <GradientTokenSwiftLayer
                                    key={index}
                                    originalColor={origin}
                                    swift={swift}
                                    index={index}
                                    onChangeSwiftValue={onChangeSwiftGradientValue}
                                />
                            ))}

                        {selectPlatformType === 'XML' &&
                            layers.map(({ xml, origin }, index) => (
                                <GradientTokenXMLLayer
                                    key={index}
                                    originalColor={origin}
                                    xml={xml}
                                    index={index}
                                    onChangeXMLValue={onChangeXMLGradientValue}
                                />
                            ))}
                    </GradientTokenLayers>
                </>
            )}
        </Root>
    );
};

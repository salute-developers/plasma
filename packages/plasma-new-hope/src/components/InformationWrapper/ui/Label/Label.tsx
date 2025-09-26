import React, { useRef, useState } from 'react';
import type { MouseEventHandler } from 'react';
import cx from 'classnames';
import { useOutsideClick } from 'src/hooks';

import { HintWrapper, Indicator, IndicatorWrapper, Label, OptionalText } from '../../InformationWrapper.styles';
import { HintComponent } from '../Hint/Hint';
import { classes } from '../../InformationWrapper.tokens';

import type { LabelComponentProps } from './Label.types';

export const LabelComponent = ({
    size,
    hasRequiredIndicator,
    requiredIndicatorPlacement,
    optional,
    optionalText,
    label,
    labelHtmlFor,
    titleCaption,
    hintText,
    hintTrigger,
    hintTargetIcon,
    hintPlacement,
    hintHasArrow,
    hintOffset,
    hintWidth,
    hintContentLeft,
    disabled,
}: LabelComponentProps) => {
    const [isHintVisible, setIsHintVisible] = useState(false);

    const hintRef = useRef<HTMLDivElement>(null);

    useOutsideClick(() => {
        setIsHintVisible(false);
    }, [hintRef]);

    const innerOptional = Boolean(hasRequiredIndicator ? false : optional);
    const requiredPlacementClass = requiredIndicatorPlacement === 'left' ? classes.requiredAlignLeft : undefined;

    const handleHintShow = () => {
        if (disabled) {
            return;
        }

        setIsHintVisible(true);
    };
    const handleHintHide = () => setIsHintVisible(false);
    const handleHintClick: MouseEventHandler = (event) => {
        if (!hintText || hintTrigger !== 'click' || disabled) {
            return;
        }

        event.stopPropagation();
        const targetIsPopover = event.target === hintRef.current;
        const rootHasTarget = hintRef.current?.contains(event.target as Element);

        if (!targetIsPopover && !rootHasTarget) {
            setIsHintVisible(true);
        }
    };

    return (
        <IndicatorWrapper hasLabel={Boolean(label)}>
            <Label htmlFor={labelHtmlFor}>{label}</Label>
            {hintText && (
                <HintWrapper className={cx({ [classes.withoutLabel]: !label })} hasCaption={Boolean(titleCaption)}>
                    <HintComponent
                        ref={hintRef}
                        size={size}
                        hintText={hintText}
                        hintTrigger={hintTrigger}
                        isHintVisible={isHintVisible}
                        hintTargetIcon={hintTargetIcon}
                        hintPlacement={hintPlacement}
                        hintHasArrow={hintHasArrow}
                        hintOffset={hintOffset}
                        hintWidth={hintWidth}
                        hintContentLeft={hintContentLeft}
                        withoutLabel={!label}
                        handleHintShow={handleHintShow}
                        handleHintHide={handleHintHide}
                        handleHintClick={handleHintClick}
                    />
                </HintWrapper>
            )}
            {hasRequiredIndicator && (
                <Indicator
                    className={cx(requiredPlacementClass, { [classes.withoutLabel]: !label })}
                    hasCaption={Boolean(titleCaption)}
                />
            )}
            {innerOptional && <OptionalText>{optionalText}</OptionalText>}
        </IndicatorWrapper>
    );
};

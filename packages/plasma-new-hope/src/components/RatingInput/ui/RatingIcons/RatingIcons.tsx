import React from 'react';
import type { CSSProperties, ReactNode } from 'react';
import cls from 'classnames';

import {
    IconStarFill24,
    IconStarFill36,
    IconStarHalfFill24,
    IconStarHalfFill36,
    IconStarOutline24,
    IconStarOutline36,
} from '../../../_Icon';
import type { RatingInputProps } from '../../RatingInput.types';
import { classes, privateTokens, tokens } from '../../RatingInput.tokens';
import { EmptyIcon, FilledIcon, Focus, Fraction, Icon, Radio, Star } from '../../RatingInput.styles';

import type { GetIconArgs, GetInputsArgs, RatingIconsProps } from './RatingIcons.types';

const getDefaultIcons = (size: RatingInputProps['iconSize']) => {
    const Filled = size === 's' ? IconStarFill24 : IconStarFill36;
    const Outline = size === 's' ? IconStarOutline24 : IconStarOutline36;
    const Half = size === 's' ? IconStarHalfFill24 : IconStarHalfFill36;

    const props = { color: 'inherit', sizeCustomProperty: tokens.iconSize };

    return {
        fill: <Filled {...props} />,
        outline: <Outline {...props} />,
        half: <Half {...props} />,
    };
};

const getIcon = ({
    filledParts,
    parts,
    defaultIcons,
    iconSlot,
    iconSlotOutline,
    renderFractionIcon,
}: GetIconArgs): ReactNode => {
    if (filledParts === parts) {
        return <Icon aria-hidden>{iconSlot === undefined ? defaultIcons.fill : iconSlot}</Icon>;
    }

    const partial = filledParts > 0 && filledParts < parts;

    let partialIcon = partial ? renderFractionIcon?.(filledParts, parts) : undefined;
    let defaultHalf = false;

    if (
        partial &&
        partialIcon === undefined &&
        filledParts * 2 === parts &&
        iconSlot === undefined &&
        iconSlotOutline === undefined
    ) {
        partialIcon = defaultIcons.half;
        defaultHalf = true;
    }

    if (partial && partialIcon !== undefined) {
        return (
            <Icon aria-hidden className={cls(defaultHalf && classes.defaultHalf)}>
                {partialIcon}
            </Icon>
        );
    }

    const filledStyle = {
        [privateTokens.filledPercentage]: `${(filledParts / parts) * 100}%`,
    } as CSSProperties;

    return (
        <Icon aria-hidden>
            <EmptyIcon>{iconSlotOutline === undefined ? defaultIcons.outline : iconSlotOutline}</EmptyIcon>
            {filledParts > 0 && (
                <FilledIcon style={filledStyle}>{iconSlot === undefined ? defaultIcons.fill : iconSlot}</FilledIcon>
            )}
        </Icon>
    );
};

const getInputs = ({
    index,
    count,
    parts,
    selected,
    name,
    allowClear,
    getLabelText,
    inputRefs,
    onSelect,
    onHover,
}: GetInputsArgs) =>
    Array.from({ length: parts }, (_, part) => {
        const stepIndex = index * parts + part;
        const candidate = (stepIndex + 1) / parts;
        const checked = selected === candidate;
        const label = getLabelText ? getLabelText(candidate) : `${candidate} из ${count}`;
        const isFirstWithoutSelection = !selected && stepIndex === 0;
        const tabIndex = checked || isFirstWithoutSelection ? 0 : -1;

        const style = { insetInlineStart: `${(part / parts) * 100}%`, width: `${100 / parts}%` };

        return (
            <Fraction key={part} style={style} onMouseEnter={() => onHover(candidate)}>
                <Radio
                    ref={(element) => {
                        inputRefs.current[stepIndex] = element;
                    }}
                    data-rating-input=""
                    type="radio"
                    name={name}
                    value={candidate}
                    checked={checked}
                    aria-label={label}
                    tabIndex={tabIndex}
                    onChange={() => onSelect(candidate)}
                    onClick={() => {
                        if (allowClear && checked) {
                            onSelect(null);
                        }
                    }}
                />
                <Focus />
            </Fraction>
        );
    });

export const RatingIcons = (args: RatingIconsProps) => {
    const { count, parts, displayed, iconSize } = args;
    const defaultIcons = getDefaultIcons(iconSize);

    const icons = Array.from({ length: count }, (_, index) => {
        const filledParts = Math.round(Math.max(0, Math.min(1, displayed - index)) * parts);
        const icon = getIcon({ ...args, filledParts, defaultIcons });
        const inputs = getInputs({ ...args, index });

        return (
            <Star key={index}>
                {icon}
                {inputs}
            </Star>
        );
    });

    return <>{icons}</>;
};

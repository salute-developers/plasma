import React from 'react';
import { useArgs, useEffect, useRef } from 'storybook/preview-api';
import { IconPlasma } from '@salutejs/plasma-icons';

export const getIconSize = (size?: string) => {
    return size === 's' ? 'xs' : 's';
};

export const createDefaultStory = (Progress: any) => {
    return ({
        label,
        hasLabelIcon,
        caption,
        labelTextPlacement,
        labelPlacement,
        valuePlacement,
        hasValue,
        size,
        ...rest
    }: any) => {
        const [, setArgs] = useArgs();
        const prevLabelPlacement = useRef(labelPlacement);
        const prevValuePlacement = useRef(valuePlacement);

        useEffect(() => {
            if (valuePlacement === 'none' && hasValue) {
                setArgs({ hasValue: false });
                return;
            }

            const nextShowValueAlign = valuePlacement === 'top' && !label && !hasLabelIcon;
            setArgs({ showValueAlign: nextShowValueAlign });

            const labelChanged = labelPlacement !== prevLabelPlacement.current;
            prevLabelPlacement.current = labelPlacement;
            prevValuePlacement.current = valuePlacement;

            if (labelChanged) {
                const expected = labelPlacement === 'left' ? 'right' : 'top';
                if (valuePlacement !== expected) setArgs({ valuePlacement: expected });
            } else {
                const expected = valuePlacement === 'right' ? 'left' : 'top';
                if (labelPlacement !== expected) setArgs({ labelPlacement: expected });
            }
        }, [labelPlacement, valuePlacement, hasValue, label, hasLabelIcon]);

        return (
            <Progress
                size={size}
                label={label}
                caption={caption}
                labelPlacement={labelPlacement}
                valuePlacement={valuePlacement}
                hasValue={hasValue}
                labelIcon={hasLabelIcon ? <IconPlasma size={getIconSize(size)} /> : undefined}
                labelTextPlacement={labelTextPlacement}
                {...rest}
            />
        );
    };
};

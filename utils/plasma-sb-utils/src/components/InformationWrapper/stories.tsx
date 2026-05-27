import React from 'react';
import { IconFolder } from '@salutejs/plasma-icons';

const SvgPlaceholder = () => (
    <div
        style={{
            height: '3rem',
            background:
                'linear-gradient(to right, #9747FF 0.063rem, transparent 0.063rem) 0 0, linear-gradient(to right, #9747FF 0.063rem, transparent 0.063rem) 0 100%, linear-gradient(to left, #9747FF 0.063rem, transparent 0.063rem) 100% 0, linear-gradient(to left, #9747FF 0.063rem, transparent 0.063rem) 100% 100%, linear-gradient(to bottom, #9747FF 0.063rem, transparent 0.063rem) 0 0, linear-gradient(to bottom, #9747FF 0.063rem, transparent 0.063rem) 100% 0, linear-gradient(to top, #9747FF 0.063rem, transparent 0.063rem) 0 100%, linear-gradient(to top, #9747FF 0.063rem, transparent 0.063rem) 100% 100%',
            backgroundRepeat: 'no-repeat',
            backgroundSize: '3rem 1rem',
        }}
    />
);

export const createDefaultStory = (InformationWrapper: any) => {
    return ({ enableLeftHelperIcon, leftHelper, size, ...rest }: any) => {
        const LeftHelper = () => (
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                {enableLeftHelperIcon && <IconFolder size="xs" />}
                <span>{leftHelper}</span>
            </div>
        );

        return (
            <div style={{ width: '70%', margin: '0 auto' }}>
                <InformationWrapper leftHelper={<LeftHelper />} size={size} {...rest}>
                    <SvgPlaceholder />
                </InformationWrapper>
            </div>
        );
    };
};

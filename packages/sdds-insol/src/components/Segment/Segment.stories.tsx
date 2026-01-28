import React from 'react';
import type { ComponentProps } from 'react';
import type { Meta } from '@storybook/react-vite';
import { IconPlasma } from '@salutejs/plasma-icons';
import styled from 'styled-components';
import { getSegmentStories } from '@salutejs/plasma-sb-utils';

import { Counter } from '../Counter/Counter';

import { config } from './SegmentGroup.config';
import { SegmentProvider, SegmentItem, SegmentGroup, useSegment } from './Segment';

type SegmentGroupProps = ComponentProps<typeof SegmentGroup>;

const getIconSizeProps = (size: string) => {
    switch (size) {
        case 'xs':
        case 's':
            return '1rem';
        case 'm':
            return '1.25rem';
        default:
            return '1.5rem';
    }
};

const StyledIconPlasma = styled(IconPlasma)<{ customSize?: string }>`
    ${({ customSize }) =>
        customSize &&
        `
            width: ${customSize};
            height: ${customSize};
            flex: 0 0 ${customSize};
        `}
`;

const getContentLeft = (contentLeftOption: string, size: string) => {
    return contentLeftOption === 'icon' ? (
        <StyledIconPlasma customSize={getIconSizeProps(size)} color="inherit" />
    ) : undefined;
};

const getContentRight = (contentRightOption: string, size: string, segmentItemView?: string, isSelected?: boolean) => {
    const counterSize = size === 'xs' ? 'xxs' : 'xs';

    switch (contentRightOption) {
        case 'icon':
            return <StyledIconPlasma customSize={getIconSizeProps(size)} color="inherit" />;
        case 'counter':
            return (
                <Counter
                    size={counterSize}
                    count={1}
                    view={segmentItemView === 'accent' && isSelected ? 'light' : 'positive'}
                />
            );
        case 'text':
            return 'Text';
        default:
            return undefined;
    }
};

const { meta: META, Default } = getSegmentStories({
    SegmentGroup,
    SegmentItem,
    SegmentProvider,
    componentConfig: config,
    CounterComponent: Counter,
    useSegment,
    customGetContentLeft: getContentLeft,
    customGetContentRight: getContentRight,
});

const meta: Meta<SegmentGroupProps> = {
    ...META,
    title: 'Data Entry/Segment',
};

export default meta;

export { Default };

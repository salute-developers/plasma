import * as React from 'react';
import styled from 'styled-components';
import type { StoryObj, Meta } from '@storybook/react';
import { InSpacingDecorator } from '@salutejs/plasma-sb-utils';
import type { ComponentProps } from 'react';

import { Carousel, CarouselItem } from '.';

type StoryCarouselProps = ComponentProps<typeof Carousel>;

const meta: Meta<StoryCarouselProps> = {
    title: 'Navigation/Carousel',
    component: Carousel,
    decorators: [InSpacingDecorator],
    argTypes: {
        align: {
            options: ['center', 'start', 'end'],
            control: {
                type: 'inline-radio',
            },
        },
        isDragScrollDisabled: {
            control: 'boolean',
        },
    },
    args: {
        align: 'center',
        isDragScrollDisabled: false,
    },
    parameters: {
        controls: {
            include: ['align', 'isDragScrollDisabled'],
        },
    },
};

export default meta;

const items = Array(25)
    .fill({
        title: 'Заголовок',
    })
    .map(({ title }, i) => ({
        id: i,
        title: `${title} ${i}`,
    }));

const StyledCard = styled.div`
    position: relative;
    border-radius: 8px;
    width: 350px;
    height: 50px;
    padding: 8px;
    background-color: #add8e6;
`;

const StoryDefault = ({ align, isDragScrollDisabled }: StoryCarouselProps) => {
    const [index, setIndex] = React.useState(0);

    return (
        <Carousel
            index={index}
            detectActive
            onIndexChange={setIndex}
            scrollAlign={align}
            isDragScrollDisabled={isDragScrollDisabled}
        >
            {items.map((item, i) => (
                <CarouselItem key={i} style={{ padding: '0 0.5rem' }} scrollSnapAlign={align}>
                    <StyledCard>{item.title}</StyledCard>
                </CarouselItem>
            ))}
        </Carousel>
    );
};

export const Default: StoryObj<StoryCarouselProps> = {
    render: (args) => <StoryDefault {...args} />,
};

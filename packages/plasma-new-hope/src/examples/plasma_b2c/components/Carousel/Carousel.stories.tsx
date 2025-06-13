import * as React from 'react';
import type { ComponentProps } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import styled from 'styled-components';
import { getConfigVariations } from '@salutejs/plasma-sb-utils';

import { WithTheme } from '../../../_helpers';

import { config } from './Carousel.config';
import { Carousel, CarouselItem } from './Carousel';

type StoryCarouselProps = ComponentProps<typeof Carousel> & {
    slides: number;
    visibleDots: number;
    paginationDisabled: boolean;
    paginationCentered: boolean;
};

const { views, sizes } = getConfigVariations(config);

const meta: Meta<StoryCarouselProps> = {
    title: 'b2c/Navigation/Carousel',
    component: Carousel,
    decorators: [WithTheme],
    argTypes: {
        view: {
            options: views,
            control: {
                type: 'select',
            },
        },
        size: {
            options: sizes,
            control: {
                type: 'inline-radio',
            },
        },
        scrollAlign: {
            options: ['start', 'center', 'end'],
            control: {
                type: 'inline-radio',
            },
        },
        slides: {
            control: 'number',
        },
        visibleDots: {
            control: 'number',
        },
        controlArrowsDisabled: {
            control: 'boolean',
        },
        paginationDisabled: {
            control: 'boolean',
        },
        paginationCentered: {
            control: 'boolean',
        },
        gap: {
            control: 'text',
        },
    },
    args: {
        view: 'default',
        size: 's',
        scrollAlign: 'start',
        slides: 20,
        controlArrowsDisabled: false,
        paginationDisabled: false,
        paginationCentered: false,
        gap: '20px',
    },
    parameters: {
        controls: {
            include: [
                'scrollAlign',
                'visibleDots',
                'slides',
                'controlArrowsDisabled',
                'paginationDisabled',
                'paginationCentered',
                'gap',
            ],
        },
    },
};

export default meta;

const StyledCard = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    width: 400px;
    height: 370px;
    background-color: #add8e6;
    font-size: 30px;
`;

const StoryDefault = ({ visibleDots, slides, paginationDisabled, paginationCentered, ...rest }: StoryCarouselProps) => {
    const items = Array(slides)
        .fill(1)
        .map((_, i) => ({
            id: i,
            title: i,
        }));

    return (
        <>
            <div style={{ width: '600px' }}>
                <Carousel
                    paginationOptions={{
                        disabled: paginationDisabled,
                        visibleDots,
                        centered: paginationCentered,
                    }}
                    {...rest}
                >
                    {items.map((item, i) => (
                        <CarouselItem key={i}>
                            <StyledCard>{item.title}</StyledCard>
                        </CarouselItem>
                    ))}
                </Carousel>
            </div>
        </>
    );
};

export const Default: StoryObj<StoryCarouselProps> = {
    render: (args) => <StoryDefault {...args} />,
};

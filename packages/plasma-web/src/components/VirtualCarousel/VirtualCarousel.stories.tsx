import React, { useState } from 'react';
import styled from 'styled-components';
import { Meta } from '@storybook/react';
import { IconChevronLeft, IconChevronRight } from '@salutejs/plasma-icons';

import { InSpacingDecorator } from '../../helpers';
import { Button } from '../Button';
import { SmartPaginationDots } from '../PaginationDots';

import { VirtualCarouselCard } from './VirtualCarousel.examples';

import { VirtualCarousel, VirtualCarouselItem } from '.';

export default {
    title: 'Controls/VirtualCarousel',
    component: VirtualCarousel,
    decorators: [InSpacingDecorator],
    argTypes: {
        align: {
            control: {
                type: 'inline-radio',
                options: ['center', 'start', 'end'],
            },
        },
    },
} as Meta;

const items = Array(25)
    .fill({
        title: 'Слайд',
        subtitle: 'Описание слайда',
        imageSrc: `${process.env.PUBLIC_URL}/images/320_320_n.jpg`,
        imageAlt: 'Картинка',
    })
    .map(({ title, subtitle, imageSrc, imageAlt }, i) => ({
        id: `slide_${i}`,
        title: `${title} ${i}`,
        subtitle: `${subtitle} ${i}`,
        imageSrc: imageSrc.replace('n', i % 12),
        imageAlt: `${imageAlt} ${i}`,
    }));

export const Default = () => {
    return (
        <VirtualCarousel
            index={0}
            itemCount={items.length}
            style={{ margin: '0 -0.5rem' }}
            height={200}
            overscan={6}
            estimateSize={() => 336 + 16}
            renderItems={(visibleItems, currentIndex) =>
                visibleItems.map(({ index, start }) => {
                    const item = items[index];
                    return (
                        <VirtualCarouselItem
                            key={index}
                            data-virtual-index={index}
                            style={{
                                transform: `translateX(${start}px)`,
                                padding: '0 8px',
                            }}
                        >
                            <VirtualCarouselCard {...item} style={{ height: '180px', width: '336px' }} />
                        </VirtualCarouselItem>
                    );
                })
            }
        />
    );
};

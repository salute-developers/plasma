import React from 'react';

type WithTextGradientStoryArgs = {
    textGradient: string;
    textGradientHover: string;
    textGradientActive: string;
    [key: string]: unknown;
};

const gradientArgTypes = {
    textGradient: { control: { type: 'text' }, table: { category: 'withTextGradient' } },
    textGradientHover: { control: { type: 'text' }, table: { category: 'withTextGradient' } },
    textGradientActive: { control: { type: 'text' }, table: { category: 'withTextGradient' } },
};

const defaultGradientArgs = {
    textGradient: 'linear-gradient(90deg, #E63946, #457B9D)',
    textGradientHover: '',
    textGradientActive: '',
};

const viewArgType = (views: string[]) => ({
    view: { options: views, control: { type: 'select' }, table: { category: 'variation' } },
});

const appearanceArgType = (appearances: string[]) => ({
    appearance: { options: appearances, control: { type: 'select' }, table: { category: 'variation' } },
});

const renderWithGradient = (Component: any) => ({
    textGradient,
    textGradientHover,
    textGradientActive,
    ...args
}: WithTextGradientStoryArgs) => (
    <Component
        textGradient={textGradient}
        textGradientHover={textGradientHover || undefined}
        textGradientActive={textGradientActive || undefined}
        {...args}
    />
);

export const createButtonWithTextGradientStory = (withTextGradient: any, Button: any, views?: string[]) => {
    const GradientButton = withTextGradient(Button);

    return {
        args: {
            text: 'Button',
            ...(views ? { view: views[0] } : {}),
            ...defaultGradientArgs,
        },
        argTypes: {
            ...(views ? viewArgType(views) : {}),
            ...gradientArgTypes,
        },
        render: renderWithGradient(GradientButton),
    };
};

export const createBadgeWithTextGradientStory = (withTextGradient: any, Badge: any, views?: string[]) => {
    const GradientBadge = withTextGradient(Badge);

    return {
        args: {
            text: 'Badge',
            ...(views ? { view: views[0] } : {}),
            textGradient: defaultGradientArgs.textGradient,
        },
        argTypes: {
            ...(views ? viewArgType(views) : {}),
            textGradient: gradientArgTypes.textGradient,
        },
        render: renderWithGradient(GradientBadge),
    };
};

export const createChipWithTextGradientStory = (
    withTextGradient: any,
    Chip: any,
    views?: string[],
    appearances?: string[],
) => {
    const GradientChip = withTextGradient(Chip);

    return {
        args: {
            text: 'Chip',
            hasClear: false,
            ...(views ? { view: views[0] } : {}),
            ...(appearances ? { appearance: appearances[0] } : {}),
            ...defaultGradientArgs,
        },
        argTypes: {
            ...(views ? viewArgType(views) : {}),
            ...(appearances ? appearanceArgType(appearances) : {}),
            hasClear: { control: { type: 'boolean' } },
            ...gradientArgTypes,
        },
        render: renderWithGradient(GradientChip),
    };
};

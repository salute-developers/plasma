import { disableProps, InSpacingDecorator } from '../../index';
import { getConfigVariations } from '../../helpers';

import { orientations, clips, contentLeftOptions, contentRightOptions, dividerAligns, splitSizes } from './fixtures';

type CreateMetaProps = {
    component: any;
    componentConfig: { horizontal: any; vertical: any };
    title?: string;
    defaultArgs?: {};
    additionalArgTypes?: {};
    disablePropsList?: string[];
};

const commonDisabledArgs = [
    'tabItemContentLeft',
    'pilled',
    'animated',
    'view',
    'as',
    'forwardedAs',
    'outsideScroll',
    'index',
];

export const createMeta = ({
    component,
    componentConfig,
    title = 'Navigation/Tabs',
    defaultArgs = {},
    additionalArgTypes = {},
    disablePropsList = [],
}: CreateMetaProps) => {
    const { regularSizes } = splitSizes(getConfigVariations(componentConfig.horizontal).sizes);

    return {
        title,
        decorators: [InSpacingDecorator],
        component,
        args: {
            size: regularSizes[0],
            orientation: 'horizontal',
            disabled: false,
            disableScroll: false,
            hasDivider: true,
            hasAction: false,
            helperText: '',
            itemQuantity: 6,
            stretch: false,
            width: '15rem',
            height: '10rem',
            maxItemWidth: '',
            dividerAlign: 'left',
            ...defaultArgs,
        },
        argTypes: {
            orientation: {
                options: orientations,
                control: { type: 'select' },
                table: { category: 'variation' },
            },
            size: {
                options: regularSizes,
                control: { type: 'select' },
                table: { category: 'variation' },
            },
            disabled: {
                control: { type: 'boolean' },
                table: { category: 'variation' },
            },
            disableScroll: {
                control: { type: 'boolean' },
                table: { category: 'variation' },
            },
            hasDivider: {
                control: { type: 'boolean' },
                table: { category: 'layout' },
            },
            hasAction: {
                control: { type: 'boolean' },
                table: { category: 'layout' },
            },
            helperText: {
                control: { type: 'text' },
                table: { category: 'layout' },
            },
            itemQuantity: {
                control: { type: 'number' },
                table: { category: 'layout' },
            },
            stretch: {
                control: { type: 'boolean' },
                if: { arg: 'orientation', eq: 'horizontal' },
                table: { category: 'layout' },
            },
            maxItemWidth: {
                control: { type: 'text' },
                if: { arg: 'stretch', truthy: false },
                table: { category: 'layout' },
            },
            clip: {
                options: clips,
                control: { type: 'select' },
                if: { arg: 'stretch', truthy: false },
                table: { category: 'layout' },
            },
            width: {
                control: { type: 'text' },
                if: { arg: 'clip', eq: 'scroll' },
                table: { category: 'layout' },
            },
            height: {
                control: { type: 'text' },
                if: { arg: 'clip', eq: 'scroll' },
                table: { category: 'layout' },
            },
            contentLeft: {
                options: contentLeftOptions,
                control: { type: 'select' },
                table: { category: 'layout' },
            },
            contentRight: {
                options: contentRightOptions,
                control: { type: 'select' },
                if: { arg: 'helperText', eq: '' },
                table: { category: 'layout' },
            },
            dividerAlign: {
                options: dividerAligns,
                control: { type: 'select' },
                if: { arg: 'orientation', eq: 'vertical' },
                table: { category: 'layout' },
            },
            ...additionalArgTypes,
            ...disableProps([...commonDisabledArgs, ...disablePropsList]),
        },
    };
};

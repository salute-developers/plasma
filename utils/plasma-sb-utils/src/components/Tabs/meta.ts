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
            },
            size: {
                options: regularSizes,
                control: { type: 'select' },
            },
            disabled: {
                control: { type: 'boolean' },
            },
            disableScroll: {
                control: { type: 'boolean' },
            },
            hasDivider: {
                control: { type: 'boolean' },
            },
            hasAction: {
                control: { type: 'boolean' },
            },
            helperText: {
                control: { type: 'text' },
            },
            itemQuantity: {
                control: { type: 'number' },
            },
            stretch: {
                control: { type: 'boolean' },
                if: { arg: 'orientation', eq: 'horizontal' },
            },
            maxItemWidth: {
                control: { type: 'text' },
                if: { arg: 'stretch', truthy: false },
            },
            clip: {
                options: clips,
                control: { type: 'select' },
                if: { arg: 'stretch', truthy: false },
            },
            width: {
                control: { type: 'text' },
                if: { arg: 'clip', eq: 'scroll' },
            },
            height: {
                control: { type: 'text' },
                if: { arg: 'clip', eq: 'scroll' },
            },
            contentLeft: {
                options: contentLeftOptions,
                control: { type: 'select' },
            },
            contentRight: {
                options: contentRightOptions,
                control: { type: 'select' },
                if: { arg: 'helperText', eq: '' },
            },
            dividerAlign: {
                options: dividerAligns,
                control: { type: 'select' },
                if: { arg: 'orientation', eq: 'vertical' },
            },
            ...additionalArgTypes,
            ...disableProps([...commonDisabledArgs, ...disablePropsList]),
        },
    };
};

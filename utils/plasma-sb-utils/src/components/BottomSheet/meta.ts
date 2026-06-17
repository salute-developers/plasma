import { disableProps, InSpacingDecorator } from '../../index';

import { handlePlacements } from './fixtures';

type CreateMetaProps = {
    component: any;
    componentConfig: any;
    title?: string;
    defaultArgs?: {};
    additionalArgTypes?: {};
    disablePropsList?: string[];
};

const commonDisabledArgs = [
    'opened',
    'children',
    'contentBeforeHeader',
    'contentHeader',
    'contentFooter',
    'zIndex',
    'onClose',
];

export const createMeta = ({
    component,
    title = 'Overlay/BottomSheet',
    defaultArgs = {},
    additionalArgTypes = {},
    disablePropsList = [],
}: CreateMetaProps) => {
    return {
        title,
        decorators: [InSpacingDecorator],
        component,
        args: {
            handlePlacement: 'inner',
            hasClose: true,
            hasHandle: true,
            withOverlay: true,
            withBlur: true,
            withTransition: true,
            maxHeight: '66dvh',
            showContentBeforeHeader: false,
            showContentHeader: true,
            showContentFooter: true,
            ...defaultArgs,
        },
        argTypes: {
            handlePlacement: {
                options: handlePlacements,
                control: {
                    type: 'inline-radio',
                },
                table: { category: 'layout' },
            },
            maxHeight: {
                control: { type: 'text' },
                table: { category: 'layout' },
            },
            hasClose: {
                control: { type: 'boolean' },
                table: { category: 'layout' },
            },
            hasHandle: {
                control: { type: 'boolean' },
                table: { category: 'layout' },
            },
            withOverlay: {
                control: { type: 'boolean' },
                table: { category: 'overlay' },
            },
            withBlur: {
                control: { type: 'boolean' },
                table: { category: 'overlay' },
            },
            withTransition: {
                control: { type: 'boolean' },
                table: { category: 'animation' },
            },
            showContentBeforeHeader: {
                control: { type: 'boolean' },
                table: { category: 'story' },
            },
            showContentHeader: {
                control: { type: 'boolean' },
                table: { category: 'story' },
            },
            showContentFooter: {
                control: { type: 'boolean' },
                table: { category: 'story' },
            },
            ...additionalArgTypes,
            ...disableProps([...commonDisabledArgs, ...disablePropsList]),
        },
    };
};

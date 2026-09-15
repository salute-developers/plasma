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
    'snapPoints',
    'initialSnapPoint',
    'onSnapPointChange',
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
            },
            maxHeight: {
                control: { type: 'text' },
            },
            hasClose: {
                control: { type: 'boolean' },
            },
            hasHandle: {
                control: { type: 'boolean' },
            },
            withOverlay: {
                control: { type: 'boolean' },
            },
            withBlur: {
                control: { type: 'boolean' },
            },
            withTransition: {
                control: { type: 'boolean' },
            },
            showContentBeforeHeader: {
                control: { type: 'boolean' },
            },
            showContentHeader: {
                control: { type: 'boolean' },
            },
            showContentFooter: {
                control: { type: 'boolean' },
            },
            ...additionalArgTypes,
            ...disableProps([...commonDisabledArgs, ...disablePropsList]),
        },
    };
};

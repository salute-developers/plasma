import { disableProps, InSpacingDecorator } from '../../index';

type CreateMetaProps = {
    component: any;
    componentConfig: any;
    title?: string;
    defaultArgs?: {};
    additionalArgTypes?: {};
    disablePropsList?: string[];
};

const commonDisabledArgs = ['open', 'current', 'onClose', 'steps', 'renderStep', 'onChange'];

export const createMeta = ({
    component,
    componentConfig,
    title = 'Navigation/Tour',
    defaultArgs = {},
    additionalArgTypes = {},
    disablePropsList = [],
}: CreateMetaProps) => {
    return {
        title,
        decorators: [InSpacingDecorator],
        parameters: {
            controls: {
                disableSaveFromUI: true,
            },
        },
        component,
        args: {
            size: 's',
            view: 'default',
            withOverlay: true,
            offset: 12,
            shift: 12,
            highlightOffset: 4,
            highlightBorderRadius: '1rem',
            hasTail: false,
            zIndex: 9000,
            ...defaultArgs,
        },
        argTypes: {
            view: {
                options: componentConfig.views,
                control: { type: 'select' },
            },
            size: {
                options: componentConfig.sizes,
                control: { type: 'select' },
            },
            withOverlay: {
                control: { type: 'boolean' },
            },
            hasTail: {
                control: { type: 'boolean' },
            },
            zIndex: {
                control: { type: 'number' },
            },
            offset: {
                control: { type: 'number' },
            },
            shift: {
                control: { type: 'number' },
            },
            highlightOffset: {
                control: { type: 'number' },
            },
            highlightBorderRadius: {
                control: { type: 'text' },
            },
            overlayColor: {
                control: { type: 'color' },
            },
            ...additionalArgTypes,
            ...disableProps([...commonDisabledArgs, ...disablePropsList]),
        },
    };
};

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
                table: { category: 'variation' },
            },
            size: {
                options: componentConfig.sizes,
                control: { type: 'select' },
                table: { category: 'variation' },
            },
            withOverlay: {
                control: { type: 'boolean' },
                table: { category: 'variation' },
            },
            hasTail: {
                control: { type: 'boolean' },
                table: { category: 'variation' },
            },
            zIndex: {
                control: { type: 'number' },
                table: { category: 'variation' },
            },
            offset: {
                control: { type: 'number' },
                table: { category: 'layout' },
            },
            shift: {
                control: { type: 'number' },
                table: { category: 'layout' },
            },
            highlightOffset: {
                control: { type: 'number' },
                table: { category: 'layout' },
            },
            highlightBorderRadius: {
                control: { type: 'text' },
                table: { category: 'layout' },
            },
            overlayColor: {
                control: { type: 'color' },
                table: { category: 'layout' },
            },
            ...additionalArgTypes,
            ...disableProps([...commonDisabledArgs, ...disablePropsList]),
        },
    };
};

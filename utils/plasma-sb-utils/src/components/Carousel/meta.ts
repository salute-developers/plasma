import { disableProps, InSpacingDecorator } from '../../index';

type CreateMetaProps = {
    component: any;
    componentConfig: any;
    title?: string;
    defaultArgs?: {};
    additionalArgTypes?: {};
    disablePropsList?: string[];
};

export const createMeta = ({
    component,
    componentConfig,
    title = 'Navigation/Carousel',
    defaultArgs = {},
    additionalArgTypes = {},
    disablePropsList = [],
}: CreateMetaProps) => {
    return {
        title,
        decorators: [InSpacingDecorator],
        component,
        args: {
            view: 'default',
            size: 's',
            defaultIndex: 0,
            scrollAlign: 'start',
            slides: 20,
            controlArrowsDisabled: false,
            loop: false,
            autoPlay: false,
            autoPlayInterval: 5000,
            swipeEnabled: false,
            paginationDisabled: false,
            paginationCentered: false,
            gap: '20px',
            virtual: false,
            ...defaultArgs,
        },
        argTypes: {
            view: {
                options: componentConfig.views,
                control: {
                    type: 'select',
                },
            },
            size: {
                options: componentConfig.sizes,
                control: {
                    type: 'inline-radio',
                },
            },
            defaultIndex: {
                control: 'number',
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
            loop: {
                control: 'boolean',
            },
            autoPlay: {
                control: 'boolean',
            },
            autoPlayInterval: {
                control: 'number',
            },
            swipeEnabled: {
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
            virtual: {
                control: 'boolean',
            },
            ...additionalArgTypes,
            ...disableProps([...disablePropsList]),
        },
    };
};

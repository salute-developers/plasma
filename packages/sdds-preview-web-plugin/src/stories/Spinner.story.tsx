import { component, spinnerConfig, mergeConfig } from '@salutejs/plasma-new-hope/styled-components';

const Spinner = component(mergeConfig(spinnerConfig as any, {}));

const SpinnerDefault = {
    name: 'Default',
    args: [
        {
            name: 'customSize',
            value: false,
        },
        {
            name: 'width',
            value: '100px',
        },
        {
            name: 'height',
            value: '100px',
        },
    ],
    render: function Story(args: any) {
        const { width, height, ...rest } = args;
        const customSize = args.customSize ? { width, height } : {};

        return <Spinner {...rest} {...customSize} />;
    },
};

export const SpinnerStories = [SpinnerDefault];

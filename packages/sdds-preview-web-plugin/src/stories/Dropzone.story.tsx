import { component, dropzoneConfig, mergeConfig } from '@salutejs/plasma-new-hope/styled-components';

const Dropzone = component(mergeConfig(dropzoneConfig as any, {}));

const toItems = (values: string[]) => values.map((value) => ({ value, label: value }));

const DropzoneDefault = {
    name: 'Default',
    args: [
        {
            name: 'title',
            value: 'Click to upload',
        },
        {
            name: 'description',
            value: 'or drag and drop files here',
        },
        {
            name: 'iconPlacement',
            value: 'top',
            items: toItems(['top', 'left']),
        },
        {
            name: 'width',
            value: 400,
        },
        {
            name: 'height',
            value: 280,
        },
        {
            name: 'isStretch',
            value: false,
        },
        {
            name: 'multiple',
            value: false,
        },
        {
            name: 'disabled',
            value: false,
        },
    ],
    render: function Story(args: any) {
        const { width, height, isStretch, ...rest } = args;

        return (
            <Dropzone
                {...rest}
                stretch={isStretch}
                width={Number(width) || undefined}
                height={Number(height) || undefined}
            />
        );
    },
};

export const DropzoneStories = [DropzoneDefault];

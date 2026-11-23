import { component, imageConfig, mergeConfig } from '@salutejs/plasma-new-hope/styled-components';

const Image = component(mergeConfig(imageConfig as any));

const toItems = (values: string[]) => values.map((value) => ({ value, label: value }));

const ImageDefault = {
    name: 'Default',
    args: [
        {
            name: 'base',
            value: 'div',
            items: toItems(['div', 'img']),
        },
        {
            name: 'src',
            value: 'https://avatars.githubusercontent.com/u/1813468?v=4',
        },
        {
            name: 'alt',
            value: 'картинка для примера фоном',
        },
        {
            name: 'ratio',
            value: '1/1',
            items: toItems(['1/1', '3/4', '4/3', '9/16', '16/9', '1/2', '2/1']),
        },
        {
            name: 'width',
            value: '200px',
        },
        {
            name: 'height',
            value: '200px',
        },
    ],
    render: function Story(args: any) {
        return (
            <div style={{ maxWidth: '10rem' }}>
                <Image {...args} />
            </div>
        );
    },
};

export const ImageStories = [ImageDefault];

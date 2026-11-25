import { IconChevronRight, IconPlasma } from '@salutejs/plasma-icons';
import { component, cellConfig, mergeConfig } from '@salutejs/plasma-new-hope/styled-components';

const Cell = component(mergeConfig(cellConfig as any, {}));

const CellDefault = {
    name: 'Default',
    args: [
        {
            name: 'stretching',
            value: 'fixed',
            items: [
                {
                    value: 'fixed',
                    label: 'fixed',
                },
                {
                    value: 'filled',
                    label: 'filled',
                },
                {
                    value: 'auto',
                    label: 'auto',
                },
            ],
        },
        {
            name: 'alignContentLeft',
            value: 'center',
            items: [
                {
                    value: 'top',
                    label: 'top',
                },
                {
                    value: 'center',
                    label: 'center',
                },
                {
                    value: 'bottom',
                    label: 'bottom',
                },
            ],
        },
        {
            name: 'alignContentRight',
            value: 'center',
            items: [
                {
                    value: 'top',
                    label: 'top',
                },
                {
                    value: 'center',
                    label: 'center',
                },
                {
                    value: 'bottom',
                    label: 'bottom',
                },
            ],
        },
        {
            name: 'title',
            value: 'Title',
        },
        {
            name: 'subtitle',
            value: 'Subtitle',
        },
        {
            name: 'label',
            value: 'Label',
        },
        {
            name: 'enableContentLeft',
            value: true,
        },
        {
            name: 'enableContentRight',
            value: true,
        },
    ],
    render: function Story(args: any) {
        const getSize = (size: any) => {
            if (size === 'xs' || !size) {
                return 's';
            }

            return size;
        };

        return (
            <Cell
                contentLeft={args.enableContentLeft && <IconPlasma size={getSize(args.size)} />}
                contentRight={args.enableContentRight && <IconChevronRight color="inherit" size="xs" />}
                {...args}
            />
        );
    },
};

export const CellStories = [CellDefault];

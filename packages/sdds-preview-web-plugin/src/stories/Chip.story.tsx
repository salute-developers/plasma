import { IconPlasma, IconShazam } from '@salutejs/plasma-icons';
import { component, chipConfig, mergeConfig } from '@salutejs/plasma-new-hope/styled-components';

const Chip = component(mergeConfig(chipConfig as any, {}));

const ChipDefault = {
    name: 'Default',
    args: [
        {
            name: 'disabled',
            value: false,
        },
        {
            name: 'readOnly',
            value: false,
        },
        {
            name: 'hasClear',
            value: true,
        },
        {
            name: 'text',
            value: 'Text',
        },
        {
            name: 'enableContentLeft',
            value: false,
        },
        {
            name: 'enableContentRight',
            value: false,
        },
    ],
    render: function Story(args: any) {
        const onClick = () => {
            alert('onClick');
        };

        return (
            <Chip
                onClick={onClick}
                {...args}
                contentLeft={args.enableContentLeft ? <IconPlasma color="inherit" /> : undefined}
                contentRight={args.enableContentRight ? <IconShazam color="inherit" /> : undefined}
            />
        );
    },
};

export const ChipStories = [ChipDefault];

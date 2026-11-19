import { Counter } from '@salutejs/plasma-b2c';
import { IconPlasma, IconShazam } from '@salutejs/plasma-icons';
import { component, linkButtonConfig, mergeConfig } from '@salutejs/plasma-new-hope/styled-components';

const LinkButton = component(mergeConfig(linkButtonConfig as any, {}));

const LinkButtonDefault = {
    name: 'Default',
    args: [
        {
            name: 'disabled',
            value: false,
        },
        {
            name: 'isLoading',
            value: false,
        },
        {
            name: 'text',
            value: 'Text',
        },
        {
            name: 'enableContentLeft',
            value: true,
        },
        {
            name: 'enableContentRight',
            value: false,
        },
        {
            name: 'enableCounter',
            value: true,
        },
    ],
    render: function Story(args: any) {
        const onClick = () => {
            alert('onClick');
        };

        return (
            <LinkButton
                additionalContent={args.enableCounter ? <Counter count={0} /> : undefined}
                onClick={onClick}
                {...args}
                contentLeft={args.enableContentLeft ? <IconPlasma color="inherit" /> : undefined}
                contentRight={args.enableContentRight ? <IconShazam color="inherit" /> : undefined}
            />
        );
    },
};

export const LinkButtonStories = [LinkButtonDefault];

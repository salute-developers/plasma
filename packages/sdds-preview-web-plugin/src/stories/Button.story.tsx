import { IconPlasma, IconShazam } from '@salutejs/plasma-icons';
import { component, buttonConfig, mergeConfig } from '@salutejs/plasma-new-hope/styled-components';

const Button = component(mergeConfig(buttonConfig as any, {}));

const ButtonDefault = {
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
            name: 'stretching',
            value: 'fixed',
            items: [
                {
                    value: 'auto',
                    label: 'auto',
                },
                {
                    value: 'filled',
                    label: 'filled',
                },
                {
                    value: 'fixed',
                    label: 'fixed',
                },
            ],
        },
        {
            name: 'contentPlacing',
            value: 'default',
            items: [
                {
                    value: 'default',
                    label: 'default',
                },
                {
                    value: 'relaxed',
                    label: 'relaxed',
                },
            ],
        },
        {
            name: 'value',
            value: 'value',
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
    ],
    render: function Story(args: any) {
        const onClick = () => {
            alert('onClick');
        };

        return (
            <Button
                onClick={onClick}
                {...args}
                contentLeft={args.enableContentLeft ? <IconPlasma color="inherit" /> : undefined}
                contentRight={args.enableContentRight ? <IconShazam color="inherit" /> : undefined}
            />
        );
    },
};

export const ButtonStories = [ButtonDefault];

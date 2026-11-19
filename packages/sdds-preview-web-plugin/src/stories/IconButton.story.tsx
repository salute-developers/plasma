import { IconPlasma } from '@salutejs/plasma-icons';
import { component, iconButtonConfig, mergeConfig } from '@salutejs/plasma-new-hope/styled-components';

const IconButton = component(mergeConfig(iconButtonConfig as any, {}));

const IconButtonDefault = {
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
    ],
    render: function Story(args: any) {
        const onClick = () => {
            alert('onClick');
        };

        return (
            <IconButton onClick={onClick} {...args}>
                <IconPlasma color="inherit" />
            </IconButton>
        );
    },
};

export const IconButtonStories = [IconButtonDefault];

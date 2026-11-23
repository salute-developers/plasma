import { IconPlayCircleFill } from '@salutejs/plasma-icons';
import { component, embedIconButtonConfig, mergeConfig } from '@salutejs/plasma-new-hope/styled-components';

const EmbedIconButton = component(mergeConfig(embedIconButtonConfig as any, {}));

const EmbedIconButtonDefault = {
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

        const getSizeForIcon = (size: any) => {
            const map: Record<string, string> = {
                s: 'xs',
                m: 's',
                l: 'm',
            };

            if (map?.[size]) {
                return map?.[size];
            }

            return size;
        };

        return (
            <EmbedIconButton {...args} onClick={onClick}>
                <IconPlayCircleFill color="inherit" size={getSizeForIcon(args.size)} />
            </EmbedIconButton>
        );
    },
};

export const EmbedIconButtonDefaultStories = [EmbedIconButtonDefault];

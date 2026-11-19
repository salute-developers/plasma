import { IconClose, IconPlasma, IconRefresh } from '@salutejs/plasma-icons';
import { component, fileConfig, mergeConfig } from '@salutejs/plasma-new-hope/styled-components';

const File = component(mergeConfig(fileConfig as any, {}));

const toItems = (values: string[]) => values.map((value) => ({ value, label: value }));

const thumbUrl = 'https://avatars.githubusercontent.com/u/1813468?v=4';

const extraSmallIconStyle = {
    width: '0.75rem',
    height: '0.75rem',
    flex: '0 0 0.75rem',
};

const FileDefault = {
    name: 'Default',
    args: [
        {
            name: 'filename',
            value: 'Document.pdf',
        },
        {
            name: 'description',
            value: '12.55MB',
        },
        {
            name: 'contentType',
            value: 'icon',
            items: toItems(['none', 'icon', 'image']),
        },
        {
            name: 'actionPlacement',
            value: 'right',
            items: toItems(['left', 'right']),
        },
        {
            name: 'isLoading',
            value: false,
        },
        {
            name: 'loaderType',
            value: 'circular',
            items: toItems(['circular', 'linear']),
        },
        {
            name: 'loaderValue',
            value: 0,
        },
        {
            name: 'fileContainerWidth',
            value: '15rem',
        },
    ],
    render: function Story(args: any) {
        const { contentType, fileContainerWidth, loaderValue, ...rest } = args;
        const circularLoading = rest.isLoading && rest.loaderType === 'circular';
        const iconSize = rest.size === 'xs' || circularLoading ? 'xs' : 's';
        const iconStyle = rest.size === 'xs' && circularLoading ? extraSmallIconStyle : undefined;

        const getActionIcon = () => {
            if (rest.view === 'negative' && rest.isLoading) {
                return <IconRefresh size={iconSize} color="inherit" style={iconStyle} />;
            }

            if (rest.view === 'negative' || rest.isLoading) {
                return <IconClose size={iconSize} color="inherit" style={iconStyle} />;
            }

            return <IconPlasma size={iconSize} color="inherit" />;
        };

        const thumbProps = {
            ...(contentType === 'icon' && { fileUrl: rest.filename }),
            ...(contentType === 'image' && { thumbUrl }),
        };

        return (
            <File
                {...rest}
                {...thumbProps}
                loaderValue={Number(loaderValue) || 0}
                style={{ width: fileContainerWidth }}
                actionContent={getActionIcon()}
            />
        );
    },
};

export const FileStories = [FileDefault];

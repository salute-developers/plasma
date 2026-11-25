import { IconPlasma } from '@salutejs/plasma-icons';
import { attachConfig, component, mergeConfig } from '@salutejs/plasma-new-hope/styled-components';
import type { ChangeEvent } from 'react';
import { useState } from 'react';

const Attach = component(mergeConfig(attachConfig as any, {}));

const toItems = (values: string[]) => values.map((value) => ({ value, label: value }));

const AttachDefault = {
    name: 'Default',
    args: [
        {
            name: 'controlled',
            value: false,
        },
        {
            name: 'width',
            value: '400px',
        },
        {
            name: 'fileFormat',
            value: 'all',
            items: toItems(['all', '.doc', '.xls', '.pdf', '.csv', '.txt']),
        },
        {
            name: 'multiple',
            value: false,
        },
        {
            name: 'flow',
            value: 'horizontal',
            items: toItems(['horizontal', 'vertical', 'auto']),
        },
        {
            name: 'hasAttachment',
            value: true,
        },
        {
            name: 'hideButtonOnAttach',
            value: false,
        },
        {
            name: 'buttonType',
            value: 'button',
            items: toItems(['button', 'iconButton']),
        },
        {
            name: 'buttonText',
            value: 'Загрузить файл',
        },
        {
            name: 'buttonValue',
            value: '',
        },
        {
            name: 'enableContentLeft',
            value: false,
        },
        {
            name: 'enableContentRight',
            value: false,
        },
        {
            name: 'disabled',
            value: false,
        },
        {
            name: 'helperText',
            value: 'Подсказка',
        },
        {
            name: 'placement',
            value: 'bottom-start',
            items: toItems(['bottom-start', 'auto', 'top', 'right', 'bottom', 'left']),
        },
        {
            name: 'trigger',
            value: 'click',
            items: toItems(['click', 'hover']),
        },
        {
            name: 'listWidth',
            value: '300px',
        },
        {
            name: 'closeOnOverlayClick',
            value: true,
        },
    ],
    render: function Story(args: any) {
        const {
            controlled,
            buttonText,
            buttonValue,
            width,
            fileFormat,
            enableContentLeft,
            enableContentRight,
            placement,
            trigger,
            listWidth,
            closeOnOverlayClick,
            ...rest
        } = args;
        const [files, setFiles] = useState<File[]>([]);

        const accepted = fileFormat && fileFormat !== 'all' ? [fileFormat] : undefined;
        const iconSize = rest.size === 'xs' ? 'xs' : 's';

        const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
            if (!controlled || !event.target.files) {
                return;
            }

            const incoming = Array.from(event.target.files);
            setFiles(rest.multiple ? (prev) => [...prev, ...incoming] : incoming);
        };

        const handleClear = (fileInfo: { file: File }) => {
            if (!controlled) {
                return;
            }

            setFiles((prev) => prev.filter((file) => file !== fileInfo.file));
        };

        return (
            <div style={{ padding: '3.25rem 1rem 1rem' }}>
                <Attach
                    {...rest}
                    style={{ width }}
                    contentLeft={enableContentLeft ? <IconPlasma size={iconSize} color="inherit" /> : undefined}
                    contentRight={enableContentRight ? <IconPlasma size={iconSize} color="inherit" /> : undefined}
                    acceptedFileFormats={accepted}
                    text={buttonText}
                    value={buttonValue}
                    files={controlled ? files : undefined}
                    onChange={handleChange}
                    onClear={handleClear}
                    dropdownOptions={{ placement, trigger, listWidth, closeOnOverlayClick }}
                />
            </div>
        );
    },
};

export const AttachStories = [AttachDefault];

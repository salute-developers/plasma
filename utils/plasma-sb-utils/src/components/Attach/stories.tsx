import React, { useState } from 'react';
import { action } from 'storybook/actions';
import { IconPlasma } from '@salutejs/plasma-icons';

const onChangeAction = action('onChange');
const onClearAction = action('onClear');

export const createDefaultStory = (Attach: any) => {
    return ({
        controlled,
        buttonType,
        buttonText,
        buttonValue,
        width,
        size,
        fileFormat,
        multiple,
        enableContentLeft,
        enableContentRight,
        placement,
        trigger,
        listWidth,
        closeOnOverlayClick,
        ...rest
    }: any) => {
        const [files, setFiles] = useState<File[]>([]);

        const accepted = fileFormat && fileFormat !== 'all' ? [fileFormat] : undefined;
        const iconSize = size === 'xs' ? 'xs' : 's';

        const dropdownOptions = {
            placement,
            trigger,
            listWidth,
            closeOnOverlayClick,
        };

        const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            onChangeAction(e);

            if (!controlled) {
                return;
            }

            const fileList = e.target.files;
            if (!fileList) {
                return;
            }

            const incoming = Array.from(fileList);
            setFiles(multiple ? (prev) => [...prev, ...incoming] : incoming);
        };

        const handleClear = (fileInfo: { file: File }) => {
            onClearAction(fileInfo);

            if (!controlled) {
                return;
            }

            setFiles((prev) => prev.filter((f) => f !== fileInfo.file));
        };

        return (
            <Attach
                style={{ width }}
                size={size}
                multiple={multiple}
                buttonType={buttonType}
                contentLeft={enableContentLeft ? <IconPlasma size={iconSize} color="inherit" /> : undefined}
                contentRight={enableContentRight ? <IconPlasma size={iconSize} color="inherit" /> : undefined}
                acceptedFileFormats={accepted}
                text={buttonText}
                value={buttonValue}
                files={controlled ? files : undefined}
                onChange={handleChange}
                onClear={handleClear}
                {...rest}
                dropdownOptions={dropdownOptions}
            />
        );
    };
};

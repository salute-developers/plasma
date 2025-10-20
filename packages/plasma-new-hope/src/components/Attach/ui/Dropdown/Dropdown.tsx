import React, { PropsWithChildren, ReactNode, useMemo } from 'react';

import { MoreTrigger } from '../MoreTrigger/MoreTrigger';
import type { DropdownOptions, FileInfo } from '../../Attach.types';
import { CellUI } from '../Cell/Cell';
import { getFileIcon, getFilenameParts } from '../../utils';

import { StyledDropdown } from './Dropdown.styles';

type DropdownItemOption = {
    value: string | number;
    label: string;
    filenameWithoutExtension: string;
    extension: string;
    cellContentLeft: ReactNode;
    key: string;
};

type DropdownUIProps = {
    rootWrapper: ({ children }: PropsWithChildren) => JSX.Element;
    filesInfo: Record<string, FileInfo>;
    handleClear: (key: string) => void;
    size?: string;
    customIcon?: ReactNode;
} & DropdownOptions;

export const DropdownUI = ({
    rootWrapper: Root,
    size,
    filesInfo,
    customIcon,
    handleClear,
    ...rest
}: DropdownUIProps) => {
    const parsedItems = useMemo(() => {
        return Object.entries(filesInfo)
            .filter(([, { isVisible }]) => !isVisible)
            .map(([key, { filenameWithoutExtension, extension }]) => ({
                value: `${filenameWithoutExtension}.${extension}`,
                label: key,
            }));
    }, [filesInfo]);

    return (
        <StyledDropdown
            items={parsedItems as DropdownItemOption[]}
            renderItem={({ value, label }) => {
                const { filenameWithoutExtension, extension } = getFilenameParts(String(value));

                return (
                    <Root>
                        <CellUI
                            size={size}
                            filenameWithoutExtension={filenameWithoutExtension}
                            extension={extension}
                            cellContentLeft={customIcon || getFileIcon(extension, size)}
                            onClick={() => handleClear(label)}
                            isInsideDropdown
                        />
                    </Root>
                );
            }}
            {...rest}
            closeOnSelect={false}
        >
            <MoreTrigger size={size} />
        </StyledDropdown>
    );
};

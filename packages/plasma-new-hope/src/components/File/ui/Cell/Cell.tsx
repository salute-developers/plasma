import React, { forwardRef, ReactNode } from 'react';

import {
    StyledCell,
    FilenameExtensionPart,
    FilenameWrapper,
    TruncatedFilenamePart,
    FileInfoWrapper,
    FileDescription,
} from './Cell.styles';

type CellUIProps = {
    filenameWithoutExtension: string;
    extension: string;
    description?: string;
    size?: string;
    cellContentLeft?: ReactNode;
    cellContentRight?: ReactNode;
    className?: string;
};

export const CellUI = forwardRef<HTMLDivElement, CellUIProps>(
    (
        {
            filenameWithoutExtension,
            extension,
            description,

            className,
            size,
            cellContentLeft,
            cellContentRight,
        },
        ref,
    ) => {
        return (
            <StyledCell
                ref={ref}
                stretching="filled"
                size={size}
                contentLeft={cellContentLeft}
                contentRight={cellContentRight}
                className={className}
            >
                <FileInfoWrapper>
                    <FilenameWrapper>
                        <TruncatedFilenamePart>{filenameWithoutExtension.slice(0, -1)}</TruncatedFilenamePart>
                        <FilenameExtensionPart>
                            {filenameWithoutExtension.at(-1)}
                            {extension}
                        </FilenameExtensionPart>
                    </FilenameWrapper>
                    <FileDescription>{description}</FileDescription>
                </FileInfoWrapper>
            </StyledCell>
        );
    },
);

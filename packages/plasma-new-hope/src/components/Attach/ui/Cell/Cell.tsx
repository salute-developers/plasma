import React, { forwardRef, ReactNode } from 'react';
import { IconCloseCircleOutline } from 'src/components/_Icon';

import { StyledIconButtonCancel } from '../IconButton/IconButton.styles';
import { FilenameExtensionPart, FilenameWrapper, TruncatedFilenamePart } from '../../Attach.styles';

import { StyledCell } from './Cell.styles';

type CellUIProps = {
    filenameWithoutExtension: string;
    extension: string;
    size?: string;
    cellContentLeft?: ReactNode;
    multiple?: boolean;
    flow?: 'horizontal' | 'vertical' | 'auto';
    isHelper?: boolean;
    isInsideDropdown?: boolean;
    onClick?: () => void;
};

export const CellUI = forwardRef<HTMLDivElement, CellUIProps>(
    (
        {
            size,
            cellContentLeft,
            multiple,
            flow,
            filenameWithoutExtension,
            extension,
            isHelper,
            isInsideDropdown,
            onClick,
        },
        ref,
    ) => {
        const textNode = isHelper ? (
            <FilenameExtensionPart>
                {filenameWithoutExtension}.{extension}
            </FilenameExtensionPart>
        ) : (
            <>
                <TruncatedFilenamePart applyEllipsis={!multiple || flow !== 'horizontal'}>
                    {filenameWithoutExtension.slice(0, -1)}
                </TruncatedFilenamePart>
                <FilenameExtensionPart>
                    {filenameWithoutExtension.at(-1)}.{extension}
                </FilenameExtensionPart>
            </>
        );

        return (
            <StyledCell
                ref={ref}
                stretching="fixed"
                size={size}
                contentLeft={cellContentLeft}
                contentRight={
                    <StyledIconButtonCancel onClick={onClick}>
                        <IconCloseCircleOutline size="xs" color="inherit" />
                    </StyledIconButtonCancel>
                }
            >
                <FilenameWrapper isInsideDropdown={isInsideDropdown}>{textNode}</FilenameWrapper>
            </StyledCell>
        );
    },
);

import React, { forwardRef } from 'react';

import type { RootProps } from '../../engines';
import { cx } from '../../utils';
import { getFileIcon } from '../Attach/utils/getFileicon';

import { base as viewCSS } from './variations/_view/base';
import { base as sizeCSS } from './variations/_size/base';
import { base as disabledCSS } from './variations/_disabled/base';
import type { FileProps } from './File.types';
import {
    base,
    FileLabel,
    FileDescription,
    FileTextContent,
    FileThumb,
    FileAction,
    FileLoader,
    FileLinearLoader,
    FileContent,
    StyledProgressBarCircular,
    StyledProgress,
    CancelButton,
    StyledIconClose,
} from './File.styles';
import { classes } from './File.tokens';

export const fileRoot = (Root: RootProps<HTMLDivElement, FileProps>) =>
    forwardRef<HTMLDivElement, FileProps>((props, ref) => {
        const {
            label,
            description,
            actionPlacement = 'right',
            fileUrl,
            thumbIcon,
            thumbUrl,
            actionContent,
            isLoading = false,
            loaderType = 'circular',
            loader,
            loaderValue = 0,
            loaderMaxValue = 100,
            view,
            size,
            disabled = false,
            onCancel,
            className,
            ...rest
        } = props;

        const actionPlacementClass = actionPlacement === 'left' ? classes.fileActionLeft : classes.fileActionRight;
        const disabledClass = disabled ? classes.fileDisabled : undefined;
        const loadingClass = isLoading ? classes.fileLoading : undefined;
        const loaderLinearClass = loaderType === 'linear' ? classes.fileLoaderLinear : undefined;
        const extension = fileUrl ? fileUrl.split('.').pop() : undefined;

        const formatBytes = (bytes: number): string => {
            if (bytes === 0) return '0 Bytes';
            const k = 1024;
            const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
            const i = Math.floor(Math.log(bytes) / Math.log(k));
            return `${parseFloat((bytes / k ** i).toFixed(2))} ${sizes[i]}`;
        };

        const formattedDescription = typeof description === 'number' ? formatBytes(description) : description;

        const renderLoader = () => {
            if (!isLoading) return null;

            if (loaderType === 'linear') {
                return (
                    <FileLinearLoader>
                        {loader || <StyledProgress displayValue={false} value={loaderValue} />}
                    </FileLinearLoader>
                );
            }

            return (
                <FileLoader>
                    {loader || (
                        <StyledProgressBarCircular size="m" value={loaderValue} maxValue={loaderMaxValue}>
                            <CancelButton onClick={onCancel} type="button" aria-label="Cancel">
                                <StyledIconClose />
                            </CancelButton>
                        </StyledProgressBarCircular>
                    )}
                </FileLoader>
            );
        };

        const renderAction = () => {
            if (isLoading && loaderType === 'circular') {
                return renderLoader();
            }

            if (actionContent) {
                return <FileAction>{actionContent}</FileAction>;
            }

            return null;
        };

        return (
            <Root
                ref={ref}
                view={view}
                size={size}
                disabled={disabled}
                className={cx(
                    classes.fileItem,
                    actionPlacementClass,
                    disabledClass,
                    loadingClass,
                    loaderLinearClass,
                    className,
                )}
                {...rest}
            >
                <FileContent>
                    {(thumbUrl || thumbIcon || fileUrl) && (
                        <FileThumb>
                            {thumbUrl ? <img src={thumbUrl} alt="" /> : thumbIcon || getFileIcon(extension, size)}
                        </FileThumb>
                    )}
                    <FileTextContent>
                        <FileLabel>{label}</FileLabel>
                        {formattedDescription && <FileDescription>{formattedDescription}</FileDescription>}
                    </FileTextContent>
                    {renderAction()}
                </FileContent>
                {loaderType === 'linear' && renderLoader()}
            </Root>
        );
    });

export const fileConfig = {
    name: 'File',
    tag: 'div',
    layout: fileRoot,
    base,
    variations: {
        view: {
            css: viewCSS,
        },
        size: {
            css: sizeCSS,
        },
        disabled: {
            css: disabledCSS,
            attrs: true,
        },
    },
    defaults: {
        view: 'default',
        size: 'm',
    },
};

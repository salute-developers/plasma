import React, { forwardRef, useMemo } from 'react';
import cls from 'classnames';
import type { RootProps } from 'src/engines';

import { extractExtension } from '../Attach/utils';

import { getFileIcon } from './utils/getFileIcon';
import { base as viewCSS } from './variations/_view/base';
import { base as sizeCSS } from './variations/_size/base';
import { base as disabledCSS } from './variations/_disabled/base';
import type { FileProps, FileRootProps } from './File.types';
import { base, FileThumb, ThumbImg } from './File.styles';
import { classes } from './File.tokens';
import { CellUI, EmbedIconButtonUI, ProgressBarCircularUI, ProgressUI } from './ui';

export const fileRoot = (Root: RootProps<HTMLDivElement, FileRootProps>) =>
    forwardRef<HTMLDivElement, FileProps>((props, ref) => {
        const {
            className,

            // layout
            filename,
            description,
            actionContent,
            actionPlacement = 'right',
            fileUrl,
            thumbUrl,
            thumbIcon,

            // loader
            loader,
            isLoading = false,
            loaderType = 'circular',
            loaderValue = 0,
            loaderMaxValue = 100,

            // variations
            view,
            size,
            disabled = false,

            // events
            onCancel,
            onActionClick,

            ...rest
        } = props;
        const { extension, filenameWithoutExtension } = useMemo(() => {
            const ext = filename.match(/\./) ? extractExtension(filename) : '';
            const name = ext ? filename.slice(0, -1 - ext.length) : filename;

            return { extension: ext || '', filenameWithoutExtension: name };
        }, [filename]);

        const renderAction = () => {
            if (isLoading && loaderType === 'circular') {
                return (
                    loader || (
                        <ProgressBarCircularUI value={loaderValue} maxValue={loaderMaxValue}>
                            <EmbedIconButtonUI onClick={onCancel} type="button" aria-label="Cancel">
                                {actionContent}
                            </EmbedIconButtonUI>
                        </ProgressBarCircularUI>
                    )
                );
            }

            if (actionContent) {
                return <EmbedIconButtonUI onClick={onActionClick}>{actionContent}</EmbedIconButtonUI>;
            }

            return null;
        };

        const renderFileThumb = () => {
            if (actionPlacement === 'left') {
                return renderAction();
            }

            if (thumbUrl) {
                return (
                    <FileThumb>
                        <ThumbImg src={thumbUrl} alt="" />
                    </FileThumb>
                );
            }

            if (thumbIcon) {
                return <FileThumb>{thumbIcon}</FileThumb>;
            }

            if (fileUrl) {
                return <FileThumb>{getFileIcon(extension, size)}</FileThumb>;
            }

            return null;
        };

        return (
            <Root
                ref={ref}
                className={cls(className, classes.fileItem, { [classes.fileLoaderLinear]: loaderType === 'linear' })}
                view={view}
                size={size}
                disabled={disabled}
                {...rest}
            >
                <CellUI
                    className={cls({ [classes.fileActionLeft]: actionPlacement === 'left' })}
                    filenameWithoutExtension={filenameWithoutExtension}
                    extension={extension ? `.${extension}` : ''}
                    description={description}
                    size={size}
                    cellContentLeft={renderFileThumb()}
                    cellContentRight={actionPlacement === 'right' ? renderAction() : null}
                />
                {isLoading && loaderType === 'linear' && (
                    <>{loader || <ProgressUI displayValue={false} value={loaderValue} />}</>
                )}
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

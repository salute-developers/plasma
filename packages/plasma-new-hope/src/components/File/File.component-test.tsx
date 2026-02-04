import React from 'react';
import { mount, getComponent, getDescribeFN, hasComponent, getBaseVisualTests } from '@salutejs/plasma-cy-utils';
// @ts-ignore
import { IconPlasma, IconRefresh, IconClose } from 'override/_Icon';

import type { FileProps } from './File.types';

const componentExists = hasComponent('File');
const describeFn = getDescribeFN('File');

const getActionIcon = (props?: Pick<FileProps, 'size' | 'view' | 'loaderValue' | 'isLoading' | 'loaderType'>) => {
    const iconSize = props?.size === 'xs' || (props?.isLoading && props?.loaderType === 'circular') ? 'xs' : 's';
    const extraSmallIcon = props?.size === 'xs' && props?.isLoading && props?.loaderType === 'circular';

    const extraSmallIconStyle = {
        width: '0.75rem',
        height: '0.75rem',
        flex: '0 0 0.75rem',
    };

    if (props?.view === 'negative' && props?.isLoading) {
        return <IconRefresh size={iconSize} color="inherit" style={extraSmallIcon && extraSmallIconStyle} />;
    }

    if ((props?.view === 'negative' && !props?.isLoading) || props?.isLoading) {
        return <IconClose size={iconSize} color="inherit" style={extraSmallIcon && extraSmallIconStyle} />;
    }

    return <IconPlasma size={iconSize} color="inherit" />;
};

const fileProps = {
    filename: 'Document.pdf',
    description: '12.55MB',
    fileUrl: 'Document.pdf',
    actionContent: getActionIcon(),
};

const loadingValues = [0, 25, 50, 75, 100];
const fileContainerWidths = ['4rem', '10rem', '20rem', 'fit-content'];

getBaseVisualTests({ component: 'File', componentProps: fileProps, configPropsForMatrix: ['view', 'size'] });

describeFn('plasma-new-hope: File', () => {
    const File = componentExists ? getComponent<FileProps>('File') : () => null;

    it('[PLASMA- ] File: actionPlacement=left', () => {
        mount(
            <File
                {...fileProps}
                actionContent={getActionIcon({ size: 'm', view: 'default' })}
                actionPlacement="left"
            />,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA- ] File: isLoading', () => {
        mount(
            <File
                {...fileProps}
                actionContent={getActionIcon({ size: 'm', view: 'default', isLoading: true })}
                isLoading
            />,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA- ] File: loaderType=linear, loaderValue', () => {
        mount(
            <>
                {loadingValues.map((value) => (
                    <>
                        <File
                            {...fileProps}
                            actionContent={getActionIcon({ size: 'm', view: 'default', isLoading: true })}
                            loaderType="linear"
                            loaderValue={value}
                            isLoading
                        />
                        <br />
                    </>
                ))}
            </>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA- ] File: loaderType=circular, loaderValue', () => {
        mount(
            <>
                {loadingValues.map((value) => (
                    <>
                        <File
                            {...fileProps}
                            actionContent={getActionIcon({ size: 'm', view: 'default', isLoading: true })}
                            loaderType="circular"
                            loaderValue={value}
                            isLoading
                        />
                        <br />
                    </>
                ))}
            </>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA- ] File: fileContainerWidth', () => {
        mount(
            <>
                {fileContainerWidths.map((value) => (
                    <>
                        <File
                            {...fileProps}
                            filename="Very Long Document Name In This Test.pdf"
                            actionContent={getActionIcon({ size: 'm', view: 'default', isLoading: true })}
                            loaderType="circular"
                            loaderValue={50}
                            isLoading
                            style={{ width: value }}
                        />
                        <br />
                    </>
                ))}
            </>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA- ] File: disabled', () => {
        mount(
            <File
                {...fileProps}
                filename="Very Long Document Name In This Test.pdf"
                actionContent={getActionIcon({ size: 'm', view: 'default', isLoading: true })}
                loaderType="circular"
                loaderValue={50}
                isLoading
                disabled
            />,
        );

        cy.matchImageSnapshot();
    });
});

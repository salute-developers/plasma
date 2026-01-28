import React from 'react';
import { mount, getComponent, getDescribeFN, hasComponent, getBaseVisualTests } from '@salutejs/plasma-cy-utils';
// @ts-ignore
import { IconPlasma, IconRefresh, IconClose } from 'override/_Icon';

import type { FileProps } from './File.types';

const componentExists = hasComponent('File');
const describeFn = getDescribeFN('File');

const getActionIcon = (props?: Pick<FileProps, 'size' | 'view' | 'loaderValue' | 'isLoading'>) => {
    const iconSize = props?.size === 'xs' || props?.isLoading ? 'xs' : 's';

    if (props?.view === 'negative' && props?.loaderValue !== 100) {
        return <IconRefresh size={iconSize} color="inherit" />;
    }

    if (props?.isLoading) {
        return <IconClose size={iconSize} color="inherit" />;
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
                            fileContainerWidth={value}
                        />
                        <br />
                    </>
                ))}
            </>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA- ] File: stretched', () => {
        mount(
            <div style={{ width: '500px' }}>
                <File
                    {...fileProps}
                    filename="Very Long Document Name In This Test.pdf"
                    actionContent={getActionIcon({ size: 'm', view: 'default', isLoading: true })}
                    loaderType="circular"
                    loaderValue={50}
                    isLoading
                    stretched
                />
            </div>,
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

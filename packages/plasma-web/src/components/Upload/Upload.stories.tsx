import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import type { StoryObj, Meta } from '@storybook/react';
import { InSpacingDecorator } from '@salutejs/plasma-sb-utils';

import { Upload, ValidationResult } from '.';
import type { UploadProps } from '.';

const meta: Meta<UploadProps> = {
    title: 'Data Entry/Upload',
    component: Upload,
    argTypes: {
        content: {
            table: {
                disable: true,
            },
        },
        loader: {
            table: {
                disable: true,
            },
        },
    },
    decorators: [InSpacingDecorator],
};

export default meta;

const StyledWrapper = styled.div`
    width: 23.75rem;
`;

const StoryDefault = (props: UploadProps) => {
    const [state, setState] = useState({
        status: undefined,
        progress: undefined,
        message: 'Подсказывающее сообщение',
    });

    const onChange = useCallback(() => {
        const interval = setInterval(
            () =>
                setState(({ progress }: { status?: string; progress?: number; message?: string }) => {
                    const value = progress === undefined ? 0 : progress;

                    if (value + 25 > 100) {
                        clearInterval(interval);

                        return {
                            status: 'error',
                            progress: undefined,
                            message: 'Файл не загрузился',
                        };
                    }

                    return {
                        status: undefined,
                        progress: value + 25,
                        message: undefined,
                    };
                }),
            1000,
        );
    }, []);

    const customValidate = useCallback((files: FileList | null): ValidationResult => {
        return {
            message: `Добавлен файл формата ${files[0].type}`,
            status: 'success',
            data: files[0],
        };
    }, []);

    const onValidation = useCallback((result: ValidationResult) => {
        const { message, status: rStatus } = result;

        setState((prevState) => ({
            ...prevState,
            message,
            status: rStatus,
        }));
    }, []);

    return (
        <StyledWrapper>
            <Upload
                status={state.status}
                progress={state.progress}
                message={state.message}
                loader={<div style={{ color: 'green' }}>Кастомная загрузка {state.progress}%</div>}
                onChange={onChange}
                onValidation={onValidation}
                validate={customValidate}
                {...props}
            />
        </StyledWrapper>
    );
};

export const Default: StoryObj<UploadProps> = {
    args: {
        disabled: false,
        content: 'Загрузите файл формата любого',
    },
    render: (args) => <StoryDefault {...args} />,
};

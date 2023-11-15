import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import type { StoryObj, Meta } from '@storybook/react';
import { InSpacingDecorator } from '@salutejs/plasma-sb-utils';

import { ValidationResult } from '../Upload';
import type { StatusType } from '../Upload';

import { UploadAudio } from '.';
import type { UploadAudioProps } from '.';

const meta: Meta<UploadAudioProps> = {
    title: 'Controls/UploadAudio',
    component: UploadAudio,
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

type ValidationState = {
    status?: StatusType;
    message?: string;
};

const StoryAudio = (props: UploadAudioProps) => {
    const [progress, setProgress] = useState(undefined);
    const [state, setState] = useState<ValidationState>({
        status: undefined,
        message: undefined,
    });

    const onValidation = useCallback((result: ValidationResult) => {
        const { message, status: rStatus } = result;

        setState((prevState) => ({
            ...prevState,
            message,
            status: rStatus,
        }));
    }, []);

    const onChange = useCallback(() => {
        const interval = setInterval(
            () =>
                setProgress((prevValue?: number) => {
                    const value = prevValue === undefined ? 0 : prevValue;

                    if (value + 5 > 100) {
                        clearInterval(interval);
                        return undefined;
                    }
                    return value + 5;
                }),
            1000,
        );
    }, []);

    return (
        <StyledWrapper>
            <UploadAudio
                progress={progress}
                onChange={onChange}
                onValidation={onValidation}
                status={state.status}
                message={state.message}
                {...props}
            />
        </StyledWrapper>
    );
};

export const Audio: StoryObj<UploadAudioProps> = {
    args: {
        disabled: false,
    },
    render: (args) => <StoryAudio {...args} />,
};

import React, { useRef, useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import { TextField, H4 } from '@salutejs/plasma-b2c';

import type { ThemeMode } from '../types';
import type { Theme as ThemeType } from '../../builder/types';

const StyledAddTokenSection = styled.div`
    margin-top: 1rem;
`;

const ThemeLabel = styled(H4)`
    margin-bottom: 1rem;
`;

const getDataByThemeMode = (themeMode: ThemeMode, themeData: ThemeType, value: string) => ({
    [value]: {
        default: {
            [value + 'Primary']: {
                value: '#FFFFFFFF',
                comment: '',
            },
        },
        onDark: {
            [value + 'Primary']: {
                value: '#FFFFFFFF',
                comment: '',
            },
        },
        onLight: {
            [value + 'Primary']: {
                value: '#FFFFFFFF',
                comment: '',
            },
        },
        inverse: {
            [value + 'Primary']: {
                value: '#FFFFFFFF',
                comment: '',
            },
        },
    },
    ...themeData[themeMode],
});

const validate = (str: string | null) => str?.match(/^[a-z0-9]*$/g);

interface AddTokenSectionProps {
    isOpen: boolean;
    themeData: ThemeType;
    onAddTokenSectionShow: (value: boolean) => void;
    onThemeDataChange: (data?: ThemeType) => void;
}

export const AddTokenSection = ({
    isOpen,
    themeData,
    onAddTokenSectionShow,
    onThemeDataChange,
}: AddTokenSectionProps) => {
    const ref = useRef<HTMLInputElement>(null);
    const [value, setValue] = useState<string>('');

    const onKeyDown = useCallback(
        (event: React.KeyboardEvent) => {
            if (event.key !== 'Enter') {
                return;
            }

            if (!value) {
                onAddTokenSectionShow(false);
                return;
            }

            onThemeDataChange({
                ...themeData,
                dark: getDataByThemeMode('dark', themeData, value),
                light: getDataByThemeMode('light', themeData, value),
            });

            onAddTokenSectionShow(false);
            setValue('');
        },
        [onAddTokenSectionShow, onThemeDataChange, themeData, value],
    );

    const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        e.persist();

        if (!validate(e.target.value)) {
            return;
        }

        setValue(e.target.value);
    }, []);

    useEffect(() => {
        if (ref.current) {
            ref.current.focus();
        }
    }, [isOpen]);

    if (!isOpen) {
        return null;
    }

    return (
        <StyledAddTokenSection>
            <ThemeLabel bold={false}>Введите название секции</ThemeLabel>
            <TextField ref={ref} maxLength={12} value={value} onChange={onChange} onKeyDown={onKeyDown} />
        </StyledAddTokenSection>
    );
};

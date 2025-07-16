import type { CSSProperties } from 'react';

interface TextFieldProps {
    // Свойства компонента текстфилд
}

type BasicProps = {
    dropdownAlign?: 'left' | 'right';
    dropdownWidth?: 'auto' | 'fullWidth' | CSSProperties['width'];
    dropdownHeight?: CSSProperties['height'];
    columnsQuantity?: 2 | 3;
    onToggle?: (opened: boolean) => void;
    size?: string;
};

export type TimePickerProps = BasicProps & TextFieldProps;

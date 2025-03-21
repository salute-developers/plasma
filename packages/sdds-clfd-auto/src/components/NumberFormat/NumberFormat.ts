import type { ComponentProps, ForwardRefExoticComponent } from 'react';
import { composeNumberFormat } from '@salutejs/plasma-new-hope/styled-components';
import type { CustomNumberFormatProps } from '@salutejs/plasma-new-hope';

import { TextField } from '../TextField/TextField';

/**
 * Note: проблема связанная с выводом типов
 * Выводимому типу "NumberFormat" невозможно присвоить имя без ссылки
 * на "@salutejs/plasma-new-hope/node_modules/react-number-format".
 * Вероятно, оно не является переносимым. Требуется заметка с типом.
 */
type NumberFormatProps = CustomNumberFormatProps & ComponentProps<typeof TextField>;

export const NumberFormat = composeNumberFormat(TextField) as ForwardRefExoticComponent<NumberFormatProps>;

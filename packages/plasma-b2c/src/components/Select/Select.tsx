// import React, { forwardRef, CSSProperties, Ref } from 'react';
// import type { SelectProps, SelectRefElement } from '@salutejs/plasma-hope';
// import {
//     selectConfig,
//     component,
//     mergeConfig,
//     selectItemConfig,
//     cx,
//     popoverClasses,
// } from '@salutejs/plasma-new-hope/styled-components';
// import { IconDone } from '@salutejs/plasma-icons';
// import styled from 'styled-components';

// import { Checkbox } from '../Checkbox';
//
// import { config } from './Select.config';
//
// const mergedConfig = mergeConfig(selectConfig, config);
// export const SelectComponent = component(mergedConfig);
//
// const mergedItemConfig = mergeConfig(selectItemConfig);
// export const SelectItem = component(mergedItemConfig);
//
// const getColor = (status?: SelectProps['status']): string => {
//     switch (status) {
//         case 'success':
//             return '--text-positive';
//         case 'warning':
//             return '--text-warning';
//         case 'error':
//             return '--text-negative';
//         default:
//             return '--text-secondary';
//     }
// };
//
// const HelperText = styled.div<{ status?: SelectProps['status'] }>`
//     color: ${({ status }) => `var(${getColor(status)})`};
//     margin-top: 0.25rem;
//     font-family: var(--plasma-typo-body-xs-font-family), sans-serif;
//     font-size: var(--plasma-typo-body-xs-font-size);
//     font-style: var(--plasma-typo-body-xs-font-style);
//     font-weight: var(--plasma-typo-body-xs-font-weight);
//     letter-spacing: var(--plasma-typo-body-xs-letter-spacing);
//     line-height: var(--plasma-typo-body-xs-line-height);
// `;
//
// const SelectWrapper = styled.div<{
//     listHeight?: number | CSSProperties['height'];
// }>`
//     width: 100%;
//
//     & .select-height {
//         --plasma-select-height: ${({ listHeight }) =>
//             Number.isNaN(Number(listHeight)) ? listHeight : `${listHeight}rem`};
//     }
// `;
//
// /**
//  * Выпадающий список для использования в формах.
//  * Поддерживает выбор одного или нескольких значений.
//  */
// export const Select = forwardRef<SelectRefElement, SelectProps>(
//     (
//         {
//             value,
//             items,
//             onChange,
//             multiselect,
//             separator,
//             status,
//             placeholder,
//             helperText,
//             disabled,
//             onItemSelect,
//             isOpen,
//             listHeight,
//             listOverflow,
//             className,
//             ...rest
//         },
//         ref,
//     ) => {
//         const handleItemSelect: SelectProps['onItemSelect'] = (item, e) => {
//             if (onItemSelect) {
//                 onItemSelect(item, e);
//             }
//         };
//
//         return (
//             <SelectWrapper listHeight={listHeight}>
//                 <SelectComponent
//                     {...(rest as any)}
//                     frame="theme-root"
//                     value={value}
//                     valueType={multiselect ? 'multiple' : 'single'}
//                     placement="bottom"
//                     target="button-like"
//                     disabled={disabled}
//                     onChangeValue={onChange}
//                     label={placeholder}
//                     opened={isOpen}
//                     ref={ref as Ref<HTMLSelectElement>}
//                     className={cx(className, 'select-height')}
//                 >
//                     {items.map((item) => (
//                         <SelectItem
//                             key={item.value}
//                             value={item.value}
//                             text={item.label}
//                             onClick={(e) => handleItemSelect(item, e)}
//                             disabled={item.isDisabled}
//                             contentLeft={
//                                 // eslint-disable-next-line no-nested-ternary
//                                 multiselect ? (
//                                     <Checkbox size="m" />
//                                 ) : item.value === value ? (
//                                     <IconDone size="s" color="inherit" />
//                                 ) : undefined
//                             }
//                         />
//                     ))}
//                 </SelectComponent>
//
//                 {/* TODO: #1153 */}
//                 {helperText && <HelperText status={status}>{helperText}</HelperText>}
//             </SelectWrapper>
//         );
//     },
// );

import React, { forwardRef } from 'react';
import type { SelectProps, SelectRefElement } from '@salutejs/plasma-hope';
import { Select as SelectHope } from '@salutejs/plasma-hope';
import type { SelectNewProps } from '@salutejs/plasma-new-hope';

// TODO: Удалить Select из hope с внедрением компонента SelectNested в new-hope

const SelectBase = SelectHope({ design: 'b2c' });

/**
 * Выпадающий список для использования в формах.
 * Поддерживает выбор одного или нескольких значений.
 */
export const Select = forwardRef<SelectRefElement, SelectNewProps>((props, ref) => {
    return <SelectBase {...props} ref={ref} />;
});

import type { ComboboxItemOption, ComboboxProps, DistributiveOmit, DistributivePick } from '@salutejs/plasma-new-hope';

import React, { ComponentProps } from 'react';

import { config } from './Combobox.config';

declare const ComboboxNew: React.FunctionComponent<
    import('@salutejs/plasma-new-hope/types/engines/types.js').PropsType<{
        view: {
            default: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
            positive: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
            warning: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
            negative: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
        };
        size: {
            l: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
            m: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
            s: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
            xs: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
        };
        labelPlacement: {
            inner: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
            outer: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
        };
        hintView: {
            default: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
        };
        hintSize: {
            m: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
            s: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
        };
        disabled: {
            true: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
        };
        readOnly: {
            true: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
        };
    }> &
        (
            | ({
                  items: ComboboxItemOption[];
                  placement?: import('@salutejs/plasma-new-hope/types/components/Combobox/ComboboxNew/Combobox.types.js').Placement;
                  placeholder?: string;
                  helperText?: string;
                  contentLeft?: React.ReactElement;
                  contentRight?: React.ReactElement;
                  textBefore?: string;
                  textAfter?: string;
                  variant?: 'normal' | 'tight';
                  zIndex?: React.CSSProperties['zIndex'];
                  listMaxHeight?: React.CSSProperties['height'];
                  listWidth?: React.CSSProperties['width'];
                  portal?: string | React.RefObject<HTMLElement>;
                  renderItem?: ((item: ComboboxItemOption) => React.ReactNode) | undefined;
                  renderSelectionIcon?: (
                      selected:
                          | boolean
                          | import('@salutejs/plasma-new-hope/styled-components').SafeExtract<
                                import('@salutejs/plasma-new-hope/types/components/Combobox/ComboboxNew/hooks/getPathMaps.js').CheckedType,
                                'indeterminate'
                            >,
                  ) => React.ReactNode;
                  filter?: ((item: ComboboxItemOption, textValue: string) => boolean) | undefined;
                  closeAfterSelect?: boolean;
                  onChangeValue?: (value: string) => void;
                  filterValue?: (value: string) => boolean;
                  onScroll?: (e: React.UIEvent<HTMLElement>) => void;
                  onToggle?: (isOpen: boolean) => void;
                  beforeList?: React.ReactNode;
                  afterList?: React.ReactNode;
                  virtual?: boolean;
                  mode?: 'default' | 'radio';
                  size?: string;
                  view?: string;
                  emptyStateDescription?: React.ReactNode;
                  treeView?: boolean;
                  arrowPlacement?: 'left' | 'right';
                  flip?: boolean;
                  shift?: boolean;
                  singleLine?: boolean;
                  listHeight?: React.CSSProperties['height'];
                  listOverflow?: React.CSSProperties['overflow'];
              } & import('@salutejs/plasma-new-hope/types/components/TextField/TextField.types.js').LabelProps & {
                      readOnly?: boolean;
                      disabled?: true;
                      alwaysOpened?: false;
                  } & {
                      name: string;
                      onChange?: React.ChangeEventHandler;
                  } & {
                      multiple?: false;
                      defaultValue?: string;
                      value?: never;
                      isTargetAmount?: never | false;
                      targetAmount?: never;
                      renderValue?: never;
                      selectAllOptions?: never;
                      chipClickArea?: never;
                  } & import('@salutejs/plasma-new-hope/types/components/TextField/TextField.types.js').RequiredProps & {
                      hintText: string;
                      hintTrigger?: 'hover' | 'click';
                      hintView?: string;
                      hintSize?: string;
                      hintTargetIcon?: React.ReactNode;
                      hintTargetPlacement?: 'inner' | 'outer';
                      hintPlacement?:
                          | import('@salutejs/plasma-new-hope/styled-components').PopoverPlacement
                          | Array<import('@salutejs/plasma-new-hope/styled-components').PopoverPlacementBasic>;
                      hintHasArrow?: boolean;
                      hintOffset?: [number, number];
                      hintWidth?: string;
                      hintContentLeft?: React.ReactNode;
                  } & Omit<
                      React.InputHTMLAttributes<HTMLInputElement>,
                      'onChange' | 'defaultValue' | 'onScroll' | 'name' | 'value'
                  > &
                  React.RefAttributes<HTMLInputElement>)
            | ({
                  items: ComboboxItemOption[];
                  placement?: import('@salutejs/plasma-new-hope/types/components/Combobox/ComboboxNew/Combobox.types.js').Placement;
                  placeholder?: string;
                  helperText?: string;
                  contentLeft?: React.ReactElement;
                  contentRight?: React.ReactElement;
                  textBefore?: string;
                  textAfter?: string;
                  variant?: 'normal' | 'tight';
                  zIndex?: React.CSSProperties['zIndex'];
                  listMaxHeight?: React.CSSProperties['height'];
                  listWidth?: React.CSSProperties['width'];
                  portal?: string | React.RefObject<HTMLElement>;
                  renderItem?: ((item: ComboboxItemOption) => React.ReactNode) | undefined;
                  renderSelectionIcon?: (
                      selected:
                          | boolean
                          | import('@salutejs/plasma-new-hope/styled-components').SafeExtract<
                                import('@salutejs/plasma-new-hope/types/components/Combobox/ComboboxNew/hooks/getPathMaps.js').CheckedType,
                                'indeterminate'
                            >,
                  ) => React.ReactNode;
                  filter?: ((item: ComboboxItemOption, textValue: string) => boolean) | undefined;
                  closeAfterSelect?: boolean;
                  onChangeValue?: (value: string) => void;
                  filterValue?: (value: string) => boolean;
                  onScroll?: (e: React.UIEvent<HTMLElement>) => void;
                  onToggle?: (isOpen: boolean) => void;
                  beforeList?: React.ReactNode;
                  afterList?: React.ReactNode;
                  virtual?: boolean;
                  mode?: 'default' | 'radio';
                  size?: string;
                  view?: string;
                  emptyStateDescription?: React.ReactNode;
                  treeView?: boolean;
                  arrowPlacement?: 'left' | 'right';
                  flip?: boolean;
                  shift?: boolean;
                  singleLine?: boolean;
                  listHeight?: React.CSSProperties['height'];
                  listOverflow?: React.CSSProperties['overflow'];
              } & import('@salutejs/plasma-new-hope/types/components/TextField/TextField.types.js').LabelProps & {
                      readOnly?: boolean;
                      disabled?: true;
                      alwaysOpened?: false;
                  } & {
                      name: string;
                      onChange?: React.ChangeEventHandler;
                  } & {
                      multiple?: false;
                      defaultValue?: string;
                      value?: never;
                      isTargetAmount?: never | false;
                      targetAmount?: never;
                      renderValue?: never;
                      selectAllOptions?: never;
                      chipClickArea?: never;
                  } & import('@salutejs/plasma-new-hope/types/components/TextField/TextField.types.js').RequiredProps & {
                      hintTrigger?: never;
                      hintText?: never;
                      hintView?: never;
                      hintSize?: never;
                      hintTargetIcon?: never;
                      hintTargetPlacement?: never;
                      hintPlacement?: never;
                      hintHasArrow?: never;
                      hintOffset?: never;
                      hintWidth?: never;
                      hintContentLeft?: never;
                  } & Omit<
                      React.InputHTMLAttributes<HTMLInputElement>,
                      'onChange' | 'defaultValue' | 'onScroll' | 'name' | 'value'
                  > &
                  React.RefAttributes<HTMLInputElement>)
            | ({
                  items: ComboboxItemOption[];
                  placement?: import('@salutejs/plasma-new-hope/types/components/Combobox/ComboboxNew/Combobox.types.js').Placement;
                  placeholder?: string;
                  helperText?: string;
                  contentLeft?: React.ReactElement;
                  contentRight?: React.ReactElement;
                  textBefore?: string;
                  textAfter?: string;
                  variant?: 'normal' | 'tight';
                  zIndex?: React.CSSProperties['zIndex'];
                  listMaxHeight?: React.CSSProperties['height'];
                  listWidth?: React.CSSProperties['width'];
                  portal?: string | React.RefObject<HTMLElement>;
                  renderItem?: ((item: ComboboxItemOption) => React.ReactNode) | undefined;
                  renderSelectionIcon?: (
                      selected:
                          | boolean
                          | import('@salutejs/plasma-new-hope/styled-components').SafeExtract<
                                import('@salutejs/plasma-new-hope/types/components/Combobox/ComboboxNew/hooks/getPathMaps.js').CheckedType,
                                'indeterminate'
                            >,
                  ) => React.ReactNode;
                  filter?: ((item: ComboboxItemOption, textValue: string) => boolean) | undefined;
                  closeAfterSelect?: boolean;
                  onChangeValue?: (value: string) => void;
                  filterValue?: (value: string) => boolean;
                  onScroll?: (e: React.UIEvent<HTMLElement>) => void;
                  onToggle?: (isOpen: boolean) => void;
                  beforeList?: React.ReactNode;
                  afterList?: React.ReactNode;
                  virtual?: boolean;
                  mode?: 'default' | 'radio';
                  size?: string;
                  view?: string;
                  emptyStateDescription?: React.ReactNode;
                  treeView?: boolean;
                  arrowPlacement?: 'left' | 'right';
                  flip?: boolean;
                  shift?: boolean;
                  singleLine?: boolean;
                  listHeight?: React.CSSProperties['height'];
                  listOverflow?: React.CSSProperties['overflow'];
              } & import('@salutejs/plasma-new-hope/types/components/TextField/TextField.types.js').LabelProps & {
                      readOnly?: boolean;
                      disabled?: true;
                      alwaysOpened?: false;
                  } & {
                      name?: never;
                      defaultValue?: never;
                  } & {
                      multiple?: false;
                      value?: string;
                      onChange?: ((value: string, item: ComboboxItemOption | null) => void) | undefined;
                      isTargetAmount?: never | false;
                      targetAmount?: never;
                      renderValue?: never;
                      selectAllOptions?: never;
                      chipClickArea?: never;
                  } & import('@salutejs/plasma-new-hope/types/components/TextField/TextField.types.js').RequiredProps & {
                      hintText: string;
                      hintTrigger?: 'hover' | 'click';
                      hintView?: string;
                      hintSize?: string;
                      hintTargetIcon?: React.ReactNode;
                      hintTargetPlacement?: 'inner' | 'outer';
                      hintPlacement?:
                          | import('@salutejs/plasma-new-hope/styled-components').PopoverPlacement
                          | Array<import('@salutejs/plasma-new-hope/styled-components').PopoverPlacementBasic>;
                      hintHasArrow?: boolean;
                      hintOffset?: [number, number];
                      hintWidth?: string;
                      hintContentLeft?: React.ReactNode;
                  } & Omit<
                      React.InputHTMLAttributes<HTMLInputElement>,
                      'onChange' | 'defaultValue' | 'onScroll' | 'name' | 'value'
                  > &
                  React.RefAttributes<HTMLInputElement>)
            | ({
                  items: ComboboxItemOption[];
                  placement?: import('@salutejs/plasma-new-hope/types/components/Combobox/ComboboxNew/Combobox.types.js').Placement;
                  placeholder?: string;
                  helperText?: string;
                  contentLeft?: React.ReactElement;
                  contentRight?: React.ReactElement;
                  textBefore?: string;
                  textAfter?: string;
                  variant?: 'normal' | 'tight';
                  zIndex?: React.CSSProperties['zIndex'];
                  listMaxHeight?: React.CSSProperties['height'];
                  listWidth?: React.CSSProperties['width'];
                  portal?: string | React.RefObject<HTMLElement>;
                  renderItem?: ((item: ComboboxItemOption) => React.ReactNode) | undefined;
                  renderSelectionIcon?: (
                      selected:
                          | boolean
                          | import('@salutejs/plasma-new-hope/styled-components').SafeExtract<
                                import('@salutejs/plasma-new-hope/types/components/Combobox/ComboboxNew/hooks/getPathMaps.js').CheckedType,
                                'indeterminate'
                            >,
                  ) => React.ReactNode;
                  filter?: ((item: ComboboxItemOption, textValue: string) => boolean) | undefined;
                  closeAfterSelect?: boolean;
                  onChangeValue?: (value: string) => void;
                  filterValue?: (value: string) => boolean;
                  onScroll?: (e: React.UIEvent<HTMLElement>) => void;
                  onToggle?: (isOpen: boolean) => void;
                  beforeList?: React.ReactNode;
                  afterList?: React.ReactNode;
                  virtual?: boolean;
                  mode?: 'default' | 'radio';
                  size?: string;
                  view?: string;
                  emptyStateDescription?: React.ReactNode;
                  treeView?: boolean;
                  arrowPlacement?: 'left' | 'right';
                  flip?: boolean;
                  shift?: boolean;
                  singleLine?: boolean;
                  listHeight?: React.CSSProperties['height'];
                  listOverflow?: React.CSSProperties['overflow'];
              } & import('@salutejs/plasma-new-hope/types/components/TextField/TextField.types.js').LabelProps & {
                      readOnly?: boolean;
                      disabled?: true;
                      alwaysOpened?: false;
                  } & {
                      name?: never;
                      defaultValue?: never;
                  } & {
                      multiple?: false;
                      value?: string;
                      onChange?: ((value: string, item: ComboboxItemOption | null) => void) | undefined;
                      isTargetAmount?: never | false;
                      targetAmount?: never;
                      renderValue?: never;
                      selectAllOptions?: never;
                      chipClickArea?: never;
                  } & import('@salutejs/plasma-new-hope/types/components/TextField/TextField.types.js').RequiredProps & {
                      hintTrigger?: never;
                      hintText?: never;
                      hintView?: never;
                      hintSize?: never;
                      hintTargetIcon?: never;
                      hintTargetPlacement?: never;
                      hintPlacement?: never;
                      hintHasArrow?: never;
                      hintOffset?: never;
                      hintWidth?: never;
                      hintContentLeft?: never;
                  } & Omit<
                      React.InputHTMLAttributes<HTMLInputElement>,
                      'onChange' | 'defaultValue' | 'onScroll' | 'name' | 'value'
                  > &
                  React.RefAttributes<HTMLInputElement>)
            | ({
                  items: ComboboxItemOption[];
                  placement?: import('@salutejs/plasma-new-hope/types/components/Combobox/ComboboxNew/Combobox.types.js').Placement;
                  placeholder?: string;
                  helperText?: string;
                  contentLeft?: React.ReactElement;
                  contentRight?: React.ReactElement;
                  textBefore?: string;
                  textAfter?: string;
                  variant?: 'normal' | 'tight';
                  zIndex?: React.CSSProperties['zIndex'];
                  listMaxHeight?: React.CSSProperties['height'];
                  listWidth?: React.CSSProperties['width'];
                  portal?: string | React.RefObject<HTMLElement>;
                  renderItem?: ((item: ComboboxItemOption) => React.ReactNode) | undefined;
                  renderSelectionIcon?: (
                      selected:
                          | boolean
                          | import('@salutejs/plasma-new-hope/styled-components').SafeExtract<
                                import('@salutejs/plasma-new-hope/types/components/Combobox/ComboboxNew/hooks/getPathMaps.js').CheckedType,
                                'indeterminate'
                            >,
                  ) => React.ReactNode;
                  filter?: ((item: ComboboxItemOption, textValue: string) => boolean) | undefined;
                  closeAfterSelect?: boolean;
                  onChangeValue?: (value: string) => void;
                  filterValue?: (value: string) => boolean;
                  onScroll?: (e: React.UIEvent<HTMLElement>) => void;
                  onToggle?: (isOpen: boolean) => void;
                  beforeList?: React.ReactNode;
                  afterList?: React.ReactNode;
                  virtual?: boolean;
                  mode?: 'default' | 'radio';
                  size?: string;
                  view?: string;
                  emptyStateDescription?: React.ReactNode;
                  treeView?: boolean;
                  arrowPlacement?: 'left' | 'right';
                  flip?: boolean;
                  shift?: boolean;
                  singleLine?: boolean;
                  listHeight?: React.CSSProperties['height'];
                  listOverflow?: React.CSSProperties['overflow'];
              } & import('@salutejs/plasma-new-hope/types/components/TextField/TextField.types.js').LabelProps & {
                      readOnly?: boolean;
                      disabled?: true;
                      alwaysOpened?: false;
                  } & {
                      name?: never;
                      defaultValue?: never;
                  } & {
                      multiple: true;
                      value?: string[];
                      onChange?: ((value: string[], item: ComboboxItemOption | null) => void) | undefined;
                      isTargetAmount?: true;
                      targetAmount?: number;
                      renderValue?: ((item: ComboboxItemOption) => string) | undefined;
                      selectAllOptions?: import('@salutejs/plasma-new-hope/types/components/Combobox/ComboboxNew/Combobox.types.js').SelectAllProps;
                      chipClickArea?: 'full' | 'close-icon';
                  } & import('@salutejs/plasma-new-hope/types/components/TextField/TextField.types.js').RequiredProps & {
                      hintText: string;
                      hintTrigger?: 'hover' | 'click';
                      hintView?: string;
                      hintSize?: string;
                      hintTargetIcon?: React.ReactNode;
                      hintTargetPlacement?: 'inner' | 'outer';
                      hintPlacement?:
                          | import('@salutejs/plasma-new-hope/styled-components').PopoverPlacement
                          | Array<import('@salutejs/plasma-new-hope/styled-components').PopoverPlacementBasic>;
                      hintHasArrow?: boolean;
                      hintOffset?: [number, number];
                      hintWidth?: string;
                      hintContentLeft?: React.ReactNode;
                  } & Omit<
                      React.InputHTMLAttributes<HTMLInputElement>,
                      'onChange' | 'defaultValue' | 'onScroll' | 'name' | 'value'
                  > &
                  React.RefAttributes<HTMLInputElement>)
            | ({
                  items: ComboboxItemOption[];
                  placement?: import('@salutejs/plasma-new-hope/types/components/Combobox/ComboboxNew/Combobox.types.js').Placement;
                  placeholder?: string;
                  helperText?: string;
                  contentLeft?: React.ReactElement;
                  contentRight?: React.ReactElement;
                  textBefore?: string;
                  textAfter?: string;
                  variant?: 'normal' | 'tight';
                  zIndex?: React.CSSProperties['zIndex'];
                  listMaxHeight?: React.CSSProperties['height'];
                  listWidth?: React.CSSProperties['width'];
                  portal?: string | React.RefObject<HTMLElement>;
                  renderItem?: ((item: ComboboxItemOption) => React.ReactNode) | undefined;
                  renderSelectionIcon?: (
                      selected:
                          | boolean
                          | import('@salutejs/plasma-new-hope/styled-components').SafeExtract<
                                import('@salutejs/plasma-new-hope/types/components/Combobox/ComboboxNew/hooks/getPathMaps.js').CheckedType,
                                'indeterminate'
                            >,
                  ) => React.ReactNode;
                  filter?: ((item: ComboboxItemOption, textValue: string) => boolean) | undefined;
                  closeAfterSelect?: boolean;
                  onChangeValue?: (value: string) => void;
                  filterValue?: (value: string) => boolean;
                  onScroll?: (e: React.UIEvent<HTMLElement>) => void;
                  onToggle?: (isOpen: boolean) => void;
                  beforeList?: React.ReactNode;
                  afterList?: React.ReactNode;
                  virtual?: boolean;
                  mode?: 'default' | 'radio';
                  size?: string;
                  view?: string;
                  emptyStateDescription?: React.ReactNode;
                  treeView?: boolean;
                  arrowPlacement?: 'left' | 'right';
                  flip?: boolean;
                  shift?: boolean;
                  singleLine?: boolean;
                  listHeight?: React.CSSProperties['height'];
                  listOverflow?: React.CSSProperties['overflow'];
              } & import('@salutejs/plasma-new-hope/types/components/TextField/TextField.types.js').LabelProps & {
                      readOnly?: boolean;
                      disabled?: true;
                      alwaysOpened?: false;
                  } & {
                      name?: never;
                      defaultValue?: never;
                  } & {
                      multiple: true;
                      value?: string[];
                      onChange?: ((value: string[], item: ComboboxItemOption | null) => void) | undefined;
                      isTargetAmount?: true;
                      targetAmount?: number;
                      renderValue?: ((item: ComboboxItemOption) => string) | undefined;
                      selectAllOptions?: import('@salutejs/plasma-new-hope/types/components/Combobox/ComboboxNew/Combobox.types.js').SelectAllProps;
                      chipClickArea?: 'full' | 'close-icon';
                  } & import('@salutejs/plasma-new-hope/types/components/TextField/TextField.types.js').RequiredProps & {
                      hintTrigger?: never;
                      hintText?: never;
                      hintView?: never;
                      hintSize?: never;
                      hintTargetIcon?: never;
                      hintTargetPlacement?: never;
                      hintPlacement?: never;
                      hintHasArrow?: never;
                      hintOffset?: never;
                      hintWidth?: never;
                      hintContentLeft?: never;
                  } & Omit<
                      React.InputHTMLAttributes<HTMLInputElement>,
                      'onChange' | 'defaultValue' | 'onScroll' | 'name' | 'value'
                  > &
                  React.RefAttributes<HTMLInputElement>)
            | ({
                  items: ComboboxItemOption[];
                  placement?: import('@salutejs/plasma-new-hope/types/components/Combobox/ComboboxNew/Combobox.types.js').Placement;
                  placeholder?: string;
                  helperText?: string;
                  contentLeft?: React.ReactElement;
                  contentRight?: React.ReactElement;
                  textBefore?: string;
                  textAfter?: string;
                  variant?: 'normal' | 'tight';
                  zIndex?: React.CSSProperties['zIndex'];
                  listMaxHeight?: React.CSSProperties['height'];
                  listWidth?: React.CSSProperties['width'];
                  portal?: string | React.RefObject<HTMLElement>;
                  renderItem?: ((item: ComboboxItemOption) => React.ReactNode) | undefined;
                  renderSelectionIcon?: (
                      selected:
                          | boolean
                          | import('@salutejs/plasma-new-hope/styled-components').SafeExtract<
                                import('@salutejs/plasma-new-hope/types/components/Combobox/ComboboxNew/hooks/getPathMaps.js').CheckedType,
                                'indeterminate'
                            >,
                  ) => React.ReactNode;
                  filter?: ((item: ComboboxItemOption, textValue: string) => boolean) | undefined;
                  closeAfterSelect?: boolean;
                  onChangeValue?: (value: string) => void;
                  filterValue?: (value: string) => boolean;
                  onScroll?: (e: React.UIEvent<HTMLElement>) => void;
                  onToggle?: (isOpen: boolean) => void;
                  beforeList?: React.ReactNode;
                  afterList?: React.ReactNode;
                  virtual?: boolean;
                  mode?: 'default' | 'radio';
                  size?: string;
                  view?: string;
                  emptyStateDescription?: React.ReactNode;
                  treeView?: boolean;
                  arrowPlacement?: 'left' | 'right';
                  flip?: boolean;
                  shift?: boolean;
                  singleLine?: boolean;
                  listHeight?: React.CSSProperties['height'];
                  listOverflow?: React.CSSProperties['overflow'];
              } & import('@salutejs/plasma-new-hope/types/components/TextField/TextField.types.js').LabelProps & {
                      readOnly?: boolean;
                      disabled?: true;
                      alwaysOpened?: false;
                  } & {
                      name: string;
                      onChange?: React.ChangeEventHandler;
                  } & {
                      multiple: true;
                      defaultValue?: string[];
                      value?: never;
                      isTargetAmount?: true;
                      targetAmount?: number;
                      renderValue?: ((item: ComboboxItemOption) => string) | undefined;
                      selectAllOptions?: import('@salutejs/plasma-new-hope/types/components/Combobox/ComboboxNew/Combobox.types.js').SelectAllProps;
                      chipClickArea?: 'full' | 'close-icon';
                  } & import('@salutejs/plasma-new-hope/types/components/TextField/TextField.types.js').RequiredProps & {
                      hintText: string;
                      hintTrigger?: 'hover' | 'click';
                      hintView?: string;
                      hintSize?: string;
                      hintTargetIcon?: React.ReactNode;
                      hintTargetPlacement?: 'inner' | 'outer';
                      hintPlacement?:
                          | import('@salutejs/plasma-new-hope/styled-components').PopoverPlacement
                          | Array<import('@salutejs/plasma-new-hope/styled-components').PopoverPlacementBasic>;
                      hintHasArrow?: boolean;
                      hintOffset?: [number, number];
                      hintWidth?: string;
                      hintContentLeft?: React.ReactNode;
                  } & Omit<
                      React.InputHTMLAttributes<HTMLInputElement>,
                      'onChange' | 'defaultValue' | 'onScroll' | 'name' | 'value'
                  > &
                  React.RefAttributes<HTMLInputElement>)
            | ({
                  items: ComboboxItemOption[];
                  placement?: import('@salutejs/plasma-new-hope/types/components/Combobox/ComboboxNew/Combobox.types.js').Placement;
                  placeholder?: string;
                  helperText?: string;
                  contentLeft?: React.ReactElement;
                  contentRight?: React.ReactElement;
                  textBefore?: string;
                  textAfter?: string;
                  variant?: 'normal' | 'tight';
                  zIndex?: React.CSSProperties['zIndex'];
                  listMaxHeight?: React.CSSProperties['height'];
                  listWidth?: React.CSSProperties['width'];
                  portal?: string | React.RefObject<HTMLElement>;
                  renderItem?: ((item: ComboboxItemOption) => React.ReactNode) | undefined;
                  renderSelectionIcon?: (
                      selected:
                          | boolean
                          | import('@salutejs/plasma-new-hope/styled-components').SafeExtract<
                                import('@salutejs/plasma-new-hope/types/components/Combobox/ComboboxNew/hooks/getPathMaps.js').CheckedType,
                                'indeterminate'
                            >,
                  ) => React.ReactNode;
                  filter?: ((item: ComboboxItemOption, textValue: string) => boolean) | undefined;
                  closeAfterSelect?: boolean;
                  onChangeValue?: (value: string) => void;
                  filterValue?: (value: string) => boolean;
                  onScroll?: (e: React.UIEvent<HTMLElement>) => void;
                  onToggle?: (isOpen: boolean) => void;
                  beforeList?: React.ReactNode;
                  afterList?: React.ReactNode;
                  virtual?: boolean;
                  mode?: 'default' | 'radio';
                  size?: string;
                  view?: string;
                  emptyStateDescription?: React.ReactNode;
                  treeView?: boolean;
                  arrowPlacement?: 'left' | 'right';
                  flip?: boolean;
                  shift?: boolean;
                  singleLine?: boolean;
                  listHeight?: React.CSSProperties['height'];
                  listOverflow?: React.CSSProperties['overflow'];
              } & import('@salutejs/plasma-new-hope/types/components/TextField/TextField.types.js').LabelProps & {
                      readOnly?: boolean;
                      disabled?: true;
                      alwaysOpened?: false;
                  } & {
                      name: string;
                      onChange?: React.ChangeEventHandler;
                  } & {
                      multiple: true;
                      defaultValue?: string[];
                      value?: never;
                      isTargetAmount?: true;
                      targetAmount?: number;
                      renderValue?: ((item: ComboboxItemOption) => string) | undefined;
                      selectAllOptions?: import('@salutejs/plasma-new-hope/types/components/Combobox/ComboboxNew/Combobox.types.js').SelectAllProps;
                      chipClickArea?: 'full' | 'close-icon';
                  } & import('@salutejs/plasma-new-hope/types/components/TextField/TextField.types.js').RequiredProps & {
                      hintTrigger?: never;
                      hintText?: never;
                      hintView?: never;
                      hintSize?: never;
                      hintTargetIcon?: never;
                      hintTargetPlacement?: never;
                      hintPlacement?: never;
                      hintHasArrow?: never;
                      hintOffset?: never;
                      hintWidth?: never;
                      hintContentLeft?: never;
                  } & Omit<
                      React.InputHTMLAttributes<HTMLInputElement>,
                      'onChange' | 'defaultValue' | 'onScroll' | 'name' | 'value'
                  > &
                  React.RefAttributes<HTMLInputElement>)
            | ({
                  items: ComboboxItemOption[];
                  placement?: import('@salutejs/plasma-new-hope/types/components/Combobox/ComboboxNew/Combobox.types.js').Placement;
                  placeholder?: string;
                  helperText?: string;
                  contentLeft?: React.ReactElement;
                  contentRight?: React.ReactElement;
                  textBefore?: string;
                  textAfter?: string;
                  variant?: 'normal' | 'tight';
                  zIndex?: React.CSSProperties['zIndex'];
                  listMaxHeight?: React.CSSProperties['height'];
                  listWidth?: React.CSSProperties['width'];
                  portal?: string | React.RefObject<HTMLElement>;
                  renderItem?: ((item: ComboboxItemOption) => React.ReactNode) | undefined;
                  renderSelectionIcon?: (
                      selected:
                          | boolean
                          | import('@salutejs/plasma-new-hope/styled-components').SafeExtract<
                                import('@salutejs/plasma-new-hope/types/components/Combobox/ComboboxNew/hooks/getPathMaps.js').CheckedType,
                                'indeterminate'
                            >,
                  ) => React.ReactNode;
                  filter?: ((item: ComboboxItemOption, textValue: string) => boolean) | undefined;
                  closeAfterSelect?: boolean;
                  onChangeValue?: (value: string) => void;
                  filterValue?: (value: string) => boolean;
                  onScroll?: (e: React.UIEvent<HTMLElement>) => void;
                  onToggle?: (isOpen: boolean) => void;
                  beforeList?: React.ReactNode;
                  afterList?: React.ReactNode;
                  virtual?: boolean;
                  mode?: 'default' | 'radio';
                  size?: string;
                  view?: string;
                  emptyStateDescription?: React.ReactNode;
                  treeView?: boolean;
                  arrowPlacement?: 'left' | 'right';
                  flip?: boolean;
                  shift?: boolean;
                  singleLine?: boolean;
                  listHeight?: React.CSSProperties['height'];
                  listOverflow?: React.CSSProperties['overflow'];
              } & import('@salutejs/plasma-new-hope/types/components/TextField/TextField.types.js').LabelProps & {
                      readOnly?: true;
                      disabled?: boolean;
                      alwaysOpened?: false;
                  } & {
                      name: string;
                      onChange?: React.ChangeEventHandler;
                  } & {
                      multiple?: false;
                      defaultValue?: string;
                      value?: never;
                      isTargetAmount?: never | false;
                      targetAmount?: never;
                      renderValue?: never;
                      selectAllOptions?: never;
                      chipClickArea?: never;
                  } & import('@salutejs/plasma-new-hope/types/components/TextField/TextField.types.js').RequiredProps & {
                      hintText: string;
                      hintTrigger?: 'hover' | 'click';
                      hintView?: string;
                      hintSize?: string;
                      hintTargetIcon?: React.ReactNode;
                      hintTargetPlacement?: 'inner' | 'outer';
                      hintPlacement?:
                          | import('@salutejs/plasma-new-hope/styled-components').PopoverPlacement
                          | Array<import('@salutejs/plasma-new-hope/styled-components').PopoverPlacementBasic>;
                      hintHasArrow?: boolean;
                      hintOffset?: [number, number];
                      hintWidth?: string;
                      hintContentLeft?: React.ReactNode;
                  } & Omit<
                      React.InputHTMLAttributes<HTMLInputElement>,
                      'onChange' | 'defaultValue' | 'onScroll' | 'name' | 'value'
                  > &
                  React.RefAttributes<HTMLInputElement>)
            | ({
                  items: ComboboxItemOption[];
                  placement?: import('@salutejs/plasma-new-hope/types/components/Combobox/ComboboxNew/Combobox.types.js').Placement;
                  placeholder?: string;
                  helperText?: string;
                  contentLeft?: React.ReactElement;
                  contentRight?: React.ReactElement;
                  textBefore?: string;
                  textAfter?: string;
                  variant?: 'normal' | 'tight';
                  zIndex?: React.CSSProperties['zIndex'];
                  listMaxHeight?: React.CSSProperties['height'];
                  listWidth?: React.CSSProperties['width'];
                  portal?: string | React.RefObject<HTMLElement>;
                  renderItem?: ((item: ComboboxItemOption) => React.ReactNode) | undefined;
                  renderSelectionIcon?: (
                      selected:
                          | boolean
                          | import('@salutejs/plasma-new-hope/styled-components').SafeExtract<
                                import('@salutejs/plasma-new-hope/types/components/Combobox/ComboboxNew/hooks/getPathMaps.js').CheckedType,
                                'indeterminate'
                            >,
                  ) => React.ReactNode;
                  filter?: ((item: ComboboxItemOption, textValue: string) => boolean) | undefined;
                  closeAfterSelect?: boolean;
                  onChangeValue?: (value: string) => void;
                  filterValue?: (value: string) => boolean;
                  onScroll?: (e: React.UIEvent<HTMLElement>) => void;
                  onToggle?: (isOpen: boolean) => void;
                  beforeList?: React.ReactNode;
                  afterList?: React.ReactNode;
                  virtual?: boolean;
                  mode?: 'default' | 'radio';
                  size?: string;
                  view?: string;
                  emptyStateDescription?: React.ReactNode;
                  treeView?: boolean;
                  arrowPlacement?: 'left' | 'right';
                  flip?: boolean;
                  shift?: boolean;
                  singleLine?: boolean;
                  listHeight?: React.CSSProperties['height'];
                  listOverflow?: React.CSSProperties['overflow'];
              } & import('@salutejs/plasma-new-hope/types/components/TextField/TextField.types.js').LabelProps & {
                      readOnly?: true;
                      disabled?: boolean;
                      alwaysOpened?: false;
                  } & {
                      name: string;
                      onChange?: React.ChangeEventHandler;
                  } & {
                      multiple?: false;
                      defaultValue?: string;
                      value?: never;
                      isTargetAmount?: never | false;
                      targetAmount?: never;
                      renderValue?: never;
                      selectAllOptions?: never;
                      chipClickArea?: never;
                  } & import('@salutejs/plasma-new-hope/types/components/TextField/TextField.types.js').RequiredProps & {
                      hintTrigger?: never;
                      hintText?: never;
                      hintView?: never;
                      hintSize?: never;
                      hintTargetIcon?: never;
                      hintTargetPlacement?: never;
                      hintPlacement?: never;
                      hintHasArrow?: never;
                      hintOffset?: never;
                      hintWidth?: never;
                      hintContentLeft?: never;
                  } & Omit<
                      React.InputHTMLAttributes<HTMLInputElement>,
                      'onChange' | 'defaultValue' | 'onScroll' | 'name' | 'value'
                  > &
                  React.RefAttributes<HTMLInputElement>)
            | ({
                  items: ComboboxItemOption[];
                  placement?: import('@salutejs/plasma-new-hope/types/components/Combobox/ComboboxNew/Combobox.types.js').Placement;
                  placeholder?: string;
                  helperText?: string;
                  contentLeft?: React.ReactElement;
                  contentRight?: React.ReactElement;
                  textBefore?: string;
                  textAfter?: string;
                  variant?: 'normal' | 'tight';
                  zIndex?: React.CSSProperties['zIndex'];
                  listMaxHeight?: React.CSSProperties['height'];
                  listWidth?: React.CSSProperties['width'];
                  portal?: string | React.RefObject<HTMLElement>;
                  renderItem?: ((item: ComboboxItemOption) => React.ReactNode) | undefined;
                  renderSelectionIcon?: (
                      selected:
                          | boolean
                          | import('@salutejs/plasma-new-hope/styled-components').SafeExtract<
                                import('@salutejs/plasma-new-hope/types/components/Combobox/ComboboxNew/hooks/getPathMaps.js').CheckedType,
                                'indeterminate'
                            >,
                  ) => React.ReactNode;
                  filter?: ((item: ComboboxItemOption, textValue: string) => boolean) | undefined;
                  closeAfterSelect?: boolean;
                  onChangeValue?: (value: string) => void;
                  filterValue?: (value: string) => boolean;
                  onScroll?: (e: React.UIEvent<HTMLElement>) => void;
                  onToggle?: (isOpen: boolean) => void;
                  beforeList?: React.ReactNode;
                  afterList?: React.ReactNode;
                  virtual?: boolean;
                  mode?: 'default' | 'radio';
                  size?: string;
                  view?: string;
                  emptyStateDescription?: React.ReactNode;
                  treeView?: boolean;
                  arrowPlacement?: 'left' | 'right';
                  flip?: boolean;
                  shift?: boolean;
                  singleLine?: boolean;
                  listHeight?: React.CSSProperties['height'];
                  listOverflow?: React.CSSProperties['overflow'];
              } & import('@salutejs/plasma-new-hope/types/components/TextField/TextField.types.js').LabelProps & {
                      readOnly?: true;
                      disabled?: boolean;
                      alwaysOpened?: false;
                  } & {
                      name?: never;
                      defaultValue?: never;
                  } & {
                      multiple?: false;
                      value?: string;
                      onChange?: ((value: string, item: ComboboxItemOption | null) => void) | undefined;
                      isTargetAmount?: never | false;
                      targetAmount?: never;
                      renderValue?: never;
                      selectAllOptions?: never;
                      chipClickArea?: never;
                  } & import('@salutejs/plasma-new-hope/types/components/TextField/TextField.types.js').RequiredProps & {
                      hintText: string;
                      hintTrigger?: 'hover' | 'click';
                      hintView?: string;
                      hintSize?: string;
                      hintTargetIcon?: React.ReactNode;
                      hintTargetPlacement?: 'inner' | 'outer';
                      hintPlacement?:
                          | import('@salutejs/plasma-new-hope/styled-components').PopoverPlacement
                          | Array<import('@salutejs/plasma-new-hope/styled-components').PopoverPlacementBasic>;
                      hintHasArrow?: boolean;
                      hintOffset?: [number, number];
                      hintWidth?: string;
                      hintContentLeft?: React.ReactNode;
                  } & Omit<
                      React.InputHTMLAttributes<HTMLInputElement>,
                      'onChange' | 'defaultValue' | 'onScroll' | 'name' | 'value'
                  > &
                  React.RefAttributes<HTMLInputElement>)
            | ({
                  items: ComboboxItemOption[];
                  placement?: import('@salutejs/plasma-new-hope/types/components/Combobox/ComboboxNew/Combobox.types.js').Placement;
                  placeholder?: string;
                  helperText?: string;
                  contentLeft?: React.ReactElement;
                  contentRight?: React.ReactElement;
                  textBefore?: string;
                  textAfter?: string;
                  variant?: 'normal' | 'tight';
                  zIndex?: React.CSSProperties['zIndex'];
                  listMaxHeight?: React.CSSProperties['height'];
                  listWidth?: React.CSSProperties['width'];
                  portal?: string | React.RefObject<HTMLElement>;
                  renderItem?: ((item: ComboboxItemOption) => React.ReactNode) | undefined;
                  renderSelectionIcon?: (
                      selected:
                          | boolean
                          | import('@salutejs/plasma-new-hope/styled-components').SafeExtract<
                                import('@salutejs/plasma-new-hope/types/components/Combobox/ComboboxNew/hooks/getPathMaps.js').CheckedType,
                                'indeterminate'
                            >,
                  ) => React.ReactNode;
                  filter?: ((item: ComboboxItemOption, textValue: string) => boolean) | undefined;
                  closeAfterSelect?: boolean;
                  onChangeValue?: (value: string) => void;
                  filterValue?: (value: string) => boolean;
                  onScroll?: (e: React.UIEvent<HTMLElement>) => void;
                  onToggle?: (isOpen: boolean) => void;
                  beforeList?: React.ReactNode;
                  afterList?: React.ReactNode;
                  virtual?: boolean;
                  mode?: 'default' | 'radio';
                  size?: string;
                  view?: string;
                  emptyStateDescription?: React.ReactNode;
                  treeView?: boolean;
                  arrowPlacement?: 'left' | 'right';
                  flip?: boolean;
                  shift?: boolean;
                  singleLine?: boolean;
                  listHeight?: React.CSSProperties['height'];
                  listOverflow?: React.CSSProperties['overflow'];
              } & import('@salutejs/plasma-new-hope/types/components/TextField/TextField.types.js').LabelProps & {
                      readOnly?: true;
                      disabled?: boolean;
                      alwaysOpened?: false;
                  } & {
                      name?: never;
                      defaultValue?: never;
                  } & {
                      multiple?: false;
                      value?: string;
                      onChange?: ((value: string, item: ComboboxItemOption | null) => void) | undefined;
                      isTargetAmount?: never | false;
                      targetAmount?: never;
                      renderValue?: never;
                      selectAllOptions?: never;
                      chipClickArea?: never;
                  } & import('@salutejs/plasma-new-hope/types/components/TextField/TextField.types.js').RequiredProps & {
                      hintTrigger?: never;
                      hintText?: never;
                      hintView?: never;
                      hintSize?: never;
                      hintTargetIcon?: never;
                      hintTargetPlacement?: never;
                      hintPlacement?: never;
                      hintHasArrow?: never;
                      hintOffset?: never;
                      hintWidth?: never;
                      hintContentLeft?: never;
                  } & Omit<
                      React.InputHTMLAttributes<HTMLInputElement>,
                      'onChange' | 'defaultValue' | 'onScroll' | 'name' | 'value'
                  > &
                  React.RefAttributes<HTMLInputElement>)
            | ({
                  items: ComboboxItemOption[];
                  placement?: import('@salutejs/plasma-new-hope/types/components/Combobox/ComboboxNew/Combobox.types.js').Placement;
                  placeholder?: string;
                  helperText?: string;
                  contentLeft?: React.ReactElement;
                  contentRight?: React.ReactElement;
                  textBefore?: string;
                  textAfter?: string;
                  variant?: 'normal' | 'tight';
                  zIndex?: React.CSSProperties['zIndex'];
                  listMaxHeight?: React.CSSProperties['height'];
                  listWidth?: React.CSSProperties['width'];
                  portal?: string | React.RefObject<HTMLElement>;
                  renderItem?: ((item: ComboboxItemOption) => React.ReactNode) | undefined;
                  renderSelectionIcon?: (
                      selected:
                          | boolean
                          | import('@salutejs/plasma-new-hope/styled-components').SafeExtract<
                                import('@salutejs/plasma-new-hope/types/components/Combobox/ComboboxNew/hooks/getPathMaps.js').CheckedType,
                                'indeterminate'
                            >,
                  ) => React.ReactNode;
                  filter?: ((item: ComboboxItemOption, textValue: string) => boolean) | undefined;
                  closeAfterSelect?: boolean;
                  onChangeValue?: (value: string) => void;
                  filterValue?: (value: string) => boolean;
                  onScroll?: (e: React.UIEvent<HTMLElement>) => void;
                  onToggle?: (isOpen: boolean) => void;
                  beforeList?: React.ReactNode;
                  afterList?: React.ReactNode;
                  virtual?: boolean;
                  mode?: 'default' | 'radio';
                  size?: string;
                  view?: string;
                  emptyStateDescription?: React.ReactNode;
                  treeView?: boolean;
                  arrowPlacement?: 'left' | 'right';
                  flip?: boolean;
                  shift?: boolean;
                  singleLine?: boolean;
                  listHeight?: React.CSSProperties['height'];
                  listOverflow?: React.CSSProperties['overflow'];
              } & import('@salutejs/plasma-new-hope/types/components/TextField/TextField.types.js').LabelProps & {
                      readOnly?: true;
                      disabled?: boolean;
                      alwaysOpened?: false;
                  } & {
                      name?: never;
                      defaultValue?: never;
                  } & {
                      multiple: true;
                      value?: string[];
                      onChange?: ((value: string[], item: ComboboxItemOption | null) => void) | undefined;
                      isTargetAmount?: true;
                      targetAmount?: number;
                      renderValue?: ((item: ComboboxItemOption) => string) | undefined;
                      selectAllOptions?: import('@salutejs/plasma-new-hope/types/components/Combobox/ComboboxNew/Combobox.types.js').SelectAllProps;
                      chipClickArea?: 'full' | 'close-icon';
                  } & import('@salutejs/plasma-new-hope/types/components/TextField/TextField.types.js').RequiredProps & {
                      hintText: string;
                      hintTrigger?: 'hover' | 'click';
                      hintView?: string;
                      hintSize?: string;
                      hintTargetIcon?: React.ReactNode;
                      hintTargetPlacement?: 'inner' | 'outer';
                      hintPlacement?:
                          | import('@salutejs/plasma-new-hope/styled-components').PopoverPlacement
                          | Array<import('@salutejs/plasma-new-hope/styled-components').PopoverPlacementBasic>;
                      hintHasArrow?: boolean;
                      hintOffset?: [number, number];
                      hintWidth?: string;
                      hintContentLeft?: React.ReactNode;
                  } & Omit<
                      React.InputHTMLAttributes<HTMLInputElement>,
                      'onChange' | 'defaultValue' | 'onScroll' | 'name' | 'value'
                  > &
                  React.RefAttributes<HTMLInputElement>)
            | ({
                  items: ComboboxItemOption[];
                  placement?: import('@salutejs/plasma-new-hope/types/components/Combobox/ComboboxNew/Combobox.types.js').Placement;
                  placeholder?: string;
                  helperText?: string;
                  contentLeft?: React.ReactElement;
                  contentRight?: React.ReactElement;
                  textBefore?: string;
                  textAfter?: string;
                  variant?: 'normal' | 'tight';
                  zIndex?: React.CSSProperties['zIndex'];
                  listMaxHeight?: React.CSSProperties['height'];
                  listWidth?: React.CSSProperties['width'];
                  portal?: string | React.RefObject<HTMLElement>;
                  renderItem?: ((item: ComboboxItemOption) => React.ReactNode) | undefined;
                  renderSelectionIcon?: (
                      selected:
                          | boolean
                          | import('@salutejs/plasma-new-hope/styled-components').SafeExtract<
                                import('@salutejs/plasma-new-hope/types/components/Combobox/ComboboxNew/hooks/getPathMaps.js').CheckedType,
                                'indeterminate'
                            >,
                  ) => React.ReactNode;
                  filter?: ((item: ComboboxItemOption, textValue: string) => boolean) | undefined;
                  closeAfterSelect?: boolean;
                  onChangeValue?: (value: string) => void;
                  filterValue?: (value: string) => boolean;
                  onScroll?: (e: React.UIEvent<HTMLElement>) => void;
                  onToggle?: (isOpen: boolean) => void;
                  beforeList?: React.ReactNode;
                  afterList?: React.ReactNode;
                  virtual?: boolean;
                  mode?: 'default' | 'radio';
                  size?: string;
                  view?: string;
                  emptyStateDescription?: React.ReactNode;
                  treeView?: boolean;
                  arrowPlacement?: 'left' | 'right';
                  flip?: boolean;
                  shift?: boolean;
                  singleLine?: boolean;
                  listHeight?: React.CSSProperties['height'];
                  listOverflow?: React.CSSProperties['overflow'];
              } & import('@salutejs/plasma-new-hope/types/components/TextField/TextField.types.js').LabelProps & {
                      readOnly?: true;
                      disabled?: boolean;
                      alwaysOpened?: false;
                  } & {
                      name?: never;
                      defaultValue?: never;
                  } & {
                      multiple: true;
                      value?: string[];
                      onChange?: ((value: string[], item: ComboboxItemOption | null) => void) | undefined;
                      isTargetAmount?: true;
                      targetAmount?: number;
                      renderValue?: ((item: ComboboxItemOption) => string) | undefined;
                      selectAllOptions?: import('@salutejs/plasma-new-hope/types/components/Combobox/ComboboxNew/Combobox.types.js').SelectAllProps;
                      chipClickArea?: 'full' | 'close-icon';
                  } & import('@salutejs/plasma-new-hope/types/components/TextField/TextField.types.js').RequiredProps & {
                      hintTrigger?: never;
                      hintText?: never;
                      hintView?: never;
                      hintSize?: never;
                      hintTargetIcon?: never;
                      hintTargetPlacement?: never;
                      hintPlacement?: never;
                      hintHasArrow?: never;
                      hintOffset?: never;
                      hintWidth?: never;
                      hintContentLeft?: never;
                  } & Omit<
                      React.InputHTMLAttributes<HTMLInputElement>,
                      'onChange' | 'defaultValue' | 'onScroll' | 'name' | 'value'
                  > &
                  React.RefAttributes<HTMLInputElement>)
            | ({
                  items: ComboboxItemOption[];
                  placement?: import('@salutejs/plasma-new-hope/types/components/Combobox/ComboboxNew/Combobox.types.js').Placement;
                  placeholder?: string;
                  helperText?: string;
                  contentLeft?: React.ReactElement;
                  contentRight?: React.ReactElement;
                  textBefore?: string;
                  textAfter?: string;
                  variant?: 'normal' | 'tight';
                  zIndex?: React.CSSProperties['zIndex'];
                  listMaxHeight?: React.CSSProperties['height'];
                  listWidth?: React.CSSProperties['width'];
                  portal?: string | React.RefObject<HTMLElement>;
                  renderItem?: ((item: ComboboxItemOption) => React.ReactNode) | undefined;
                  renderSelectionIcon?: (
                      selected:
                          | boolean
                          | import('@salutejs/plasma-new-hope/styled-components').SafeExtract<
                                import('@salutejs/plasma-new-hope/types/components/Combobox/ComboboxNew/hooks/getPathMaps.js').CheckedType,
                                'indeterminate'
                            >,
                  ) => React.ReactNode;
                  filter?: ((item: ComboboxItemOption, textValue: string) => boolean) | undefined;
                  closeAfterSelect?: boolean;
                  onChangeValue?: (value: string) => void;
                  filterValue?: (value: string) => boolean;
                  onScroll?: (e: React.UIEvent<HTMLElement>) => void;
                  onToggle?: (isOpen: boolean) => void;
                  beforeList?: React.ReactNode;
                  afterList?: React.ReactNode;
                  virtual?: boolean;
                  mode?: 'default' | 'radio';
                  size?: string;
                  view?: string;
                  emptyStateDescription?: React.ReactNode;
                  treeView?: boolean;
                  arrowPlacement?: 'left' | 'right';
                  flip?: boolean;
                  shift?: boolean;
                  singleLine?: boolean;
                  listHeight?: React.CSSProperties['height'];
                  listOverflow?: React.CSSProperties['overflow'];
              } & import('@salutejs/plasma-new-hope/types/components/TextField/TextField.types.js').LabelProps & {
                      readOnly?: true;
                      disabled?: boolean;
                      alwaysOpened?: false;
                  } & {
                      name: string;
                      onChange?: React.ChangeEventHandler;
                  } & {
                      multiple: true;
                      defaultValue?: string[];
                      value?: never;
                      isTargetAmount?: true;
                      targetAmount?: number;
                      renderValue?: ((item: ComboboxItemOption) => string) | undefined;
                      selectAllOptions?: import('@salutejs/plasma-new-hope/types/components/Combobox/ComboboxNew/Combobox.types.js').SelectAllProps;
                      chipClickArea?: 'full' | 'close-icon';
                  } & import('@salutejs/plasma-new-hope/types/components/TextField/TextField.types.js').RequiredProps & {
                      hintText: string;
                      hintTrigger?: 'hover' | 'click';
                      hintView?: string;
                      hintSize?: string;
                      hintTargetIcon?: React.ReactNode;
                      hintTargetPlacement?: 'inner' | 'outer';
                      hintPlacement?:
                          | import('@salutejs/plasma-new-hope/styled-components').PopoverPlacement
                          | Array<import('@salutejs/plasma-new-hope/styled-components').PopoverPlacementBasic>;
                      hintHasArrow?: boolean;
                      hintOffset?: [number, number];
                      hintWidth?: string;
                      hintContentLeft?: React.ReactNode;
                  } & Omit<
                      React.InputHTMLAttributes<HTMLInputElement>,
                      'onChange' | 'defaultValue' | 'onScroll' | 'name' | 'value'
                  > &
                  React.RefAttributes<HTMLInputElement>)
            | ({
                  items: ComboboxItemOption[];
                  placement?: import('@salutejs/plasma-new-hope/types/components/Combobox/ComboboxNew/Combobox.types.js').Placement;
                  placeholder?: string;
                  helperText?: string;
                  contentLeft?: React.ReactElement;
                  contentRight?: React.ReactElement;
                  textBefore?: string;
                  textAfter?: string;
                  variant?: 'normal' | 'tight';
                  zIndex?: React.CSSProperties['zIndex'];
                  listMaxHeight?: React.CSSProperties['height'];
                  listWidth?: React.CSSProperties['width'];
                  portal?: string | React.RefObject<HTMLElement>;
                  renderItem?: ((item: ComboboxItemOption) => React.ReactNode) | undefined;
                  renderSelectionIcon?: (
                      selected:
                          | boolean
                          | import('@salutejs/plasma-new-hope/styled-components').SafeExtract<
                                import('@salutejs/plasma-new-hope/types/components/Combobox/ComboboxNew/hooks/getPathMaps.js').CheckedType,
                                'indeterminate'
                            >,
                  ) => React.ReactNode;
                  filter?: ((item: ComboboxItemOption, textValue: string) => boolean) | undefined;
                  closeAfterSelect?: boolean;
                  onChangeValue?: (value: string) => void;
                  filterValue?: (value: string) => boolean;
                  onScroll?: (e: React.UIEvent<HTMLElement>) => void;
                  onToggle?: (isOpen: boolean) => void;
                  beforeList?: React.ReactNode;
                  afterList?: React.ReactNode;
                  virtual?: boolean;
                  mode?: 'default' | 'radio';
                  size?: string;
                  view?: string;
                  emptyStateDescription?: React.ReactNode;
                  treeView?: boolean;
                  arrowPlacement?: 'left' | 'right';
                  flip?: boolean;
                  shift?: boolean;
                  singleLine?: boolean;
                  listHeight?: React.CSSProperties['height'];
                  listOverflow?: React.CSSProperties['overflow'];
              } & import('@salutejs/plasma-new-hope/types/components/TextField/TextField.types.js').LabelProps & {
                      readOnly?: true;
                      disabled?: boolean;
                      alwaysOpened?: false;
                  } & {
                      name: string;
                      onChange?: React.ChangeEventHandler;
                  } & {
                      multiple: true;
                      defaultValue?: string[];
                      value?: never;
                      isTargetAmount?: true;
                      targetAmount?: number;
                      renderValue?: ((item: ComboboxItemOption) => string) | undefined;
                      selectAllOptions?: import('@salutejs/plasma-new-hope/types/components/Combobox/ComboboxNew/Combobox.types.js').SelectAllProps;
                      chipClickArea?: 'full' | 'close-icon';
                  } & import('@salutejs/plasma-new-hope/types/components/TextField/TextField.types.js').RequiredProps & {
                      hintTrigger?: never;
                      hintText?: never;
                      hintView?: never;
                      hintSize?: never;
                      hintTargetIcon?: never;
                      hintTargetPlacement?: never;
                      hintPlacement?: never;
                      hintHasArrow?: never;
                      hintOffset?: never;
                      hintWidth?: never;
                      hintContentLeft?: never;
                  } & Omit<
                      React.InputHTMLAttributes<HTMLInputElement>,
                      'onChange' | 'defaultValue' | 'onScroll' | 'name' | 'value'
                  > &
                  React.RefAttributes<HTMLInputElement>)
            | ({
                  items: ComboboxItemOption[];
                  placement?: import('@salutejs/plasma-new-hope/types/components/Combobox/ComboboxNew/Combobox.types.js').Placement;
                  placeholder?: string;
                  helperText?: string;
                  contentLeft?: React.ReactElement;
                  contentRight?: React.ReactElement;
                  textBefore?: string;
                  textAfter?: string;
                  variant?: 'normal' | 'tight';
                  zIndex?: React.CSSProperties['zIndex'];
                  listMaxHeight?: React.CSSProperties['height'];
                  listWidth?: React.CSSProperties['width'];
                  portal?: string | React.RefObject<HTMLElement>;
                  renderItem?: ((item: ComboboxItemOption) => React.ReactNode) | undefined;
                  renderSelectionIcon?: (
                      selected:
                          | boolean
                          | import('@salutejs/plasma-new-hope/styled-components').SafeExtract<
                                import('@salutejs/plasma-new-hope/types/components/Combobox/ComboboxNew/hooks/getPathMaps.js').CheckedType,
                                'indeterminate'
                            >,
                  ) => React.ReactNode;
                  filter?: ((item: ComboboxItemOption, textValue: string) => boolean) | undefined;
                  closeAfterSelect?: boolean;
                  onChangeValue?: (value: string) => void;
                  filterValue?: (value: string) => boolean;
                  onScroll?: (e: React.UIEvent<HTMLElement>) => void;
                  onToggle?: (isOpen: boolean) => void;
                  beforeList?: React.ReactNode;
                  afterList?: React.ReactNode;
                  virtual?: boolean;
                  mode?: 'default' | 'radio';
                  size?: string;
                  view?: string;
                  emptyStateDescription?: React.ReactNode;
                  treeView?: boolean;
                  arrowPlacement?: 'left' | 'right';
                  flip?: boolean;
                  shift?: boolean;
                  singleLine?: boolean;
                  listHeight?: React.CSSProperties['height'];
                  listOverflow?: React.CSSProperties['overflow'];
              } & import('@salutejs/plasma-new-hope/types/components/TextField/TextField.types.js').LabelProps & {
                      readOnly?: false;
                      disabled?: false;
                      alwaysOpened?: true;
                  } & {
                      name: string;
                      onChange?: React.ChangeEventHandler;
                  } & {
                      multiple?: false;
                      defaultValue?: string;
                      value?: never;
                      isTargetAmount?: never | false;
                      targetAmount?: never;
                      renderValue?: never;
                      selectAllOptions?: never;
                      chipClickArea?: never;
                  } & import('@salutejs/plasma-new-hope/types/components/TextField/TextField.types.js').RequiredProps & {
                      hintText: string;
                      hintTrigger?: 'hover' | 'click';
                      hintView?: string;
                      hintSize?: string;
                      hintTargetIcon?: React.ReactNode;
                      hintTargetPlacement?: 'inner' | 'outer';
                      hintPlacement?:
                          | import('@salutejs/plasma-new-hope/styled-components').PopoverPlacement
                          | Array<import('@salutejs/plasma-new-hope/styled-components').PopoverPlacementBasic>;
                      hintHasArrow?: boolean;
                      hintOffset?: [number, number];
                      hintWidth?: string;
                      hintContentLeft?: React.ReactNode;
                  } & Omit<
                      React.InputHTMLAttributes<HTMLInputElement>,
                      'onChange' | 'defaultValue' | 'onScroll' | 'name' | 'value'
                  > &
                  React.RefAttributes<HTMLInputElement>)
            | ({
                  items: ComboboxItemOption[];
                  placement?: import('@salutejs/plasma-new-hope/types/components/Combobox/ComboboxNew/Combobox.types.js').Placement;
                  placeholder?: string;
                  helperText?: string;
                  contentLeft?: React.ReactElement;
                  contentRight?: React.ReactElement;
                  textBefore?: string;
                  textAfter?: string;
                  variant?: 'normal' | 'tight';
                  zIndex?: React.CSSProperties['zIndex'];
                  listMaxHeight?: React.CSSProperties['height'];
                  listWidth?: React.CSSProperties['width'];
                  portal?: string | React.RefObject<HTMLElement>;
                  renderItem?: ((item: ComboboxItemOption) => React.ReactNode) | undefined;
                  renderSelectionIcon?: (
                      selected:
                          | boolean
                          | import('@salutejs/plasma-new-hope/styled-components').SafeExtract<
                                import('@salutejs/plasma-new-hope/types/components/Combobox/ComboboxNew/hooks/getPathMaps.js').CheckedType,
                                'indeterminate'
                            >,
                  ) => React.ReactNode;
                  filter?: ((item: ComboboxItemOption, textValue: string) => boolean) | undefined;
                  closeAfterSelect?: boolean;
                  onChangeValue?: (value: string) => void;
                  filterValue?: (value: string) => boolean;
                  onScroll?: (e: React.UIEvent<HTMLElement>) => void;
                  onToggle?: (isOpen: boolean) => void;
                  beforeList?: React.ReactNode;
                  afterList?: React.ReactNode;
                  virtual?: boolean;
                  mode?: 'default' | 'radio';
                  size?: string;
                  view?: string;
                  emptyStateDescription?: React.ReactNode;
                  treeView?: boolean;
                  arrowPlacement?: 'left' | 'right';
                  flip?: boolean;
                  shift?: boolean;
                  singleLine?: boolean;
                  listHeight?: React.CSSProperties['height'];
                  listOverflow?: React.CSSProperties['overflow'];
              } & import('@salutejs/plasma-new-hope/types/components/TextField/TextField.types.js').LabelProps & {
                      readOnly?: false;
                      disabled?: false;
                      alwaysOpened?: true;
                  } & {
                      name: string;
                      onChange?: React.ChangeEventHandler;
                  } & {
                      multiple?: false;
                      defaultValue?: string;
                      value?: never;
                      isTargetAmount?: never | false;
                      targetAmount?: never;
                      renderValue?: never;
                      selectAllOptions?: never;
                      chipClickArea?: never;
                  } & import('@salutejs/plasma-new-hope/types/components/TextField/TextField.types.js').RequiredProps & {
                      hintTrigger?: never;
                      hintText?: never;
                      hintView?: never;
                      hintSize?: never;
                      hintTargetIcon?: never;
                      hintTargetPlacement?: never;
                      hintPlacement?: never;
                      hintHasArrow?: never;
                      hintOffset?: never;
                      hintWidth?: never;
                      hintContentLeft?: never;
                  } & Omit<
                      React.InputHTMLAttributes<HTMLInputElement>,
                      'onChange' | 'defaultValue' | 'onScroll' | 'name' | 'value'
                  > &
                  React.RefAttributes<HTMLInputElement>)
            | ({
                  items: ComboboxItemOption[];
                  placement?: import('@salutejs/plasma-new-hope/types/components/Combobox/ComboboxNew/Combobox.types.js').Placement;
                  placeholder?: string;
                  helperText?: string;
                  contentLeft?: React.ReactElement;
                  contentRight?: React.ReactElement;
                  textBefore?: string;
                  textAfter?: string;
                  variant?: 'normal' | 'tight';
                  zIndex?: React.CSSProperties['zIndex'];
                  listMaxHeight?: React.CSSProperties['height'];
                  listWidth?: React.CSSProperties['width'];
                  portal?: string | React.RefObject<HTMLElement>;
                  renderItem?: ((item: ComboboxItemOption) => React.ReactNode) | undefined;
                  renderSelectionIcon?: (
                      selected:
                          | boolean
                          | import('@salutejs/plasma-new-hope/styled-components').SafeExtract<
                                import('@salutejs/plasma-new-hope/types/components/Combobox/ComboboxNew/hooks/getPathMaps.js').CheckedType,
                                'indeterminate'
                            >,
                  ) => React.ReactNode;
                  filter?: ((item: ComboboxItemOption, textValue: string) => boolean) | undefined;
                  closeAfterSelect?: boolean;
                  onChangeValue?: (value: string) => void;
                  filterValue?: (value: string) => boolean;
                  onScroll?: (e: React.UIEvent<HTMLElement>) => void;
                  onToggle?: (isOpen: boolean) => void;
                  beforeList?: React.ReactNode;
                  afterList?: React.ReactNode;
                  virtual?: boolean;
                  mode?: 'default' | 'radio';
                  size?: string;
                  view?: string;
                  emptyStateDescription?: React.ReactNode;
                  treeView?: boolean;
                  arrowPlacement?: 'left' | 'right';
                  flip?: boolean;
                  shift?: boolean;
                  singleLine?: boolean;
                  listHeight?: React.CSSProperties['height'];
                  listOverflow?: React.CSSProperties['overflow'];
              } & import('@salutejs/plasma-new-hope/types/components/TextField/TextField.types.js').LabelProps & {
                      readOnly?: false;
                      disabled?: false;
                      alwaysOpened?: true;
                  } & {
                      name?: never;
                      defaultValue?: never;
                  } & {
                      multiple?: false;
                      value?: string;
                      onChange?: ((value: string, item: ComboboxItemOption | null) => void) | undefined;
                      isTargetAmount?: never | false;
                      targetAmount?: never;
                      renderValue?: never;
                      selectAllOptions?: never;
                      chipClickArea?: never;
                  } & import('@salutejs/plasma-new-hope/types/components/TextField/TextField.types.js').RequiredProps & {
                      hintText: string;
                      hintTrigger?: 'hover' | 'click';
                      hintView?: string;
                      hintSize?: string;
                      hintTargetIcon?: React.ReactNode;
                      hintTargetPlacement?: 'inner' | 'outer';
                      hintPlacement?:
                          | import('@salutejs/plasma-new-hope/styled-components').PopoverPlacement
                          | Array<import('@salutejs/plasma-new-hope/styled-components').PopoverPlacementBasic>;
                      hintHasArrow?: boolean;
                      hintOffset?: [number, number];
                      hintWidth?: string;
                      hintContentLeft?: React.ReactNode;
                  } & Omit<
                      React.InputHTMLAttributes<HTMLInputElement>,
                      'onChange' | 'defaultValue' | 'onScroll' | 'name' | 'value'
                  > &
                  React.RefAttributes<HTMLInputElement>)
            | ({
                  items: ComboboxItemOption[];
                  placement?: import('@salutejs/plasma-new-hope/types/components/Combobox/ComboboxNew/Combobox.types.js').Placement;
                  placeholder?: string;
                  helperText?: string;
                  contentLeft?: React.ReactElement;
                  contentRight?: React.ReactElement;
                  textBefore?: string;
                  textAfter?: string;
                  variant?: 'normal' | 'tight';
                  zIndex?: React.CSSProperties['zIndex'];
                  listMaxHeight?: React.CSSProperties['height'];
                  listWidth?: React.CSSProperties['width'];
                  portal?: string | React.RefObject<HTMLElement>;
                  renderItem?: ((item: ComboboxItemOption) => React.ReactNode) | undefined;
                  renderSelectionIcon?: (
                      selected:
                          | boolean
                          | import('@salutejs/plasma-new-hope/styled-components').SafeExtract<
                                import('@salutejs/plasma-new-hope/types/components/Combobox/ComboboxNew/hooks/getPathMaps.js').CheckedType,
                                'indeterminate'
                            >,
                  ) => React.ReactNode;
                  filter?: ((item: ComboboxItemOption, textValue: string) => boolean) | undefined;
                  closeAfterSelect?: boolean;
                  onChangeValue?: (value: string) => void;
                  filterValue?: (value: string) => boolean;
                  onScroll?: (e: React.UIEvent<HTMLElement>) => void;
                  onToggle?: (isOpen: boolean) => void;
                  beforeList?: React.ReactNode;
                  afterList?: React.ReactNode;
                  virtual?: boolean;
                  mode?: 'default' | 'radio';
                  size?: string;
                  view?: string;
                  emptyStateDescription?: React.ReactNode;
                  treeView?: boolean;
                  arrowPlacement?: 'left' | 'right';
                  flip?: boolean;
                  shift?: boolean;
                  singleLine?: boolean;
                  listHeight?: React.CSSProperties['height'];
                  listOverflow?: React.CSSProperties['overflow'];
              } & import('@salutejs/plasma-new-hope/types/components/TextField/TextField.types.js').LabelProps & {
                      readOnly?: false;
                      disabled?: false;
                      alwaysOpened?: true;
                  } & {
                      name?: never;
                      defaultValue?: never;
                  } & {
                      multiple?: false;
                      value?: string;
                      onChange?: ((value: string, item: ComboboxItemOption | null) => void) | undefined;
                      isTargetAmount?: never | false;
                      targetAmount?: never;
                      renderValue?: never;
                      selectAllOptions?: never;
                      chipClickArea?: never;
                  } & import('@salutejs/plasma-new-hope/types/components/TextField/TextField.types.js').RequiredProps & {
                      hintTrigger?: never;
                      hintText?: never;
                      hintView?: never;
                      hintSize?: never;
                      hintTargetIcon?: never;
                      hintTargetPlacement?: never;
                      hintPlacement?: never;
                      hintHasArrow?: never;
                      hintOffset?: never;
                      hintWidth?: never;
                      hintContentLeft?: never;
                  } & Omit<
                      React.InputHTMLAttributes<HTMLInputElement>,
                      'onChange' | 'defaultValue' | 'onScroll' | 'name' | 'value'
                  > &
                  React.RefAttributes<HTMLInputElement>)
            | ({
                  items: ComboboxItemOption[];
                  placement?: import('@salutejs/plasma-new-hope/types/components/Combobox/ComboboxNew/Combobox.types.js').Placement;
                  placeholder?: string;
                  helperText?: string;
                  contentLeft?: React.ReactElement;
                  contentRight?: React.ReactElement;
                  textBefore?: string;
                  textAfter?: string;
                  variant?: 'normal' | 'tight';
                  zIndex?: React.CSSProperties['zIndex'];
                  listMaxHeight?: React.CSSProperties['height'];
                  listWidth?: React.CSSProperties['width'];
                  portal?: string | React.RefObject<HTMLElement>;
                  renderItem?: ((item: ComboboxItemOption) => React.ReactNode) | undefined;
                  renderSelectionIcon?: (
                      selected:
                          | boolean
                          | import('@salutejs/plasma-new-hope/styled-components').SafeExtract<
                                import('@salutejs/plasma-new-hope/types/components/Combobox/ComboboxNew/hooks/getPathMaps.js').CheckedType,
                                'indeterminate'
                            >,
                  ) => React.ReactNode;
                  filter?: ((item: ComboboxItemOption, textValue: string) => boolean) | undefined;
                  closeAfterSelect?: boolean;
                  onChangeValue?: (value: string) => void;
                  filterValue?: (value: string) => boolean;
                  onScroll?: (e: React.UIEvent<HTMLElement>) => void;
                  onToggle?: (isOpen: boolean) => void;
                  beforeList?: React.ReactNode;
                  afterList?: React.ReactNode;
                  virtual?: boolean;
                  mode?: 'default' | 'radio';
                  size?: string;
                  view?: string;
                  emptyStateDescription?: React.ReactNode;
                  treeView?: boolean;
                  arrowPlacement?: 'left' | 'right';
                  flip?: boolean;
                  shift?: boolean;
                  singleLine?: boolean;
                  listHeight?: React.CSSProperties['height'];
                  listOverflow?: React.CSSProperties['overflow'];
              } & import('@salutejs/plasma-new-hope/types/components/TextField/TextField.types.js').LabelProps & {
                      readOnly?: false;
                      disabled?: false;
                      alwaysOpened?: true;
                  } & {
                      name?: never;
                      defaultValue?: never;
                  } & {
                      multiple: true;
                      value?: string[];
                      onChange?: ((value: string[], item: ComboboxItemOption | null) => void) | undefined;
                      isTargetAmount?: true;
                      targetAmount?: number;
                      renderValue?: ((item: ComboboxItemOption) => string) | undefined;
                      selectAllOptions?: import('@salutejs/plasma-new-hope/types/components/Combobox/ComboboxNew/Combobox.types.js').SelectAllProps;
                      chipClickArea?: 'full' | 'close-icon';
                  } & import('@salutejs/plasma-new-hope/types/components/TextField/TextField.types.js').RequiredProps & {
                      hintText: string;
                      hintTrigger?: 'hover' | 'click';
                      hintView?: string;
                      hintSize?: string;
                      hintTargetIcon?: React.ReactNode;
                      hintTargetPlacement?: 'inner' | 'outer';
                      hintPlacement?:
                          | import('@salutejs/plasma-new-hope/styled-components').PopoverPlacement
                          | Array<import('@salutejs/plasma-new-hope/styled-components').PopoverPlacementBasic>;
                      hintHasArrow?: boolean;
                      hintOffset?: [number, number];
                      hintWidth?: string;
                      hintContentLeft?: React.ReactNode;
                  } & Omit<
                      React.InputHTMLAttributes<HTMLInputElement>,
                      'onChange' | 'defaultValue' | 'onScroll' | 'name' | 'value'
                  > &
                  React.RefAttributes<HTMLInputElement>)
            | ({
                  items: ComboboxItemOption[];
                  placement?: import('@salutejs/plasma-new-hope/types/components/Combobox/ComboboxNew/Combobox.types.js').Placement;
                  placeholder?: string;
                  helperText?: string;
                  contentLeft?: React.ReactElement;
                  contentRight?: React.ReactElement;
                  textBefore?: string;
                  textAfter?: string;
                  variant?: 'normal' | 'tight';
                  zIndex?: React.CSSProperties['zIndex'];
                  listMaxHeight?: React.CSSProperties['height'];
                  listWidth?: React.CSSProperties['width'];
                  portal?: string | React.RefObject<HTMLElement>;
                  renderItem?: ((item: ComboboxItemOption) => React.ReactNode) | undefined;
                  renderSelectionIcon?: (
                      selected:
                          | boolean
                          | import('@salutejs/plasma-new-hope/styled-components').SafeExtract<
                                import('@salutejs/plasma-new-hope/types/components/Combobox/ComboboxNew/hooks/getPathMaps.js').CheckedType,
                                'indeterminate'
                            >,
                  ) => React.ReactNode;
                  filter?: ((item: ComboboxItemOption, textValue: string) => boolean) | undefined;
                  closeAfterSelect?: boolean;
                  onChangeValue?: (value: string) => void;
                  filterValue?: (value: string) => boolean;
                  onScroll?: (e: React.UIEvent<HTMLElement>) => void;
                  onToggle?: (isOpen: boolean) => void;
                  beforeList?: React.ReactNode;
                  afterList?: React.ReactNode;
                  virtual?: boolean;
                  mode?: 'default' | 'radio';
                  size?: string;
                  view?: string;
                  emptyStateDescription?: React.ReactNode;
                  treeView?: boolean;
                  arrowPlacement?: 'left' | 'right';
                  flip?: boolean;
                  shift?: boolean;
                  singleLine?: boolean;
                  listHeight?: React.CSSProperties['height'];
                  listOverflow?: React.CSSProperties['overflow'];
              } & import('@salutejs/plasma-new-hope/types/components/TextField/TextField.types.js').LabelProps & {
                      readOnly?: false;
                      disabled?: false;
                      alwaysOpened?: true;
                  } & {
                      name?: never;
                      defaultValue?: never;
                  } & {
                      multiple: true;
                      value?: string[];
                      onChange?: ((value: string[], item: ComboboxItemOption | null) => void) | undefined;
                      isTargetAmount?: true;
                      targetAmount?: number;
                      renderValue?: ((item: ComboboxItemOption) => string) | undefined;
                      selectAllOptions?: import('@salutejs/plasma-new-hope/types/components/Combobox/ComboboxNew/Combobox.types.js').SelectAllProps;
                      chipClickArea?: 'full' | 'close-icon';
                  } & import('@salutejs/plasma-new-hope/types/components/TextField/TextField.types.js').RequiredProps & {
                      hintTrigger?: never;
                      hintText?: never;
                      hintView?: never;
                      hintSize?: never;
                      hintTargetIcon?: never;
                      hintTargetPlacement?: never;
                      hintPlacement?: never;
                      hintHasArrow?: never;
                      hintOffset?: never;
                      hintWidth?: never;
                      hintContentLeft?: never;
                  } & Omit<
                      React.InputHTMLAttributes<HTMLInputElement>,
                      'onChange' | 'defaultValue' | 'onScroll' | 'name' | 'value'
                  > &
                  React.RefAttributes<HTMLInputElement>)
            | ({
                  items: ComboboxItemOption[];
                  placement?: import('@salutejs/plasma-new-hope/types/components/Combobox/ComboboxNew/Combobox.types.js').Placement;
                  placeholder?: string;
                  helperText?: string;
                  contentLeft?: React.ReactElement;
                  contentRight?: React.ReactElement;
                  textBefore?: string;
                  textAfter?: string;
                  variant?: 'normal' | 'tight';
                  zIndex?: React.CSSProperties['zIndex'];
                  listMaxHeight?: React.CSSProperties['height'];
                  listWidth?: React.CSSProperties['width'];
                  portal?: string | React.RefObject<HTMLElement>;
                  renderItem?: ((item: ComboboxItemOption) => React.ReactNode) | undefined;
                  renderSelectionIcon?: (
                      selected:
                          | boolean
                          | import('@salutejs/plasma-new-hope/styled-components').SafeExtract<
                                import('@salutejs/plasma-new-hope/types/components/Combobox/ComboboxNew/hooks/getPathMaps.js').CheckedType,
                                'indeterminate'
                            >,
                  ) => React.ReactNode;
                  filter?: ((item: ComboboxItemOption, textValue: string) => boolean) | undefined;
                  closeAfterSelect?: boolean;
                  onChangeValue?: (value: string) => void;
                  filterValue?: (value: string) => boolean;
                  onScroll?: (e: React.UIEvent<HTMLElement>) => void;
                  onToggle?: (isOpen: boolean) => void;
                  beforeList?: React.ReactNode;
                  afterList?: React.ReactNode;
                  virtual?: boolean;
                  mode?: 'default' | 'radio';
                  size?: string;
                  view?: string;
                  emptyStateDescription?: React.ReactNode;
                  treeView?: boolean;
                  arrowPlacement?: 'left' | 'right';
                  flip?: boolean;
                  shift?: boolean;
                  singleLine?: boolean;
                  listHeight?: React.CSSProperties['height'];
                  listOverflow?: React.CSSProperties['overflow'];
              } & import('@salutejs/plasma-new-hope/types/components/TextField/TextField.types.js').LabelProps & {
                      readOnly?: false;
                      disabled?: false;
                      alwaysOpened?: true;
                  } & {
                      name: string;
                      onChange?: React.ChangeEventHandler;
                  } & {
                      multiple: true;
                      defaultValue?: string[];
                      value?: never;
                      isTargetAmount?: true;
                      targetAmount?: number;
                      renderValue?: ((item: ComboboxItemOption) => string) | undefined;
                      selectAllOptions?: import('@salutejs/plasma-new-hope/types/components/Combobox/ComboboxNew/Combobox.types.js').SelectAllProps;
                      chipClickArea?: 'full' | 'close-icon';
                  } & import('@salutejs/plasma-new-hope/types/components/TextField/TextField.types.js').RequiredProps & {
                      hintText: string;
                      hintTrigger?: 'hover' | 'click';
                      hintView?: string;
                      hintSize?: string;
                      hintTargetIcon?: React.ReactNode;
                      hintTargetPlacement?: 'inner' | 'outer';
                      hintPlacement?:
                          | import('@salutejs/plasma-new-hope/styled-components').PopoverPlacement
                          | Array<import('@salutejs/plasma-new-hope/styled-components').PopoverPlacementBasic>;
                      hintHasArrow?: boolean;
                      hintOffset?: [number, number];
                      hintWidth?: string;
                      hintContentLeft?: React.ReactNode;
                  } & Omit<
                      React.InputHTMLAttributes<HTMLInputElement>,
                      'onChange' | 'defaultValue' | 'onScroll' | 'name' | 'value'
                  > &
                  React.RefAttributes<HTMLInputElement>)
            | ({
                  items: ComboboxItemOption[];
                  placement?: import('@salutejs/plasma-new-hope/types/components/Combobox/ComboboxNew/Combobox.types.js').Placement;
                  placeholder?: string;
                  helperText?: string;
                  contentLeft?: React.ReactElement;
                  contentRight?: React.ReactElement;
                  textBefore?: string;
                  textAfter?: string;
                  variant?: 'normal' | 'tight';
                  zIndex?: React.CSSProperties['zIndex'];
                  listMaxHeight?: React.CSSProperties['height'];
                  listWidth?: React.CSSProperties['width'];
                  portal?: string | React.RefObject<HTMLElement>;
                  renderItem?: ((item: ComboboxItemOption) => React.ReactNode) | undefined;
                  renderSelectionIcon?: (
                      selected:
                          | boolean
                          | import('@salutejs/plasma-new-hope/styled-components').SafeExtract<
                                import('@salutejs/plasma-new-hope/types/components/Combobox/ComboboxNew/hooks/getPathMaps.js').CheckedType,
                                'indeterminate'
                            >,
                  ) => React.ReactNode;
                  filter?: ((item: ComboboxItemOption, textValue: string) => boolean) | undefined;
                  closeAfterSelect?: boolean;
                  onChangeValue?: (value: string) => void;
                  filterValue?: (value: string) => boolean;
                  onScroll?: (e: React.UIEvent<HTMLElement>) => void;
                  onToggle?: (isOpen: boolean) => void;
                  beforeList?: React.ReactNode;
                  afterList?: React.ReactNode;
                  virtual?: boolean;
                  mode?: 'default' | 'radio';
                  size?: string;
                  view?: string;
                  emptyStateDescription?: React.ReactNode;
                  treeView?: boolean;
                  arrowPlacement?: 'left' | 'right';
                  flip?: boolean;
                  shift?: boolean;
                  singleLine?: boolean;
                  listHeight?: React.CSSProperties['height'];
                  listOverflow?: React.CSSProperties['overflow'];
              } & import('@salutejs/plasma-new-hope/types/components/TextField/TextField.types.js').LabelProps & {
                      readOnly?: false;
                      disabled?: false;
                      alwaysOpened?: true;
                  } & {
                      name: string;
                      onChange?: React.ChangeEventHandler;
                  } & {
                      multiple: true;
                      defaultValue?: string[];
                      value?: never;
                      isTargetAmount?: true;
                      targetAmount?: number;
                      renderValue?: ((item: ComboboxItemOption) => string) | undefined;
                      selectAllOptions?: import('@salutejs/plasma-new-hope/types/components/Combobox/ComboboxNew/Combobox.types.js').SelectAllProps;
                      chipClickArea?: 'full' | 'close-icon';
                  } & import('@salutejs/plasma-new-hope/types/components/TextField/TextField.types.js').RequiredProps & {
                      hintTrigger?: never;
                      hintText?: never;
                      hintView?: never;
                      hintSize?: never;
                      hintTargetIcon?: never;
                      hintTargetPlacement?: never;
                      hintPlacement?: never;
                      hintHasArrow?: never;
                      hintOffset?: never;
                      hintWidth?: never;
                      hintContentLeft?: never;
                  } & Omit<
                      React.InputHTMLAttributes<HTMLInputElement>,
                      'onChange' | 'defaultValue' | 'onScroll' | 'name' | 'value'
                  > &
                  React.RefAttributes<HTMLInputElement>)
        )
>;
type PropsFromConfig = keyof typeof config['variations'];
export type Props<T extends ComboboxItemOption> = DistributiveOmit<ComboboxProps<T>, PropsFromConfig> &
    DistributivePick<ComponentProps<typeof ComboboxNew>, PropsFromConfig>;
declare const Combobox: <T extends ComboboxItemOption>(
    props: Props<T> & React.RefAttributes<HTMLInputElement>,
) => React.ReactElement | null;
export { Combobox };

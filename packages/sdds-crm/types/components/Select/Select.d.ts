import type {
    SelectProps as SelectPropsNewHope,
    ItemOptionSelect,
    DistributivePick,
    DistributiveOmit,
} from '@salutejs/plasma-new-hope';

import React, { ComponentProps } from 'react';

declare const SelectNewHope: React.FunctionComponent<
    import('@salutejs/plasma-new-hope/types/engines/types.js').PropsType<{
        view: {
            default: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
            positive: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
            warning: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
            negative: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
            accent: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
            secondary: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
            clear: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
            dark: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
            black: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
            white: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
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
        chipView: {
            default: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
            secondary: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
            accent: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
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
            | (import('@salutejs/plasma-new-hope/types/components/TextField/TextField.types.js').LabelProps &
                  import('@salutejs/plasma-new-hope/types/components/TextField/TextField.types.js').RequiredProps & {
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
                  } & {
                      target?: 'textfield-like';
                      view?: 'default' | 'positive' | 'warning' | 'negative';
                      contentLeft?: React.ReactNode;
                      contentRight?: React.ReactElement;
                      placeholder?: string;
                      helperText?: string;
                      chipType?: 'default' | 'text';
                      chipClickArea?: import('@salutejs/plasma-new-hope/types/components/Select/Select.types.js').ChipClickArea;
                  } & {
                      multiselect?: false;
                      separator?: never;
                  } & {
                      value?: any;
                      onChange?:
                          | ((
                                value: any,
                                item: import('@salutejs/plasma-new-hope/styled-components').DropdownNodeSelect | null,
                            ) => void)
                          | undefined;
                      placeholder?: string;
                      helperText?: string;
                      disabled?: boolean;
                      readOnly?: boolean;
                      items?: import('@salutejs/plasma-new-hope/styled-components').DropdownNodeSelect[] | undefined;
                      treeView?: boolean;
                      arrowPlacement?: 'left' | 'right';
                      onItemSelect?:
                          | ((
                                e: import('@salutejs/plasma-new-hope/styled-components').DropdownNodeSelect,
                                event: React.SyntheticEvent,
                            ) => void)
                          | undefined;
                      children?: never;
                      isTargetAmount?: boolean;
                      renderTarget?:
                          | ((
                                item:
                                    | import('@salutejs/plasma-new-hope/styled-components').DropdownNodeSelect
                                    | import('@salutejs/plasma-new-hope/styled-components').DropdownNodeSelect[],
                                opened?: boolean,
                            ) => React.ReactNode)
                          | undefined;
                      placement?:
                          | import('@salutejs/plasma-new-hope/types/components/Select/Select.types.js').SelectPlacement
                          | Array<
                                import('@salutejs/plasma-new-hope/types/components/Select/Select.types.js').SelectPlacementBasic
                            >;
                      variant?: 'normal' | 'tight';
                      zIndex?: React.CSSProperties['zIndex'];
                      listMaxHeight?: React.CSSProperties['height'];
                      listWidth?: React.CSSProperties['width'];
                      portal?: string | React.RefObject<HTMLElement>;
                      renderValue?:
                          | ((item: import('@salutejs/plasma-new-hope/styled-components').DropdownNodeSelect) => string)
                          | undefined;
                      renderItem?:
                          | ((
                                item: import('@salutejs/plasma-new-hope/styled-components').DropdownNodeSelect,
                            ) => React.ReactNode)
                          | undefined;
                      renderSelectionIcon?: (
                          selected:
                              | boolean
                              | import('@salutejs/plasma-new-hope/styled-components').SafeExtract<
                                    import('@salutejs/plasma-new-hope/types/components/Combobox/ComboboxNew/hooks/getPathMaps.js').CheckedType,
                                    'indeterminate'
                                >,
                      ) => React.ReactNode;
                      closeAfterSelect?: boolean;
                      beforeList?: React.ReactNode;
                      afterList?: React.ReactNode;
                      virtual?: boolean;
                      onScroll?: (e: React.UIEvent<HTMLElement>) => void;
                      onToggle?: (isOpen: boolean) => void;
                      mode?: 'default' | 'radio';
                      flip?: boolean;
                      shift?: boolean;
                      singleLine?: boolean;
                      emptyStateDescription?: React.ReactNode;
                      size?: string;
                      view?: string;
                      chipView?: string;
                      status?: 'success' | 'warning' | 'error';
                      hasItems?: boolean;
                      isOpen?: boolean;
                      listHeight?: React.CSSProperties['height'];
                      onScrollBottom?: (e: React.UIEvent<HTMLElement>) => void;
                      listOverflow?: React.CSSProperties['overflow'];
                  } & Omit<
                      React.ButtonHTMLAttributes<HTMLButtonElement>,
                      'onChange' | 'nonce' | 'onResize' | 'onResizeCapture' | 'onScroll' | 'value'
                  > &
                  React.RefAttributes<HTMLButtonElement>)
            | (import('@salutejs/plasma-new-hope/types/components/TextField/TextField.types.js').LabelProps &
                  import('@salutejs/plasma-new-hope/types/components/TextField/TextField.types.js').RequiredProps & {
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
                  } & {
                      target?: 'textfield-like';
                      view?: 'default' | 'positive' | 'warning' | 'negative';
                      contentLeft?: React.ReactNode;
                      contentRight?: React.ReactElement;
                      placeholder?: string;
                      helperText?: string;
                      chipType?: 'default' | 'text';
                      chipClickArea?: import('@salutejs/plasma-new-hope/types/components/Select/Select.types.js').ChipClickArea;
                  } & {
                      multiselect?: true;
                      separator?: string;
                      selectAllOptions?: import('@salutejs/plasma-new-hope/types/components/Select/Select.types.js').SelectAllProps;
                  } & {
                      value?: any;
                      onChange?:
                          | ((
                                value: any,
                                item: import('@salutejs/plasma-new-hope/styled-components').DropdownNodeSelect | null,
                            ) => void)
                          | undefined;
                      placeholder?: string;
                      helperText?: string;
                      disabled?: boolean;
                      readOnly?: boolean;
                      items?: import('@salutejs/plasma-new-hope/styled-components').DropdownNodeSelect[] | undefined;
                      treeView?: boolean;
                      arrowPlacement?: 'left' | 'right';
                      onItemSelect?:
                          | ((
                                e: import('@salutejs/plasma-new-hope/styled-components').DropdownNodeSelect,
                                event: React.SyntheticEvent,
                            ) => void)
                          | undefined;
                      children?: never;
                      isTargetAmount?: boolean;
                      renderTarget?:
                          | ((
                                item:
                                    | import('@salutejs/plasma-new-hope/styled-components').DropdownNodeSelect
                                    | import('@salutejs/plasma-new-hope/styled-components').DropdownNodeSelect[],
                                opened?: boolean,
                            ) => React.ReactNode)
                          | undefined;
                      placement?:
                          | import('@salutejs/plasma-new-hope/types/components/Select/Select.types.js').SelectPlacement
                          | Array<
                                import('@salutejs/plasma-new-hope/types/components/Select/Select.types.js').SelectPlacementBasic
                            >;
                      variant?: 'normal' | 'tight';
                      zIndex?: React.CSSProperties['zIndex'];
                      listMaxHeight?: React.CSSProperties['height'];
                      listWidth?: React.CSSProperties['width'];
                      portal?: string | React.RefObject<HTMLElement>;
                      renderValue?:
                          | ((item: import('@salutejs/plasma-new-hope/styled-components').DropdownNodeSelect) => string)
                          | undefined;
                      renderItem?:
                          | ((
                                item: import('@salutejs/plasma-new-hope/styled-components').DropdownNodeSelect,
                            ) => React.ReactNode)
                          | undefined;
                      renderSelectionIcon?: (
                          selected:
                              | boolean
                              | import('@salutejs/plasma-new-hope/styled-components').SafeExtract<
                                    import('@salutejs/plasma-new-hope/types/components/Combobox/ComboboxNew/hooks/getPathMaps.js').CheckedType,
                                    'indeterminate'
                                >,
                      ) => React.ReactNode;
                      closeAfterSelect?: boolean;
                      beforeList?: React.ReactNode;
                      afterList?: React.ReactNode;
                      virtual?: boolean;
                      onScroll?: (e: React.UIEvent<HTMLElement>) => void;
                      onToggle?: (isOpen: boolean) => void;
                      mode?: 'default' | 'radio';
                      flip?: boolean;
                      shift?: boolean;
                      singleLine?: boolean;
                      emptyStateDescription?: React.ReactNode;
                      size?: string;
                      view?: string;
                      chipView?: string;
                      status?: 'success' | 'warning' | 'error';
                      hasItems?: boolean;
                      isOpen?: boolean;
                      listHeight?: React.CSSProperties['height'];
                      onScrollBottom?: (e: React.UIEvent<HTMLElement>) => void;
                      listOverflow?: React.CSSProperties['overflow'];
                  } & Omit<
                      React.ButtonHTMLAttributes<HTMLButtonElement>,
                      'onChange' | 'nonce' | 'onResize' | 'onResizeCapture' | 'onScroll' | 'value'
                  > &
                  React.RefAttributes<HTMLButtonElement>)
            | (import('@salutejs/plasma-new-hope/types/components/TextField/TextField.types.js').LabelProps &
                  import('@salutejs/plasma-new-hope/types/components/TextField/TextField.types.js').RequiredProps & {
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
                  } & {
                      target?: 'textfield-like';
                      view?: 'default' | 'positive' | 'warning' | 'negative';
                      contentLeft?: React.ReactNode;
                      contentRight?: React.ReactElement;
                      placeholder?: string;
                      helperText?: string;
                      chipType?: 'default' | 'text';
                      chipClickArea?: import('@salutejs/plasma-new-hope/types/components/Select/Select.types.js').ChipClickArea;
                  } & {
                      multiselect?: false;
                      separator?: never;
                  } & {
                      value?: any;
                      onChange?:
                          | ((
                                value: any,
                                item: import('@salutejs/plasma-new-hope/styled-components').DropdownNodeSelect | null,
                            ) => void)
                          | undefined;
                      placeholder?: string;
                      helperText?: string;
                      disabled?: boolean;
                      readOnly?: boolean;
                      items?: import('@salutejs/plasma-new-hope/styled-components').DropdownNodeSelect[] | undefined;
                      treeView?: boolean;
                      arrowPlacement?: 'left' | 'right';
                      onItemSelect?:
                          | ((
                                e: import('@salutejs/plasma-new-hope/styled-components').DropdownNodeSelect,
                                event: React.SyntheticEvent,
                            ) => void)
                          | undefined;
                      children?: never;
                      isTargetAmount?: boolean;
                      renderTarget?:
                          | ((
                                item:
                                    | import('@salutejs/plasma-new-hope/styled-components').DropdownNodeSelect
                                    | import('@salutejs/plasma-new-hope/styled-components').DropdownNodeSelect[],
                                opened?: boolean,
                            ) => React.ReactNode)
                          | undefined;
                      placement?:
                          | import('@salutejs/plasma-new-hope/types/components/Select/Select.types.js').SelectPlacement
                          | Array<
                                import('@salutejs/plasma-new-hope/types/components/Select/Select.types.js').SelectPlacementBasic
                            >;
                      variant?: 'normal' | 'tight';
                      zIndex?: React.CSSProperties['zIndex'];
                      listMaxHeight?: React.CSSProperties['height'];
                      listWidth?: React.CSSProperties['width'];
                      portal?: string | React.RefObject<HTMLElement>;
                      renderValue?:
                          | ((item: import('@salutejs/plasma-new-hope/styled-components').DropdownNodeSelect) => string)
                          | undefined;
                      renderItem?:
                          | ((
                                item: import('@salutejs/plasma-new-hope/styled-components').DropdownNodeSelect,
                            ) => React.ReactNode)
                          | undefined;
                      renderSelectionIcon?: (
                          selected:
                              | boolean
                              | import('@salutejs/plasma-new-hope/styled-components').SafeExtract<
                                    import('@salutejs/plasma-new-hope/types/components/Combobox/ComboboxNew/hooks/getPathMaps.js').CheckedType,
                                    'indeterminate'
                                >,
                      ) => React.ReactNode;
                      closeAfterSelect?: boolean;
                      beforeList?: React.ReactNode;
                      afterList?: React.ReactNode;
                      virtual?: boolean;
                      onScroll?: (e: React.UIEvent<HTMLElement>) => void;
                      onToggle?: (isOpen: boolean) => void;
                      mode?: 'default' | 'radio';
                      flip?: boolean;
                      shift?: boolean;
                      singleLine?: boolean;
                      emptyStateDescription?: React.ReactNode;
                      size?: string;
                      view?: string;
                      chipView?: string;
                      status?: 'success' | 'warning' | 'error';
                      hasItems?: boolean;
                      isOpen?: boolean;
                      listHeight?: React.CSSProperties['height'];
                      onScrollBottom?: (e: React.UIEvent<HTMLElement>) => void;
                      listOverflow?: React.CSSProperties['overflow'];
                  } & Omit<
                      React.ButtonHTMLAttributes<HTMLButtonElement>,
                      'onChange' | 'nonce' | 'onResize' | 'onResizeCapture' | 'onScroll' | 'value'
                  > &
                  React.RefAttributes<HTMLButtonElement>)
            | (import('@salutejs/plasma-new-hope/types/components/TextField/TextField.types.js').LabelProps &
                  import('@salutejs/plasma-new-hope/types/components/TextField/TextField.types.js').RequiredProps & {
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
                  } & {
                      target?: 'textfield-like';
                      view?: 'default' | 'positive' | 'warning' | 'negative';
                      contentLeft?: React.ReactNode;
                      contentRight?: React.ReactElement;
                      placeholder?: string;
                      helperText?: string;
                      chipType?: 'default' | 'text';
                      chipClickArea?: import('@salutejs/plasma-new-hope/types/components/Select/Select.types.js').ChipClickArea;
                  } & {
                      multiselect?: true;
                      separator?: string;
                      selectAllOptions?: import('@salutejs/plasma-new-hope/types/components/Select/Select.types.js').SelectAllProps;
                  } & {
                      value?: any;
                      onChange?:
                          | ((
                                value: any,
                                item: import('@salutejs/plasma-new-hope/styled-components').DropdownNodeSelect | null,
                            ) => void)
                          | undefined;
                      placeholder?: string;
                      helperText?: string;
                      disabled?: boolean;
                      readOnly?: boolean;
                      items?: import('@salutejs/plasma-new-hope/styled-components').DropdownNodeSelect[] | undefined;
                      treeView?: boolean;
                      arrowPlacement?: 'left' | 'right';
                      onItemSelect?:
                          | ((
                                e: import('@salutejs/plasma-new-hope/styled-components').DropdownNodeSelect,
                                event: React.SyntheticEvent,
                            ) => void)
                          | undefined;
                      children?: never;
                      isTargetAmount?: boolean;
                      renderTarget?:
                          | ((
                                item:
                                    | import('@salutejs/plasma-new-hope/styled-components').DropdownNodeSelect
                                    | import('@salutejs/plasma-new-hope/styled-components').DropdownNodeSelect[],
                                opened?: boolean,
                            ) => React.ReactNode)
                          | undefined;
                      placement?:
                          | import('@salutejs/plasma-new-hope/types/components/Select/Select.types.js').SelectPlacement
                          | Array<
                                import('@salutejs/plasma-new-hope/types/components/Select/Select.types.js').SelectPlacementBasic
                            >;
                      variant?: 'normal' | 'tight';
                      zIndex?: React.CSSProperties['zIndex'];
                      listMaxHeight?: React.CSSProperties['height'];
                      listWidth?: React.CSSProperties['width'];
                      portal?: string | React.RefObject<HTMLElement>;
                      renderValue?:
                          | ((item: import('@salutejs/plasma-new-hope/styled-components').DropdownNodeSelect) => string)
                          | undefined;
                      renderItem?:
                          | ((
                                item: import('@salutejs/plasma-new-hope/styled-components').DropdownNodeSelect,
                            ) => React.ReactNode)
                          | undefined;
                      renderSelectionIcon?: (
                          selected:
                              | boolean
                              | import('@salutejs/plasma-new-hope/styled-components').SafeExtract<
                                    import('@salutejs/plasma-new-hope/types/components/Combobox/ComboboxNew/hooks/getPathMaps.js').CheckedType,
                                    'indeterminate'
                                >,
                      ) => React.ReactNode;
                      closeAfterSelect?: boolean;
                      beforeList?: React.ReactNode;
                      afterList?: React.ReactNode;
                      virtual?: boolean;
                      onScroll?: (e: React.UIEvent<HTMLElement>) => void;
                      onToggle?: (isOpen: boolean) => void;
                      mode?: 'default' | 'radio';
                      flip?: boolean;
                      shift?: boolean;
                      singleLine?: boolean;
                      emptyStateDescription?: React.ReactNode;
                      size?: string;
                      view?: string;
                      chipView?: string;
                      status?: 'success' | 'warning' | 'error';
                      hasItems?: boolean;
                      isOpen?: boolean;
                      listHeight?: React.CSSProperties['height'];
                      onScrollBottom?: (e: React.UIEvent<HTMLElement>) => void;
                      listOverflow?: React.CSSProperties['overflow'];
                  } & Omit<
                      React.ButtonHTMLAttributes<HTMLButtonElement>,
                      'onChange' | 'nonce' | 'onResize' | 'onResizeCapture' | 'onScroll' | 'value'
                  > &
                  React.RefAttributes<HTMLButtonElement>)
            | (import('@salutejs/plasma-new-hope/types/components/TextField/TextField.types.js').LabelProps & {
                  target: 'button-like';
                  view?:
                      | 'default'
                      | 'accent'
                      | 'secondary'
                      | 'clear'
                      | 'positive'
                      | 'warning'
                      | 'negative'
                      | 'dark'
                      | 'black'
                      | 'white';
                  contentLeft?: never;
                  contentRight?: never;
                  placeholder?: never;
                  helperText?: never;
                  chipType?: never;
                  chipClickArea?: never;
              } & {
                  multiselect?: false;
                  separator?: never;
              } & {
                  value?: any;
                  onChange?:
                      | ((
                            value: any,
                            item: import('@salutejs/plasma-new-hope/styled-components').DropdownNodeSelect | null,
                        ) => void)
                      | undefined;
                  placeholder?: string;
                  helperText?: string;
                  disabled?: boolean;
                  readOnly?: boolean;
                  items?: import('@salutejs/plasma-new-hope/styled-components').DropdownNodeSelect[] | undefined;
                  treeView?: boolean;
                  arrowPlacement?: 'left' | 'right';
                  onItemSelect?:
                      | ((
                            e: import('@salutejs/plasma-new-hope/styled-components').DropdownNodeSelect,
                            event: React.SyntheticEvent,
                        ) => void)
                      | undefined;
                  children?: never;
                  isTargetAmount?: boolean;
                  renderTarget?:
                      | ((
                            item:
                                | import('@salutejs/plasma-new-hope/styled-components').DropdownNodeSelect
                                | import('@salutejs/plasma-new-hope/styled-components').DropdownNodeSelect[],
                            opened?: boolean,
                        ) => React.ReactNode)
                      | undefined;
                  placement?:
                      | import('@salutejs/plasma-new-hope/types/components/Select/Select.types.js').SelectPlacement
                      | Array<
                            import('@salutejs/plasma-new-hope/types/components/Select/Select.types.js').SelectPlacementBasic
                        >;
                  variant?: 'normal' | 'tight';
                  zIndex?: React.CSSProperties['zIndex'];
                  listMaxHeight?: React.CSSProperties['height'];
                  listWidth?: React.CSSProperties['width'];
                  portal?: string | React.RefObject<HTMLElement>;
                  renderValue?:
                      | ((item: import('@salutejs/plasma-new-hope/styled-components').DropdownNodeSelect) => string)
                      | undefined;
                  renderItem?:
                      | ((
                            item: import('@salutejs/plasma-new-hope/styled-components').DropdownNodeSelect,
                        ) => React.ReactNode)
                      | undefined;
                  renderSelectionIcon?: (
                      selected:
                          | boolean
                          | import('@salutejs/plasma-new-hope/styled-components').SafeExtract<
                                import('@salutejs/plasma-new-hope/types/components/Combobox/ComboboxNew/hooks/getPathMaps.js').CheckedType,
                                'indeterminate'
                            >,
                  ) => React.ReactNode;
                  closeAfterSelect?: boolean;
                  beforeList?: React.ReactNode;
                  afterList?: React.ReactNode;
                  virtual?: boolean;
                  onScroll?: (e: React.UIEvent<HTMLElement>) => void;
                  onToggle?: (isOpen: boolean) => void;
                  mode?: 'default' | 'radio';
                  flip?: boolean;
                  shift?: boolean;
                  singleLine?: boolean;
                  emptyStateDescription?: React.ReactNode;
                  size?: string;
                  view?: string;
                  chipView?: string;
                  status?: 'success' | 'warning' | 'error';
                  hasItems?: boolean;
                  isOpen?: boolean;
                  listHeight?: React.CSSProperties['height'];
                  onScrollBottom?: (e: React.UIEvent<HTMLElement>) => void;
                  listOverflow?: React.CSSProperties['overflow'];
              } & Omit<
                      React.ButtonHTMLAttributes<HTMLButtonElement>,
                      'onChange' | 'nonce' | 'onResize' | 'onResizeCapture' | 'onScroll' | 'value'
                  > &
                  React.RefAttributes<HTMLButtonElement>)
            | (import('@salutejs/plasma-new-hope/types/components/TextField/TextField.types.js').LabelProps & {
                  target: 'button-like';
                  view?:
                      | 'default'
                      | 'accent'
                      | 'secondary'
                      | 'clear'
                      | 'positive'
                      | 'warning'
                      | 'negative'
                      | 'dark'
                      | 'black'
                      | 'white';
                  contentLeft?: never;
                  contentRight?: never;
                  placeholder?: never;
                  helperText?: never;
                  chipType?: never;
                  chipClickArea?: never;
              } & {
                  multiselect?: true;
                  separator?: string;
                  selectAllOptions?: import('@salutejs/plasma-new-hope/types/components/Select/Select.types.js').SelectAllProps;
              } & {
                  value?: any;
                  onChange?:
                      | ((
                            value: any,
                            item: import('@salutejs/plasma-new-hope/styled-components').DropdownNodeSelect | null,
                        ) => void)
                      | undefined;
                  placeholder?: string;
                  helperText?: string;
                  disabled?: boolean;
                  readOnly?: boolean;
                  items?: import('@salutejs/plasma-new-hope/styled-components').DropdownNodeSelect[] | undefined;
                  treeView?: boolean;
                  arrowPlacement?: 'left' | 'right';
                  onItemSelect?:
                      | ((
                            e: import('@salutejs/plasma-new-hope/styled-components').DropdownNodeSelect,
                            event: React.SyntheticEvent,
                        ) => void)
                      | undefined;
                  children?: never;
                  isTargetAmount?: boolean;
                  renderTarget?:
                      | ((
                            item:
                                | import('@salutejs/plasma-new-hope/styled-components').DropdownNodeSelect
                                | import('@salutejs/plasma-new-hope/styled-components').DropdownNodeSelect[],
                            opened?: boolean,
                        ) => React.ReactNode)
                      | undefined;
                  placement?:
                      | import('@salutejs/plasma-new-hope/types/components/Select/Select.types.js').SelectPlacement
                      | Array<
                            import('@salutejs/plasma-new-hope/types/components/Select/Select.types.js').SelectPlacementBasic
                        >;
                  variant?: 'normal' | 'tight';
                  zIndex?: React.CSSProperties['zIndex'];
                  listMaxHeight?: React.CSSProperties['height'];
                  listWidth?: React.CSSProperties['width'];
                  portal?: string | React.RefObject<HTMLElement>;
                  renderValue?:
                      | ((item: import('@salutejs/plasma-new-hope/styled-components').DropdownNodeSelect) => string)
                      | undefined;
                  renderItem?:
                      | ((
                            item: import('@salutejs/plasma-new-hope/styled-components').DropdownNodeSelect,
                        ) => React.ReactNode)
                      | undefined;
                  renderSelectionIcon?: (
                      selected:
                          | boolean
                          | import('@salutejs/plasma-new-hope/styled-components').SafeExtract<
                                import('@salutejs/plasma-new-hope/types/components/Combobox/ComboboxNew/hooks/getPathMaps.js').CheckedType,
                                'indeterminate'
                            >,
                  ) => React.ReactNode;
                  closeAfterSelect?: boolean;
                  beforeList?: React.ReactNode;
                  afterList?: React.ReactNode;
                  virtual?: boolean;
                  onScroll?: (e: React.UIEvent<HTMLElement>) => void;
                  onToggle?: (isOpen: boolean) => void;
                  mode?: 'default' | 'radio';
                  flip?: boolean;
                  shift?: boolean;
                  singleLine?: boolean;
                  emptyStateDescription?: React.ReactNode;
                  size?: string;
                  view?: string;
                  chipView?: string;
                  status?: 'success' | 'warning' | 'error';
                  hasItems?: boolean;
                  isOpen?: boolean;
                  listHeight?: React.CSSProperties['height'];
                  onScrollBottom?: (e: React.UIEvent<HTMLElement>) => void;
                  listOverflow?: React.CSSProperties['overflow'];
              } & Omit<
                      React.ButtonHTMLAttributes<HTMLButtonElement>,
                      'onChange' | 'nonce' | 'onResize' | 'onResizeCapture' | 'onScroll' | 'value'
                  > &
                  React.RefAttributes<HTMLButtonElement>)
        )
>;
export type SelectProps<K extends ItemOptionSelect> = DistributiveOmit<
    SelectPropsNewHope<K>,
    'size' | 'view' | 'chipView' | 'disabled'
> &
    DistributivePick<ComponentProps<typeof SelectNewHope>, 'size' | 'view' | 'chipView' | 'disabled'>;
declare const Select: <K extends ItemOptionSelect>(
    props: SelectProps<K> & React.RefAttributes<HTMLButtonElement>,
) => React.ReactElement | null;
export { Select };

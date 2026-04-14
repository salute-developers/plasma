import {
    AutocompleteProps,
    DistributiveOmit,
    DistributivePick,
    SuggestionItemType,
} from '@salutejs/plasma-new-hope/styled-components';

import React, { ComponentProps } from 'react';

import { config } from './Autocomplete.config';

export declare const AutocompleteComponent: React.FunctionComponent<
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
                  labelPlacement?: string;
                  readOnly?: boolean;
                  disabled?: boolean;
                  portal?: string | React.RefObject<HTMLElement>;
                  zIndex?: React.CSSProperties['zIndex'];
                  value?: string;
                  defaultValue?: string;
                  suggestions?: SuggestionItemType[] | undefined;
                  threshold?: number;
                  filter?: ((data: SuggestionItemType) => boolean) | undefined;
                  onSuggestionSelect?: ((data: SuggestionItemType) => void) | undefined;
                  onScroll?: (e: React.UIEvent<HTMLElement>) => void;
                  listMaxHeight?: string;
                  listWidth?: string;
                  renderList?: ((data?: SuggestionItemType[] | undefined) => React.ReactNode) | undefined;
                  renderListEnd?: () => React.ReactNode;
                  renderItem?: ((item: SuggestionItemType) => React.ReactNode) | undefined;
                  beforeList?: React.ReactNode;
                  afterList?: React.ReactNode;
                  virtual?: boolean;
                  flip?: boolean;
                  rootClassName?: string;
                  rootStyle?: React.CSSProperties;
                  size?: string;
                  view?: string;
              } & Omit<
                  {
                      titleCaption?: React.ReactNode;
                      leftHelper?: React.ReactNode;
                      contentLeft?: React.ReactElement;
                      contentRight?: React.ReactElement;
                      textBefore?: string;
                      textAfter?: string;
                      onSearch?: (value: string, event?: React.KeyboardEvent<HTMLInputElement>) => void;
                  } & import('@salutejs/plasma-new-hope/types/components/TextField/TextField.types.js').LabelProps &
                      import('@salutejs/plasma-new-hope/types/components/TextField/TextField.types.js').RequiredProps & {
                          clear?: boolean;
                          hasDivider?: boolean;
                      } & {
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
                          chips?: never;
                          onChangeChips?: never;
                          enumerationType?: 'plain';
                          onSearch?: (value: string, event?: React.KeyboardEvent<HTMLInputElement>) => void;
                          chipType?: never;
                          chipView?: never;
                          chipValidator?: never;
                      },
                  | 'labelPlacement'
                  | 'chipView'
                  | 'chips'
                  | 'onChangeChips'
                  | 'enumerationType'
                  | 'chipType'
                  | 'chipValidator'
              > &
                  Omit<
                      React.InputHTMLAttributes<HTMLInputElement>,
                      'size' | 'defaultValue' | 'onScroll' | 'required' | 'value'
                  > &
                  React.RefAttributes<HTMLInputElement>)
            | ({
                  labelPlacement?: string;
                  readOnly?: boolean;
                  disabled?: boolean;
                  portal?: string | React.RefObject<HTMLElement>;
                  zIndex?: React.CSSProperties['zIndex'];
                  value?: string;
                  defaultValue?: string;
                  suggestions?: SuggestionItemType[] | undefined;
                  threshold?: number;
                  filter?: ((data: SuggestionItemType) => boolean) | undefined;
                  onSuggestionSelect?: ((data: SuggestionItemType) => void) | undefined;
                  onScroll?: (e: React.UIEvent<HTMLElement>) => void;
                  listMaxHeight?: string;
                  listWidth?: string;
                  renderList?: ((data?: SuggestionItemType[] | undefined) => React.ReactNode) | undefined;
                  renderListEnd?: () => React.ReactNode;
                  renderItem?: ((item: SuggestionItemType) => React.ReactNode) | undefined;
                  beforeList?: React.ReactNode;
                  afterList?: React.ReactNode;
                  virtual?: boolean;
                  flip?: boolean;
                  rootClassName?: string;
                  rootStyle?: React.CSSProperties;
                  size?: string;
                  view?: string;
              } & Omit<
                  {
                      titleCaption?: React.ReactNode;
                      leftHelper?: React.ReactNode;
                      contentLeft?: React.ReactElement;
                      contentRight?: React.ReactElement;
                      textBefore?: string;
                      textAfter?: string;
                      onSearch?: (value: string, event?: React.KeyboardEvent<HTMLInputElement>) => void;
                  } & import('@salutejs/plasma-new-hope/types/components/TextField/TextField.types.js').LabelProps &
                      import('@salutejs/plasma-new-hope/types/components/TextField/TextField.types.js').RequiredProps & {
                          clear?: boolean;
                          hasDivider?: boolean;
                      } & {
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
                          enumerationType: 'chip';
                          onSearch?: never;
                          chips?: Array<
                              import('@salutejs/plasma-new-hope/types/components/TextField/TextField.types.js').TextFieldPrimitiveValue
                          >;
                          onChangeChips?: (
                              value: Array<
                                  import('@salutejs/plasma-new-hope/types/components/TextField/TextField.types.js').TextFieldPrimitiveValue
                              >,
                          ) => void;
                          chipType?: 'default' | 'text';
                          chipView?: string;
                          chipValidator?: (
                              value: string,
                          ) => {
                              view?: string;
                          };
                      },
                  | 'labelPlacement'
                  | 'chipView'
                  | 'chips'
                  | 'onChangeChips'
                  | 'enumerationType'
                  | 'chipType'
                  | 'chipValidator'
              > &
                  Omit<
                      React.InputHTMLAttributes<HTMLInputElement>,
                      'size' | 'defaultValue' | 'onScroll' | 'required' | 'value'
                  > &
                  React.RefAttributes<HTMLInputElement>)
            | ({
                  labelPlacement?: string;
                  readOnly?: boolean;
                  disabled?: boolean;
                  portal?: string | React.RefObject<HTMLElement>;
                  zIndex?: React.CSSProperties['zIndex'];
                  value?: string;
                  defaultValue?: string;
                  suggestions?: SuggestionItemType[] | undefined;
                  threshold?: number;
                  filter?: ((data: SuggestionItemType) => boolean) | undefined;
                  onSuggestionSelect?: ((data: SuggestionItemType) => void) | undefined;
                  onScroll?: (e: React.UIEvent<HTMLElement>) => void;
                  listMaxHeight?: string;
                  listWidth?: string;
                  renderList?: ((data?: SuggestionItemType[] | undefined) => React.ReactNode) | undefined;
                  renderListEnd?: () => React.ReactNode;
                  renderItem?: ((item: SuggestionItemType) => React.ReactNode) | undefined;
                  beforeList?: React.ReactNode;
                  afterList?: React.ReactNode;
                  virtual?: boolean;
                  flip?: boolean;
                  rootClassName?: string;
                  rootStyle?: React.CSSProperties;
                  size?: string;
                  view?: string;
              } & Omit<
                  {
                      titleCaption?: React.ReactNode;
                      leftHelper?: React.ReactNode;
                      contentLeft?: React.ReactElement;
                      contentRight?: React.ReactElement;
                      textBefore?: string;
                      textAfter?: string;
                      onSearch?: (value: string, event?: React.KeyboardEvent<HTMLInputElement>) => void;
                  } & import('@salutejs/plasma-new-hope/types/components/TextField/TextField.types.js').LabelProps &
                      import('@salutejs/plasma-new-hope/types/components/TextField/TextField.types.js').RequiredProps & {
                          clear?: boolean;
                          hasDivider?: boolean;
                      } & {
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
                          chips?: never;
                          onChangeChips?: never;
                          enumerationType?: 'plain';
                          onSearch?: (value: string, event?: React.KeyboardEvent<HTMLInputElement>) => void;
                          chipType?: never;
                          chipView?: never;
                          chipValidator?: never;
                      },
                  | 'labelPlacement'
                  | 'chipView'
                  | 'chips'
                  | 'onChangeChips'
                  | 'enumerationType'
                  | 'chipType'
                  | 'chipValidator'
              > &
                  Omit<
                      React.InputHTMLAttributes<HTMLInputElement>,
                      'size' | 'defaultValue' | 'onScroll' | 'required' | 'value'
                  > &
                  React.RefAttributes<HTMLInputElement>)
            | ({
                  labelPlacement?: string;
                  readOnly?: boolean;
                  disabled?: boolean;
                  portal?: string | React.RefObject<HTMLElement>;
                  zIndex?: React.CSSProperties['zIndex'];
                  value?: string;
                  defaultValue?: string;
                  suggestions?: SuggestionItemType[] | undefined;
                  threshold?: number;
                  filter?: ((data: SuggestionItemType) => boolean) | undefined;
                  onSuggestionSelect?: ((data: SuggestionItemType) => void) | undefined;
                  onScroll?: (e: React.UIEvent<HTMLElement>) => void;
                  listMaxHeight?: string;
                  listWidth?: string;
                  renderList?: ((data?: SuggestionItemType[] | undefined) => React.ReactNode) | undefined;
                  renderListEnd?: () => React.ReactNode;
                  renderItem?: ((item: SuggestionItemType) => React.ReactNode) | undefined;
                  beforeList?: React.ReactNode;
                  afterList?: React.ReactNode;
                  virtual?: boolean;
                  flip?: boolean;
                  rootClassName?: string;
                  rootStyle?: React.CSSProperties;
                  size?: string;
                  view?: string;
              } & Omit<
                  {
                      titleCaption?: React.ReactNode;
                      leftHelper?: React.ReactNode;
                      contentLeft?: React.ReactElement;
                      contentRight?: React.ReactElement;
                      textBefore?: string;
                      textAfter?: string;
                      onSearch?: (value: string, event?: React.KeyboardEvent<HTMLInputElement>) => void;
                  } & import('@salutejs/plasma-new-hope/types/components/TextField/TextField.types.js').LabelProps &
                      import('@salutejs/plasma-new-hope/types/components/TextField/TextField.types.js').RequiredProps & {
                          clear?: boolean;
                          hasDivider?: boolean;
                      } & {
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
                          enumerationType: 'chip';
                          onSearch?: never;
                          chips?: Array<
                              import('@salutejs/plasma-new-hope/types/components/TextField/TextField.types.js').TextFieldPrimitiveValue
                          >;
                          onChangeChips?: (
                              value: Array<
                                  import('@salutejs/plasma-new-hope/types/components/TextField/TextField.types.js').TextFieldPrimitiveValue
                              >,
                          ) => void;
                          chipType?: 'default' | 'text';
                          chipView?: string;
                          chipValidator?: (
                              value: string,
                          ) => {
                              view?: string;
                          };
                      },
                  | 'labelPlacement'
                  | 'chipView'
                  | 'chips'
                  | 'onChangeChips'
                  | 'enumerationType'
                  | 'chipType'
                  | 'chipValidator'
              > &
                  Omit<
                      React.InputHTMLAttributes<HTMLInputElement>,
                      'size' | 'defaultValue' | 'onScroll' | 'required' | 'value'
                  > &
                  React.RefAttributes<HTMLInputElement>)
            | ({
                  labelPlacement?: string;
                  readOnly?: boolean;
                  disabled?: boolean;
                  portal?: string | React.RefObject<HTMLElement>;
                  zIndex?: React.CSSProperties['zIndex'];
                  value?: string;
                  defaultValue?: string;
                  suggestions?: SuggestionItemType[] | undefined;
                  threshold?: number;
                  filter?: ((data: SuggestionItemType) => boolean) | undefined;
                  onSuggestionSelect?: ((data: SuggestionItemType) => void) | undefined;
                  onScroll?: (e: React.UIEvent<HTMLElement>) => void;
                  listMaxHeight?: string;
                  listWidth?: string;
                  renderList?: ((data?: SuggestionItemType[] | undefined) => React.ReactNode) | undefined;
                  renderListEnd?: () => React.ReactNode;
                  renderItem?: ((item: SuggestionItemType) => React.ReactNode) | undefined;
                  beforeList?: React.ReactNode;
                  afterList?: React.ReactNode;
                  virtual?: boolean;
                  flip?: boolean;
                  rootClassName?: string;
                  rootStyle?: React.CSSProperties;
                  size?: string;
                  view?: string;
              } & Omit<
                  {
                      titleCaption?: React.ReactNode;
                      leftHelper?: React.ReactNode;
                      contentLeft?: React.ReactElement;
                      contentRight?: React.ReactElement;
                      textBefore?: string;
                      textAfter?: string;
                      onSearch?: (value: string, event?: React.KeyboardEvent<HTMLInputElement>) => void;
                  } & import('@salutejs/plasma-new-hope/types/components/TextField/TextField.types.js').LabelProps &
                      import('@salutejs/plasma-new-hope/types/components/TextField/TextField.types.js').RequiredProps & {
                          clear?: false;
                          hasDivider?: never;
                      } & {
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
                          chips?: never;
                          onChangeChips?: never;
                          enumerationType?: 'plain';
                          onSearch?: (value: string, event?: React.KeyboardEvent<HTMLInputElement>) => void;
                          chipType?: never;
                          chipView?: never;
                          chipValidator?: never;
                      },
                  | 'labelPlacement'
                  | 'chipView'
                  | 'chips'
                  | 'onChangeChips'
                  | 'enumerationType'
                  | 'chipType'
                  | 'chipValidator'
              > &
                  Omit<
                      React.InputHTMLAttributes<HTMLInputElement>,
                      'size' | 'defaultValue' | 'onScroll' | 'required' | 'value'
                  > &
                  React.RefAttributes<HTMLInputElement>)
            | ({
                  labelPlacement?: string;
                  readOnly?: boolean;
                  disabled?: boolean;
                  portal?: string | React.RefObject<HTMLElement>;
                  zIndex?: React.CSSProperties['zIndex'];
                  value?: string;
                  defaultValue?: string;
                  suggestions?: SuggestionItemType[] | undefined;
                  threshold?: number;
                  filter?: ((data: SuggestionItemType) => boolean) | undefined;
                  onSuggestionSelect?: ((data: SuggestionItemType) => void) | undefined;
                  onScroll?: (e: React.UIEvent<HTMLElement>) => void;
                  listMaxHeight?: string;
                  listWidth?: string;
                  renderList?: ((data?: SuggestionItemType[] | undefined) => React.ReactNode) | undefined;
                  renderListEnd?: () => React.ReactNode;
                  renderItem?: ((item: SuggestionItemType) => React.ReactNode) | undefined;
                  beforeList?: React.ReactNode;
                  afterList?: React.ReactNode;
                  virtual?: boolean;
                  flip?: boolean;
                  rootClassName?: string;
                  rootStyle?: React.CSSProperties;
                  size?: string;
                  view?: string;
              } & Omit<
                  {
                      titleCaption?: React.ReactNode;
                      leftHelper?: React.ReactNode;
                      contentLeft?: React.ReactElement;
                      contentRight?: React.ReactElement;
                      textBefore?: string;
                      textAfter?: string;
                      onSearch?: (value: string, event?: React.KeyboardEvent<HTMLInputElement>) => void;
                  } & import('@salutejs/plasma-new-hope/types/components/TextField/TextField.types.js').LabelProps &
                      import('@salutejs/plasma-new-hope/types/components/TextField/TextField.types.js').RequiredProps & {
                          clear?: false;
                          hasDivider?: never;
                      } & {
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
                          enumerationType: 'chip';
                          onSearch?: never;
                          chips?: Array<
                              import('@salutejs/plasma-new-hope/types/components/TextField/TextField.types.js').TextFieldPrimitiveValue
                          >;
                          onChangeChips?: (
                              value: Array<
                                  import('@salutejs/plasma-new-hope/types/components/TextField/TextField.types.js').TextFieldPrimitiveValue
                              >,
                          ) => void;
                          chipType?: 'default' | 'text';
                          chipView?: string;
                          chipValidator?: (
                              value: string,
                          ) => {
                              view?: string;
                          };
                      },
                  | 'labelPlacement'
                  | 'chipView'
                  | 'chips'
                  | 'onChangeChips'
                  | 'enumerationType'
                  | 'chipType'
                  | 'chipValidator'
              > &
                  Omit<
                      React.InputHTMLAttributes<HTMLInputElement>,
                      'size' | 'defaultValue' | 'onScroll' | 'required' | 'value'
                  > &
                  React.RefAttributes<HTMLInputElement>)
            | ({
                  labelPlacement?: string;
                  readOnly?: boolean;
                  disabled?: boolean;
                  portal?: string | React.RefObject<HTMLElement>;
                  zIndex?: React.CSSProperties['zIndex'];
                  value?: string;
                  defaultValue?: string;
                  suggestions?: SuggestionItemType[] | undefined;
                  threshold?: number;
                  filter?: ((data: SuggestionItemType) => boolean) | undefined;
                  onSuggestionSelect?: ((data: SuggestionItemType) => void) | undefined;
                  onScroll?: (e: React.UIEvent<HTMLElement>) => void;
                  listMaxHeight?: string;
                  listWidth?: string;
                  renderList?: ((data?: SuggestionItemType[] | undefined) => React.ReactNode) | undefined;
                  renderListEnd?: () => React.ReactNode;
                  renderItem?: ((item: SuggestionItemType) => React.ReactNode) | undefined;
                  beforeList?: React.ReactNode;
                  afterList?: React.ReactNode;
                  virtual?: boolean;
                  flip?: boolean;
                  rootClassName?: string;
                  rootStyle?: React.CSSProperties;
                  size?: string;
                  view?: string;
              } & Omit<
                  {
                      titleCaption?: React.ReactNode;
                      leftHelper?: React.ReactNode;
                      contentLeft?: React.ReactElement;
                      contentRight?: React.ReactElement;
                      textBefore?: string;
                      textAfter?: string;
                      onSearch?: (value: string, event?: React.KeyboardEvent<HTMLInputElement>) => void;
                  } & import('@salutejs/plasma-new-hope/types/components/TextField/TextField.types.js').LabelProps &
                      import('@salutejs/plasma-new-hope/types/components/TextField/TextField.types.js').RequiredProps & {
                          clear?: false;
                          hasDivider?: never;
                      } & {
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
                          chips?: never;
                          onChangeChips?: never;
                          enumerationType?: 'plain';
                          onSearch?: (value: string, event?: React.KeyboardEvent<HTMLInputElement>) => void;
                          chipType?: never;
                          chipView?: never;
                          chipValidator?: never;
                      },
                  | 'labelPlacement'
                  | 'chipView'
                  | 'chips'
                  | 'onChangeChips'
                  | 'enumerationType'
                  | 'chipType'
                  | 'chipValidator'
              > &
                  Omit<
                      React.InputHTMLAttributes<HTMLInputElement>,
                      'size' | 'defaultValue' | 'onScroll' | 'required' | 'value'
                  > &
                  React.RefAttributes<HTMLInputElement>)
            | ({
                  labelPlacement?: string;
                  readOnly?: boolean;
                  disabled?: boolean;
                  portal?: string | React.RefObject<HTMLElement>;
                  zIndex?: React.CSSProperties['zIndex'];
                  value?: string;
                  defaultValue?: string;
                  suggestions?: SuggestionItemType[] | undefined;
                  threshold?: number;
                  filter?: ((data: SuggestionItemType) => boolean) | undefined;
                  onSuggestionSelect?: ((data: SuggestionItemType) => void) | undefined;
                  onScroll?: (e: React.UIEvent<HTMLElement>) => void;
                  listMaxHeight?: string;
                  listWidth?: string;
                  renderList?: ((data?: SuggestionItemType[] | undefined) => React.ReactNode) | undefined;
                  renderListEnd?: () => React.ReactNode;
                  renderItem?: ((item: SuggestionItemType) => React.ReactNode) | undefined;
                  beforeList?: React.ReactNode;
                  afterList?: React.ReactNode;
                  virtual?: boolean;
                  flip?: boolean;
                  rootClassName?: string;
                  rootStyle?: React.CSSProperties;
                  size?: string;
                  view?: string;
              } & Omit<
                  {
                      titleCaption?: React.ReactNode;
                      leftHelper?: React.ReactNode;
                      contentLeft?: React.ReactElement;
                      contentRight?: React.ReactElement;
                      textBefore?: string;
                      textAfter?: string;
                      onSearch?: (value: string, event?: React.KeyboardEvent<HTMLInputElement>) => void;
                  } & import('@salutejs/plasma-new-hope/types/components/TextField/TextField.types.js').LabelProps &
                      import('@salutejs/plasma-new-hope/types/components/TextField/TextField.types.js').RequiredProps & {
                          clear?: false;
                          hasDivider?: never;
                      } & {
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
                          enumerationType: 'chip';
                          onSearch?: never;
                          chips?: Array<
                              import('@salutejs/plasma-new-hope/types/components/TextField/TextField.types.js').TextFieldPrimitiveValue
                          >;
                          onChangeChips?: (
                              value: Array<
                                  import('@salutejs/plasma-new-hope/types/components/TextField/TextField.types.js').TextFieldPrimitiveValue
                              >,
                          ) => void;
                          chipType?: 'default' | 'text';
                          chipView?: string;
                          chipValidator?: (
                              value: string,
                          ) => {
                              view?: string;
                          };
                      },
                  | 'labelPlacement'
                  | 'chipView'
                  | 'chips'
                  | 'onChangeChips'
                  | 'enumerationType'
                  | 'chipType'
                  | 'chipValidator'
              > &
                  Omit<
                      React.InputHTMLAttributes<HTMLInputElement>,
                      'size' | 'defaultValue' | 'onScroll' | 'required' | 'value'
                  > &
                  React.RefAttributes<HTMLInputElement>)
        )
>;
type PropsFromConfig = keyof typeof config['variations'];
type Props<T extends SuggestionItemType> = DistributiveOmit<AutocompleteProps<T>, PropsFromConfig> &
    DistributivePick<ComponentProps<typeof AutocompleteComponent>, PropsFromConfig>;
export declare const Autocomplete: <T extends SuggestionItemType>(
    props: Props<T> & React.RefAttributes<HTMLInputElement>,
) => React.ReactElement | null;
export {};

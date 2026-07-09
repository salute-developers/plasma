/**
 * Компонент, позволяющий прикрепить локальный файл
 */
export declare const Attach: import('react').FunctionComponent<
    import('@salutejs/plasma-new-hope/types/engines/types.js').PropsType<{
        view: {
            default: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
            accent: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
            secondary: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
            clear: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
            success: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
            warning: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
            critical: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
            dark: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
            black: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
            white: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
        };
        helperTextView: {
            default: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
            negative: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
        };
        size: {
            l: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
            m: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
            s: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
            xs: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
        };
    }> &
        (
            | (Omit<import('react').InputHTMLAttributes<HTMLInputElement>, 'size'> &
                  Omit<import('react').ButtonHTMLAttributes<HTMLElement>, 'value'> &
                  import('@salutejs/plasma-new-hope/styled-components').AsProps & {
                      text?: string;
                      contentLeft?: import('react').ReactNode;
                      contentPlacing?: 'default' | 'relaxed';
                      additionalContent?: import('react').ReactNode;
                      isLoading?: boolean;
                      loader?: import('react').ReactNode;
                      stretch?: boolean;
                      stretching?: 'auto' | 'filled' | 'fixed';
                      square?: boolean;
                      focused?: boolean;
                      disabled?: boolean;
                      pin?: import('@salutejs/plasma-new-hope/types/utils/roundness.js').Pin;
                      appearance?: 'default' | 'outline';
                      view?: string;
                      size?: string;
                      outlined?: boolean;
                      shiftLeft?: boolean;
                      shiftRight?: boolean;
                      blur?: import('@salutejs/plasma-new-hope/styled-components').Blur;
                  } & {
                      value?: string | number;
                      contentRight?: never;
                  } & {
                      acceptedFileFormats?: string[];
                      hideButtonOnAttach?: boolean;
                      hasAttachment?: boolean;
                      helperText?: string;
                      size?: string;
                      view?: string;
                      helperTextView?: string;
                      customIcon?: React.ReactNode;
                      onClear?: (
                          fileInfo: import('@salutejs/plasma-new-hope/types/components/Attach/Attach.types.js').FileInfo,
                      ) => void;
                  } & {
                      flow?: 'horizontal';
                      multiple?: boolean;
                      dropdownOptions?: import('@salutejs/plasma-new-hope/types/components/Attach/Attach.types.js').DropdownOptions;
                  } & {
                      buttonType?: 'button';
                  } & import('react').RefAttributes<HTMLDivElement>)
            | (Omit<import('react').InputHTMLAttributes<HTMLInputElement>, 'size'> &
                  Omit<import('react').ButtonHTMLAttributes<HTMLElement>, 'value'> &
                  import('@salutejs/plasma-new-hope/styled-components').AsProps & {
                      text?: string;
                      contentLeft?: import('react').ReactNode;
                      contentPlacing?: 'default' | 'relaxed';
                      additionalContent?: import('react').ReactNode;
                      isLoading?: boolean;
                      loader?: import('react').ReactNode;
                      stretch?: boolean;
                      stretching?: 'auto' | 'filled' | 'fixed';
                      square?: boolean;
                      focused?: boolean;
                      disabled?: boolean;
                      pin?: import('@salutejs/plasma-new-hope/types/utils/roundness.js').Pin;
                      appearance?: 'default' | 'outline';
                      view?: string;
                      size?: string;
                      outlined?: boolean;
                      shiftLeft?: boolean;
                      shiftRight?: boolean;
                      blur?: import('@salutejs/plasma-new-hope/styled-components').Blur;
                  } & {
                      value?: string | number;
                      contentRight?: never;
                  } & {
                      acceptedFileFormats?: string[];
                      hideButtonOnAttach?: boolean;
                      hasAttachment?: boolean;
                      helperText?: string;
                      size?: string;
                      view?: string;
                      helperTextView?: string;
                      customIcon?: React.ReactNode;
                      onClear?: (
                          fileInfo: import('@salutejs/plasma-new-hope/types/components/Attach/Attach.types.js').FileInfo,
                      ) => void;
                  } & {
                      flow?: 'horizontal';
                      multiple?: boolean;
                      dropdownOptions?: import('@salutejs/plasma-new-hope/types/components/Attach/Attach.types.js').DropdownOptions;
                  } & {
                      buttonType?: 'button';
                  } & {
                      value?: never;
                      contentRight?: import('react').ReactNode;
                  } & import('react').RefAttributes<HTMLDivElement>)
            | (Omit<import('react').InputHTMLAttributes<HTMLInputElement>, 'size'> &
                  Omit<import('react').ButtonHTMLAttributes<HTMLElement>, 'value'> &
                  import('@salutejs/plasma-new-hope/styled-components').AsProps & {
                      text?: string;
                      contentLeft?: import('react').ReactNode;
                      contentPlacing?: 'default' | 'relaxed';
                      additionalContent?: import('react').ReactNode;
                      isLoading?: boolean;
                      loader?: import('react').ReactNode;
                      stretch?: boolean;
                      stretching?: 'auto' | 'filled' | 'fixed';
                      square?: boolean;
                      focused?: boolean;
                      disabled?: boolean;
                      pin?: import('@salutejs/plasma-new-hope/types/utils/roundness.js').Pin;
                      appearance?: 'default' | 'outline';
                      view?: string;
                      size?: string;
                      outlined?: boolean;
                      shiftLeft?: boolean;
                      shiftRight?: boolean;
                      blur?: import('@salutejs/plasma-new-hope/styled-components').Blur;
                  } & {
                      value?: string | number;
                      contentRight?: never;
                  } & {
                      acceptedFileFormats?: string[];
                      hideButtonOnAttach?: boolean;
                      hasAttachment?: boolean;
                      helperText?: string;
                      size?: string;
                      view?: string;
                      helperTextView?: string;
                      customIcon?: React.ReactNode;
                      onClear?: (
                          fileInfo: import('@salutejs/plasma-new-hope/types/components/Attach/Attach.types.js').FileInfo,
                      ) => void;
                  } & {
                      flow?: 'horizontal';
                      multiple?: boolean;
                      dropdownOptions?: import('@salutejs/plasma-new-hope/types/components/Attach/Attach.types.js').DropdownOptions;
                  } & {
                      buttonType?: 'iconButton';
                      icon?: React.ReactNode;
                  } & import('react').RefAttributes<HTMLDivElement>)
            | (Omit<import('react').InputHTMLAttributes<HTMLInputElement>, 'size'> &
                  Omit<import('react').ButtonHTMLAttributes<HTMLElement>, 'value'> &
                  import('@salutejs/plasma-new-hope/styled-components').AsProps & {
                      text?: string;
                      contentLeft?: import('react').ReactNode;
                      contentPlacing?: 'default' | 'relaxed';
                      additionalContent?: import('react').ReactNode;
                      isLoading?: boolean;
                      loader?: import('react').ReactNode;
                      stretch?: boolean;
                      stretching?: 'auto' | 'filled' | 'fixed';
                      square?: boolean;
                      focused?: boolean;
                      disabled?: boolean;
                      pin?: import('@salutejs/plasma-new-hope/types/utils/roundness.js').Pin;
                      appearance?: 'default' | 'outline';
                      view?: string;
                      size?: string;
                      outlined?: boolean;
                      shiftLeft?: boolean;
                      shiftRight?: boolean;
                      blur?: import('@salutejs/plasma-new-hope/styled-components').Blur;
                  } & {
                      value?: string | number;
                      contentRight?: never;
                  } & {
                      acceptedFileFormats?: string[];
                      hideButtonOnAttach?: boolean;
                      hasAttachment?: boolean;
                      helperText?: string;
                      size?: string;
                      view?: string;
                      helperTextView?: string;
                      customIcon?: React.ReactNode;
                      onClear?: (
                          fileInfo: import('@salutejs/plasma-new-hope/types/components/Attach/Attach.types.js').FileInfo,
                      ) => void;
                  } & {
                      flow?: 'horizontal';
                      multiple?: boolean;
                      dropdownOptions?: import('@salutejs/plasma-new-hope/types/components/Attach/Attach.types.js').DropdownOptions;
                  } & {
                      buttonType?: 'iconButton';
                      icon?: React.ReactNode;
                  } & {
                      value?: never;
                      contentRight?: import('react').ReactNode;
                  } & import('react').RefAttributes<HTMLDivElement>)
            | (Omit<import('react').InputHTMLAttributes<HTMLInputElement>, 'size'> &
                  Omit<import('react').ButtonHTMLAttributes<HTMLElement>, 'value'> &
                  import('@salutejs/plasma-new-hope/styled-components').AsProps & {
                      text?: string;
                      contentLeft?: import('react').ReactNode;
                      contentPlacing?: 'default' | 'relaxed';
                      additionalContent?: import('react').ReactNode;
                      isLoading?: boolean;
                      loader?: import('react').ReactNode;
                      stretch?: boolean;
                      stretching?: 'auto' | 'filled' | 'fixed';
                      square?: boolean;
                      focused?: boolean;
                      disabled?: boolean;
                      pin?: import('@salutejs/plasma-new-hope/types/utils/roundness.js').Pin;
                      appearance?: 'default' | 'outline';
                      view?: string;
                      size?: string;
                      outlined?: boolean;
                      shiftLeft?: boolean;
                      shiftRight?: boolean;
                      blur?: import('@salutejs/plasma-new-hope/styled-components').Blur;
                  } & {
                      value?: string | number;
                      contentRight?: never;
                  } & {
                      acceptedFileFormats?: string[];
                      hideButtonOnAttach?: boolean;
                      hasAttachment?: boolean;
                      helperText?: string;
                      size?: string;
                      view?: string;
                      helperTextView?: string;
                      customIcon?: React.ReactNode;
                      onClear?: (
                          fileInfo: import('@salutejs/plasma-new-hope/types/components/Attach/Attach.types.js').FileInfo,
                      ) => void;
                  } & {
                      flow?: 'vertical' | 'auto';
                      multiple?: boolean;
                      dropdownOptions?: never;
                  } & {
                      buttonType?: 'button';
                  } & import('react').RefAttributes<HTMLDivElement>)
            | (Omit<import('react').InputHTMLAttributes<HTMLInputElement>, 'size'> &
                  Omit<import('react').ButtonHTMLAttributes<HTMLElement>, 'value'> &
                  import('@salutejs/plasma-new-hope/styled-components').AsProps & {
                      text?: string;
                      contentLeft?: import('react').ReactNode;
                      contentPlacing?: 'default' | 'relaxed';
                      additionalContent?: import('react').ReactNode;
                      isLoading?: boolean;
                      loader?: import('react').ReactNode;
                      stretch?: boolean;
                      stretching?: 'auto' | 'filled' | 'fixed';
                      square?: boolean;
                      focused?: boolean;
                      disabled?: boolean;
                      pin?: import('@salutejs/plasma-new-hope/types/utils/roundness.js').Pin;
                      appearance?: 'default' | 'outline';
                      view?: string;
                      size?: string;
                      outlined?: boolean;
                      shiftLeft?: boolean;
                      shiftRight?: boolean;
                      blur?: import('@salutejs/plasma-new-hope/styled-components').Blur;
                  } & {
                      value?: string | number;
                      contentRight?: never;
                  } & {
                      acceptedFileFormats?: string[];
                      hideButtonOnAttach?: boolean;
                      hasAttachment?: boolean;
                      helperText?: string;
                      size?: string;
                      view?: string;
                      helperTextView?: string;
                      customIcon?: React.ReactNode;
                      onClear?: (
                          fileInfo: import('@salutejs/plasma-new-hope/types/components/Attach/Attach.types.js').FileInfo,
                      ) => void;
                  } & {
                      flow?: 'vertical' | 'auto';
                      multiple?: boolean;
                      dropdownOptions?: never;
                  } & {
                      buttonType?: 'button';
                  } & {
                      value?: never;
                      contentRight?: import('react').ReactNode;
                  } & import('react').RefAttributes<HTMLDivElement>)
            | (Omit<import('react').InputHTMLAttributes<HTMLInputElement>, 'size'> &
                  Omit<import('react').ButtonHTMLAttributes<HTMLElement>, 'value'> &
                  import('@salutejs/plasma-new-hope/styled-components').AsProps & {
                      text?: string;
                      contentLeft?: import('react').ReactNode;
                      contentPlacing?: 'default' | 'relaxed';
                      additionalContent?: import('react').ReactNode;
                      isLoading?: boolean;
                      loader?: import('react').ReactNode;
                      stretch?: boolean;
                      stretching?: 'auto' | 'filled' | 'fixed';
                      square?: boolean;
                      focused?: boolean;
                      disabled?: boolean;
                      pin?: import('@salutejs/plasma-new-hope/types/utils/roundness.js').Pin;
                      appearance?: 'default' | 'outline';
                      view?: string;
                      size?: string;
                      outlined?: boolean;
                      shiftLeft?: boolean;
                      shiftRight?: boolean;
                      blur?: import('@salutejs/plasma-new-hope/styled-components').Blur;
                  } & {
                      value?: string | number;
                      contentRight?: never;
                  } & {
                      acceptedFileFormats?: string[];
                      hideButtonOnAttach?: boolean;
                      hasAttachment?: boolean;
                      helperText?: string;
                      size?: string;
                      view?: string;
                      helperTextView?: string;
                      customIcon?: React.ReactNode;
                      onClear?: (
                          fileInfo: import('@salutejs/plasma-new-hope/types/components/Attach/Attach.types.js').FileInfo,
                      ) => void;
                  } & {
                      flow?: 'vertical' | 'auto';
                      multiple?: boolean;
                      dropdownOptions?: never;
                  } & {
                      buttonType?: 'iconButton';
                      icon?: React.ReactNode;
                  } & import('react').RefAttributes<HTMLDivElement>)
            | (Omit<import('react').InputHTMLAttributes<HTMLInputElement>, 'size'> &
                  Omit<import('react').ButtonHTMLAttributes<HTMLElement>, 'value'> &
                  import('@salutejs/plasma-new-hope/styled-components').AsProps & {
                      text?: string;
                      contentLeft?: import('react').ReactNode;
                      contentPlacing?: 'default' | 'relaxed';
                      additionalContent?: import('react').ReactNode;
                      isLoading?: boolean;
                      loader?: import('react').ReactNode;
                      stretch?: boolean;
                      stretching?: 'auto' | 'filled' | 'fixed';
                      square?: boolean;
                      focused?: boolean;
                      disabled?: boolean;
                      pin?: import('@salutejs/plasma-new-hope/types/utils/roundness.js').Pin;
                      appearance?: 'default' | 'outline';
                      view?: string;
                      size?: string;
                      outlined?: boolean;
                      shiftLeft?: boolean;
                      shiftRight?: boolean;
                      blur?: import('@salutejs/plasma-new-hope/styled-components').Blur;
                  } & {
                      value?: string | number;
                      contentRight?: never;
                  } & {
                      acceptedFileFormats?: string[];
                      hideButtonOnAttach?: boolean;
                      hasAttachment?: boolean;
                      helperText?: string;
                      size?: string;
                      view?: string;
                      helperTextView?: string;
                      customIcon?: React.ReactNode;
                      onClear?: (
                          fileInfo: import('@salutejs/plasma-new-hope/types/components/Attach/Attach.types.js').FileInfo,
                      ) => void;
                  } & {
                      flow?: 'vertical' | 'auto';
                      multiple?: boolean;
                      dropdownOptions?: never;
                  } & {
                      buttonType?: 'iconButton';
                      icon?: React.ReactNode;
                  } & {
                      value?: never;
                      contentRight?: import('react').ReactNode;
                  } & import('react').RefAttributes<HTMLDivElement>)
            | (Omit<import('react').InputHTMLAttributes<HTMLInputElement>, 'size'> &
                  Omit<import('react').ButtonHTMLAttributes<HTMLElement>, 'value'> &
                  import('@salutejs/plasma-new-hope/styled-components').AsProps & {
                      text?: string;
                      contentLeft?: import('react').ReactNode;
                      contentPlacing?: 'default' | 'relaxed';
                      additionalContent?: import('react').ReactNode;
                      isLoading?: boolean;
                      loader?: import('react').ReactNode;
                      stretch?: boolean;
                      stretching?: 'auto' | 'filled' | 'fixed';
                      square?: boolean;
                      focused?: boolean;
                      disabled?: boolean;
                      pin?: import('@salutejs/plasma-new-hope/types/utils/roundness.js').Pin;
                      appearance?: 'default' | 'outline';
                      view?: string;
                      size?: string;
                      outlined?: boolean;
                      shiftLeft?: boolean;
                      shiftRight?: boolean;
                      blur?: import('@salutejs/plasma-new-hope/styled-components').Blur;
                  } & {
                      value?: never;
                      contentRight?: import('react').ReactNode;
                  } & {
                      acceptedFileFormats?: string[];
                      hideButtonOnAttach?: boolean;
                      hasAttachment?: boolean;
                      helperText?: string;
                      size?: string;
                      view?: string;
                      helperTextView?: string;
                      customIcon?: React.ReactNode;
                      onClear?: (
                          fileInfo: import('@salutejs/plasma-new-hope/types/components/Attach/Attach.types.js').FileInfo,
                      ) => void;
                  } & {
                      flow?: 'horizontal';
                      multiple?: boolean;
                      dropdownOptions?: import('@salutejs/plasma-new-hope/types/components/Attach/Attach.types.js').DropdownOptions;
                  } & {
                      buttonType?: 'button';
                  } & {
                      value?: string | number;
                      contentRight?: never;
                  } & import('react').RefAttributes<HTMLDivElement>)
            | (Omit<import('react').InputHTMLAttributes<HTMLInputElement>, 'size'> &
                  Omit<import('react').ButtonHTMLAttributes<HTMLElement>, 'value'> &
                  import('@salutejs/plasma-new-hope/styled-components').AsProps & {
                      text?: string;
                      contentLeft?: import('react').ReactNode;
                      contentPlacing?: 'default' | 'relaxed';
                      additionalContent?: import('react').ReactNode;
                      isLoading?: boolean;
                      loader?: import('react').ReactNode;
                      stretch?: boolean;
                      stretching?: 'auto' | 'filled' | 'fixed';
                      square?: boolean;
                      focused?: boolean;
                      disabled?: boolean;
                      pin?: import('@salutejs/plasma-new-hope/types/utils/roundness.js').Pin;
                      appearance?: 'default' | 'outline';
                      view?: string;
                      size?: string;
                      outlined?: boolean;
                      shiftLeft?: boolean;
                      shiftRight?: boolean;
                      blur?: import('@salutejs/plasma-new-hope/styled-components').Blur;
                  } & {
                      value?: never;
                      contentRight?: import('react').ReactNode;
                  } & {
                      acceptedFileFormats?: string[];
                      hideButtonOnAttach?: boolean;
                      hasAttachment?: boolean;
                      helperText?: string;
                      size?: string;
                      view?: string;
                      helperTextView?: string;
                      customIcon?: React.ReactNode;
                      onClear?: (
                          fileInfo: import('@salutejs/plasma-new-hope/types/components/Attach/Attach.types.js').FileInfo,
                      ) => void;
                  } & {
                      flow?: 'horizontal';
                      multiple?: boolean;
                      dropdownOptions?: import('@salutejs/plasma-new-hope/types/components/Attach/Attach.types.js').DropdownOptions;
                  } & {
                      buttonType?: 'button';
                  } & import('react').RefAttributes<HTMLDivElement>)
            | (Omit<import('react').InputHTMLAttributes<HTMLInputElement>, 'size'> &
                  Omit<import('react').ButtonHTMLAttributes<HTMLElement>, 'value'> &
                  import('@salutejs/plasma-new-hope/styled-components').AsProps & {
                      text?: string;
                      contentLeft?: import('react').ReactNode;
                      contentPlacing?: 'default' | 'relaxed';
                      additionalContent?: import('react').ReactNode;
                      isLoading?: boolean;
                      loader?: import('react').ReactNode;
                      stretch?: boolean;
                      stretching?: 'auto' | 'filled' | 'fixed';
                      square?: boolean;
                      focused?: boolean;
                      disabled?: boolean;
                      pin?: import('@salutejs/plasma-new-hope/types/utils/roundness.js').Pin;
                      appearance?: 'default' | 'outline';
                      view?: string;
                      size?: string;
                      outlined?: boolean;
                      shiftLeft?: boolean;
                      shiftRight?: boolean;
                      blur?: import('@salutejs/plasma-new-hope/styled-components').Blur;
                  } & {
                      value?: never;
                      contentRight?: import('react').ReactNode;
                  } & {
                      acceptedFileFormats?: string[];
                      hideButtonOnAttach?: boolean;
                      hasAttachment?: boolean;
                      helperText?: string;
                      size?: string;
                      view?: string;
                      helperTextView?: string;
                      customIcon?: React.ReactNode;
                      onClear?: (
                          fileInfo: import('@salutejs/plasma-new-hope/types/components/Attach/Attach.types.js').FileInfo,
                      ) => void;
                  } & {
                      flow?: 'horizontal';
                      multiple?: boolean;
                      dropdownOptions?: import('@salutejs/plasma-new-hope/types/components/Attach/Attach.types.js').DropdownOptions;
                  } & {
                      buttonType?: 'iconButton';
                      icon?: React.ReactNode;
                  } & {
                      value?: string | number;
                      contentRight?: never;
                  } & import('react').RefAttributes<HTMLDivElement>)
            | (Omit<import('react').InputHTMLAttributes<HTMLInputElement>, 'size'> &
                  Omit<import('react').ButtonHTMLAttributes<HTMLElement>, 'value'> &
                  import('@salutejs/plasma-new-hope/styled-components').AsProps & {
                      text?: string;
                      contentLeft?: import('react').ReactNode;
                      contentPlacing?: 'default' | 'relaxed';
                      additionalContent?: import('react').ReactNode;
                      isLoading?: boolean;
                      loader?: import('react').ReactNode;
                      stretch?: boolean;
                      stretching?: 'auto' | 'filled' | 'fixed';
                      square?: boolean;
                      focused?: boolean;
                      disabled?: boolean;
                      pin?: import('@salutejs/plasma-new-hope/types/utils/roundness.js').Pin;
                      appearance?: 'default' | 'outline';
                      view?: string;
                      size?: string;
                      outlined?: boolean;
                      shiftLeft?: boolean;
                      shiftRight?: boolean;
                      blur?: import('@salutejs/plasma-new-hope/styled-components').Blur;
                  } & {
                      value?: never;
                      contentRight?: import('react').ReactNode;
                  } & {
                      acceptedFileFormats?: string[];
                      hideButtonOnAttach?: boolean;
                      hasAttachment?: boolean;
                      helperText?: string;
                      size?: string;
                      view?: string;
                      helperTextView?: string;
                      customIcon?: React.ReactNode;
                      onClear?: (
                          fileInfo: import('@salutejs/plasma-new-hope/types/components/Attach/Attach.types.js').FileInfo,
                      ) => void;
                  } & {
                      flow?: 'horizontal';
                      multiple?: boolean;
                      dropdownOptions?: import('@salutejs/plasma-new-hope/types/components/Attach/Attach.types.js').DropdownOptions;
                  } & {
                      buttonType?: 'iconButton';
                      icon?: React.ReactNode;
                  } & import('react').RefAttributes<HTMLDivElement>)
            | (Omit<import('react').InputHTMLAttributes<HTMLInputElement>, 'size'> &
                  Omit<import('react').ButtonHTMLAttributes<HTMLElement>, 'value'> &
                  import('@salutejs/plasma-new-hope/styled-components').AsProps & {
                      text?: string;
                      contentLeft?: import('react').ReactNode;
                      contentPlacing?: 'default' | 'relaxed';
                      additionalContent?: import('react').ReactNode;
                      isLoading?: boolean;
                      loader?: import('react').ReactNode;
                      stretch?: boolean;
                      stretching?: 'auto' | 'filled' | 'fixed';
                      square?: boolean;
                      focused?: boolean;
                      disabled?: boolean;
                      pin?: import('@salutejs/plasma-new-hope/types/utils/roundness.js').Pin;
                      appearance?: 'default' | 'outline';
                      view?: string;
                      size?: string;
                      outlined?: boolean;
                      shiftLeft?: boolean;
                      shiftRight?: boolean;
                      blur?: import('@salutejs/plasma-new-hope/styled-components').Blur;
                  } & {
                      value?: never;
                      contentRight?: import('react').ReactNode;
                  } & {
                      acceptedFileFormats?: string[];
                      hideButtonOnAttach?: boolean;
                      hasAttachment?: boolean;
                      helperText?: string;
                      size?: string;
                      view?: string;
                      helperTextView?: string;
                      customIcon?: React.ReactNode;
                      onClear?: (
                          fileInfo: import('@salutejs/plasma-new-hope/types/components/Attach/Attach.types.js').FileInfo,
                      ) => void;
                  } & {
                      flow?: 'vertical' | 'auto';
                      multiple?: boolean;
                      dropdownOptions?: never;
                  } & {
                      buttonType?: 'button';
                  } & {
                      value?: string | number;
                      contentRight?: never;
                  } & import('react').RefAttributes<HTMLDivElement>)
            | (Omit<import('react').InputHTMLAttributes<HTMLInputElement>, 'size'> &
                  Omit<import('react').ButtonHTMLAttributes<HTMLElement>, 'value'> &
                  import('@salutejs/plasma-new-hope/styled-components').AsProps & {
                      text?: string;
                      contentLeft?: import('react').ReactNode;
                      contentPlacing?: 'default' | 'relaxed';
                      additionalContent?: import('react').ReactNode;
                      isLoading?: boolean;
                      loader?: import('react').ReactNode;
                      stretch?: boolean;
                      stretching?: 'auto' | 'filled' | 'fixed';
                      square?: boolean;
                      focused?: boolean;
                      disabled?: boolean;
                      pin?: import('@salutejs/plasma-new-hope/types/utils/roundness.js').Pin;
                      appearance?: 'default' | 'outline';
                      view?: string;
                      size?: string;
                      outlined?: boolean;
                      shiftLeft?: boolean;
                      shiftRight?: boolean;
                      blur?: import('@salutejs/plasma-new-hope/styled-components').Blur;
                  } & {
                      value?: never;
                      contentRight?: import('react').ReactNode;
                  } & {
                      acceptedFileFormats?: string[];
                      hideButtonOnAttach?: boolean;
                      hasAttachment?: boolean;
                      helperText?: string;
                      size?: string;
                      view?: string;
                      helperTextView?: string;
                      customIcon?: React.ReactNode;
                      onClear?: (
                          fileInfo: import('@salutejs/plasma-new-hope/types/components/Attach/Attach.types.js').FileInfo,
                      ) => void;
                  } & {
                      flow?: 'vertical' | 'auto';
                      multiple?: boolean;
                      dropdownOptions?: never;
                  } & {
                      buttonType?: 'button';
                  } & import('react').RefAttributes<HTMLDivElement>)
            | (Omit<import('react').InputHTMLAttributes<HTMLInputElement>, 'size'> &
                  Omit<import('react').ButtonHTMLAttributes<HTMLElement>, 'value'> &
                  import('@salutejs/plasma-new-hope/styled-components').AsProps & {
                      text?: string;
                      contentLeft?: import('react').ReactNode;
                      contentPlacing?: 'default' | 'relaxed';
                      additionalContent?: import('react').ReactNode;
                      isLoading?: boolean;
                      loader?: import('react').ReactNode;
                      stretch?: boolean;
                      stretching?: 'auto' | 'filled' | 'fixed';
                      square?: boolean;
                      focused?: boolean;
                      disabled?: boolean;
                      pin?: import('@salutejs/plasma-new-hope/types/utils/roundness.js').Pin;
                      appearance?: 'default' | 'outline';
                      view?: string;
                      size?: string;
                      outlined?: boolean;
                      shiftLeft?: boolean;
                      shiftRight?: boolean;
                      blur?: import('@salutejs/plasma-new-hope/styled-components').Blur;
                  } & {
                      value?: never;
                      contentRight?: import('react').ReactNode;
                  } & {
                      acceptedFileFormats?: string[];
                      hideButtonOnAttach?: boolean;
                      hasAttachment?: boolean;
                      helperText?: string;
                      size?: string;
                      view?: string;
                      helperTextView?: string;
                      customIcon?: React.ReactNode;
                      onClear?: (
                          fileInfo: import('@salutejs/plasma-new-hope/types/components/Attach/Attach.types.js').FileInfo,
                      ) => void;
                  } & {
                      flow?: 'vertical' | 'auto';
                      multiple?: boolean;
                      dropdownOptions?: never;
                  } & {
                      buttonType?: 'iconButton';
                      icon?: React.ReactNode;
                  } & {
                      value?: string | number;
                      contentRight?: never;
                  } & import('react').RefAttributes<HTMLDivElement>)
            | (Omit<import('react').InputHTMLAttributes<HTMLInputElement>, 'size'> &
                  Omit<import('react').ButtonHTMLAttributes<HTMLElement>, 'value'> &
                  import('@salutejs/plasma-new-hope/styled-components').AsProps & {
                      text?: string;
                      contentLeft?: import('react').ReactNode;
                      contentPlacing?: 'default' | 'relaxed';
                      additionalContent?: import('react').ReactNode;
                      isLoading?: boolean;
                      loader?: import('react').ReactNode;
                      stretch?: boolean;
                      stretching?: 'auto' | 'filled' | 'fixed';
                      square?: boolean;
                      focused?: boolean;
                      disabled?: boolean;
                      pin?: import('@salutejs/plasma-new-hope/types/utils/roundness.js').Pin;
                      appearance?: 'default' | 'outline';
                      view?: string;
                      size?: string;
                      outlined?: boolean;
                      shiftLeft?: boolean;
                      shiftRight?: boolean;
                      blur?: import('@salutejs/plasma-new-hope/styled-components').Blur;
                  } & {
                      value?: never;
                      contentRight?: import('react').ReactNode;
                  } & {
                      acceptedFileFormats?: string[];
                      hideButtonOnAttach?: boolean;
                      hasAttachment?: boolean;
                      helperText?: string;
                      size?: string;
                      view?: string;
                      helperTextView?: string;
                      customIcon?: React.ReactNode;
                      onClear?: (
                          fileInfo: import('@salutejs/plasma-new-hope/types/components/Attach/Attach.types.js').FileInfo,
                      ) => void;
                  } & {
                      flow?: 'vertical' | 'auto';
                      multiple?: boolean;
                      dropdownOptions?: never;
                  } & {
                      buttonType?: 'iconButton';
                      icon?: React.ReactNode;
                  } & import('react').RefAttributes<HTMLDivElement>)
        )
>;

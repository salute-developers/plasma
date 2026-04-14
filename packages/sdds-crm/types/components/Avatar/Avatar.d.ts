declare const mergedConfig: import('@salutejs/plasma-new-hope/styled-components').ComponentConfig<
    string,
    {
        view: {
            default: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
        };
        size: {
            xxl: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
            l: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
            m: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
            s: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
            fit: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
        };
        shape: {
            circled: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
            rounded: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
        };
        badgeView: {
            default: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
            accent: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
            positive: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
            warning: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
            negative: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
            dark: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
            light: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
        };
        counterView: {
            default: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
            accent: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
            positive: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
            warning: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
            negative: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
            dark: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
            light: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
        };
    },
    import('@salutejs/plasma-new-hope/types/engines/types.js').PropsType<{
        view: {
            default: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
        };
        size: {
            xxl: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
            l: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
            m: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
            s: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
            fit: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
        };
        shape: {
            circled: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
            rounded: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
        };
        badgeView: {
            default: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
            accent: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
            positive: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
            warning: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
            negative: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
            dark: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
            light: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
        };
        counterView: {
            default: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
            accent: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
            positive: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
            warning: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
            negative: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
            dark: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
            light: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
        };
    }>,
    | (import('react').HTMLAttributes<HTMLDivElement> & {
          shape?: string;
          size?: string;
          name?: string;
          url?: string;
          customText?: string;
          status?: 'active' | 'inactive';
          isScalable?: boolean;
          focused?: boolean;
          statusLabels?: import('@salutejs/plasma-new-hope/types/components/Avatar/Avatar.types.js').StatusLabels;
          hasExtra?: boolean;
          type?: 'badge' | 'counter';
          extraPlacement?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
          customBorderRadius?: number | string;
      } & {
          badgeView?: string | undefined;
          pilled?: boolean | undefined;
          text?: string | undefined;
          customColor?: string | undefined;
          customBackgroundColor?: string | undefined;
          contentLeft?: import('react').ReactNode;
          contentRight?: import('react').ReactNode;
      } & {
          counterView?: undefined;
          count?: undefined;
          maxCount?: undefined;
      } & import('react').RefAttributes<HTMLDivElement>)
    | (import('react').HTMLAttributes<HTMLDivElement> & {
          shape?: string;
          size?: string;
          name?: string;
          url?: string;
          customText?: string;
          status?: 'active' | 'inactive';
          isScalable?: boolean;
          focused?: boolean;
          statusLabels?: import('@salutejs/plasma-new-hope/types/components/Avatar/Avatar.types.js').StatusLabels;
          hasExtra?: boolean;
          type?: 'badge' | 'counter';
          extraPlacement?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
          customBorderRadius?: number | string;
      } & {
          counterView?: string | undefined;
          count?: number | undefined;
          maxCount?: number | undefined;
      } & {
          badgeView?: undefined;
          pilled?: undefined;
          text?: undefined;
          customColor?: undefined;
          customBackgroundColor?: undefined;
          contentLeft?: undefined;
          contentRight?: never | undefined;
      } & import('react').RefAttributes<HTMLDivElement>)
>;
declare const Avatar: import('react').FunctionComponent<
    import('@salutejs/plasma-new-hope/types/engines/types.js').PropsType<{
        view: {
            default: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
        };
        size: {
            xxl: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
            l: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
            m: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
            s: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
            fit: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
        };
        shape: {
            circled: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
            rounded: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
        };
        badgeView: {
            default: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
            accent: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
            positive: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
            warning: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
            negative: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
            dark: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
            light: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
        };
        counterView: {
            default: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
            accent: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
            positive: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
            warning: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
            negative: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
            dark: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
            light: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
        };
    }> &
        (
            | (import('react').HTMLAttributes<HTMLDivElement> & {
                  shape?: string;
                  size?: string;
                  name?: string;
                  url?: string;
                  customText?: string;
                  status?: 'active' | 'inactive';
                  isScalable?: boolean;
                  focused?: boolean;
                  statusLabels?: import('@salutejs/plasma-new-hope/types/components/Avatar/Avatar.types.js').StatusLabels;
                  hasExtra?: boolean;
                  type?: 'badge' | 'counter';
                  extraPlacement?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
                  customBorderRadius?: number | string;
              } & {
                  badgeView?: string | undefined;
                  pilled?: boolean | undefined;
                  text?: string | undefined;
                  customColor?: string | undefined;
                  customBackgroundColor?: string | undefined;
                  contentLeft?: import('react').ReactNode;
                  contentRight?: import('react').ReactNode;
              } & {
                  counterView?: undefined;
                  count?: undefined;
                  maxCount?: undefined;
              } & import('react').RefAttributes<HTMLDivElement>)
            | (import('react').HTMLAttributes<HTMLDivElement> & {
                  shape?: string;
                  size?: string;
                  name?: string;
                  url?: string;
                  customText?: string;
                  status?: 'active' | 'inactive';
                  isScalable?: boolean;
                  focused?: boolean;
                  statusLabels?: import('@salutejs/plasma-new-hope/types/components/Avatar/Avatar.types.js').StatusLabels;
                  hasExtra?: boolean;
                  type?: 'badge' | 'counter';
                  extraPlacement?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
                  customBorderRadius?: number | string;
              } & {
                  counterView?: string | undefined;
                  count?: number | undefined;
                  maxCount?: number | undefined;
              } & {
                  badgeView?: undefined;
                  pilled?: undefined;
                  text?: undefined;
                  customColor?: undefined;
                  customBackgroundColor?: undefined;
                  contentLeft?: undefined;
                  contentRight?: never | undefined;
              } & import('react').RefAttributes<HTMLDivElement>)
        )
>;
export { Avatar, mergedConfig };

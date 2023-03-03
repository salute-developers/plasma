import type { HeaderProps as OldHeaderProps, NeuHeaderProps as NewHeaderProps } from '@salutejs/plasma-ui';

export type HeaderProps = NewHeaderProps | OldHeaderProps;
export type { NewHeaderProps, OldHeaderProps };

export interface ComponentPropsWithHeader {
    header?: HeaderProps;
}

import { NeuHeaderProps as NewHeaderProps } from '@salutejs/plasma-ui/components/Header/NeuHeader';
import { HeaderProps as OldHeaderProps } from '@salutejs/plasma-ui';

export type HeaderProps = NewHeaderProps | OldHeaderProps;
export type { NewHeaderProps, OldHeaderProps };

export interface ComponentPropsWithHeader {
    header?: HeaderProps;
}

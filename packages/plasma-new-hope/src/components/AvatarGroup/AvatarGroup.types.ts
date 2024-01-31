import { HTMLAttributes, ReactNode } from 'react';

type CustomAvatarGroupProps = {
    // Параметры отдельного аватара
    children: ReactNode;
};

export type AvatarGroupProps = HTMLAttributes<HTMLDivElement> & CustomAvatarGroupProps;

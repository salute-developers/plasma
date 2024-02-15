import { HTMLAttributes, ReactNode } from 'react';

type CustomAvatarGroupProps = {
    children: ReactNode;
};

export type AvatarGroupProps = HTMLAttributes<HTMLDivElement> & CustomAvatarGroupProps;

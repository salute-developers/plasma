import type { FC, PropsWithChildren } from 'react';
export type resourceOrOption = string | {
    timeout?: number;
};
interface PortalProps {
    id: string;
}
export declare const Portal: FC<PropsWithChildren<PortalProps>>;
export {};

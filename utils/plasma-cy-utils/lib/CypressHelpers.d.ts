import React, { PropsWithChildren } from 'react';
import { mount as cyMount } from '@cypress/react';
export declare const getComponent: <T = {
    children?: React.ReactNode;
}>(componentName: string) => React.FC<T>;
interface CYTDec {
    noSSR?: boolean;
}
export declare const CypressTestDecorator: React.FC<PropsWithChildren<CYTDec>>;
export declare const PadMe: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const SpaceMe: import("styled-components").StyledComponent<"span", any, {}, never>;
export declare const withNoAnimation: <P extends {}>(Comp: React.FC<P>) => React.FC<P>;
export declare const mount: typeof cyMount;
declare global {
    export namespace Cypress {
        interface Chainable {
            waitForResources(...resources: resourceOrOption[]): Chainable;
        }
    }
}
export declare type resourceOrOption = string | {
    timeout?: number;
};
interface PortalProps {
    id: string;
}
export declare const Portal: React.FC<PropsWithChildren<PortalProps>>;
export {};
//# sourceMappingURL=CypressHelpers.d.ts.map
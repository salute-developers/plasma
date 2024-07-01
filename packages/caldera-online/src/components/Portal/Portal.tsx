import { portalConfig, component, mergeConfig } from '@salutejs/plasma-new-hope/emotion';

const mergedConfig = mergeConfig(portalConfig);
const PortalComponent = component(mergedConfig);

/*
 * Вспомогательный компонент. Используется в Popup, Popover.
 * Представляет собой ReactDOM.createPortal() в форме компонента.
 */
export const Portal = PortalComponent;

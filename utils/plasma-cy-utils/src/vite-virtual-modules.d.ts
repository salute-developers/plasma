/**
 * Виртуальный модуль, резолвится плагином virtualTestPackage в cypress/vite.config.ts.
 * Экспортирует все именованные экспорты пакета, который тестируется (PACKAGE_NAME).
 */
declare module '@plasma-cy/test-package';

/**
 * Виртуальный модуль, резолвится плагином virtualTestConfigs в cypress/vite.config.ts.
 * Экспортирует конфиги компонентов текущего пакета как namespace-ы:
 *   import * as testConfigs from '@plasma-cy/test-configs';
 *   testConfigs.Button.config // → конфиг Button
 */
declare module '@plasma-cy/test-configs';

/**
 * Виртуальный модуль, резолвится плагином virtualTestTheme в cypress/vite.config.ts.
 * Экспортирует тему только для текущего пакета (PACKAGE_NAME).
 */
declare module '@plasma-cy/test-theme';

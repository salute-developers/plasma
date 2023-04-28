import { Container as ContainerHope } from '@salutejs/plasma-hope';

export const ContainerBase = ContainerHope({ design: 'b2c' });

/**
 * Блок с полями по бокам для размещения контента по вертикали.
 * Блок нельзя вкладывать сам в себя или дальше по дереву.
 * Для настройки максимальной ширины необходимо использовать свойство `maxWidth`.
 */
export const Container = ContainerBase;

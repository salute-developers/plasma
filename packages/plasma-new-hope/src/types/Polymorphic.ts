import type { ComponentPropsWithRef, ComponentPropsWithoutRef, ComponentType, ElementType, ReactElement } from 'react';

type AsProp<C extends ElementType> = {
    as?: C;
};

/**
 * Пропсы полиморфного компонента:
 * собственные пропсы + пропсы as-компонента (без конфликтов с собственными)
 */
export type PolymorphicComponentProps<C extends ElementType, OwnProps = {}> = OwnProps &
    AsProp<C> &
    Omit<ComponentPropsWithoutRef<C>, keyof OwnProps | 'as'>;

/**
 * Пропсы полиморфного компонента с ref
 */
export type PolymorphicComponentPropsWithRef<C extends ElementType, OwnProps = {}> = PolymorphicComponentProps<
    C,
    OwnProps
> & {
    ref?: ComponentPropsWithRef<C>['ref'];
};

/**
 * Тип полиморфного компонента — дженерик callable.
 * DefaultElement — элемент по умолчанию (например 'button').
 * OwnProps — собственные пропсы компонента (без HTML-атрибутов).
 *
 * Определён как тип функции (не объектный тип с call signature),
 * чтобы поддерживать TypeScript instantiation expressions: Button<'a'>.
 */
export type PolymorphicForwardRefComponent<DefaultElement extends ElementType, OwnProps = {}> = (<
    C extends ElementType = DefaultElement
>(
    props: PolymorphicComponentPropsWithRef<C, OwnProps>,
) => ReactElement | null) &
    ((props: PolymorphicComponentPropsWithRef<DefaultElement, OwnProps>) => ReactElement | null) & {
        displayName?: string;
    };

/**
 * Преобразует существующий компонент в полиморфный, сохраняя все его пропсы (включая выведенные варианты).
 * Использовать совместно с component(): `component(config) as unknown as MakePolymorphic<typeof _Button, 'button'>`.
 *
 * DefaultElement — HTML-элемент по умолчанию.
 * Comp — тип базового компонента, созданного через component().
 */
export type MakePolymorphic<
    Comp extends ComponentType<any>,
    DefaultElement extends ElementType
> = PolymorphicForwardRefComponent<DefaultElement, ComponentPropsWithoutRef<Comp>>;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const makePolymorphic = <Comp extends ComponentType<any>, T extends ElementType>(comp: Comp, _: T) =>
    (comp as unknown) as MakePolymorphic<Comp, T>;

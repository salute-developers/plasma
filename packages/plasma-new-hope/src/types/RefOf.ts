import type { ComponentPropsWithRef, ElementType, Ref } from 'react';

// Вытаскивает тип prop-а ref у компонента или HTML-тега C.
type RefPropOf<C extends ElementType> = ComponentPropsWithRef<C> extends { ref?: infer R | undefined } ? R : never;

// Достает тип элемента из ref.
export type RefOf<C extends ElementType> = RefPropOf<C> extends Ref<infer R> ? R : never;

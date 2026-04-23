import React, { forwardRef } from 'react';
import type { ElementType, ComponentPropsWithoutRef, ComponentType, ComponentProps } from 'react';

import { DistributiveOmit, RefOf } from '../types';

type PropsOf<C extends ElementType> = ComponentPropsWithoutRef<C>;

type Merge<A, B> = DistributiveOmit<A, keyof B> & B;

type ConditionalMap = {
    default: ElementType;
    [key: string]: ElementType;
};

type VariantKeys<T> = Exclude<keyof T, 'default'>;

// Для `default`-варианта `appearance` остается необязательным,
// а для остальных вариантов становится обязательным и привязанным к конкретному ключу.
type BuildProps<T extends ConditionalMap> =
    | Merge<
          PropsOf<T['default']>,
          {
              appearance?: 'default';
          }
      >
    | {
          [K in VariantKeys<T>]: Merge<
              PropsOf<T[K]>,
              {
                  appearance: K;
              }
          >;
      }[VariantKeys<T>];

// `ref` должен подходить любому компоненту из ConditionalMap, поэтому берем объединение всех вариантов.
type BuildRef<T extends ConditionalMap> = RefOf<T[keyof T]>;

/**
 * Утилита для создания компонента, который выбирает реализацию по `appearance`
 * и при этом сохраняет корректную типизацию пропсов и ref для каждого варианта.
 */
export function createConditionalComponent<T extends ConditionalMap>(components: T) {
    type FinalProps = BuildProps<T>;
    type FinalRef = BuildRef<T>;

    return forwardRef<FinalRef, FinalProps>((props, ref) => {
        const { appearance } = props;

        // Если передан известный не-default вариант, рендерим его.
        // Во всех остальных случаях безопасно откатываемся к компоненту по умолчанию.
        const Current =
            appearance && appearance !== 'default' && appearance in components
                ? components[appearance]
                : components.default;

        // После выбора конкретной реализации приводим тип,
        // чтобы корректно пробросить в него пропсы и `ref`.
        const C = Current as ComponentType<any>;

        return <C {...(props as ComponentProps<typeof C>)} ref={ref} />;
    });
}

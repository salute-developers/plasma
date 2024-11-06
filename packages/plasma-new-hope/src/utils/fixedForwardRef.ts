import React from 'react';

export function fixedForwardRef<T, P = {}>(
    render: (props: P, ref: React.Ref<T>) => React.ReactElement | null,
): (props: P & React.RefAttributes<T>) => React.ReactElement | null {
    return React.forwardRef(render as any) as any;
}

export const childKinds = ['button', 'iconButton', 'chip', 'mixed'] as const;

export type ChildKind = typeof childKinds[number];

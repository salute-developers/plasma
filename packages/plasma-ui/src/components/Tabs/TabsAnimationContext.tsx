import { MutableRefObject, createContext, useContext } from 'react';

type RefObject = MutableRefObject<HTMLElement | null>;

export class TabItemRefs {
    public items: RefObject[] = [];

    public register(ref: RefObject): number {
        this.items.push(ref);
        return this.items.length - 1;
    }

    public unregister(ref: RefObject) {
        this.items.splice(this.items.indexOf(ref), 1);
    }
}

export const TabsAnimationContext = createContext<TabItemRefs | null>(null);

export const useTabsAnimationContext = () => useContext(TabsAnimationContext);

import { useEffect, useState } from 'react';

export const useVisibility = (elements: (HTMLDivElement | null)[], rootMargin = 0) => {
    const [visibility, setVisibility] = useState<boolean[]>(new Array(elements.length).fill(true));

    useEffect(() => {
        const observers: IntersectionObserver[] = [];

        elements.forEach((el, index) => {
            if (!el) return;

            const observer = new IntersectionObserver(
                ([entry]) => {
                    setVisibility((prev) => {
                        const newVis = [...prev];
                        newVis[index] = entry.isIntersecting;
                        return newVis;
                    });
                },
                { threshold: 0, rootMargin: `-${rootMargin}px 0px 0px 0px` },
            );

            observer.observe(el);
            observers.push(observer);
        });

        return () => observers.forEach((observer) => observer.disconnect());
    }, [elements, rootMargin]);

    return visibility;
};

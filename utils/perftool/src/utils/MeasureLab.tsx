import React, { ComponentType, useEffect, useRef, useState } from 'react';

type MeasureLabProps = {
    Subject: ComponentType;
    onRender?: () => void;
    onMutation?: () => void;
    onForceRenderReady?: (forceRender: () => void) => void;
};

export default function MeasureLab({ Subject, onRender, onMutation, onForceRenderReady }: MeasureLabProps) {
    const [, setState] = useState(0);
    const subjectRootRef = useRef<HTMLDivElement | null>(null);
    const mutationObserverRef = useRef<MutationObserver | null>(null);

    useEffect(() => {
        if (!onMutation) {
            return;
        }

        mutationObserverRef.current = new MutationObserver(() => onMutation());

        if (subjectRootRef.current) {
            mutationObserverRef.current.observe(subjectRootRef.current, {
                childList: true,
                attributes: true,
                characterData: true,
                subtree: true,
            });
        }

        return () => {
            mutationObserverRef.current?.disconnect();
            mutationObserverRef.current = null;
        };
    }, [onMutation]);

    useEffect(() => {
        onRender?.();
    });

    useEffect(() => {
        onForceRenderReady?.(() => setState(Math.random()));
    }, [onForceRenderReady]);

    return (
        <div ref={subjectRootRef}>
            <Subject />
        </div>
    );
}

import assert from 'assert';

function waitForIdle(): Promise<void> {
    const idle = window.requestIdleCallback;

    assert(idle);

    return new Promise((resolve) => {
        idle(() => resolve());
    });
}

export default waitForIdle;

type RawTest = { subjectId: string; taskId: string };

function insertTests(serializedTests: string) {
    const tests: RawTest[] = JSON.parse(serializedTests);

    /**
     * @see utils/window.d.ts
     */
    window.tests = window.tests || [];
    window.tests.push(...tests);
}

export function createInsertionScriptContent(tests: RawTest[]) {
    return `${insertTests.toString()}
    insertTests('${JSON.stringify(tests)}');
    `;
}

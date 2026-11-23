import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import { mkdtempSync, readFileSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import test from 'node:test';

const directory = path.dirname(fileURLToPath(import.meta.url));
const script = path.join(directory, 'generate.mjs');
const input = path.join(directory, 'builder_output.json');

test('generates CSS tokens and forwards JSON bindings and props to core', () => {
    const output = mkdtempSync(path.join(tmpdir(), 'popover-generator-'));

    execFileSync(process.execPath, [script, input, output]);

    const css = readFileSync(path.join(output, 'config/Popover.module.css'), 'utf8');
    const component = readFileSync(path.join(output, 'Popover.tsx'), 'utf8');

    assert.match(css, /--plasma-popover-background-color: var\(--surface-transparent-primary\);/);
    assert.match(css, /--plasma-popover-box-padding-start: 14px;/);
    assert.match(css, /--plasma-popover-label-color: var\(--text-secondary\);/);
    assert.match(css, /--plasma-popover-label-style-font-size: var\(--plasma-typo-body-xs-font-size\);/);
    assert.match(component, /size = 'm'/);
    assert.match(component, /labelPlacement = 'none'/);
    assert.match(component, /singleLine = true/);
    assert.match(component, /size,\s*labelPlacement,\s*view,\s*singleLine,/);
    assert.match(component, /styles\.m, styles\.m_outer_label/);
});

test('rejects unsupported CSS prop types instead of silently dropping tokens', () => {
    const output = mkdtempSync(path.join(tmpdir(), 'popover-generator-'));
    const data = JSON.parse(readFileSync(input, 'utf8'));
    data.view.default.props.backgroundColor.type = 'unknown';
    const badInput = path.join(output, 'bad.json');
    writeFileSync(badInput, JSON.stringify(data));

    assert.throws(
        () => execFileSync(process.execPath, [script, badInput, path.join(output, 'result')], { stdio: 'pipe' }),
        /unsupported type/,
    );
});

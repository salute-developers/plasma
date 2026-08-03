const KB = 1024;
const fmtKB = (bytes) => `${(bytes / KB).toFixed(2)} KB`;

const isTTY = process.stdout.isTTY;
const paint = (code, text) => (isTTY ? `\x1b[${code}m${text}\x1b[0m` : text);
const bold = (t) => paint('1', t);
const dim = (t) => paint('2', t);
const red = (t) => paint('31', t);
const green = (t) => paint('32', t);

function diffLabel(current, base, thresholdPct) {
    if (!base) {
        return '';
    }
    const pct = ((current - base) / base) * 100;
    const sign = pct > 0 ? '+' : '';
    const text = `${sign}${pct.toFixed(1)}% vs baseline`;
    if (pct > thresholdPct) {
        return '  ' + red(`${text} ↑`);
    }
    if (pct < -0.5) {
        return '  ' + green(text);
    }
    return '  ' + dim(text);
}

// results: [{ pkgName, entries: [{ subpath, exportsCount, entries: [{ name, label, bundlers: [{ bundler, metrics }] }] }] }]
export function printReport(results, { baseline = null, thresholdPct = 5 } = {}) {
    for (const pkgResult of results) {
        console.log(`\n${bold(pkgResult.pkgName)}`);
        for (const entryResult of pkgResult.entries) {
            console.log(`  ${dim('entry')} "${entryResult.subpath}"`);
            for (const scenario of entryResult.scenarios) {
                console.log(`    ${scenario.label}`);
                const nameWidth = Math.max(...scenario.bundlers.map((b) => b.bundler.length));
                for (const b of scenario.bundlers) {
                    if (b.error) {
                        console.log(`      ${b.bundler.padEnd(nameWidth)}   ${red(`BUILD FAILED: ${b.error}`)}`);
                        continue;
                    }
                    const base = baseline?.[pkgResult.pkgName]?.[entryResult.subpath]?.[scenario.name]?.[b.bundler];
                    const diff = diffLabel(b.metrics.gzip, base?.gzip, thresholdPct);
                    console.log(
                        `      ${b.bundler.padEnd(nameWidth)}   gzip ${fmtKB(b.metrics.gzip).padStart(10)}` +
                            `   brotli ${fmtKB(b.metrics.brotli).padStart(10)}` +
                            `   raw ${fmtKB(b.metrics.raw).padStart(10)}` +
                            `   css ${fmtKB(b.metrics.css).padStart(9)}` +
                            `   modules ${String(b.metrics.moduleCount).padStart(5)}${diff}`,
                    );
                }
            }
        }
    }
    console.log('');
}

export function printRegressions(regressions, thresholdPct) {
    if (regressions.length === 0) {
        return;
    }
    console.error(bold(red(`\nBundle size regressions (gzip grew more than ${thresholdPct}%):`)));
    for (const r of regressions) {
        console.error(
            red(
                `  ${r.pkgName} "${r.subpath}" / ${r.scenario} / ${r.bundler}: ` +
                    `${fmtKB(r.baseline)} -> ${fmtKB(r.current)} (${r.pct > 0 ? '+' : ''}${r.pct.toFixed(1)}%)`,
            ),
        );
    }
}

export function printModuleCountWarnings(warnings) {
    if (warnings.length === 0) {
        return;
    }
    console.warn(`\nModule count grew even though gzip size stayed within threshold (possible partial tree-shaking loss):`);
    for (const w of warnings) {
        console.warn(`  ${w.pkgName} "${w.subpath}" / ${w.scenario} / ${w.bundler}: ${w.baseline} -> ${w.current} modules`);
    }
}

/* eslint-disable @typescript-eslint/no-non-null-assertion */
import path from 'path';
import { getOctokit } from '@actions/github';

import { readJson } from '../utils/fs';

import { ComparableResult, ReportType } from './types';

export type Dependencies = {
    octokit: ReturnType<typeof getOctokit>;
};

export type UpdateParams = {
    prId: number;
    owner: string;
    repo: string;
    reportPath: string;
};

class PerftestUpdatePRDescriptionApi {
    protected readonly deps: Dependencies;

    constructor(deps: Dependencies) {
        this.deps = deps;
    }

    async update({ prId, owner, repo, reportPath }: UpdateParams): Promise<void> {
        const basePrArgs = {
            owner,
            repo,
            pull_number: prId,
        };
        const pr = await this.deps.octokit.rest.pulls.get(basePrArgs);
        const { body: currentBody } = pr.data;

        const jsonReport = await readJson<ReportType>(path.resolve(reportPath));

        const newBody = this.getUpdatedDescription(currentBody, jsonReport);

        await this.deps.octokit.rest.pulls.update({
            ...basePrArgs,
            body: newBody,
        });
    }

    protected getUpdatedDescription(current: string | null, jsonReport: ReportType): string {
        const { before, after } = this.getSurroundings(current);
        const visualReport = this.getVisualReport(jsonReport);

        return [before, visualReport, after].filter(Boolean).join('');
    }

    protected getSurroundings(prDescription: string | null): { before: string; after: string } {
        if (!prDescription) {
            return { before: '', after: '' };
        }

        const re = new RegExp(this.wrapReportContent('.+'), 's');
        const currentReportMatch = prDescription.match(re);
        const currentReport = currentReportMatch?.[0];

        if (currentReport) {
            // Если текущий отчет найден, то нужно разделить как есть
            const [before, after = ''] = prDescription.split(currentReport);

            return { before, after };
        }

        // Если отчета нет, то нужно разместить его либо до секций, либо в конце
        const [before, after = ''] = prDescription.split('<section');

        // Обрамляем переносами, если их нет
        return {
            before: before.endsWith('\n') ? before : `${before}\n`,
            after: after ? `\n<section${after}` : '\n',
        };
    }

    protected getVisualReport(jsonReport: ReportType): string {
        const result = jsonReport.hasSignificantNegativeChanges ? '🔴 FAIL' : '🟢 OK';

        const report = `<h3>⚡ Component performance testing</h3>

**Result:** ${result}

${this.getReportDescription(jsonReport)}
`;

        return this.wrapReportContent(report);
    }

    protected getReportDescription(jsonReport: ReportType): string {
        const resultByTaskId = this.getResultByTaskId(jsonReport);
        const metricsReport = this.getDescriptionTables(resultByTaskId);

        if (!metricsReport) {
            return '';
        }

        return `<details><summary>Details</summary><br/>\n${metricsReport}\n</details>`;
    }

    protected getResultByTaskId(jsonReport: ReportType): { [taskId: string]: [string, ComparableResult][] } {
        const resultByTaskId: { [taskId: string]: [string, ComparableResult][] } = {};

        for (const [subjectId, subjectResult] of Object.entries(jsonReport.result)) {
            const filteredSubjectResult = Object.entries(subjectResult).filter(
                ([, taskResult]) => taskResult.mean.change?.significanceRank === 'high',
            );

            for (const [taskId, taskResult] of filteredSubjectResult) {
                resultByTaskId[taskId] = resultByTaskId[taskId] || [];
                resultByTaskId[taskId].push([subjectId, taskResult.mean]);
            }
        }

        Object.values(resultByTaskId).forEach((item) =>
            item.sort(([, a], [, b]) => Math.abs(b.change!.percentage) - Math.abs(a.change!.percentage)).splice(5),
        );

        return resultByTaskId;
    }

    protected getDescriptionTables(resultByTaskId: { [taskId: string]: [string, ComparableResult][] }): string {
        return Object.entries(resultByTaskId).reduce((acc, [taskId, subjects]) => {
            acc += `\n**${taskId}:**\n`;
            acc += '\n| Компонент | Изменение | Было | Стало |\n|:-:|:-:|:-:|:-:|\n';

            for (const [subjectId, result] of subjects) {
                acc += `${this.getSubjectTaskResultTableRow(subjectId, result)}\n`;
            }

            return acc;
        }, '');
    }

    protected getSubjectTaskResultTableRow(subjectId: string, result: ComparableResult): string {
        const change = this.formatValue(result.change!.difference!, { suffix: ' pts' });
        const percentage = this.formatValue(result.change!.percentage!, {
            suffix: '%',
            sign: true,
            highlight: true,
        });
        const old = this.formatValue(Array.isArray(result.old) ? result.old[0] : result.old!, {
            suffix: ' pts',
        });
        const now = this.formatValue(Array.isArray(result.new) ? result.new[0] : result.new!, {
            suffix: ' pts',
        });

        return `| ${subjectId} | ${change} ${percentage} | ${old} | ${now} |`;
    }

    protected formatValue(
        value: number,
        {
            fractionDigits = 2,
            suffix = '',
            highlight = false,
            sign = false,
        }: { fractionDigits?: number; suffix?: string; highlight?: boolean; sign?: boolean } = {},
    ): string {
        let result = `${value.toFixed(fractionDigits)}${suffix}`;

        if (sign) {
            result = `${value > 0 ? '+' : ''}${result}`;
        }

        if (highlight) {
            // eslint-disable-next-line no-nested-ternary
            const signValue = value > 0 ? '+' : value < 0 ? '-' : '';

            if (signValue) {
                result = `{${signValue}(${result})${signValue}}`;
            } else {
                result = `\`(${result})\``;
            }
        }

        return result;
    }

    protected wrapReportContent(content: string): string {
        const wrapper = '<!-- AUTO-GENERATED PERFTEST REPORT -->';

        return `${wrapper}\n${content}\n${wrapper}`;
    }
}

export default PerftestUpdatePRDescriptionApi;

/* eslint-disable @typescript-eslint/no-non-null-assertion */
import path from 'path';
import { getOctokit } from '@actions/github';

import { readJson } from '../utils/fs';

import { ComparableResult, ReportType } from './types';

export type Dependencies = {
    octokit: ReturnType<typeof getOctokit>;
};

export type WriteCommentParams = {
    prId: number;
    owner: string;
    repo: string;
    reportPath: string;
};

class PerftestWriteCommentApi {
    protected readonly deps: Dependencies;

    constructor(deps: Dependencies) {
        this.deps = deps;
    }

    async post({ prId, owner, repo, reportPath }: WriteCommentParams): Promise<void> {
        const jsonReport = await readJson<ReportType>(path.resolve(reportPath));
        const body = this.getCommentBody(jsonReport);

        await this.deps.octokit.rest.issues.createComment({
            owner,
            repo,
            issue_number: prId,
            body,
        });
    }

    protected getCommentBody(jsonReport: ReportType): string {
        const result = jsonReport.hasSignificantNegativeChanges ? '🔴 FAIL' : '🟢 OK';

        const report = `<h3>⚡ Component performance testing</h3>

**Result:** ${result}

${this.getReportDescription(jsonReport)}
`;

        return report;
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
            acc += '\n| Component | Diff | Base value | Current value |\n|:-:|:-:|:-:|:-:|\n';

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
        });
        const old = this.formatValue(Array.isArray(result.old) ? result.old[0] : result.old!, {
            suffix: ' pts',
        });
        const now = this.formatValue(Array.isArray(result.new) ? result.new[0] : result.new!, {
            suffix: ' pts',
        });

        return `| ${subjectId} | ${change} (${percentage}) | ${old} | ${now} |`;
    }

    protected formatValue(
        value: number,
        {
            fractionDigits = 2,
            suffix = '',
            sign = false,
        }: { fractionDigits?: number; suffix?: string; sign?: boolean } = {},
    ): string {
        let result = `${value.toFixed(fractionDigits)}${suffix}`;

        if (sign) {
            result = `${value > 0 ? '+' : ''}${result}`;
        }

        return result;
    }
}

export default PerftestWriteCommentApi;

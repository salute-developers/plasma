/* eslint-disable no-multi-assign, @typescript-eslint/no-explicit-any */
import { jest } from '@jest/globals';

import * as fsUtils from '../utils/fs';

import PerftestUpdateMergeRequestDescriptionApi from './updateDescription';

describe('perftest/updateDescription', () => {
    afterEach(() => {
        jest.clearAllMocks();
        jest.restoreAllMocks();
        jest.resetModules();
    });

    describe('update', () => {
        const prId = 12345;
        const reportPath = '/report/Path';
        const owner = 'salute-developers';
        const repo = 'plasma';

        let getUpdatedDescriptionMock: jest.Mock;
        let getMock: jest.Mock;
        let updateMock: jest.Mock;
        let readJsonMock: jest.SpiedClass<any>;

        class ApiWithStubbedInternals extends PerftestUpdateMergeRequestDescriptionApi {
            getUpdatedDescription = (getUpdatedDescriptionMock = jest.fn() as any);
        }

        let api: ApiWithStubbedInternals;

        beforeEach(() => {
            api = new ApiWithStubbedInternals({
                octokit: {
                    rest: {
                        pulls: {
                            get: getMock = jest.fn(),
                            update: updateMock = jest.fn(),
                        },
                    },
                } as any,
            });
            readJsonMock = jest.spyOn(fsUtils, 'readJson') as any;
        });

        it('should get current description and set new description', async () => {
            const prData = { data: { body: 'hehe' } } as any;
            const report = { result: {} };
            const basePrArgs = {
                owner,
                repo,
                pull_number: prId,
            };
            const updatedDescription = 'updated description';

            getMock.mockResolvedValue(prData as never);
            readJsonMock.mockResolvedValue(report);
            getUpdatedDescriptionMock.mockReturnValue(updatedDescription);
            updateMock.mockResolvedValue(null as never);

            await api.update({ prId, owner, repo, reportPath } as any);

            expect(getMock).toHaveBeenCalledTimes(1);
            expect(getMock).toHaveBeenCalledWith(basePrArgs);

            expect(readJsonMock).toHaveBeenCalledTimes(1);
            expect(readJsonMock).toHaveBeenCalledWith(reportPath);

            expect(getUpdatedDescriptionMock).toHaveBeenCalledTimes(1);
            expect(getUpdatedDescriptionMock).toHaveBeenCalledWith(prData.data.body, report);

            expect(updateMock).toHaveBeenCalledTimes(1);
            expect(updateMock).toHaveBeenCalledWith({ ...basePrArgs, body: updatedDescription });
        });
    });

    describe('getUpdatedDescription', () => {
        const surrouningsValue = { before: 'before', after: 'after' };
        const newReportValue = 'new report';
        let getSurroundingsMock: jest.Mock;
        let getVisualReportMock: jest.Mock;

        class ApiWithGetUpdatedDescriptionExposed extends PerftestUpdateMergeRequestDescriptionApi {
            public getUpdatedDescription = super.getUpdatedDescription;

            getSurroundings = (getSurroundingsMock = jest.fn().mockReturnValue(surrouningsValue) as any);

            getVisualReport = (getVisualReportMock = jest.fn().mockReturnValue(newReportValue) as any);
        }

        it('should get surroundings, get new report and combine them', () => {
            const currentDescription = 'current';
            const jsonReport = { result: {} };
            const res = new ApiWithGetUpdatedDescriptionExposed({} as any).getUpdatedDescription(
                currentDescription,
                jsonReport as any,
            );

            expect(getSurroundingsMock).toHaveBeenCalledTimes(1);
            expect(getSurroundingsMock).toHaveBeenCalledWith(currentDescription);
            expect(getVisualReportMock).toHaveBeenCalledTimes(1);
            expect(getVisualReportMock).toHaveBeenCalledWith(jsonReport);

            expect(res).toEqual([surrouningsValue.before, newReportValue, surrouningsValue.after].join(''));
        });
    });

    describe('getSurroundings', () => {
        const wrapContentImplementation = (r: string) => `<div>${r}</div>`;
        let wrapContentMock: jest.Mock;
        class ApiWithGetSurroundingsExposed extends PerftestUpdateMergeRequestDescriptionApi {
            public getSurroundings = super.getSurroundings;

            wrapReportContent = (wrapContentMock = jest
                .fn()
                .mockImplementation(wrapContentImplementation as any)) as any;
        }

        it('should return exact before and after text if report exists in text', () => {
            const api = new ApiWithGetSurroundingsExposed({} as any);
            const realBefore = 'blabla\n\nblabla';
            const realAfter = 'blabla\nwerwqet';
            const realReport = wrapContentImplementation('immareport');
            const mrDescription = `${realBefore}${realReport}${realAfter}`;

            const { before, after } = api.getSurroundings(mrDescription);

            expect(before).toEqual(realBefore);
            expect(after).toEqual(realAfter);
            expect([before, realReport, after].join('')).toEqual(mrDescription);

            expect(wrapContentMock).toHaveBeenCalledTimes(1);
        });

        it('should return before canary release text and everything after if no report found', () => {
            const api = new ApiWithGetSurroundingsExposed({} as any);
            const realBefore = 'blabla\n\nblabla';
            const realAfter = '<!-- GITHUB_RELEASE -->\nblabla\nwerwqet\nblabla\nkaoitwlek';
            const mrDescription = `${realBefore}${realAfter}`;

            const { before, after } = api.getSurroundings(mrDescription);

            expect(before).toEqual(`${realBefore}\n\n`);
            expect(after).toEqual(`\n\n${realAfter}`);

            expect(wrapContentMock).toHaveBeenCalledTimes(1);
        });

        it('should return all the text as before if no report found and no section found', () => {
            const api = new ApiWithGetSurroundingsExposed({} as any);
            const mrDescription = 'blabla\n\nblabla\nblabla\nwerwqet\nblabla\nkaoitwlek';

            const { before, after } = api.getSurroundings(mrDescription);

            expect(before).toEqual(`${mrDescription}\n\n`);
            expect(after).toEqual('\n\n');

            expect(wrapContentMock).toHaveBeenCalledTimes(1);
        });
    });

    describe('getVisualReport', () => {
        const descriptionResult = 'description';
        let getDescriptionMock: jest.Mock;
        let wrapContentMock: jest.Mock;

        class ApiWithGetVisualReportExposed extends PerftestUpdateMergeRequestDescriptionApi {
            public getVisualReport = super.getVisualReport;

            getReportDescription = (getDescriptionMock = jest.fn().mockReturnValue(descriptionResult) as any);

            wrapReportContent = (wrapContentMock = jest.fn().mockImplementation((r) => r) as any);
        }

        it('should create report markup, add description and wrap', () => {
            const jsonReport = { hasSignificantNegativeChanges: true };
            const api = new ApiWithGetVisualReportExposed({} as any);

            const result = api.getVisualReport(jsonReport as any);

            expect(result.includes('FAIL')).toBe(true);

            expect(getDescriptionMock).toHaveBeenCalledTimes(1);
            expect(getDescriptionMock).toHaveBeenCalledWith(jsonReport);

            expect(wrapContentMock).toHaveBeenCalledTimes(1);
            expect((wrapContentMock.mock.calls[0][0] as any).includes(descriptionResult)).toBe(true);
            expect((wrapContentMock.mock.calls[0][0] as any).includes('FAIL')).toBe(true);
        });

        it('should create OK report if no significant negative changes', () => {
            const jsonReport = { hasSignificantNegativeChanges: false };
            const api = new ApiWithGetVisualReportExposed({} as any);

            const result = api.getVisualReport(jsonReport as any);
            expect(result.includes('OK')).toBe(true);
        });
    });

    describe('getReportDescription', () => {
        const jsonReport = { result: {} };
        const resultByTaskId = { kek: 'bla' };

        let getResultByTaskIdMock: jest.Mock;
        let getDescriptionTablesMock: jest.Mock;

        class ApiWithGetReportDescriptionExposed extends PerftestUpdateMergeRequestDescriptionApi {
            public getReportDescription = super.getReportDescription;

            getResultByTaskId = (getResultByTaskIdMock = jest.fn().mockReturnValue(resultByTaskId) as any);

            getDescriptionTables = (getDescriptionTablesMock = jest.fn() as any);
        }

        it('should return empty description if no significant changes to show', () => {
            const api = new ApiWithGetReportDescriptionExposed({} as any);

            getDescriptionTablesMock.mockReturnValue('');

            const res = api.getReportDescription(jsonReport as any);

            expect(res).toEqual('');

            expect(getResultByTaskIdMock).toHaveBeenCalledTimes(1);
            expect(getResultByTaskIdMock).toHaveBeenCalledWith(jsonReport);

            expect(getDescriptionTablesMock).toHaveBeenCalledTimes(1);
            expect(getDescriptionTablesMock).toHaveBeenCalledWith(resultByTaskId);
        });

        it('should return description markup with report', () => {
            const api = new ApiWithGetReportDescriptionExposed({} as any);
            const report = 'report';

            getDescriptionTablesMock.mockReturnValue(report);

            const res = api.getReportDescription(jsonReport as any);

            expect(res).toMatchSnapshot();

            expect(getResultByTaskIdMock).toHaveBeenCalledTimes(1);
            expect(getResultByTaskIdMock).toHaveBeenCalledWith(jsonReport);

            expect(getDescriptionTablesMock).toHaveBeenCalledTimes(1);
            expect(getDescriptionTablesMock).toHaveBeenCalledWith(resultByTaskId);
        });
    });

    describe('getResultByTaskId', () => {
        class ApiWithGetResultByTaskIdExposed extends PerftestUpdateMergeRequestDescriptionApi {
            public getResultByTaskId = super.getResultByTaskId;
        }

        const api = new ApiWithGetResultByTaskIdExposed({} as any);

        it('should return taskId to [subjectId, compareResult][] map with significantly changed metrics', () => {
            const jsonReport = {
                result: {
                    subjectId1: {
                        taskId1: { mean: { change: { percentage: 1, significanceRank: 'high' } } },
                        taskId2: { mean: { change: { percentage: 4, significanceRank: 'high' } } },
                        taskId3: { mean: { change: { percentage: 5, significanceRank: 'high' } } },
                        taskIdFiltered1: { mean: { change: { percentage: 0.5, significanceRank: 'low' } } },
                        taskIdFiltered2: { mean: { new: {} } },
                    },
                    subjectId2: {
                        taskId1: { mean: { change: { percentage: 2, significanceRank: 'high' } } },
                        taskId2: { mean: { change: { percentage: 3, significanceRank: 'high' } } },
                    },
                    subjectId3: {
                        taskIdFiltered1: { mean: { change: { percentage: 0.5, significanceRank: 'low' } } },
                        taskIdFiltered2: { mean: { new: {} } },
                    },
                },
            };

            const result = api.getResultByTaskId(jsonReport as any);

            expect(new Set(Object.keys(result))).toEqual(new Set(['taskId1', 'taskId2', 'taskId3']));

            expect(result.taskId1).toEqual(
                (['subjectId2', 'subjectId1'] as const).map((id) => [id, jsonReport.result[id].taskId1.mean]),
            );

            expect(result.taskId2).toEqual(
                (['subjectId1', 'subjectId2'] as const).map((id) => [id, jsonReport.result[id].taskId2.mean]),
            );

            expect(result.taskId3).toEqual(
                (['subjectId1'] as const).map((id) => [id, jsonReport.result[id].taskId3.mean]),
            );
        });
    });

    describe('getDescriptionTables', () => {
        let getSubjectTaskResultTableRowMock: jest.Mock;

        class ApiWithGetMetricsReportExposed extends PerftestUpdateMergeRequestDescriptionApi {
            public getDescriptionTables = super.getDescriptionTables;

            public getSubjectTaskResultTableRow = (getSubjectTaskResultTableRowMock = jest.fn() as any);
        }

        it('should iterate through tasks, forming tables with rows', () => {
            const api = new ApiWithGetMetricsReportExposed({} as any);
            const resultByTaskId = {
                taskId1: [
                    ['subjectId1', {}],
                    ['subjectId2', {}],
                ],
                taskId2: [
                    ['subjectId1', {}],
                    ['subjectId2', {}],
                    ['subjectId3', {}],
                ],
                taskId3: [['subjectId1', {}]],
            };
            getSubjectTaskResultTableRowMock.mockReturnValue('row');

            const res = api.getDescriptionTables(resultByTaskId as any);

            expect(res).toMatchSnapshot();
        });
    });

    describe('getSubjectTaskResultTableRow', () => {
        let formatValueMock: jest.Mock;

        class ApiWithGetSubjectTaskResultTableRowExposed extends PerftestUpdateMergeRequestDescriptionApi {
            public getSubjectTaskResultTableRow = super.getSubjectTaskResultTableRow;

            public formatValue = (formatValueMock = jest.fn().mockImplementation((r) => r) as any);
        }

        it('should format the row', () => {
            const api = new ApiWithGetSubjectTaskResultTableRowExposed({} as any);
            const res = api.getSubjectTaskResultTableRow('subjectId', {
                old: 'old',
                new: ['new1', 'new2'],
                change: {
                    difference: 'diff',
                    percentage: 'percentage',
                },
            } as any);

            expect(res).toMatchSnapshot();

            expect(formatValueMock).toHaveBeenCalledTimes(4);
        });
    });

    describe('formatValue', () => {
        class ApiWithWrapFormatValueExposed extends PerftestUpdateMergeRequestDescriptionApi {
            public formatValue = super.formatValue;
        }

        const { formatValue } = new ApiWithWrapFormatValueExposed({} as any);

        it('should format number with fixed precision', () => {
            expect(formatValue(Math.PI)).toEqual('3.14');
            expect(formatValue(Math.PI, { fractionDigits: 4 })).toEqual('3.1416');
        });

        it('should format number with suffix', () => {
            expect(formatValue(Math.PI, { suffix: 'pts' })).toEqual('3.14pts');
        });

        it('should format number with sign', () => {
            expect(formatValue(-Math.PI, { sign: false })).toEqual('-3.14');
            expect(formatValue(Math.PI, { sign: true })).toEqual('+3.14');
            expect(formatValue(-Math.PI, { sign: true })).toEqual('-3.14');
            expect(formatValue(0, { sign: true, fractionDigits: 0 })).toEqual('0');
        });

        it('should format number with highlighter', () => {
            expect(formatValue(Math.PI, { highlight: true })).toEqual('{+(3.14)+}');
            expect(formatValue(-Math.PI, { highlight: true })).toEqual('{-(-3.14)-}');
            expect(formatValue(0, { highlight: true })).toEqual('`(0.00)`');
        });
    });

    describe('wrapReportContent', () => {
        class ApiWithWrapContentExposed extends PerftestUpdateMergeRequestDescriptionApi {
            public wrapReportContent = super.wrapReportContent;
        }

        it('should wrap content string', () => {
            const content = 'asd';
            const res = new ApiWithWrapContentExposed({} as any).wrapReportContent(content);

            expect(res.includes(content)).toBe(true);
            expect(res).toMatchSnapshot();
        });
    });
});

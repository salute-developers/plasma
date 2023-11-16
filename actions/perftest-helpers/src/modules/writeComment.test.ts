/* eslint-disable no-multi-assign, @typescript-eslint/no-explicit-any */
import { jest } from '@jest/globals';

import * as fsUtils from '../utils/fs';

import PerftestWriteCommentApi from './writeComment';

describe('perftest/writeComment', () => {
    afterEach(() => {
        jest.clearAllMocks();
        jest.restoreAllMocks();
        jest.resetModules();
    });

    describe('post', () => {
        const prId = 12345;
        const reportPath = '/report/Path';
        const owner = 'salute-developers';
        const repo = 'plasma';

        let getCommentBodyMock: jest.Mock;
        let createCommentMock: jest.Mock;
        let readJsonMock: jest.SpiedClass<any>;

        class ApiWithStubbedInternals extends PerftestWriteCommentApi {
            getCommentBody = (getCommentBodyMock = jest.fn() as any);
        }

        let api: ApiWithStubbedInternals;

        beforeEach(() => {
            api = new ApiWithStubbedInternals({
                octokit: {
                    rest: {
                        issues: {
                            createComment: createCommentMock = jest.fn(),
                        },
                    },
                } as any,
            });
            readJsonMock = jest.spyOn(fsUtils, 'readJson') as any;
        });

        it('should get current description and set new description', async () => {
            const commentBody = 'hehe';
            const report = { result: {} };

            readJsonMock.mockResolvedValue(report);
            getCommentBodyMock.mockReturnValue(commentBody);

            await api.post({ prId, owner, repo, reportPath } as any);

            expect(readJsonMock).toHaveBeenCalledTimes(1);
            expect(readJsonMock).toHaveBeenCalledWith(reportPath);

            expect(getCommentBodyMock).toHaveBeenCalledTimes(1);
            expect(getCommentBodyMock).toHaveBeenCalledWith(report);

            expect(createCommentMock).toHaveBeenCalledTimes(1);
            expect(createCommentMock).toHaveBeenCalledWith({
                owner,
                repo,
                issue_number: prId,
                body: commentBody,
            });
        });
    });

    describe('getCommentBody', () => {
        const descriptionResult = 'description';
        let getDescriptionMock: jest.Mock;

        class ApiWithGetVisualReportExposed extends PerftestWriteCommentApi {
            public getCommentBody = super.getCommentBody;

            getReportDescription = (getDescriptionMock = jest.fn().mockReturnValue(descriptionResult) as any);
        }

        it('should create report markup, add description', () => {
            const jsonReport = { hasSignificantNegativeChanges: true };
            const api = new ApiWithGetVisualReportExposed({} as any);

            const result = api.getCommentBody(jsonReport as any);

            expect(result.includes('FAIL')).toBe(true);

            expect(getDescriptionMock).toHaveBeenCalledTimes(1);
            expect(getDescriptionMock).toHaveBeenCalledWith(jsonReport);
        });

        it('should create OK report if no significant negative changes', () => {
            const jsonReport = { hasSignificantNegativeChanges: false };
            const api = new ApiWithGetVisualReportExposed({} as any);

            const result = api.getCommentBody(jsonReport as any);
            expect(result.includes('OK')).toBe(true);
        });
    });

    describe('getReportDescription', () => {
        const jsonReport = { result: {} };
        const resultByTaskId = { kek: 'bla' };

        let getResultByTaskIdMock: jest.Mock;
        let getDescriptionTablesMock: jest.Mock;

        class ApiWithGetReportDescriptionExposed extends PerftestWriteCommentApi {
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
        class ApiWithGetResultByTaskIdExposed extends PerftestWriteCommentApi {
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

        class ApiWithGetMetricsReportExposed extends PerftestWriteCommentApi {
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

        class ApiWithGetSubjectTaskResultTableRowExposed extends PerftestWriteCommentApi {
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
        class ApiWithWrapFormatValueExposed extends PerftestWriteCommentApi {
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
    });
});

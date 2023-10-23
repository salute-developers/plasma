/* eslint-disable no-multi-assign, @typescript-eslint/no-explicit-any */
import { jest } from '@jest/globals';
import * as got from 'got';

import * as fsUtils from '../utils/fs';

import PerftestSendReportApi from './sendReport';

jest.mock('crypto', () => ({
    randomUUID: () => 'asd',
}));

describe('perftest/sendReport', () => {
    afterEach(() => {
        jest.clearAllMocks();
        jest.restoreAllMocks();
        jest.resetModules();
    });

    describe('send', () => {
        let readJsonMock: jest.SpiedClass<any>;
        let gotMock: jest.SpiedClass<any>;
        let transformMock: jest.Mock;

        class ApiWithoutTransform extends PerftestSendReportApi {
            protected transform = (transformMock = jest.fn() as any);
        }

        beforeEach(() => {
            gotMock = jest.spyOn(got, 'default' as any);
            readJsonMock = jest.spyOn(fsUtils, 'readJson') as any;
        });

        it('should not send if version changed', async () => {
            readJsonMock.mockResolvedValue({ isVersionChanged: true });

            await new ApiWithoutTransform().send({ reportPath: 'azaza' } as any);

            expect(transformMock).not.toHaveBeenCalled();
            expect(gotMock).not.toHaveBeenCalled();
        });

        it('should not send if result is empty', async () => {
            readJsonMock.mockResolvedValue({ isVersionChanged: false, result: {} });

            await new ApiWithoutTransform().send({ reportPath: 'azaza' } as any);

            expect(transformMock).not.toHaveBeenCalled();
            expect(gotMock).not.toHaveBeenCalled();
        });

        it('should call this.transform if input is ok', async () => {
            const jsonReport = { isVersionChanged: false, result: { foo: 'bar' }, staticTaskChange: { baz: 'kl' } };
            const sendParams = {
                reportPath: 'azaza',
                subject: 'kek',
                commitHash: '12354',
                referrer: 'http://example.com',
            };
            const body = [{ top: 'kek' }];
            const api = new ApiWithoutTransform();

            readJsonMock.mockResolvedValue(jsonReport);
            transformMock.mockImplementation(() => body);
            gotMock.mockResolvedValue({ statusCode: 200 });

            await api.send(sendParams);

            expect(transformMock).toHaveBeenCalledWith({
                result: jsonReport.result,
                staticTaskChange: jsonReport.staticTaskChange,
                subject: sendParams.subject,
                commitHash: sendParams.commitHash,
                referrer: sendParams.referrer,
            });

            expect(gotMock).toHaveBeenCalledTimes(1);
            expect(gotMock.mock.calls[0][0]).toEqual(api.METRICS_URL);
            expect((gotMock.mock.calls[0][1] as any).method).toEqual('POST');
            expect((gotMock.mock.calls[0][1] as any).body).toEqual(JSON.stringify(body));
        });
    });

    describe('transform', () => {
        let getPayloadMock: jest.Mock;

        class ApiWithoutGetPayload extends PerftestSendReportApi {
            protected getPayload = (getPayloadMock = jest.fn() as any);

            public transform = super.transform;
        }

        it('should receive parameters and transform them the right way', () => {
            const api = new ApiWithoutGetPayload();
            const result = {
                kek: {
                    render: {
                        mean: {
                            old: [1, 1] as [number, number],
                            new: [2, 2] as [number, number],
                            change: {
                                percentage: 100,
                                difference: 1,
                                significanceRank: 'low' as const,
                            },
                        },
                    },
                },
            };
            getPayloadMock.mockReturnValue(1);

            const transformed = api.transform({
                result,
                staticTaskChange: result.kek,
                subject: '123',
                commitHash: 'qwrqw',
                referrer: 'http://example.com',
            });
            const firstRunId = transformed[0].runId;

            expect(typeof firstRunId).toEqual('string');
            expect(transformed.every(({ runId }) => runId === firstRunId)).toBe(true);

            transformed.forEach((record) => delete (record as any).runId);

            expect(transformed).toMatchSnapshot();
        });
    });

    describe('getPayload', () => {
        class ApiWithExposedGetPayload extends PerftestSendReportApi {
            public getPayload = super.getPayload;
        }

        it('should accept number', () => {
            const result = new ApiWithExposedGetPayload().getPayload(123);

            expect(result).toMatchSnapshot();
        });

        it('should accept pair of numbers', () => {
            const result = new ApiWithExposedGetPayload().getPayload([420, 123]);

            expect(result).toMatchSnapshot();
        });

        it('should accept dict', () => {
            const result = new ApiWithExposedGetPayload().getPayload({
                top: 'kek',
                wav: 123,
            });

            expect(result).toMatchSnapshot();
        });
    });
});

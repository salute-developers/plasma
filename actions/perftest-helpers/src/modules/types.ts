type MetricResult = [number, number] | number;
type SubjectId = string;

type CompareResult = {
    difference: number;
    percentage: number;
    significanceRank?: 'high' | 'medium' | 'low';
};

export type ComparableResult = {
    old?: MetricResult;
    new: MetricResult;
    change?: CompareResult;
};

export type SubjectResult = {
    [taskId: string]: { [statKey: string]: ComparableResult };
};

export type ReportType = {
    isVersionChanged: boolean;
    staticTaskChange: SubjectResult;
    hasSignificantNegativeChanges: boolean;
    result: Record<SubjectId, SubjectResult>;
};

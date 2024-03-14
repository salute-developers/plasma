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

type Comparable = { [statKey: string]: ComparableResult };
type SingleResultMap = { [statKey: string]: MetricResult };

export type SubjectResult = {
    [taskId: string]: Comparable & {
        modes?:
            | Comparable[]
            | {
                  new: SingleResultMap[];
                  old?: SingleResultMap[];
              };
    };
};

export type ReportType = {
    isVersionChanged: boolean;
    staticTaskChange: SubjectResult;
    hasSignificantNegativeChanges: boolean;
    result: Record<SubjectId, SubjectResult>;
};

import { Task } from '../client/measurement/types';
import { RunTaskResult } from '../client/measurement/runner';

declare global {
    interface Window {
        // TODO comment
        tests?: Array<RawTest> | { push: (...args: RawTest[]) => void };
        finish: <T extends Task<any, any>>(results: RunTaskResult<T[number]>[]) => Promise<void>;
    }
}

export default Window;

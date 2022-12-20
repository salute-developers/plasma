class BaseError extends Error {
    toString(): string {
        return this.stack || super.toString();
    }
}

export default BaseError;

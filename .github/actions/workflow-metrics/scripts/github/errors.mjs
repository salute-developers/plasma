export class CollectionPaused extends Error {
    constructor(message, retryAt, reason = 'budget', rateLimit) {
        super(message);
        this.name = 'CollectionPaused';
        this.retryAt = retryAt;
        this.reason = reason;
        this.rateLimit = rateLimit;
        this.stopAll = reason !== 'budget';
    }
}

export class GitHubApiError extends Error {
    constructor(message, status, rateLimit, retryAt) {
        super(message);
        this.name = 'GitHubApiError';
        this.status = status;
        this.rateLimit = rateLimit;
        this.retryAt = retryAt;
        this.stopAll = status === 401 || status === 403;
    }
}

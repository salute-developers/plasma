export const getEnv = () => ({
    REACT_APP_APPLICATION_CLIENT_ID: process.env.REACT_APP_APPLICATION_CLIENT_ID || '',
    REACT_APP_AUTH_SERVER_URL: process.env.REACT_APP_AUTH_SERVER_URL || '',
});

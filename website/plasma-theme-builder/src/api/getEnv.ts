export const getEnv = () => {
    const { REACT_APP_APPLICATION_CLIENT_ID = '', REACT_APP_AUTH_SERVER_URL = '' } = process.env;
    return { REACT_APP_APPLICATION_CLIENT_ID, REACT_APP_AUTH_SERVER_URL };
};

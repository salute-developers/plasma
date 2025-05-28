// eslint-disable-next-line @typescript-eslint/no-var-requires
const { statSync, readFileSync } = require('fs');

const getLatestReleaseVersion = (name) => {
    let [latestVersion, releaseDate] = ['', ''];
    const path = `../../packages/${name}/package.json`;

    try {
        const data = readFileSync(path, 'utf8');
        latestVersion = JSON.parse(data).version;

        const stats = statSync(path);
        const date = stats.mtime;
        const isCurrentYear = new Date().getFullYear() === date.getFullYear();

        releaseDate = new Date(date).toLocaleString('ru', {
            year: isCurrentYear ? undefined : 'numeric',
            month: 'long',
            day: 'numeric',
        });
    } catch (error) {
        // eslint-disable-next-line no-console
        console.log('error', error);
    }

    return [latestVersion, releaseDate];
};

module.exports = {
    '@salutejs/plasma-b2c': getLatestReleaseVersion('plasma-b2c'),
    '@salutejs/plasma-web': getLatestReleaseVersion('plasma-web'),
    '@salutejs/plasma-giga': getLatestReleaseVersion('plasma-giga'),
    '@salutejs/sdds-netology': getLatestReleaseVersion('sdds-netology'),
    '@salutejs/plasma-icons': getLatestReleaseVersion('plasma-icons'),
    '@salutejs/plasma-ui': getLatestReleaseVersion('plasma-ui'),
    '@salutejs/sdds-cs': getLatestReleaseVersion('sdds-cs'),
    '@salutejs/sdds-dfa': getLatestReleaseVersion('sdds-dfa'),
    '@salutejs/sdds-finportal': getLatestReleaseVersion('sdds-finportal'),
    '@salutejs/sdds-insol': getLatestReleaseVersion('sdds-insol'),
    '@salutejs/sdds-serv': getLatestReleaseVersion('sdds-serv'),
    '@salutejs/sdds-crm': getLatestReleaseVersion('sdds-crm'),
};

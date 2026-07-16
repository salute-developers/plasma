import { getDocPackages } from './commits';

const commits = [
    'chore: Message',
    'docs: Message',
    'Bad commit',
    'fix!: Message [skip ci]',
    'docs(plasma-b2c): Message',
];
const unique = ['plasma-web-docs'];

describe('commits.ts', () => {
    it('getDocPackages', () => {
        expect(getDocPackages(commits)).toStrictEqual(unique);
    });
});

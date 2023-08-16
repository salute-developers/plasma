import { ThemesSelect } from './ThemesClient';

import { saveForm } from './action';
import { Theme } from '../data';

export function Themes({ themes }: { themes: Theme[] }) {
    return (
        <form action={saveForm}>
            <span>Themes: </span>
            <ThemesSelect themes={themes} />
            <button>save</button>
        </form>
    );
}

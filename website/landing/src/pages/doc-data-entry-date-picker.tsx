import { DocsPageLayout } from '../DocsPageLayout';
import { SiteLink } from '../shared';

export default function DocDataEntryDatePickerPage() {
    return (
        <DocsPageLayout>
            <nav className="crumbs">
                <SiteLink href="/docs">Документация</SiteLink>
                <i>/</i>
                <SiteLink href="/docs">Компоненты</SiteLink>
                <i>/</i>
                Data Entry
                <i>/</i>
                <span>DatePicker</span>
            </nav>

            <div className="article-meta">
                <span className="post-kind">Data Entry</span>

                <span>Спецификация компонента</span>
                <span>·</span>
                <span>версия 1.5.0</span>
            </div>

            <h1>DatePicker</h1>

            <p className="article-lead">
                {'Аналогично TextField: '}
                <code>Opened</code>
                {', '}
                <code>Disabled</code>
                {', '}
                <code>ReadOnly</code>
                {', '}
                <code>Required</code>
                {', '}
                <code>LabelPlacement</code>.
            </p>

            <h2 id="p-3-variants">3. Variants</h2>

            <div className="doc-table-wrap">
                <table className="doc-table">
                    <thead>
                        <tr>
                            <th>Компонент</th>
                            <th>Описание</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <code>DatePicker</code>
                            </td>
                            <td>Выбор одной даты</td>
                        </tr>
                        <tr>
                            <td>
                                <code>DatePickerClear</code>
                            </td>
                            <td>С кнопкой очистки</td>
                        </tr>
                        <tr>
                            <td>
                                <code>DateTimePicker</code>
                            </td>
                            <td>Дата + время</td>
                        </tr>
                        <tr>
                            <td>
                                <code>DateTimePickerClear</code>
                            </td>
                            <td>Дата + время с кнопкой очистки</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="article-foot">
                <span>Нашли расхождение документации и библиотеки — напишите команде.</span>

                <SiteLink className="side-cta" href="/contacts">
                    Сообщить о расхождении
                </SiteLink>
            </div>
        </DocsPageLayout>
    );
}

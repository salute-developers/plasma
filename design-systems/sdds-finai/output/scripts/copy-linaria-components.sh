#!/usr/bin/env bash

# Компоненты необязательны: пакет может состоять из одной темы.
# Example: Calendar
components=$([ -d src/components ] && grep -R plasma-new-hope src/components | cut -d / -f 3 | sort -u)

mkdir -p src-css/components/

# Тема необязательна: пакет может состоять из одних компонентов.
if [ -d src/theme ]; then
    cp -R src/theme src-css/theme

    # Создание и добавление строки экспорта темы
    echo "export * from './theme';" > src-css/index.ts
    echo "export * from './theme';" > src-css/index.d.ts
else
    : > src-css/index.ts
    : > src-css/index.d.ts
fi

for component in $components; do
    cp -R src/components/$component src-css/components/;
    grep -E "\<$component\>" src/index.ts >> src-css/index.ts
    echo "export * from '../components/$component';" >> src-css/index.d.ts;
    
done;

# plasma-new-hope/styled-components
files=$(find src-css/components -name '*.ts' -or -name '*.tsx');

for file in $files; do
    echo $file;
done;

# plasma-new-hope/styled-components => plasma-new-hope
# Без файлов `perl -i` читает stdin и ждёт ввода из терминала.
if [ -n "$files" ]; then
    perl -p -i -e "s/\/styled-components//g" $files
fi

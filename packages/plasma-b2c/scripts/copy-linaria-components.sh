#!/usr/bin/env bash

# Example: Calendar
components=$(grep -R plasma-new-hope src/components | cut -d / -f 3 | sort -u)

mkdir -p src-css/components/
touch src-css/index.ts
touch src-css/index.d.ts
for component in $components; do
    if [[ "$component" != "Switch" ]]; then
        cp -R src/components/$component src-css/components/;
        grep $component src/index.ts >> src-css/index.ts
        echo "export * from '../components/$component';" >> css/index.d.ts;

    fi
done;

# remove unused tests
rm -rf src-css/components/**/*.component-test.tsx
rm -rf src-css/components/**/*.perftest.tsx
rm -rf src-css/components/**/*.stories.tsx

# plasma-new-hope/styled-components
files=$(find src-css/components -name '*.ts' -or -name '*.tsx');

for file in $files; do
    echo $file;
done;

# plasma-new-hope/styled-components => plasma-new-hope
perl -p -i -e "s/\/styled-components//g" $files

#TODO: #1024 удалить обертку styled в спиннере
perl -p -i -e "s/import styled from 'styled-components';//g" src-css/components/Spinner/Spinner.tsx
perl -p -i -e "s/styled\(SpinnerComponent\)\`\`/SpinnerComponent/g" src-css/components/Spinner/Spinner.tsx

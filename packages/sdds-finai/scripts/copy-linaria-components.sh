#!/usr/bin/env bash

# Example: Calendar
components=$(grep -R plasma-new-hope src/components | cut -d / -f 3 | grep -v '^_beta$' | sort -u)

mkdir -p src-css/components/
touch src-css/index.ts
for component in $components; do
    cp -R src/components/$component src-css/components/;
    grep -E "\<$component\>" src/index.ts >> src-css/index.ts
done

cp -R src/components/_beta src-css/components/_beta
echo "export * from './components/_beta';" > src-css/beta.ts

# remove unused tests and stories
find src-css/components \( -name '*.component-test.tsx' -o -name '*.stories.tsx' \) -delete

# plasma-new-hope/styled-components
files=$(find src-css/components -name '*.ts' -or -name '*.tsx')

# plasma-new-hope/styled-components => plasma-new-hope/css
perl -p -i -e "s/\/styled-components/\/css/g" $files

# TODO: #1024 удалить обертку styled в спиннере
perl -p -i -e "s/import styled from 'styled-components';//g" src-css/components/Spinner/Spinner.tsx
perl -p -i -e "s/styled\(SpinnerComponent\)\`\`/SpinnerComponent/g" src-css/components/Spinner/Spinner.tsx

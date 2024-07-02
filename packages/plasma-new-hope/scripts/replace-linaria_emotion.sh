#!/bin/bash


# TODO: rewrite to node.js

files=$(find src-emotion/components src-emotion/examples  -name *.ts -or -name *.tsx);

perl -p -i -e "s/import { styled } from '\@linaria\/react'/import styled from '\@emotion\/styled'/g" $files
perl -p -i -e "s/import { css } from '\@linaria\/core'/import { css } from '\@emotion\/react'/g" $files

rm -rf src-emotion/engines/linaria.tsx
rm -rf src-emotion/engines/styled-components.tsx
perl -p -i -e "s/import { css as cssLibrary } from '\@linaria\/core'/import { css as cssLibrary } from '\@emotion\/react'/g" src-emotion/engines/index.ts 
perl -p -i -e "s/linaria/emotion/g" src-emotion/engines/index.ts src-emotion/engines/common.tsx


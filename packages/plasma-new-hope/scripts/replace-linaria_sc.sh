#!/bin/bash


# TODO: rewrite to node.js

files=$(find src-sc/components src-sc/examples  -name *.ts -or -name *.tsx);

perl -p -i -e "s/import { styled } from '\@linaria\/react'/import styled from 'styled-components'/g" $files
perl -p -i -e "s/import { css } from '\@linaria\/core'/import { css } from 'styled-components'/g" $files

rm -rf src-sc/engines/linaria.tsx
perl -p -i -e "s/linaria/styled-components/g" src-sc/engines/index.ts

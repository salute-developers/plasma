#!/bin/bash


# TODO: rewrite to node.js

perl -p -i -e "s/import { styled } from '\@linaria\/react'/import styled from 'styled-components'/g" src-sc/components/**/*.tsx src-sc/components/**/*.ts src-sc/components/**/**/*.tsx src-sc/components/**/**/*.ts
perl -p -i -e "s/import { css } from '\@linaria\/core'/import { css } from 'styled-components'/g" src-sc/components/**/*.tsx src-sc/components/**/*.ts src-sc/components/**/**/*.tsx src-sc/components/**/**/*.ts

perl -p -i -e "s/linaria/styled-components/g" src-sc/engines/index.ts

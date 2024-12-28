#!/bin/bash

## Заменяем строк
## import "styled from 'styled-components'" на "import { styled } from '@linaria/react'"
sed -i '' 's/import { css } from '\''styled-components'\''/import { css } from '\''@linaria\/core'\''/' src-build/{scalable,old}/IconRoot.tsx

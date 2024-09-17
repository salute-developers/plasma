#!/bin/bash

## Заменяем строк
## import "styled from 'styled-components'" на "import { styled } from '@linaria/react'"
sed -i '' 's/import styled from '\''styled-components'\''/import { styled } from '\''@linaria\/react'\''/' src-build/{scalable,old}/IconRoot.tsx

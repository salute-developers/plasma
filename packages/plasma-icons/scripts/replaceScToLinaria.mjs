import fs from 'fs';

const files = [
    './src-build/scalable/IconRoot.tsx',
    './src-build/old/IconRoot.tsx'
]

for (const file of files) {
    let content = fs.readFileSync(file, 'utf8');

    content = content.replace(
        /import styled from 'styled-components'/g,
        "import { styled } from '@linaria/react'"
    );

    fs.writeFileSync(file, content);
}

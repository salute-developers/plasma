#!/bin/bash


# TODO: rewrite to node.js

files=$(find src-linaria  -name '*.*');

perl -p -i -e "s/import { css,/import { css } from '\@linaria\/core'; import {/g" $files
perl -p -i -e "s/from '\@salutejs\/plasma-new-hope\/styled-components'/from '\@salutejs\/plasma-new-hope'/g" $files
perl -p -i -e "s/import styled from 'styled-components'/import { styled } from '\@linaria\/react'/g" $files
#!/bin/bash


# TODO: rewrite to node.js

files=$(find src-emotion  -name '*.*');

perl -p -i -e "s/from '\@salutejs\/plasma-new-hope\/styled-components'/from '\@salutejs\/plasma-new-hope\/emotion'/g" $files
perl -p -i -e "s/from '\styled-components'/from '\@emotion\/styled'/g" $files
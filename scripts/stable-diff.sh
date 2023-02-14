#!/bin/bash


FILE1=$1
FILE2=$2

STRIP_TS='s/^\[[[:space:]+[:digit:].]*\]//'

# http://stackoverflow.com/questions/15841223/diff-while-ignoring-patterns-within-a-line-but-not-the-entire-line

diff -u \
	--label=$FILE1 <(sed $STRIP_TS $FILE1) \
	--label=$FILE2 <(sed $STRIP_TS $FILE2)


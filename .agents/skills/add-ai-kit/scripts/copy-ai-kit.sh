#!/usr/bin/env bash
# Copies AI-kit sources and docs from sdds-serv into a vertical package and checks prerequisites.
# Usage: copy-ai-kit.sh <package-dir> <tokens-import> [--force]
# Example: copy-ai-kit.sh sdds-finai @salutejs/sdds-themes/tokens/sdds_finai
set -euo pipefail

if [ $# -lt 2 ]; then
    echo "Usage: $0 <package-dir> <tokens-import> [--force]" >&2
    exit 1
fi

TARGET="$1"
TOKENS_IMPORT="$2"
FORCE="${3:-}"

ROOT="$(git rev-parse --show-toplevel)"
SOURCE_PKG="$ROOT/packages/sdds-serv"
TARGET_PKG="$ROOT/packages/$TARGET"
SOURCE_TOKENS="@salutejs/sdds-themes/tokens/sdds_serv"

[ -f "$TARGET_PKG/package.json" ] || { echo "No package: $TARGET_PKG" >&2; exit 1; }

PKG_NAME="$(node -p "require('$TARGET_PKG/package.json').name")"
STATUS=0

if [ -d "$TARGET_PKG/src/components/_ai" ] && [ "$FORCE" != "--force" ]; then
    echo "$TARGET_PKG/src/components/_ai already exists; rerun with --force to overwrite" >&2
    exit 1
fi

# 1. Library sources
rm -rf "$TARGET_PKG/src/components/_ai"
cp -R "$SOURCE_PKG/src/components/_ai" "$TARGET_PKG/src/components/_ai"
cp "$SOURCE_PKG/src/ai.ts" "$TARGET_PKG/src/ai.ts"
export SOURCE_TOKENS TOKENS_IMPORT PKG_NAME
grep -rl "$SOURCE_TOKENS" "$TARGET_PKG/src/components/_ai" \
    | xargs perl -pi -e 's#\Q$ENV{SOURCE_TOKENS}\E#$ENV{TOKENS_IMPORT}#g'
echo "Copied src/components/_ai and src/ai.ts into $PKG_NAME"

# 2. Sibling components imported by AI stories
missing_components=""
for component in $(grep -rhoE "from '\.\./\.\./[A-Za-z]+/" "$TARGET_PKG/src/components/_ai" | cut -d / -f 3 | sort -u); do
    [ -d "$TARGET_PKG/src/components/$component" ] || missing_components="$missing_components $component"
done
if [ -n "$missing_components" ]; then
    echo "MISSING components used by AI stories:$missing_components"
    STATUS=2
fi

# 3. Theme tokens used by AI configs
theme_path="${TOKENS_IMPORT#@salutejs/}"
themes_pkg="${theme_path%%/*}"
theme_name="${theme_path##*/}"
token_file="$ROOT/packages/themes/$themes_pkg/src/tokens/$theme_name/index.ts"
if [ ! -f "$token_file" ]; then
    echo "MISSING token module: $token_file"
    STATUS=2
else
    used_tokens=$(grep -rhzoP "import \{[^}]*\} from '\Q$TOKENS_IMPORT\E'" "$TARGET_PKG/src/components/_ai" \
        | tr '\0' '\n' | tr -d '{}' | sed -e 's/import//' -e "s#from.*##" | tr ',' '\n' | tr -d ' ' | grep -v '^$' | sort -u)
    missing_tokens=""
    for token in $used_tokens; do
        grep -qE "export const $token\b" "$token_file" || missing_tokens="$missing_tokens $token"
    done
    if [ -n "$missing_tokens" ]; then
        echo "MISSING tokens in $theme_name:$missing_tokens"
        STATUS=2
    else
        echo "All $(echo "$used_tokens" | wc -l) AI tokens exist in $theme_name"
    fi
fi

# 4. Docs
docs_dir="$ROOT/website/$TARGET-docs"
if [ -d "$docs_dir/docs" ]; then
    rm -rf "$docs_dir/docs/ai"
    cp -R "$ROOT/website/sdds-serv-docs/docs/ai" "$docs_dir/docs/ai"
    grep -rl "@salutejs/sdds-serv" "$docs_dir/docs/ai" | xargs perl -pi -e 's#\@salutejs/sdds-serv\b#$ENV{PKG_NAME}#g'
    echo "Copied docs into $docs_dir/docs/ai"
else
    echo "No docs site at $docs_dir; skip docs"
fi

exit $STATUS

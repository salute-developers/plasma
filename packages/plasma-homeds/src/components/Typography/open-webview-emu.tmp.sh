#!/usr/bin/env bash
# TMP: открыть сторис метрик шрифта в Chromium с растеризацией ближе к Android WebView.
# Настоящий WebView так не заменить, но LCD AA и subpixel positioning выключаются.
# Удалить вместе с FontMetrics.tmp.stories.tsx

set -euo pipefail

URL="${1:-http://127.0.0.1:7007/iframe.html?id=tmp-sb-sans-display-metrics--reproduce&viewMode=story}"
BIN="$(command -v chromium || command -v google-chrome || command -v google-chrome-stable || true)"

if [[ -z "$BIN" ]]; then
    echo "Нужен chromium или google-chrome"
    exit 1
fi

exec "$BIN" \
    --disable-lcd-text \
    --disable-font-subpixel-positioning \
    --font-render-hinting=slight \
    --force-device-scale-factor=1 \
    --high-dpi-support=1 \
    --disable-gpu \
    --user-data-dir=/tmp/plasma-homeds-webview-emu \
    "$URL"

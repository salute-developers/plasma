---
name: remove-old-test
description: Remove old component tests and Cypress snapshots by component name. Trigger when user asks to delete, remove, or clean up old tests or screenshots for a component. Example: "удали старые тесты для ComponentName", "remove old tests for DateTimePicker".
disable-model-invocation: true
---

# Remove old tests and snapshots for a component

The user provides a component name. Run the following two commands using the Bash tool:

```bash
rm -rf cypress/snapshots/**/ComponentName/*
```

```bash
find ./packages -path ./packages/plasma-new-hope -prune -o -name "ComponentName.component-test.tsx" -print | xargs rm -f
```

```bash
find ./packages -path ./packages/plasma-new-hope -prune -o -name "ComponentName.update-test.component-test.tsx" -print | xargs rm -f
```

Replace `{ComponentName}` with the actual component name from `$ARGUMENTS`.

## Steps

1. Run both commands in parallel via the Bash tool.
2. Report which files were deleted. If a path did not exist, mention it was already absent — do not treat it as an error.

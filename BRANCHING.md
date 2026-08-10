# Branching Convention

## Long-running branches

- `main` - always reflects working, reviewed code. No commits are pushed directly to `main`.

## Short-lived branches

Created from `main`, deleted after they are merged.

- `feature/<short-name>` - new functionality
- `fix/<short-name>` - bug fixes
- `refactor/<short-name>` - cleanup with no behavior change

## Integration

All short-lived branches reach `main` through a pull request. Rebase may be used to clean up a
local branch before it is pushed, but never on commits that already exist on the remote.

## Commit messages

Subject line under 80 characters, blank line, then a body explaining what changed, why it
changed, and anything a reviewer should watch out for.

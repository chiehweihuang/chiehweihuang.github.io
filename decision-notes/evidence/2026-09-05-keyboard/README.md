# Keyboard activation follow-up

Captured on 2026-09-05 Japan time (UTC timestamp in result.json).

This is a new test of the saved current homepage, not a reconstruction of the
August source files. The snapshot preserves the homepage, script and stylesheet;
other navigation destinations are not copied. Use it for the scoped component
test, not as a complete site archive.

## Run

Requires Node.js, an installed Playwright or playwright-core module and Chrome.
Set PLAYWRIGHT_MODULE to the installed module's path. Set CHROME_PATH to the
Chrome executable. From this directory run:

```sh
node check.cjs
```

The command replaces result.json with a new run. Preserve the original result
before rerunning if you need to compare captures. The result records browser and
Node versions and SHA-256 hashes of all three input files.

## What it checks

- Tab can reach the theme button and the main email link at widths 320 and 1280.
- Enter and Space each generate one additional button click, change theme and
  update aria-pressed to match.
- Enter on the email link reaches the existing document listener and calls the
  analytics function once with contact_email_click.

External HTTP requests are blocked. The analytics function is replaced with a
local recorder after page load. Email default navigation is prevented after the
site's listener runs, so the test does not open an email client or send a message.

## Limits

No screen reader, actual mail delivery, analytics transport, historical browser,
agent repair, or reduction in rework is tested. The result supports leaving these
current handlers unchanged on the tested keyboard paths. It does not establish
that all historical findings were false positives.

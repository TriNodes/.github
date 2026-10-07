// Used by .github/workflows/commitlint.yml (wagoid/commitlint-github-action).
module.exports = {
  extends: ["@commitlint/config-conventional"],
  ignores: [
    // Dependabot writes long, machine-generated bodies (tables of updates) that
    // always exceed body-max-line-length. Its subjects already follow Conventional
    // Commits through the prefix set in dependabot.yml, e.g. "ci(deps): bump ...".
    (message) =>
      /^(ci|chore|build)\(deps(-dev)?\): /.test(message) && /^Bumps /m.test(message),
  ],
};

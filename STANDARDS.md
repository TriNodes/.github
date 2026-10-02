# TriNodes Organization Standards

These standards apply to all repositories within the TriNodes GitHub organization.  
They ensure consistency, quality, security, and predictable workflows across all projects.

---

# 📌 1. Commit Standards

TriNodes follows the **Conventional Commits** specification:

- `feat:` – new feature  
- `fix:` – bug fix  
- `chore:` – maintenance tasks, dependency updates  
- `docs:` – documentation changes  
- `refactor:` – code improvements without behavior changes  
- `test:` – adding or updating tests  
- `perf:` – performance improvements  
- `ci:` – CI/CD related changes  
- `style:` – formatting-only changes  

**Examples:**
- `feat: add user authentication module`
- `fix: resolve crash on login`
- `chore: update dependencies`
- `docs: improve API documentation`

---

# 📌 2. Branch Naming

Branches must follow a clear and predictable naming convention:

- `feature/<short-description>`
- `fix/<short-description>`
- `hotfix/<short-description>`
- `refactor/<short-description>`
- `chore/<short-description>`
- `docs/<short-description>`

**Examples:**
- `feature/add-payment-flow`
- `fix/navbar-overflow`
- `refactor/user-service`

---

# 📌 3. Pull Request Requirements

All PRs must:

- Provide a clear description of the change  
- Reference related issues (if applicable)  
- Include appropriate labels  
- Pass all CI checks  
- Receive approval from CODEOWNERS  
- Follow commit and branch naming standards  
- Include version bump labels when applicable  
- Avoid mixing unrelated changes  
- Avoid mixing formatting-only changes with logic changes  

---

# 📌 4. Semantic Versioning

TriNodes uses **SemVer** across all Node-based projects:

- **MAJOR** – breaking changes  
- **MINOR** – new features  
- **PATCH** – bug fixes  

PRs must include one of the following labels:

- `bump:major`  
- `bump:minor`  
- `bump:patch`  
- `bump:build` — changes that do not affect runtime (CI, docs, configs)  
- `bump:none` — no version bump required  

These labels are used by automated release workflows.

---

# 📌 5. Labels (Enterprise)

`labels.json` defines all organization-wide labels.  
These labels are **mandatory** across all repositories.

### ✔ Core workflow labels
- `bug`  
- `enhancement`  
- `dependencies`  
- `security`  
- `documentation`  
- `performance`  
- `tests`  
- `ci`  
- `governance`  

### ✔ Version bump labels (SemVer)
- `bump:major`  
- `bump:minor`  
- `bump:patch`  
- `bump:build`  
- `bump:none`  

### ✔ Workflow automation labels
- `stale`  
- `blocked`  
- `needs-review`  
- `needs-testing`  
- `ready`  

### ✔ Priority labels
- `priority:high`  
- `priority:medium`  
- `priority:low`  

### ✔ Type labels
- `type:feature`  
- `type:bug`  
- `type:refactor`  
- `type:docs`  
- `type:ci`  
- `type:design`  

### ✔ Area labels (optional but recommended)
- `area:frontend`  
- `area:backend`  
- `area:api`  
- `area:infra`  
- `area:ci`  
- `area:deployment`  

### ✔ Client labels (for multi-client repos)
- `client:<name>`  

---

### Applying labels automatically

```yaml
jobs:
  labels:
    uses: TriNodes/.github/.github/workflows/sync-labels.yml@main

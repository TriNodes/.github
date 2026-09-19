# TriNodes Organization Standards

These standards apply to all repositories within the TriNodes GitHub organization.  
They ensure consistency, quality, and predictable workflows across all projects.

---

## 📌 Commit Standards

TriNodes follows the **Conventional Commits** specification:

- `feat:` – new feature  
- `fix:` – bug fix  
- `chore:` – maintenance tasks, dependency updates  
- `docs:` – documentation changes  
- `refactor:` – code improvements without behavior changes  
- `test:` – adding or updating tests  
- `perf:` – performance improvements  
- `ci:` – CI/CD related changes  

**Examples:**
- `feat: add user authentication module`
- `fix: resolve crash on login`
- `chore: update dependencies`
- `docs: improve API documentation`

---

## 📌 Branch Naming

Branches must follow a clear and predictable naming convention:

- `feature/<short-description>`
- `fix/<short-description>`
- `hotfix/<short-description>`
- `refactor/<short-description>`

**Examples:**
- `feature/add-payment-flow`
- `fix/navbar-overflow`
- `refactor/user-service`

---

## 📌 Pull Request Requirements

All PRs must:

- Provide a clear description of the change  
- Reference related issues (if applicable)  
- Include appropriate labels  
- Pass all CI checks  
- Receive approval from CODEOWNERS  
- Follow commit and branch naming standards  

---

## 📌 Semantic Versioning

TriNodes uses **SemVer** across all Node-based projects:

- **MAJOR** – breaking changes  
- **MINOR** – new features  
- **PATCH** – bug fixes  

PRs must include one of the following labels:

- `bump:major`  
- `bump:minor`  
- `bump:patch`

These labels are used by automated release workflows.

---

## 📌 Labels

`labels.json` (raiz deste repositório) define os labels comuns — `bug`,
`enhancement`, `dependencies`, `security`, `bump:major`, `bump:minor`,
`bump:patch`. Definir não os cria: um repositório aplica-os chamando o
workflow reutilizável que os lê e aplica de facto.

```yaml
jobs:
  labels:
    uses: TriNodes/.github/.github/workflows/sync-labels.yml@main
```

---

## 📌 Recommended Project Structure
src/
tests/
public/
docs/
.github/


---

## 📌 Security Guidelines

- Never commit secrets or credentials  
- Always use GitHub Secrets  
- Dependabot must remain enabled  
- Security vulnerabilities must be reported via SECURITY.md  

---

## 📌 CI/CD Requirements

- Every repository must include a CI workflow  
- Large projects must include automated release workflows  
- Reusable workflows from `.github/workflows` should be used whenever possible  

---

## 📌 Organization-Wide Labels

- `bug`
- `enhancement`
- `dependencies`
- `security`
- `bump:major`
- `bump:minor`
- `bump:patch`

---

End of standards.

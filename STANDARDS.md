# TriNodes Organization Standards

Estas normas aplicam-se a todos os repositórios da organização TriNodes.

---

## 📌 Commits

Usar Conventional Commits:

- `feat:` nova funcionalidade  
- `fix:` correção de bug  
- `chore:` tarefas internas  
- `docs:` documentação  
- `refactor:` melhoria de código sem alterar comportamento  
- `test:` testes  
- `perf:` melhorias de performance  

Exemplos:
- `feat: add user profile page`
- `fix: correct null reference in login`
- `chore: update dependencies`

---

## 📌 Branch Naming

Usar nomes curtos e consistentes:

- `feature/<nome>`  
- `fix/<nome>`  
- `hotfix/<nome>`  
- `refactor/<nome>`  

Exemplos:
- `feature/add-auth`
- `fix/navbar-bug`

---

## 📌 Pull Requests

Todos os PRs devem:

- ter descrição clara  
- referenciar issues (se existirem)  
- ter labels adequadas  
- ter revisão obrigatória (CODEOWNERS)  
- passar no CI  

---

## 📌 Versionamento

Usar SemVer:

- MAJOR — alterações incompatíveis  
- MINOR — novas funcionalidades  
- PATCH — correções  

PRs devem ter labels:

- `bump:major`  
- `bump:minor`  
- `bump:patch`

---

## 📌 Estrutura de Pastas (recomendado)


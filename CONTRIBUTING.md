# Contributing to TriNodes

Obrigado pelo teu interesse em contribuir para a organização **TriNodes**.  
Este documento explica como abrir issues, submeter pull requests, seguir o nosso workflow de desenvolvimento e manter consistência em toda a organização.

---

## 📌 Opening Issues

Quando abrires uma issue:

- Descreve claramente o problema ou pedido
- Inclui passos de reprodução (se aplicável)
- Adiciona labels relevantes
- Usa os templates disponíveis em `.github/ISSUE_TEMPLATE/`
- Marca com `security` se for relacionado com segurança
- Marca com `bump:*` se implicar alteração de versão

---

## 📌 Submitting Pull Requests

Segue estes passos ao submeter uma PR:

### 1. Cria uma branch com nome consistente
- `feature/<nome>`
- `fix/<nome>`
- `refactor/<nome>`
- `chore/<nome>`
- `docs/<nome>`

### 2. Usa **Conventional Commits**
Exemplos:
- `feat: adicionar funcionalidade X`
- `fix: corrigir bug Y`
- `refactor: melhorar estrutura Z`
- `docs: atualizar documentação`
- `chore: tarefas internas`

### 3. Garante que todos os checks passam
- Lint
- Tests
- Build
- Security Scan
- Workflow Permissions Scan

### 4. Adiciona labels de version bump (se necessário)
- `bump:major`
- `bump:minor`
- `bump:patch`

### 5. Solicita revisão aos CODEOWNERS
Os ficheiros são automaticamente atribuídos aos responsáveis definidos em `CODEOWNERS`.

---

## 📌 Development Workflow

Todos os repositórios seguem o mesmo fluxo:

1. Criar branch  
2. Commitar com Conventional Commits  
3. Abrir PR  
4. Passar CI  
5. Revisão dos CODEOWNERS  
6. Merge  
7. Release automático (se aplicável)

---

## 📌 Running Projects Locally

Cada repositório contém um README com instruções específicas.  
Segue sempre as instruções desse projeto.

---

## 📌 Security

Problemas de segurança **não devem ser reportados publicamente**.

Segue as instruções em:


# TriNodes GitHub Organization Configuration

Este repositório contém toda a configuração global utilizada em todos os repositórios da organização **TriNodes**.  
Aqui centralizamos padrões, governance, segurança, workflows reutilizáveis e documentação organizacional.

---

## 📦 Conteúdos

### **Issue Templates**
Modelos padronizados para:
- Bug reports  
- Feature requests  
- Tasks  
- Questions  
- Security reports (privados)

### **Pull Request Template**
Template unificado para garantir:
- Revisões consistentes  
- Documentação clara  
- Uso obrigatório de Conventional Commits  
- Labels de version bump (`bump:*`)

### **CODEOWNERS**
Define:
- Responsáveis por cada área  
- Revisores obrigatórios  
- Proteção de ficheiros sensíveis  
- Governança organizacional

### **Reusable Workflows**
Workflows partilhados para:
- Lint  
- Tests  
- Build  
- Staging deploy  
- Production deploy  
- Release automático  
- Sync de labels  
- Stale bot  
- Security Suite Enterprise  
- Workflow Permissions Scan  
- Branch Protection Scan  
- Sensitive Files Scan

### **Dependabot Configuration**
Atualizações automáticas de dependências:
- Segurança  
- Estabilidade  
- Alertas automáticos

---

## 🎯 Objetivo

Centralizar estes ficheiros garante:

- Workflow de desenvolvimento consistente  
- Comunicação padronizada em issues e PRs  
- CI/CD unificado em toda a organização  
- Regras claras de revisão e ownership  
- Segurança reforçada  
- Governança automatizada  
- Manutenção simplificada  
- Redução de divergências entre repositórios

---

## 🛡 Segurança & Governance

Este repositório inclui:

- **Security Suite Enterprise**
  - CodeQL  
  - Secret scanning  
  - OSV scanner  
  - Gitleaks  
  - Sensitive files scan  
  - Workflow permissions scan  
  - Branch protection scan  
  - Criação automática de issues de segurança  

- **Label Governance**
  - Sync automático de labels  
  - Detecção de labels órfãos  
  - Issues automáticas quando há divergências  

- **Workflow Governance**
  - Permissões mínimas  
  - Proteção contra `contents: write` desnecessário  
  - Proteção contra `id-token: write` indevido  

---

## 🔧 Como funciona

Este repositório é automaticamente aplicado a todos os repositórios da organização quando existe uma pasta:


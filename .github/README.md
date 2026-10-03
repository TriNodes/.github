# 🎛️ TriNodes GitHub Organization Configuration

This repository contains all global configuration used across the **TriNodes** GitHub organization.  
It centralizes standards, governance, security, reusable workflows, and documentation applied to every repository.

---

## 📂 Contents

### 📝 Issue Templates

Standardized templates for:

- Bug reports  
- Feature requests  
- Tasks  
- Questions  
- Private security reports  

---

### 🔀 Pull Request Template

Ensures:

- Consistent review process  
- Clear documentation  
- Mandatory Conventional Commits  
- Version bump labels (`bump:*`)  

---

### 👥 CODEOWNERS

Defines:

- Area ownership  
- Mandatory reviewers  
- Sensitive file protection  
- Governance rules  

---

### ⚙️ Reusable Workflows

Shared GitHub Actions for:

- Lint  
- Tests  
- Build  
- Staging deploy  
- Production deploy  
- Automatic releases  
- Label sync  
- Stale bot  
- Enterprise Security Suite  
- Workflow Permissions Scan  
- Branch Protection Scan  
- Sensitive Files Scan  

---

### 🔒 Dependabot Configuration

Automated dependency updates for:

- Security  
- Stability  
- Alerts  

---

## 🎯 Purpose

Centralizing these files ensures:

- Consistent development workflow  
- Standardized communication in issues and PRs  
- Unified CI/CD pipelines  
- Clear ownership and review rules  
- Strong security posture  
- Automated governance  
- Simplified maintenance  
- Reduced divergence between repositories  

---

## 🛡️ Security & Governance

### 🧩 Enterprise Security Suite

Includes:

- CodeQL  
- Secret scanning  
- OSV scanner  
- Gitleaks  
- Sensitive files scan  
- Workflow permissions scan  
- Branch protection scan  
- Automatic security issue creation  

---

### 🏷️ Label Governance

- Automatic label synchronization  
- Detection of orphaned labels  
- Automatic issues for inconsistencies  

---

### 🔐 Workflow Governance

- Minimum permissions enforced  
- Protection against unnecessary `contents: write`  
- Protection against improper `id-token: write`  

---

## 🔧 How It Works

Any repository containing a `.github` folder automatically inherits the shared templates, workflows, governance rules, and security configurations defined here.

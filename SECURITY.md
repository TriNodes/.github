# Security Policy

TriNodes is committed to maintaining the highest standards of security across all repositories.  
This document outlines how security vulnerabilities must be reported and how we handle them.

---

## 🔒 Reporting a Vulnerability

If you discover a security vulnerability:

- **Do not open a public issue**
- **Do not disclose the vulnerability publicly**
- **Do not include sensitive details in PRs or discussions**

Instead, report it privately to:

**contact@trinodes.com**

Please include:

- A clear description of the vulnerability  
- Steps to reproduce  
- Potential impact  
- Suggested remediation (optional)  
- Any relevant logs or screenshots  

We acknowledge all reports within **48 hours** and work with you to resolve the issue responsibly.

---

## 🔐 Supported Versions

Security patches are applied to:

- The latest stable release  
- Active LTS branches (if applicable)

---

## 🛡 Security Requirements for All Repositories

All repositories must have:

- Secret scanning enabled  
- Dependabot alerts enabled  
- CodeQL analysis  
- OSV scanning  
- Gitleaks scanning  
- Workflow permissions scanning  
- Sensitive files scanning  
- Branch protection scanning  

Security workflows **must not** be disabled under any circumstances.

---

## 🧩 Responsible Disclosure

We follow industry-standard responsible disclosure practices.  
TriNodes does not offer bounties at this time, but we publicly acknowledge contributors who report valid vulnerabilities.

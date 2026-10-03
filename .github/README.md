TriNodes GitHub Organization Configuration
This repository contains all global configuration used across every repository in the TriNodes organization.
It centralizes standards, governance, security, reusable workflows, and organizational documentation.

Contents
Issue Templates
Standardized templates for:

Bug reports

Feature requests

Tasks

Questions

Private security reports

Pull Request Template
Unified template ensuring:

Consistent reviews

Clear documentation

Mandatory use of Conventional Commits

Version bump labels (bump:*)

CODEOWNERS
Defines:

Area ownership

Mandatory reviewers

Protection of sensitive files

Organizational governance rules

Reusable Workflows
Shared workflows for:

Lint

Tests

Build

Staging deploy

Production deploy

Automatic releases

Label synchronization

Stale bot

Enterprise Security Suite

Workflow Permissions Scan

Branch Protection Scan

Sensitive Files Scan

Dependabot Configuration
Automated dependency updates for:

Security

Stability

Automatic alerts

Purpose
Centralizing these files ensures:

A consistent development workflow

Standardized communication in issues and PRs

Unified CI/CD across the entire organization

Clear review and ownership rules

Strengthened security

Automated governance

Simplified maintenance

Reduced divergence between repositories

Security & Governance
Enterprise Security Suite
Includes:

CodeQL

Secret scanning

OSV scanner

Gitleaks

Sensitive files scan

Workflow permissions scan

Branch protection scan

Automatic creation of security issues

Label Governance
Automatic label synchronization

Detection of orphaned labels

Automatic issues when inconsistencies are found

Workflow Governance
Enforced minimum permissions

Protection against unnecessary contents: write

Protection against improper id-token: write

How It Works
This repository is automatically applied to all organization repositories whenever a .github folder is present.

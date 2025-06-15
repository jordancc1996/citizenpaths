# Security Policy

## Supported Versions

We support the latest version of CitizenPaths with security updates.

| Version | Supported          |
| ------- | ------------------ |
| Latest  | :white_check_mark: |

## Reporting a Vulnerability

If you discover a security vulnerability, please report it by:

1. **Do NOT** create a public GitHub issue
2. Email the security team directly
3. Include detailed information about the vulnerability
4. Allow time for the issue to be addressed before public disclosure

## Security Measures

This project implements several security measures:

- Content Security Policy headers
- XSS protection
- Frame options to prevent clickjacking
- Secure dependency management
- Regular security audits

## Dependencies

We regularly update dependencies to address security vulnerabilities. Run `npm audit` to check for known vulnerabilities in dependencies.


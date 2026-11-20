# AGENTS.md

## Testes de interface

- **Playwright:** toda funcionalidade nova ou alterada ganha cenário Playwright, que roda local antes do push (máquina ou servidor via Orca); o CI não roda Playwright. Os cenários (specs, fixtures) são versionados; só os artefatos da execução ficam no `.gitignore`. Ao criar a primeira funcionalidade testável, instale o `@playwright/test`.

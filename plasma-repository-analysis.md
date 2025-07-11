# Plasma Design System Repository Analysis

## Overview

**Plasma** is a comprehensive design system developed by Salute (the company behind Sber's virtual assistants ecosystem). It's a monorepo containing multiple component libraries, design tokens, and documentation sites designed to create consistent user interfaces across different platforms and use cases.

## Key Information

- **Organization**: Salute Developers (@salutejs)
- **License**: MIT
- **Language**: TypeScript/JavaScript with React
- **Architecture**: Monorepo managed with Lerna
- **Styling**: Styled-components
- **Testing**: Cypress for component and visual testing
- **Documentation**: Storybook + custom documentation sites

## Repository Structure

### Core Packages

The repository contains several main component libraries:

1. **@salutejs/plasma-ui** - Components for Canvas Apps (virtual assistant applications)
2. **@salutejs/plasma-web** - B2B web application components
3. **@salutejs/plasma-b2c** - B2C web application components
4. **@salutejs/plasma-giga** - Another component variant
5. **@salutejs/plasma-core** - Core components and utilities
6. **@salutejs/plasma-new-hope** - Next-generation components

### SDDS Packages

Multiple SDDS (Salute Design System) packages for different business units:
- **sdds-cs** - Customer Service variant
- **sdds-crm** - CRM variant
- **sdds-insol** - Insurance solutions variant
- **sdds-serv** - Service variant
- **sdds-scan** - Scan variant
- **sdds-netology** - Netology variant
- **sdds-finportal** - Financial portal variant
- **sdds-dfa** - DFA variant
- **sdds-bizcom** - Business communications variant

### Supporting Packages

- **@salutejs/plasma-tokens** - Design tokens (colors, typography, spacing)
- **@salutejs/plasma-tokens-web/b2c/b2b** - Platform-specific tokens
- **@salutejs/plasma-icons** - Icon library
- **@salutejs/plasma-colors** - Color system
- **@salutejs/plasma-themes** - Theme configurations

## Technology Stack

### Development Tools
- **Lerna 6.5.1** - Monorepo management
- **TypeScript 5.6.3** - Type safety
- **React 18.2.0** - Component framework
- **Styled-components** - CSS-in-JS styling
- **Babel** - JavaScript transpilation
- **SWC** - Fast compilation

### Testing & Quality
- **Cypress 13.17.0** - End-to-end and component testing
- **Jest** - Unit testing
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **Stylelint** - CSS linting
- **Husky** - Git hooks

### Build & Deployment
- **Storybook** - Component documentation
- **Auto** - Automated releases
- **Docker** - Containerized testing
- **GitHub Actions** - CI/CD

## Key Features

### Comprehensive Testing
- Visual regression testing with Cypress
- Component testing across multiple packages
- Automated screenshot comparison
- Docker-based test execution for consistency
- Parallel test execution by component groups (A-D, E-L, M-R, S-Z)

### Release Management
- Automated versioning with semantic versioning
- Conventional commits for change tracking
- Canary releases for testing
- Automated changelog generation
- Independent package versioning

### Documentation
- Multiple Storybook instances for different packages
- Comprehensive documentation websites
- API documentation generation
- Interactive component examples

### Development Experience
- Sophisticated scaffolding system for new components
- Hot reload development
- Component bootstrapping utilities
- Comprehensive linting and formatting

## Monorepo Organization

The repository uses Lerna to manage:
- **25+ packages** in the `packages/` directory
- **15+ documentation sites** in the `website/` directory
- **Shared utilities** in the `utils/` directory
- **Build actions** in the `actions/` directory

## Target Audiences

1. **Canvas App Developers** - Building applications for Salute's virtual assistant ecosystem
2. **B2B Application Developers** - Creating business applications
3. **B2C Application Developers** - Building consumer-facing applications
4. **Enterprise Teams** - Various business units with specialized needs (CRM, Insurance, etc.)

## Notable Characteristics

### Scale & Complexity
- **831KB CHANGELOG.md** (15,710 lines) indicates extensive development history
- **2.3MB package-lock.json** shows substantial dependency tree
- Complex CI/CD pipeline with multiple testing strategies

### Russian Market Focus
- Documentation and README in Russian
- Tailored for Russian market applications
- Integration with Sber's ecosystem

### Enterprise-Grade
- Comprehensive testing infrastructure
- Sophisticated release management
- Multiple specialized variants for different business needs
- Professional development practices

## Getting Started

For developers wanting to use the design system:

```bash
# For Canvas Apps
npm install @salutejs/plasma-ui @salutejs/plasma-tokens @salutejs/plasma-icons

# For B2B Web Apps  
npm install @salutejs/plasma-web @salutejs/plasma-tokens-web

# For B2C Web Apps
npm install @salutejs/plasma-b2c @salutejs/plasma-tokens-b2c
```

## Contributing

The project follows:
- **Conventional Commits** for standardized commit messages
- **Pull Request workflow** through `dev` branch
- **Code review requirements** 
- **Automated quality checks**
- **Comprehensive testing** before merging

This repository represents a mature, enterprise-grade design system with significant investment in developer experience, testing infrastructure, and comprehensive documentation.
# Student Services Portal

A TypeScript-based student management system with a professional development workflow using **Git, GitHub, ESLint, Prettier, and AI-assisted development**.

## Project Description

The **Student Services Portal** serves as the foundation for a University Student Services Portal. The project establishes a professional development environment using TypeScript, ESLint, Prettier, and GitHub collaboration workflows.

The repository demonstrates proper use of:

* Feature branches
* Git commits
* Pull requests
* Code reviews
* Code linting and formatting
* Responsible AI-assisted development

## Requirements

Before running the project, make sure you have the following installed:

* [Node.js](https://nodejs.org/) v16 or higher
* npm or pnpm
* Git
* TypeScript v5.x
* A GitHub account

## Installation

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/student-services-portal.git
cd student-services-portal
```

### 2. Install Dependencies

```bash
npm install
```

## How to Run the Project

### Development Mode

Build the TypeScript source code:

```bash
npm run build
```

Run the compiled JavaScript:

```bash
npm start
```

### Build and Run in One Command

```bash
npm run build && npm start
```

## Linting

Run ESLint with:

```bash
npm run lint
```

Linting checks the project for:

* TypeScript errors
* Code style issues
* Potential bugs
* Best-practice violations

## Code Formatting

Format the project using Prettier:

```bash
npm run format
```

The project uses the following formatting conventions:

* Single quotes
* 2-space indentation
* Semicolons
* ES5 trailing commas

## Development Workflow

This project follows a professional Git and GitHub workflow.

### 1. Create an Issue

Create an issue on GitHub describing the feature, bug, or task.

### 2. Create a Feature Branch

```bash
git switch -c feature/feature-name
```

### 3. Develop the Feature

Implement the feature and make regular, meaningful commits.

### 4. Run Linting

```bash
npm run lint
```

### 5. Format the Code

```bash
npm run format
```

### 6. Commit Changes

```bash
git add .
git commit -m "feat: description"
```

### 7. Push the Branch

```bash
git push -u origin feature/feature-name
```

### 8. Create a Pull Request

Open a Pull Request on GitHub and request a review from your team members.

### 9. Code Review and Merge

Team members review the changes. Once approved, the feature branch can be merged into the main branch.

## AI Usage Policy

AI coding tools may be used to assist with development and learning.

However, all AI-generated code must be:

* **Reviewed** — Understand every line of the generated code.
* **Modified** — Adapt the code to the project's standards and requirements when necessary.
* **Tested** — Verify that the implementation works correctly.
* **Verified** — Check the implementation against official documentation.
* **Documented** — Record what AI-generated suggestions were accepted, modified, or rejected.

> **Important:** Never copy and paste AI-generated code without understanding how it works.

## Project Structure

```text
student-services-portal/
├── src/
│   └── index.ts              # Main application code
├── dist/                     # Compiled JavaScript (generated)
├── node_modules/             # Dependencies (ignored by Git)
├── .eslintrc.json            # ESLint configuration
├── .prettierrc               # Prettier configuration
├── .gitignore                # Git ignore patterns
├── package.json              # Project metadata and scripts
├── tsconfig.json             # TypeScript configuration
└── README.md                 # Project documentation
```

## TypeScript Features Demonstrated

The project demonstrates several important TypeScript features.

### Interfaces

Defines structured objects with strict typing, such as the `Student` interface.

### Generics

Uses generic types such as `ApiResponse<T>` to provide type-safe API responses.

### Runtime Validation

Uses the `isValidStudent()` type guard to validate data at runtime.

### Union Types

Uses union types such as:

```typescript
status: 'active' | 'inactive';
```

This ensures that only valid status values can be assigned.

## Available Scripts

| Command          | Description                                 |
| ---------------- | ------------------------------------------- |
| `npm run build`  | Compiles TypeScript into JavaScript         |
| `npm start`      | Runs the compiled JavaScript                |
| `npm run lint`   | Checks the code for errors and style issues |
| `npm run format` | Formats the code using Prettier             |

## License

This project is for **educational purposes** as part of a laboratory activity.

## Author

**Jan Eduard B. Sanchez**
Junior Developer

## Acknowledgments

* [TypeScript Documentation](https://www.typescriptlang.org/docs/)
* [ESLint Documentation](https://eslint.org/docs/latest/)
* [Prettier Documentation](https://prettier.io/docs/)
* [GitHub Guides](https://docs.github.com/)
* AI Coding Assistant — for learning and development assistance


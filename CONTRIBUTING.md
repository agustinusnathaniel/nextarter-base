# Contributing to nextarter-base

We welcome contributions! Please follow these guidelines to ensure a smooth and consistent development process.

## 🧠 Philosophy

- **Simplicity Over Complexity**: If a feature can be implemented without adding a new dependency, do it.
- **Strict Standards**: We rely on automated tools (Biome, TypeScript, Commitlint) to maintain code quality.
- **Pragmatism**: Write code that is easy to read and maintain for both humans and AI agents.

## 🌿 Branching Strategy

- **`main`**: The primary branch. All PRs should target this branch.
- **Feature Branches**: Use descriptive names like `feat/awesome-feature` or `fix/bug-description`.

## 💬 Commit Conventions

We follow the [Conventional Commits](https://www.conventionalcommits.org/) specification. This is enforced by `commitlint`.

- `feat:`: A new feature
- `fix:`: A bug fix
- `docs:`: Documentation changes
- `style:`: Changes that do not affect the meaning of the code (formatting, etc.)
- `refactor:`: A code change that neither fixes a bug nor adds a feature
- `perf:`: A code change that improves performance
- `test:`: Adding missing tests or correcting existing tests
- `chore:`: Updates to the build process or auxiliary tools

## 🎨 Code Style

We use **Biome** for both linting and formatting. 

- **Rules**: Refer to `biome.json` for the full configuration.
- **Formatting**: Run `pnpm biome:fix` before committing.
- **No Barrel Files**: Avoid `index.ts` files that re-export everything; import directly from the source to keep bundles lean.
- **File Naming**: Use `kebab-case` for all filenames (e.g., `user-profile.tsx`).
- **Exports**: Prefer **named exports** for utilities and components. **Default exports** are reserved for Next.js requirements (pages, layouts, manifests).

## 🧪 Testing Expectations

- Ensure type checks pass: `pnpm type:check`
- Ensure linting passes: `pnpm biome:check`
- If you add a feature, consider adding a basic E2E test in the `tests/` directory (if configured).

## 🚀 Pull Request Process

1. Fork the repository.
2. Create your feature branch.
3. Commit your changes using conventional commit messages.
4. Ensure all tests and lint checks pass locally.
5. Submit a PR with a clear description of the changes and the problem they solve.
6. A maintainer will review your PR and provide feedback.

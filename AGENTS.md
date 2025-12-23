# AGENTS.md

> Documentation for AI Entities (Cursor, Antigravity, Zed, Windsurf)

## 🤖 System Mental Model

`nextarter-base` is a **lean Next.js template** that enforces strict code quality and modern React 19 patterns. It uses **Biome** instead of the traditional ESLint/Prettier stack.

### Module Responsibility Mapping

| Path | Responsibility | Permitted Export Pattern |
| :--- | :--- | :--- |
| `src/app/` | Routing, Page Layouts, API Routes. | **Default Exports** required for Next.js. |
| `src/lib/` | Shared logic, hooks, types, constants. | **Named Exports** only. |
| `src/lib/components/ui/` | (Future) Third-party or copy-pasted UI components. | **Excluded from Biome checks** to allow external patterns. |
| `**/utils.ts` | Miscellaneous helper functions. | **Excluded from Biome checks**. |
| `src/lib/styles/` | Global CSS and design tokens. | N/A |
| `public/` | Static assets. | N/A |

### 🛠 Tooling Awareness
- **Linter**: Biome (Configuration: `biome.json`).
- **Build**: TurboRepo (Configuration: `turbo.json`).
- **Task Runner**: `pnpm`.

## 🚦 Safety Guide for Changes

### ✅ Safe to Change
- Adding new routes in `src/app/`.
- Creating new utilities in `src/lib/`.
- Updating styles in `src/lib/styles/globals.css`.
- Modifying `src/app/page.tsx` or `src/app/layout.tsx`.

### ⚠️ Proceed with Caution
- Modifying `next.config.ts`: Can break deployment/build.
- Changing `package.json` dependencies: Ensure compatibility with React 19.

### 🚫 Restricted / Risky
- **`biome.json`**: Changes here affect the entire codebase. Do not relax rules without explicit user request.
- **`src/app/api/hello/route.ts`**: Sample API route; modifying it without context might break initial testing.
- **`.husky/`**: Modifying hooks can break the commit pipeline.

## 🧠 Reasoning Instructions for AI

1. **Follow Biome Rules**: Always run `pnpm biome:fix` after editing. If a lint error occurs, fix the code rather than disabling the rule.
2. **Kebab-Case Only**: All new files must be named using `kebab-case.tsx`.
3. **Avoid Barrel Files**: Never create `index.ts` files to re-export directories. Import specific files directly.
4. **Generic Arrays**: Use `Array<T>` instead of `T[]` (per `biome.json` rules).
5. **No Default Exports for Utilities**: Only use `export const ...` in the `src/lib` directory.

## 🔍 Navigation Hints
- Look at `src/app/layout.tsx` for core metadata and font loading.
- Look at `src/lib/styles/globals.css` for root CSS variables.
- Check `package.json` scripts to understand the deployment and testing lifecycle.

## 🎯 Specific IDE Tips

- **Cursor/Windsurf**: Ensure the Biome extension is active. Respect the `.biome` configuration over any built-in Prettier settings.
- **Antigravity**: When creating files, prioritize `src/lib` for logic and `src/app` for routes.
- **Zed**: Uses the Biome LSP by default if configured.

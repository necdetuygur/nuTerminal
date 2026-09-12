# nuTerminal

A minimal VS Code extension that adds a **New Terminal in Editor** button directly to the title bar — right next to the minimize/maximize/close controls. One click opens a fully functional terminal as a tab in the **editor area**, not the bottom panel.

---

## Features

| Feature | Detail |
| --- | --- |
| **Title bar button** | Appears in the top-right title bar next to window controls |
| **Editor panel terminal** | Opens a terminal as an editor tab (not the bottom panel) |
| **Reusable** | Reuses the same terminal if already open |
| **Keyboard shortcut** | `Ctrl+Alt+N` (`Cmd+Alt+N` on macOS) |

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) **v18+**
- [pnpm](https://pnpm.io/) **v9+**
- [Visual Studio Code](https://code.visualstudio.com/) **v1.70+**

### Clone & Install

```bash
git clone https://github.com/necdetuygur/nuTerminal.git
cd nuTerminal
pnpm install
```

### Run in Development

```bash
# Start TypeScript in watch mode (in a separate terminal)
pnpm run watch

# Open VS Code Extension Development Host
# Then press F5 inside VS Code
```

A new VS Code window (**Extension Development Host**) will open with the extension active. Click the terminal icon in the title bar or press `Ctrl+Alt+N` to launch a terminal in the editor area.

### Build for Production

```bash
pnpm run compile
```

### Package the Extension

```bash
pnpm run package
# Produces: nuterminal-0.0.1.vsix
```

### Install the Packaged Extension

```bash
code --install-extension nuterminal-0.0.1.vsix
```

---

## Keyboard Shortcut

| Key | Action |
| --- | --- |
| `Ctrl+Alt+N` | Open new terminal in editor (Windows/Linux) |
| `Cmd+Alt+N` | Open new terminal in editor (macOS) |

---

## How It Works

1. The extension registers a command `nuterminal.openInEditor` with VS Code.
2. A `titleBar/title` menu contribution places a terminal icon button in the window title bar.
3. On click (or keybinding), it calls `vscode.window.createTerminal()` with `TerminalLocation.Editor`, which opens the terminal as a first-class editor tab.
4. If the terminal is already open, it simply focuses the existing one.

---

## Project Structure

```
nuTerminal/
├── src/extension.ts          # Extension entry point
├── package.json              # Extension manifest + contributions
├── tsconfig.json             # TypeScript config
├── pnpm-lock.yaml            # Locked dependencies
├── .vscode/
│   ├── launch.json           # Debug launch config (F5)
│   └── tasks.json            # Build/watch tasks
├── .gitignore
└── README.md
```

---

## License

MIT
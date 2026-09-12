import * as vscode from "vscode";

const COMMAND = "nuterminal.openInEditor";
const STATUS_BAR_ITEM_ID = "nuterminal.statusItem";
const STATUS_BAR_PRIORITY = Number.MIN_SAFE_INTEGER;

function openTerminalInEditor(): void {
  const terminal = vscode.window.createTerminal({
    name: "nuTerminal",
    location: { viewColumn: vscode.ViewColumn.Active },
  });

  terminal.show();
}

export function activate(context: vscode.ExtensionContext): void {
  context.subscriptions.push(
    vscode.commands.registerCommand(COMMAND, openTerminalInEditor)
  );

  const statusBarItem = vscode.window.createStatusBarItem(
    STATUS_BAR_ITEM_ID,
    vscode.StatusBarAlignment.Right,
    STATUS_BAR_PRIORITY
  );
  statusBarItem.text = "$(terminal)";
  statusBarItem.tooltip = "nuTerminal: New Terminal in Editor";
  statusBarItem.command = COMMAND;
  statusBarItem.show();

  context.subscriptions.push(statusBarItem);
}

export function deactivate(): void {}
import * as vscode from "vscode";

const COMMAND = "nuterminal.openInEditor";

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
}

export function deactivate(): void {}
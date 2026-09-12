import * as vscode from "vscode";

const COMMAND = "nuterminal.openInEditor";

let instance: vscode.Terminal | undefined;

function openTerminalInEditor(): void {
  if (!instance || instance.exitStatus !== undefined) {
    instance = vscode.window.createTerminal({
      name: "nuTerminal",
      location: vscode.TerminalLocation.Editor,
    });
  }

  instance.show(true);
}

export function activate(context: vscode.ExtensionContext): void {
  context.subscriptions.push(
    vscode.commands.registerCommand(COMMAND, openTerminalInEditor)
  );
}

export function deactivate(): void {}
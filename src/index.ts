import {
    commands,
    ConfigurationChangeEvent, window,
    workspace
} from 'vscode';

import generateSnippets from './helpers/generateSnippets';
import generatedSnippets from './snippets/generated.json';

const showRestartMessage = async ({
  affectsConfiguration,
}: ConfigurationChangeEvent) => {
  if (affectsConfiguration('reactSnippets')) {
    await generateSnippets();
    setTimeout(() => {
      window
        .showWarningMessage(
          'React Snippets: Please restart VS Code to apply snippet formatting changes',
          'Restart VS Code',
          'Ignore',
        )
        .then((action?: string) => {
          if (action === 'Restart VS Code') {
            commands.executeCommand('workbench.action.reloadWindow');
          }
        });
    }, 1000);
  }
};

export async function activate() {
  workspace.onDidChangeConfiguration(showRestartMessage);
  if (JSON.stringify(generatedSnippets).length < 10) {
    await generateSnippets();
  }
}

export function deactivate() {}
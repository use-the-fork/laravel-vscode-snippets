import { formatSnippet } from './formatters';
import { Snippet } from './generateSnippets';
import replaceOrRemoveReactImport from './replaceOrRemoveReactImport';

const parseSnippetToBody = (snippet: Snippet) => {

  const snippetBody = replaceOrRemoveReactImport({
        prefix: snippet.prefix,
        body: snippet.body,
      });

  const formattedSnippet = formatSnippet(snippetBody).split('\n');

  return formattedSnippet;
};

export default parseSnippetToBody;
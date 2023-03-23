import {
    replaceSnippetPlaceholders,
    revertSnippetPlaceholders
} from './snippetPlaceholders';

export const formatSnippet = (snippetString: string) => {
  return snippetString;
};

export const parseSnippet = (body: string | string[]) => {
  const snippetBody = typeof body === 'string' ? body : body.join('\n');

  return replaceSnippetPlaceholders(
    formatSnippet(revertSnippetPlaceholders(snippetBody)),
  );
};

//helper function to format php $
export const v = (s: string) => {return `\\$${s}`;}
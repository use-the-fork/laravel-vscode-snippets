export const formatSnippet = (snippetString: string) => {
  return snippetString;
};

export const parseSnippet = (body: string | string[]) => {
  const snippetBody = typeof body === 'string' ? body : body.join('\n');

  return snippetBody;
};
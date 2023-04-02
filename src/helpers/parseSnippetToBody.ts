
const parseSnippetToBody = (snippet: any) => {

//   const snippetBody = replaceOrRemoveReactImport({
//         body: ,
//       });

//   const formattedSnippet = formatSnippet(snippetBody).split('\n');

  return snippet.body;
};

export default parseSnippetToBody;
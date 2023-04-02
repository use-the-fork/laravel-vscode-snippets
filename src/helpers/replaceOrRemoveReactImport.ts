const replaceOrRemoveReactImport = ({
  body
}: {
  body: string[];
}) => {
  return body.join('\n');
};

export default replaceOrRemoveReactImport;
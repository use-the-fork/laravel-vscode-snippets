// Generates a PHP doc block for a given function.
//
type DocBlockMapping = (description: string, params?: { name: string, type?: string, description?: string }[], returns?: { type?: string, description?: string }) => string[];

export const docBlock: DocBlockMapping = (description, params = [], returns) => {
  const lines = [
    '/**',
    ` * ${description}`,
  ];

  if (params.length > 0) {
    params.forEach((param) => {
      lines.push(` * @param ${param.type ? `{${param.type}} ` : ''}${param.name} ${param.description ?? ''}`);
    });
  }

  if (returns) {
    lines.push(` * @return ${returns.type ? `{${returns.type}} ` : ''}${returns.description ?? ''}`);
  }

  lines.push(' */');

  return lines;
};

// Generates a VS Code tab stop string with the specified number and default text.
//
type TabStopMapping = (index: number, defaultText?: string) => string;

export const tabStop: TabStopMapping = (index, defaultText) => `\${${index}:${defaultText ?? ''}}`;

// Generates a PHP variable declaration with a given name, value, and scope, and a doc block if specified.
//
type VarSnippetMapping = (name: string, value: { key: string, value: string }[], scope?: 'private' | 'protected' | 'public', docBlock?: string[]) => string[];

export const varSnippet: VarSnippetMapping = (name, value, scope, docBlock = []) => {
  let snippet: string[] = [];

  if (docBlock.length > 0) {
    snippet = snippet.concat(docBlock);
  }

  if (Array.isArray(value)) {
    let arrayValue = value.map((v: any) => {
      if (typeof v === 'object') {
        return `\t'${v.key}' => ${JSON.stringify(v.value)},`;
      }
      return `\t${JSON.stringify(v)},`;
    });

    let arraySnippet = [`${scope ? `${scope} ` : ''}\\$${name} = [`, ...arrayValue, '];'];
    snippet = snippet.concat(arraySnippet);
  } else {
    let variableSnippet = `${scope ? `${scope} ` : ''}\\$${name} = ${JSON.stringify(value)};`;
    snippet.push(variableSnippet);
  }

  return snippet;
};

// Generates a PHP array declaration with a given name, keys, values, and scope, and a doc block if specified.
//
type ArraySnippetMapping = (name: string, keys: string[], values: string[], scope?: 'private' | 'protected' | 'public', docBlock?: string[]) => string[];

export const arraySnippet: ArraySnippetMapping = (name, keys, values, scope, docBlock = []) => {
  let snippet: string[] = [];

  if (docBlock.length > 0) {
    snippet = snippet.concat(docBlock);
  }

  let arrayValue = [];
  for (let i = 0; i < keys.length; i++) {
    arrayValue.push(`\t'${keys[i]}' => ${values[i]},`);
  }

  let arraySnippet = [`${scope ? `${scope} ` : ''}\\$${name} = [`, ...arrayValue, '];'];
  snippet = snippet.concat(arraySnippet);

  return snippet;
};
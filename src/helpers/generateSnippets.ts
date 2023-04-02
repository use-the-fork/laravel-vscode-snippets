import { writeFile } from 'fs';

import modelSnippets from '../sourceSnippets/model';
// import consoleSnippets, { ConsoleSnippet } from '../sourceSnippets/console';
// import hooksSnippets, { HooksSnippet } from '../sourceSnippets/hooks';
// import importsSnippets, { ImportsSnippet } from '../sourceSnippets/imports';
// import othersSnippets, { OthersSnippet } from '../sourceSnippets/others';
// import propTypesSnippets, {
//   PropTypesSnippet,
// } from '../sourceSnippets/propTypes';
// import reactNativeSnippets, {
//   ReactNativeSnippet,
// } from '../sourceSnippets/reactNative';
// import reduxSnippets, { ReduxSnippet } from '../sourceSnippets/redux';
// import testsSnippets, { TestsSnippet } from '../sourceSnippets/tests';
// import typescriptSnippets, {
//   TypescriptSnippet,
// } from '../sourceSnippets/typescript';

//import extensionConfig from './extensionConfig';

import parseSnippetToBody from './parseSnippetToBody';

// export type SnippetKeys =
// //   | OthersSnippet['key']
// //   | HooksSnippet['key']
// //   | ImportsSnippet['key']
// //   | ReactNativeSnippet['key']
// //   | TypescriptSnippet['key']
// //   | ReduxSnippet['key']
//   | ModelSnippet['key']
// //   | ConsoleSnippet['key']
// //   | PropTypesSnippet['key']
// //   | TestsSnippet['key'];

// export type Snippet =
// //   | OthersSnippet
// //   | HooksSnippet
// //   | ImportsSnippet
// //   | ReactNativeSnippet
// //   | TypescriptSnippet
// //   | ReduxSnippet
//   | ModelSnippet
// //   | ConsoleSnippet
// //   | PropTypesSnippet
// //   | TestsSnippet;

// export type Snippets = {
//   [key in SnippetKeys]: Snippet;
// };

const getSnippets = () => {
    //const { languageScopes } = extensionConfig();

  const snippets = [
     ...modelSnippets,
    // ...consoleSnippets,
    // ...hooksSnippets,
    // ...importsSnippets,
    // ...propTypesSnippets,
    // ...reactNativeSnippets,
    // ...reduxSnippets,
    // ...testsSnippets,
    // ...othersSnippets,
  ].reduce((snippet) => {
    return Object.assign(snippet, {
      body: parseSnippetToBody(snippet),
      scope: 'php',
    });
  }, {});

  console.log(modelSnippets);

  return JSON.stringify(snippets, null, 2);
};

const generateSnippets = () =>
  new Promise((resolve) => {
    const jsonSnippets = getSnippets();
    writeFile(
      __dirname + '/../snippets/generated.json',
      jsonSnippets,
      (error) => {
        if (error) {
          console.error(error);
        }
        return resolve(true);
      },
    );
  });

export default generateSnippets;
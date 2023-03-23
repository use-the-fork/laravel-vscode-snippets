"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const model_1 = __importDefault(require("../sourceSnippets/model"));
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
const extensionConfig_1 = __importDefault(require("./extensionConfig"));
const parseSnippetToBody_1 = __importDefault(require("./parseSnippetToBody"));
const snippetPlaceholders_1 = require("./snippetPlaceholders");
const getSnippets = () => {
    const { languageScopes } = (0, extensionConfig_1.default)();
    const snippets = [
        ...model_1.default,
        // ...consoleSnippets,
        // ...hooksSnippets,
        // ...importsSnippets,
        // ...propTypesSnippets,
        // ...reactNativeSnippets,
        // ...reduxSnippets,
        // ...testsSnippets,
        // ...othersSnippets,
    ].reduce((acc, snippet) => {
        acc[snippet.key] = Object.assign(snippet, {
            body: (0, parseSnippetToBody_1.default)(snippet),
            scope: languageScopes,
        });
        return acc;
    }, {});
    return (0, snippetPlaceholders_1.replaceSnippetPlaceholders)(JSON.stringify(snippets, null, 2));
};
const generateSnippets = () => new Promise((resolve) => {
    const jsonSnippets = getSnippets();
    (0, fs_1.writeFile)(__dirname + '/../snippets/generated.json', jsonSnippets, (error) => {
        if (error) {
            console.error(error);
        }
        return resolve(true);
    });
});
exports.default = generateSnippets;
//# sourceMappingURL=generateSnippets.js.map
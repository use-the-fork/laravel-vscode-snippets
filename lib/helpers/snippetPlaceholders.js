"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.revertSnippetPlaceholders = exports.replaceSnippetPlaceholders = void 0;
const types_1 = require("../types");
const replaceSnippetPlaceholders = (snippetString) => {
    return String(snippetString)
        .replace(new RegExp(types_1.Placeholders.FileName, 'g'), '${1:${TM_FILENAME_BASE}}')
        .replace(new RegExp(types_1.Placeholders.FirstTab, 'g'), '${1:first}')
        .replace(new RegExp(types_1.Placeholders.SecondTab, 'g'), '${2:second}')
        .replace(new RegExp(types_1.Placeholders.ThirdTab, 'g'), '${3:third}')
        .replace(new RegExp(types_1.Placeholders.Capitalize, 'g'), '${1/(.*)/${1:/capitalize}/}')
        //TODO: BRING THIS BACK
        .replace(new RegExp(types_1.Placeholders.TypeProps, 'g'), '')
        .replace(new RegExp(types_1.Placeholders.TypeState, 'g'), '');
};
exports.replaceSnippetPlaceholders = replaceSnippetPlaceholders;
const revertSnippetPlaceholders = (snippetString) => {
    return String(snippetString)
        .replace(new RegExp(/\${1:\${TM_FILENAME_BASE}}/, 'g'), types_1.Placeholders.FileName)
        .replace(new RegExp(/\${1:first}/, 'g'), types_1.Placeholders.FirstTab)
        .replace(new RegExp(/\${2:second}/, 'g'), types_1.Placeholders.SecondTab)
        .replace(new RegExp(/\${3:third}/, 'g'), types_1.Placeholders.ThirdTab)
        .replace(new RegExp(/\${1\/(.*)\/${1:\/capitalize}\/}/, 'g'), types_1.Placeholders.Capitalize);
};
exports.revertSnippetPlaceholders = revertSnippetPlaceholders;
exports.default = exports.revertSnippetPlaceholders;
//# sourceMappingURL=snippetPlaceholders.js.map
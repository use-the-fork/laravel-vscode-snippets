"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.v = exports.parseSnippet = exports.formatSnippet = void 0;
const snippetPlaceholders_1 = require("./snippetPlaceholders");
const formatSnippet = (snippetString) => {
    return snippetString;
};
exports.formatSnippet = formatSnippet;
const parseSnippet = (body) => {
    const snippetBody = typeof body === 'string' ? body : body.join('\n');
    return (0, snippetPlaceholders_1.replaceSnippetPlaceholders)((0, exports.formatSnippet)((0, snippetPlaceholders_1.revertSnippetPlaceholders)(snippetBody)));
};
exports.parseSnippet = parseSnippet;
//helper function to format php $
const v = (s) => { return `\\$${s}`; };
exports.v = v;
//# sourceMappingURL=formatters.js.map
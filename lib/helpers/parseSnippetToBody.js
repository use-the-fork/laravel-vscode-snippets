"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const formatters_1 = require("./formatters");
const replaceOrRemoveReactImport_1 = __importDefault(require("./replaceOrRemoveReactImport"));
const parseSnippetToBody = (snippet) => {
    const snippetBody = (0, replaceOrRemoveReactImport_1.default)({
        prefix: snippet.prefix,
        body: snippet.body,
    });
    const formattedSnippet = (0, formatters_1.formatSnippet)(snippetBody).split('\n');
    return formattedSnippet;
};
exports.default = parseSnippetToBody;
//# sourceMappingURL=parseSnippetToBody.js.map
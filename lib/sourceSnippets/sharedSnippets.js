"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.propsStateInterface = exports.stateTypeInterface = exports.propsTypeInterface = exports.exportDefault = exports.phpFunction = void 0;
const types_1 = require("../types");
// export const reactComponent = ["import React, { Component } from 'react'"];
// export const react = ["import React from 'react'"];
// export const reactPureComponent = [
//   "import React, { PureComponent } from 'react'",
// ];
// export const reactPropTypes = [
//   "import React from 'react'",
//   "import PropTypes from 'prop-types'",
// ];
// export const reactWithReduxConnect = [
//   "import React from 'react'",
//   "import { connect } from 'react-redux'",
// ];
// export const reactComponentWithReduxConnect = [
//   "import React, { Component } from 'react'",
//   "import { connect } from 'react-redux'",
// ];
// export const reactWithMemo = ["import React, { memo } from 'react'"];
// export const reduxComponentExport = [
//   '',
//   'const mapStateToProps = (state) => ({})',
//   '',
//   'const mapDispatchToProps = {}',
//   '',
//   `export default connect(mapStateToProps, mapDispatchToProps)(${Placeholders.FileName})`,
// ];
// export const innerComponent = [
//   '  return (',
//   `    <div>${Placeholders.FirstTab}</div>`,
//   '  )',
// ];
exports.phpFunction = [
    '  render() {',
    '    return (',
    `      <div>${types_1.Placeholders.FirstTab}</div>`,
    '    )',
    '  }',
];
exports.exportDefault = ['', `export default ${types_1.Placeholders.FileName}`];
exports.propsTypeInterface = [types_1.Placeholders.TypeProps, ''];
exports.stateTypeInterface = [types_1.Placeholders.TypeState, ''];
exports.propsStateInterface = [
    ...exports.propsTypeInterface,
    ...exports.stateTypeInterface,
];
//# sourceMappingURL=sharedSnippets.js.map
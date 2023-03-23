"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const formatters_1 = require("../helpers/formatters");
const types_1 = require("../types");
const laravelModelTable = {
    key: 'laravelModelTable',
    prefix: 'lvModel-table',
    body: [
        '/**',
        ' * The table associated with the model.',
        ' *',
        ' * @var string',
        ' */',
        '',
        `protected  ${(0, formatters_1.v)('table')}  = '${types_1.Placeholders.FirstTab}';`,
        '',
    ]
};
// const reactClassExportComponent: ComponentsSnippet = {
//   key: 'reactClassExportComponent',
//   prefix: 'rce',
//   body: [
//     ...reactComponent,
//     '',
//     `export class ${Placeholders.FileName} extends Component {`,
//     ...innerComponentReturn,
//     '}',
//     ...exportDefault,
//   ],
//   description: 'Creates a React component class with ES7 module system',
// };
// const reactFunctionalExportComponent: ComponentsSnippet = {
//   key: 'reactFunctionalExportComponent',
//   prefix: 'rfce',
//   body: [
//     ...react,
//     '',
//     `function ${Placeholders.FileName}() {`,
//     ...innerComponent,
//     '}',
//     ...exportDefault,
//   ],
//   description: 'Creates a React Functional Component with ES7 module system',
// };
// const reactFunctionalComponent: ComponentsSnippet = {
//   key: 'reactFunctionalComponent',
//   prefix: 'rfc',
//   body: [
//     ...react,
//     '',
//     `export default function ${Placeholders.FileName}() {`,
//     ...innerComponent,
//     '}',
//     '',
//   ],
//   description: 'Creates a React Functional Component with ES7 module system',
// };
// const reactFunctionalComponentWithPropTypes: ComponentsSnippet = {
//   key: 'reactFunctionalComponentWithPropTypes',
//   prefix: 'rfcp',
//   body: [
//     ...reactPropTypes,
//     '',
//     `function ${Placeholders.FileName}(props) {`,
//     ...innerComponent,
//     '}',
//     '',
//     `${Placeholders.FileName}.propTypes = {}`,
//     ...exportDefault,
//     '',
//   ],
//   description:
//     'Creates a React Functional Component with ES7 module system with PropTypes',
// };
// const reactArrowFunctionExportComponent: ComponentsSnippet = {
//   key: 'reactArrowFunctionExportComponent',
//   prefix: 'rafce',
//   body: [
//     ...react,
//     '',
//     `const ${Placeholders.FileName} = () => {`,
//     ...innerComponent,
//     '}',
//     ...exportDefault,
//   ],
//   description:
//     'Creates a React Arrow Function Component with ES7 module system',
// };
// const reactArrowFunctionComponent: ComponentsSnippet = {
//   key: 'reactArrowFunctionComponent',
//   prefix: 'rafc',
//   body: [
//     ...react,
//     '',
//     `export const ${Placeholders.FileName} = () => {`,
//     ...innerComponent,
//     '}',
//     '',
//   ],
//   description:
//     'Creates a React Arrow Function Component with ES7 module system',
// };
// const reactArrowFunctionComponentWithPropTypes: ComponentsSnippet = {
//   key: 'reactArrowFunctionComponentWithPropTypes',
//   prefix: 'rafcp',
//   body: [
//     ...reactPropTypes,
//     '',
//     `const ${Placeholders.FileName} = props => {`,
//     ...innerComponent,
//     '}',
//     '',
//     `${Placeholders.FileName}.propTypes = {}`,
//     ...exportDefault,
//   ],
//   description:
//     'Creates a React Arrow Function Component with ES7 module system with PropTypes',
// };
// const reactClassExportComponentWithPropTypes: ComponentsSnippet = {
//   key: 'reactClassExportComponentWithPropTypes',
//   prefix: 'rcep',
//   body: [
//     "import PropTypes from 'prop-types'",
//     ...reactComponent,
//     '',
//     `export class ${Placeholders.FileName} extends Component {`,
//     '  static propTypes = {}',
//     '',
//     ...innerComponentReturn,
//     '}',
//     ...exportDefault,
//   ],
//   description: 'Creates a React component class with ES7 module system',
// };
// const reactClassPureComponent: ComponentsSnippet = {
//   key: 'reactClassPureComponent',
//   prefix: 'rpc',
//   body: [
//     ...reactPureComponent,
//     '',
//     `export default class ${Placeholders.FileName} extends PureComponent {`,
//     ...innerComponentReturn,
//     '}',
//     '',
//   ],
//   description: 'Creates a React pure component class with ES7 module system',
// };
// const reactClassExportPureComponent: ComponentsSnippet = {
//   key: 'reactClassExportPureComponent',
//   prefix: 'rpce',
//   body: [
//     ...reactPureComponent,
//     '',
//     `export class ${Placeholders.FileName} extends PureComponent {`,
//     ...innerComponentReturn,
//     '}',
//     ...exportDefault,
//   ],
//   description:
//     'Creates a React pure component class with ES7 module system export',
// };
// const reactClassPureComponentWithPropTypes: ComponentsSnippet = {
//   key: 'reactClassPureComponentWithPropTypes',
//   prefix: 'rpcp',
//   body: [
//     "import PropTypes from 'prop-types'",
//     ...reactPureComponent,
//     '',
//     `export default class ${Placeholders.FileName} extends PureComponent {`,
//     '  static propTypes = {}',
//     '',
//     ...innerComponentReturn,
//     '}',
//     '',
//   ],
//   description: 'Creates a React component class with ES7 module system',
// };
// const reactFunctionMemoComponent: ComponentsSnippet = {
//   key: 'reactFunctionMemoComponent',
//   prefix: 'rmc',
//   body: [
//     ...reactWithMemo,
//     '',
//     `const ${Placeholders.FileName} = memo(() => {`,
//     ...innerComponent,
//     '})',
//     ...exportDefault,
//   ],
//   description: 'Creates a React Memo Function Component with ES7 module system',
// };
// const reactFunctionMemoComponentWithPropTypes: ComponentsSnippet = {
//   key: 'reactFunctionMemoComponentWithPropTypes',
//   prefix: 'rmcp',
//   body: [
//     "import PropTypes from 'prop-types'",
//     ...reactWithMemo,
//     '',
//     `const ${Placeholders.FileName} = memo((props) => {`,
//     ...innerComponent,
//     '})',
//     '',
//     `${Placeholders.FileName}.propTypes = {}`,
//     ...exportDefault,
//   ],
//   description:
//     'Creates a React Memo Function Component with ES7 module system with PropTypes',
// };
// const reactClassComponentPropTypes: ComponentsSnippet = {
//   key: 'reactClassComponentPropTypes',
//   prefix: 'rccp',
//   body: [
//     "import PropTypes from 'prop-types'",
//     ...reactComponent,
//     '',
//     `export default class ${Placeholders.FileName} extends Component {`,
//     `  static propTypes = {${Placeholders.SecondTab}: ${Placeholders.ThirdTab}}`,
//     '',
//     ...innerComponentReturn,
//     '}',
//     '',
//   ],
//   description:
//     'Creates a React component class with PropTypes and ES7 module system',
// };
// const reactClassComponentRedux: ComponentsSnippet = {
//   key: 'reactClassComponentRedux',
//   prefix: 'rcredux',
//   body: [
//     ...reactComponentWithReduxConnect,
//     '',
//     `export class ${Placeholders.FileName} extends Component {`,
//     ...innerComponentReturn,
//     '}',
//     ...reduxComponentExport,
//   ],
//   description:
//     'Creates a React component class with connected redux and ES7 module system',
// };
// const reactClassComponentReduxPropTypes: ComponentsSnippet = {
//   key: 'reactClassComponentReduxPropTypes',
//   prefix: 'rcreduxp',
//   body: [
//     "import PropTypes from 'prop-types'",
//     ...reactComponentWithReduxConnect,
//     '',
//     `export class ${Placeholders.FileName} extends Component {`,
//     '  static propTypes = {',
//     `    ${Placeholders.SecondTab}: ${Placeholders.ThirdTab}`,
//     '  }',
//     '',
//     ...innerComponentReturn,
//     '}',
//     ...reduxComponentExport,
//   ],
//   description:
//     'Creates a React component class with PropTypes with connected redux and ES7 module system',
// };
// const reactFunctionalComponentRedux: ComponentsSnippet = {
//   key: 'reactFunctionalComponentRedux',
//   prefix: 'rfcredux',
//   body: [
//     ...reactWithReduxConnect,
//     '',
//     `export const ${Placeholders.FileName} = (props) => {`,
//     ...innerComponent,
//     '}',
//     ...reduxComponentExport,
//   ],
//   description:
//     'Creates a React functional component with connected redux and ES7 module system',
// };
// const reactFunctionalComponentReduxPropTypes: ComponentsSnippet = {
//   key: 'reactFunctionalComponentReduxPropTypes',
//   prefix: 'rfcreduxp',
//   body: [
//     "import PropTypes from 'prop-types'",
//     ...reactWithReduxConnect,
//     '',
//     `export const ${Placeholders.FileName} = (props) => {`,
//     ...innerComponent,
//     '}',
//     '',
//     `${Placeholders.FileName}.propTypes = {`,
//     `  ${Placeholders.SecondTab}: PropTypes.${Placeholders.ThirdTab}`,
//     '}',
//     ...reduxComponentExport,
//   ],
//   description:
//     'DEPRECATED: Creates a React functional component with PropTypes with connected redux and ES7 module system',
// };
exports.default = [
    //   reactArrowFunctionComponent,
    //   reactArrowFunctionComponentWithPropTypes,
    //   reactArrowFunctionExportComponent,
    laravelModelTable,
    //   reactClassComponentPropTypes,
    //   reactClassComponentRedux,
    //   reactClassComponentReduxPropTypes,
    //   reactClassExportComponent,
    //   reactClassExportComponentWithPropTypes,
    //   reactClassExportPureComponent,
    //   reactClassPureComponent,
    //   reactClassPureComponentWithPropTypes,
    //   reactFunctionMemoComponent,
    //   reactFunctionMemoComponentWithPropTypes,
    //   reactFunctionalComponent,
    //   reactFunctionalComponentRedux,
    //   reactFunctionalComponentReduxPropTypes,
    //   reactFunctionalComponentWithPropTypes,
    //   reactFunctionalExportComponent,
];
//# sourceMappingURL=model.js.map
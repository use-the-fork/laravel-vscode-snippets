import { arraySnippet, docBlock, tabStop, varSnippet } from '../sourceSnippets/sharedSnippets';
import { SnippetMapping } from '../types';


export const laravelModelTable: SnippetMapping = {
  key: 'Laravel Model: Table',
  prefix: 'lvModel-table',
  body: [
    ...docBlock('The table associated with the model.', [{ name: '', description: '@var string' }]),
    ...varSnippet('table', [{ key: '', value: tabStop(0, 'table') }], 'protected')
  ]
};

export const laravelModelPrimaryKey: SnippetMapping = {
  key: 'Laravel Model: Primary Key',
  prefix: 'lvModel-primaryKey',
  body: [
    ...docBlock('The primary key associated with the table.', [{ name: '', description: '@var string' }]),
    ...varSnippet('primaryKey', [{ key: '', value: `'${tabStop(0)}'` }], 'protected')
  ]
};

export const laravelModelIncrementing: SnippetMapping = {
  key: 'Laravel Model: Incrementing',
  prefix: 'lvModel-incrementing',
  body: [
    ...docBlock('Indicates if the IDs are auto-incrementing.', [{ name: '', description: '@var bool' }]),
    ...varSnippet('incrementing', [{ key: '', value: `'${tabStop(1, 'false')}'` }], 'public')
  ]
};

export const laravelModelTimestamps: SnippetMapping = {
  key: 'Laravel Model: Timestamps',
  prefix: 'lvModel-timestamps',
  body: [
    ...docBlock('Indicates if the model should be timestamped.', [{ name: '', description: '@var bool' }]),
    ...varSnippet('timestamps', [{ key: '', value: `'${tabStop(1, 'false')}'` }], 'public')
  ]
};

export const laravelModelDateFormat: SnippetMapping = {
  key: 'Laravel Model: Date Format',
  prefix: 'lvModel-dateFormat',
  body: [
    ...docBlock("The storage format of the model's date columns.", [{ name: '', description: '@var string' }]),
    ...varSnippet('dateFormat', [{ key: '', value: `'${tabStop(0)}'` }], 'protected')
  ]
};

export const laravelModelDatabaseConnection: SnippetMapping = {
  key: 'Laravel Model: Database Connection',
  prefix: 'lvModel-databaseConnection',
  body: [
    ...docBlock('The database connection that should be used by the model.', [{ name: '', description: '@var string' }]),
    ...varSnippet('connection', [{ key: '', value: `'${tabStop(0)}'` }], 'protected')
  ]
};

export const laravelModelAttributeCasting: SnippetMapping = {
  key: 'Laravel Model: Attribute Casting',
  prefix: 'lvModel-casts',
  body: [
    ...docBlock('The attributes that should be cast to native types.', [{ name: '', description: '@var array' }]),
    ...varSnippet('casts', arraySnippet([
      { key: '', value: `'${tabStop(1)}' => '${tabStop(0, 'type')}'` }
    ]), 'protected')
  ]
};


export default [
  laravelModelTable,
  laravelModelPrimaryKey,
  laravelModelIncrementing,
  laravelModelTimestamps,
  laravelModelDateFormat,
  laravelModelDatabaseConnection,
  laravelModelAttributeCasting
];
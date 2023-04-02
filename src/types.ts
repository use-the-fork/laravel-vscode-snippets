export interface SnippetMapping {
  key: string;
  prefix: string;
  body: string[];
  description?: string;
  isFileTemplate?: boolean;
};


export const Mappings = {
  variable: '\\$',
  FileNameBase: '${TM_FILENAME_BASE}',
  FileName: '${1:${TM_FILENAME_BASE}}',
  FirstTab: '${1:first}',
  SecondTab: '${2:second}',
  ThirdTab: '${3:third}',
  Capitalize: '${1/(.*)/${1:/capitalize}/}',
  Namespace: 'namespace ${RELATIVE_FILEPATH/^(?:.*[\\\\\\/])?(app|src)(?=[\\\\\\/])|[\\\\\\/][^\\\\\\/]*$|([\\\\\\/])/${1:/capitalize}${2:+\\\\}/g};'
} as const;
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyDTvZHi61B7tTDDsOkV5loA4v9Hfz67a5w',
    authDomain: 'todo-angular-fs.firebaseapp.com',
    databaseURL: 'https://todo-angular-fs.firebaseio.com',
    projectId: 'todo-angular-fs',
    storageBucket: '',
    messagingSenderId: '214317744285'
  }
};

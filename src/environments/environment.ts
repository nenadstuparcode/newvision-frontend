// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
/*
export const environment = {
  production: false
};
*/
export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyBzsUg_D5ogRKKjNDMNcye51_rOPHYeIck',
    authDomain: 'nvfirebase-bde19.firebaseapp.com',
    databaseURL: 'https://nvfirebase-bde19.firebaseio.com',
    projectId: 'nvfirebase-bde19',
    storageBucket: 'gs://nvfirebase-bde19.appspot.com',
    messagingSenderId: '138900885070'
  }
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.

// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  endpoint: "https://swapi.dev/api/", // "http://swapi.py4e.com/api/";  "https://swapi.co/api/"
  menu: [
    { display: 'Characters', url: '#' },
    { display: 'Planets', url: '#' },
    { display: 'Films', url: '#' },
    { display: 'Species', url: '#' },
    { display: 'Vehicules', url: '#' },
    { display: 'Starships', url: '#' },
    { display: 'About us', url: '/contact' },
    { display: 'Video', url: '//youtube.com' }
  ],
  urlimages: "https://starwars-visualguide.com/assets/img/"
};


/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.

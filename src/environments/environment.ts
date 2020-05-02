// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  endpoint: "https://swapi.dev/api/", // "http://swapi.py4e.com/api/";  "https://swapi.co/api/"
  menu: [
    { display: 'Characters', image: 'people.jpg', endpoint: "people", images: "characters/" },
    { display: 'Planets', image: 'planet.jpg', endpoint: "planets", images: "planets/" },
    { display: 'Films', image: 'films.jpg', endpoint: "films", images: "films/" },
    { display: 'Species', image: 'characters.jpg', endpoint: "species", images: "species/" },
    { display: 'Vehicles', image: 'vehicle.jpg', endpoint: "vehicles", images: "vehicles/" },
    { display: 'Starships', image: 'starships.jpg', endpoint: "starships", images: "starships/" },
    { display: 'Video', url: '//youtube.com' }
  ],
  urlimages: "https://starwars-visualguide.com/assets/img/",
  state: 1
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.

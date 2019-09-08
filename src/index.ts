import { ajax } from "rxjs/ajax";
import { fromEvent, pipe, forkJoin, of, Subject, Observable, concat } from "rxjs";
import {
  mergeMap,
  combineAll,
  concatMap,
  switchMap,
  takeUntil,
  map,
  exhaustMap
} from "rxjs/operators";

const API_URL = `https://medicalreachapidev.azurewebsites.net`;

// const getCountries = ajax.getJSON(`${API_URL}/api/info/country`);
// const getAllLists = ajax.getJSON(`${API_URL}/api/info/all-lists`);

// concat(getAllLists, getCountries)
//   .pipe(    
//     concatMap(mergeData => {
//       console.log("mergeData:", mergeData);
//       return of({
//         mergeData: mergeData,
//         nationality: ajax.getJSON(`${API_URL}/api/info/nationality`)
//       });
//     })
//   )
//   .subscribe(_ => {
//     console.log(_);
//   });

fromEvent(document, 'click')
    .pipe(
        switchMap(() => ajax.getJSON(`${API_URL}/api/info/all-lists`))
    )
    .subscribe();
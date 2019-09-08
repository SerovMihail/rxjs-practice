import { ajax } from "rxjs/ajax";
import {
  fromEvent,
  pipe,
  forkJoin,
  of,
  Subject,
  Observable,
  interval
} from "rxjs";
import {
  mergeMap,
  combineAll,
  concatMap,
  switchMap,
  takeUntil,
  map,
  take
} from "rxjs/operators";

// const API_URL = `https://medicalreachapidev.azurewebsites.net`;

// const getCountries = ajax.getJSON(`${API_URL}/api/info/country`);
// const getAllLists = ajax.getJSON(`${API_URL}//\api/info/all-lists`);

// forkJoin({ lists: getAllLists, conuntries: getCountries })
//   .pipe(
//     switchMap((params: any) => {
//       return interval(500)
//     }),
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

// Just outputs the number of seconds since the start to visualize the time flow
// Not relevant to the example
interval(1000)
  .pipe(take(5))
  .subscribe(s => console.log(`⏰ ${s} sec`));

// Turns values from outer Observable into inner Observables
function getInnerObservable(outerParam: any) {
  return interval(1000).pipe(
    take(3),
    map(n => `Inner item ${n} for ${outerParam}`)
  );
}

const outerObservable = interval(1000).pipe(
  take(3),
  map(n => `Outer item ${n}`)
);

// Uncomment for MergeMap
// outerObservable
//   .pipe(mergeMap(outerParam => getInnerObservable(outerParam)))
//   .subscribe(x => console.log(x));

// Uncomment for ConcatMap
// outerObservable
//   .pipe(concatMap(outerParam => getInnerObservable(outerParam)))
//   .subscribe(x => console.log(x));

// Uncomment for SwitchMap
outerObservable
  .pipe(switchMap(outerParam => getInnerObservable(outerParam)))
  .subscribe(x => console.log(x));

import { ajax } from "rxjs/ajax";
import { fromEvent, pipe, forkJoin, of, Subject } from "rxjs";
import {
  mergeMap,
  combineAll,
  concatMap,
  switchMap,
  takeUntil
} from "rxjs/operators";

const API_URL = `https://medicalreachapidev.azurewebsites.net`;

const getCountries = ajax.getJSON(`${API_URL}/api/info/country`);
const getAllLists = ajax.getJSON(`${API_URL}//\api/info/all-lists`);

const unsubscribe = new Subject();

ajax
  .getJSON(`${API_URL}/api/info/nationality`)
  .pipe(takeUntil(unsubscribe))
  .subscribe(nationality => {
    console.log("nationality:", nationality);
  });

// forkJoin({ lists: getAllLists, conuntries: getCountries })
//   .pipe(
//     concatMap(mergeData => {
//       console.log("mergeData:", mergeData);
//       return of{
//         mergeData: mergeData,
//         nationality: ajax.getJSON(`${API_URL}/api/info/nationality`)
//       };
//     })
//   )
//   .subscribe(_ => {
//     console.log(_);
//   });

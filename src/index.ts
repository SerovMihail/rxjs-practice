import { ajax } from "rxjs/ajax";
import { fromEvent, pipe, forkJoin, of, Subject, Observable } from "rxjs";
import {
  mergeMap,
  combineAll,
  concatMap,
  switchMap,
  takeUntil,
  map
} from "rxjs/operators";

const API_URL = `https://medicalreachapidev.azurewebsites.net`;

const getCountries = ajax.getJSON(`${API_URL}/api/info/country`);
const getAllLists = ajax.getJSON(`${API_URL}//\api/info/all-lists`);

forkJoin({ lists: getAllLists, conuntries: getCountries })
  .pipe(
    switchMap((params: any) => {
      return of({1: 1, params} );
    }),
    concatMap(mergeData => {
      console.log("mergeData:", mergeData);
      return of({
        mergeData: mergeData,
        nationality: ajax.getJSON(`${API_URL}/api/info/nationality`)
      });
    })
  )
  .subscribe(_ => {
    console.log(_);
  });

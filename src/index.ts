import { fromEvent } from "rxjs";
import { map, concatAll } from "rxjs/operators";
import { fromFetch } from "rxjs/fetch";

fromEvent(document, "click").pipe(
  map(url => fromFetch("https://jsonplaceholder.typicode.com/todos/1")),
  concatAll()
);

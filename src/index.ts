import { fromEvent } from "rxjs";

// grab button reference
const button = document.getElementsByClassName("button");

// create an observable of button clicks
const myObservable = fromEvent(button, "click");

const subscription = myObservable.subscribe({
  // on successful emissions
  next: event => console.log(event),
  // on errors
  error: error => console.log(error),
  // called once on completion
  complete: () => console.log("complete!")
});

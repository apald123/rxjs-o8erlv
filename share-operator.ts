import { of, Observable } from 'rxjs'; 
import { map, mergeMap, switchMap, tap, share, take } from 'rxjs/operators';

const observable = new Observable((observer) => {

  setTimeout(() => 
    observer.next(1), 1000
  );

}).pipe(
  //take(2),
  tap((value) => {
    console.log("tap: ", value);
  }),
  map((value: number) => {
    return value * 5
  }),
  share()
);

const sharedExample = observable.pipe(share());

sharedExample.subscribe((value) => {
  console.log("subscriber-1: ", value);
});

sharedExample.subscribe((value) => {
  console.log("subscriber-2: ", value);
});

// const list = [1, 2, 3, 5, 6];
// const source = of(...list).pipe(
//   switchMap(value => {
//      of(value);
//   })
// );

// source.subscribe(x => console.log(x));
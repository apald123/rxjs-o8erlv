import { of, Observable } from 'rxjs'; 
import { map, mergeMap, switchMap, tap, share } from 'rxjs/operators';

// const source = of('World').pipe(
//   map(x => `Hello ${x}!`)
// );

const observable = new Observable((observer) => {
  observer.next(1);
  observer.next(2);
}).pipe(
  tap((value) => {
    console.log("tap: ", value);
  }),
  share()
);

observable.subscribe((value) => {
  //console.log("subscriber-1: ", value);
});

observable.subscribe((value) => {
  //console.log("subscriber-2: ", value);
});

// const list = [1, 2, 3, 5, 6];
// const source = of(...list).pipe(
//   switchMap(value => {
//      of(value);
//   })
// );

// source.subscribe(x => console.log(x));

import { of, Observable, interval, EMPTY } from 'rxjs'; 
import { map, mergeMap, switchMap, tap, share, take, shareReplay, publishReplay,refCount } from 'rxjs/operators';

const observable = new Observable((observer) => {

  // setTimeout(() => 
  //   observer.next(1), 1000
  // );
  observer.next(1);

}).pipe(
  //take(2),
  tap((value) => {
    console.log("tap: ", value);
  }),
  map((value: number) => {
    return value * 5
  })
);

//let source = EMPTY; 
let source = interval(1000);

// cold + multicast
//const sharedExample = observable.pipe(share();

// hold + multicast
//const sharedExample = source.pipe(take(10), shareReplay({refCount: false}));
const sharedExample = source.pipe(take(10), shareReplay({refCount: false, bufferSize: 1}));
//const sharedExample = source.pipe(take(10), publishReplay(1), refCount());

const sub1 = sharedExample.subscribe((value) => {
  console.log("subscriber-1: ", value);
});

const sub2 = sharedExample.subscribe((value) => {
  console.log("subscriber-2: ", value);
});

setTimeout(() => {
  sub1.unsubscribe();
  sub2.unsubscribe();
}, 3000);

setTimeout(() => {
  const sub3 = sharedExample.subscribe((value) => {
    console.log("subscriber-3: ", value);
  })
}, 6000);

// const list = [1, 2, 3, 5, 6];
// const source = of(...list).pipe(
//   switchMap(value => {
//      of(value);
//   })
// );

// source.subscribe(x => console.log(x));

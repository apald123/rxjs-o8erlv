import { of, Observable, interval, EMPTY, timer } from 'rxjs'; 
import { map, mergeMap, switchMap, tap, share, take, shareReplay, publishReplay,refCount, publish } from 'rxjs/operators';

const source$ = timer(1000);

// share will re-subscribe the sourcee even after it is compleete
// publish won't do that
const shared$ = source$.pipe(
  tap((value) => {
    console.log('shared value:', value);
  }),
  //publish(),
  //refCount()
  share()
);

const sub1 = shared$.subscribe((value) => {
    console.log('sub1...value: ', value)
  }
);

setTimeout(() => {
  const sub2 = shared$.subscribe((value) => {
    console.log('sub2...value: ', value)
  }
);
}, 2000);

// const list = [1, 2, 3, 5, 6];
// const source = of(...list).pipe(
//   switchMap(value => {
//      of(value);
//   })
// );

// source.subscribe(x => console.log(x));
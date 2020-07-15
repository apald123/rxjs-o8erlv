
// RxJS v6+
import { timer } from 'rxjs';
import { tap, mapTo, share } from 'rxjs/operators';
​
//emit value in 1s
const source = timer(1000, 30000);
//log side effect, emit result
const example = source.pipe(
  tap((value) => console.log('***SIDE EFFECT***', value)),
  mapTo('***RESULT***')
);
​
/*
  ***NOT SHARED, SIDE EFFECT WILL BE EXECUTED TWICE***
  output:
  "***SIDE EFFECT***"
  "***RESULT***"
  "***SIDE EFFECT***"
  "***RESULT***"
*/
//const subscribe = example.subscribe(val => console.log(val));
//const subscribeTwo = example.subscribe(val => console.log(val));
​
//share observable among subscribers
const sharedExample = example.pipe(share());
/*
  ***SHARED, SIDE EFFECT EXECUTED ONCE***
  output:
  "***SIDE EFFECT***"
  "***RESULT***"
  "***RESULT***"
*/
const subscribeThree = sharedExample.subscribe(val => console.log(val));
const subscribeFour = sharedExample.subscribe(val => console.log(val));

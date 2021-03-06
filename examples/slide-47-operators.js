import {bufferCount, delay, filter, map, take, tap, catchError} from 'rxjs/operators';
import {timer} from "rxjs";
import * as Observable from 'rxjs';

export function slide47operators() {

  timer(0, 100).pipe(
    map(x => 10 * x),
    filter(x => x % 20 === 0),
    bufferCount(5),
    take(3),
    delay(1000),
    tap(x => console.log(x)),
    catchError(() => Observable.of([]))
  ).subscribe();

}

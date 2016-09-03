import { Component,NgZone } from '@angular/core';
import { NgRedux, select } from 'ng2-redux';
import { Observable } from 'rxjs/Observable';
import { CounterActions } from '../actions/counter.actions';
import { rootReducer,IAppState,enhancers } from '../store/index';

@Component({
  selector: 'book-details',
    providers: [ CounterActions],
  template: `Book details -WIP
            <p>
    Clicked: {{ counter$ | async }} times
    <button (click)="actions.increment()">+</button>
    <button (click)="actions.decrement()">-</button>
    <button (click)="actions.incrementIfOdd()">Increment if odd</button>
    <button (click)="actions.incrementAsync(2222)">Increment async</button>
    <button (click)="actions.randomize()">Set to random number</button>
  </p>
             `
})
export class BookComponent {
    @select('counter') counter$: Observable<number>;
    constructor(private actions: CounterActions
                , private ngRedux: NgRedux<IAppState>
                , private zone:NgZone) {
      
      
    }
}

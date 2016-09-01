import { Component } from '@angular/core';
import { NgRedux, select } from 'ng2-redux';
import { Observable } from 'rxjs/Observable';
import { CounterActions } from '../actions/counter.actions';

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
    constructor(private actions: CounterActions) {}
}

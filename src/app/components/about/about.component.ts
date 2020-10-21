import { isSmallScreen } from './../../utils/responsive';
import { fromEvent, Observable, Subscription } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'ml-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
    isSmallScreen = isSmallScreen()

    _resizeObservable$: Observable<Event>
    private _resizeSubscription$: Subscription

    ngOnInit() {
        this._resizeObservable$ = fromEvent(window, 'resize')
        this._resizeSubscription$ = this._resizeObservable$.subscribe(evt => {
            this.isSmallScreen = isSmallScreen()
        })
    }

    ngOnDestroy() {
        if (this._resizeSubscription$) {
            this._resizeSubscription$.unsubscribe()
        }
    }
}

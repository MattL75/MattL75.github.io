import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
    selector: 'ml-star-rating',
    templateUrl: './star-rating.component.html',
    styleUrls: ['./star-rating.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class StarRatingComponent {

    @Input()
    score: number = 4;

}

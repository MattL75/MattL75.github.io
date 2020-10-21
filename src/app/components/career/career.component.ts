import { careerData } from './career.data';
import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'ml-career',
    templateUrl: './career.component.html',
    styleUrls: ['./career.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CareerComponent {
    career = careerData;
}

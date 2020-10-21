import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

declare let particlesJS: any;

@Component({
    selector: 'ml-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {

    ngOnInit() {
        particlesJS.load('particles-js', 'assets/particles-snow.json');
    }

}

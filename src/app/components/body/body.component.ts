import { Component, ElementRef } from '@angular/core';

@Component({
    selector: 'ml-body',
    templateUrl: './body.component.html',
    styleUrls: ['./body.component.scss']
})
export class BodyComponent {

    constructor(private elRef: ElementRef) {
    }

    scrollToElement(id: string, event: MouseEvent): void {
        event.preventDefault()
        this.elRef.nativeElement.querySelector('#' + id).scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' })

        // Hacky, but can't find a way to do this while keeping smooth scroll without Angular Routing and that seems overkill.
        // Might remove this completely if it proves to be too hacky.
        // If removed, change the Ids on the sub-elements to template reference variables and just scroll to those directly.
        // setTimeout(() => { window.location.href = '#' + id }, 1000)
    }

    scrollToTop(): void {
        document.body.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
    }
}

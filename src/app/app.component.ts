import { isSmallScreen } from './utils/responsive';
import { Component, ElementRef } from '@angular/core';

@Component({
    selector: 'ml-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {

    isOpen: boolean = false;

    navList: string[] = ['About', 'Career', 'Skills', 'Projects', 'Contact'];

    constructor(private elRef: ElementRef) { }

    scrollToElement(id: string, event: MouseEvent): void {
        event.preventDefault()
        setTimeout(() => {
            this.elRef.nativeElement.querySelector('#' + id).scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' })
        }, 0)
        this.isOpen = false;
        this.setBodyOverflow('auto');
    }

    scrollToTop(): void {
        document.body.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
    }

    isSmallScreen(): boolean {
        return isSmallScreen()
    }

    setBodyOverflow(val: string): void {
        document.body.style.overflow = val;
    }

    toggleIsOpen(): void {
        if (this.isOpen) {
            this.isOpen = false;
            this.setBodyOverflow('auto');
        } else {
            this.isOpen = true;
            this.setBodyOverflow('hidden');
        }
    }
}

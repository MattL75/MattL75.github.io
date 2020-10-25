import { Component, ChangeDetectionStrategy, OnInit, OnDestroy, ElementRef, AfterViewInit } from '@angular/core';
import Flickity from 'flickity'

@Component({
    selector: 'ml-image-carousel',
    templateUrl: './image-carousel.component.html',
    styleUrls: ['./image-carousel.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ImageCarouselComponent implements OnInit, OnDestroy, AfterViewInit {

    carouselRef: any;
    carouselElement: HTMLElement;

    constructor(private elRef: ElementRef) { }

    ngOnInit(): void {
        this.carouselElement = this.elRef.nativeElement.querySelector('.main-carousel');
        this.carouselRef = new Flickity(this.carouselElement, {
            imagesLoaded: true,
            wrapAround: true,
            draggable: true
        })
    }

    ngAfterViewInit(): void {
        // Needed for specific cases where the carousel renders incorrectly.
        if (this.carouselElement.getBoundingClientRect().height < 300) {
            setTimeout(() => {
                window.dispatchEvent(new Event('resize'));
            }, 100)
        }
    }

    ngOnDestroy(): void {
        if (this.carouselRef) {
            this.carouselRef.destroy();
            this.carouselRef = undefined;
        }
    }


}

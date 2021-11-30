import { Component } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';


@Component({selector: 'ngbd-carousel-basic', templateUrl: './carousel.component.html', styleUrls: ['./carousel.component.css']})
export class NgbdCarouselBasic {

  images = ["../../../../assets/images/placeholderOne.jpg", "../../../../assets/images/placeholderTwo.jpg", "../../../../assets/images/placeholderThree.jpg"];
}

import { Component } from '@angular/core';


@Component({selector: 'ngbd-carousel-basic',
            templateUrl: './carousel.component.html',
            styleUrls: ['./carousel.component.css']})

export class NgbdCarouselBasic {

  //Images taht will be viewed on carousel
  images = ["../../../../assets/images/placeholderOne.jpg", "../../../../assets/images/placeholderTwo.jpg", "../../../../assets/images/placeholderThree.jpg"];
}

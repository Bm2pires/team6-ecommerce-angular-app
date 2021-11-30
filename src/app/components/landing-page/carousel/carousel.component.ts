import { Component } from '@angular/core';

@Component({selector: 'ngbd-carousel-basic', templateUrl: './carousel.component.html', styleUrls: ['./carousel.component.css']})
export class NgbdCarouselBasic {
  url1 = "https://picsum.photos/1400/500?random=1"
  url2 = "https://picsum.photos/1400/500?random=2"
  url3 = "https://picsum.photos/1400/500?random=3"

  images = [this.url1, this.url2, this.url3];

}

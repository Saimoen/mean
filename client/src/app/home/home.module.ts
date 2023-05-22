import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from './carousel/carousel.component';
import { MarketingComponent } from './marketing/marketing.component';
import { FeedComponent } from './feed/feed.component';
import { FormComponent } from './form/form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CarouselComponent,
    MarketingComponent,
    FeedComponent,
    FormComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [
    CarouselComponent,
    MarketingComponent,
    FeedComponent,
    FormComponent,
  ],
})
export class HomeModule {}

import { Component, Input } from '@angular/core';
import { Blog } from 'src/app/shared/interfaces/blog.interface';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss'],
})
export class FeedComponent {
  @Input() public blogs?: Blog[];
}

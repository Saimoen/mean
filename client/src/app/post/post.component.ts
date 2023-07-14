import { Component, Input, OnInit } from '@angular/core';
import { BlogService } from '../shared/services/blog.service';
import { Blog } from '../shared/interfaces/blog.interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {
  public idBlog!: string | null;
  @Input() public blogs?: Blog;

  constructor(
    private blogService: BlogService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      this.idBlog = id;
    });

    this.blogService.getBlogById(this.idBlog).subscribe({
      next: (blog) => {
        this.blogs = blog;
        console.log(this.idBlog);
      },
      error: (err) => console.log(err),
    });
  }
}

import { Component, Input, OnInit } from '@angular/core';
import { Blog } from 'src/app/shared/interfaces/blog.interface';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss'],
})
export class FeedComponent implements OnInit {
  /*   @Input() public blogs?: Blog[]; */
  currentPage = 1; // Page actuelle
  pageSize = 4; // Nombre d'articles à afficher par page
  totalItems = 0; // Total des articles
  pagedBlogs: Blog[] = []; // Articles paginés

  private _blogs: Blog[] = [];
  leftColumnBlogs: Blog[] = [];
  rightColumnBlogs: Blog[] = [];

  @Input() set blogs(value: Blog[]) {
    this._blogs = value;
    this.totalItems = this._blogs.length;
    this.paginateBlogs();
  }

  get blogs(): Blog[] {
    return this._blogs;
  }

  ngOnInit(): void {}

  paginateBlogs() {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    const pagedBlogs = this.blogs?.slice(startIndex, endIndex) || [];

    // Réinitialiser les tableaux des colonnes
    this.leftColumnBlogs = [];
    this.rightColumnBlogs = [];

    // Répartir les articles dans les colonnes
    pagedBlogs.forEach((blog, index) => {
      if (index % 2 === 0) {
        this.leftColumnBlogs.push(blog);
      } else {
        this.rightColumnBlogs.push(blog);
      }
    });

    // Fusionner les deux tableaux en un seul pour l'affichage
    this.pagedBlogs = this.leftColumnBlogs.concat(this.rightColumnBlogs);
  }

  onPageChange(event: any) {
    this.currentPage = event.page;
    this.paginateBlogs();
  }
}

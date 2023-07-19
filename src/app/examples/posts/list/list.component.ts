import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { fade } from 'src/app/core/animations/fade';
import { Post } from 'src/app/core/models/Post';
import { PostService } from 'src/app/core/services/post.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  animations: [
    fade()
  ]
})
export class ListComponent implements OnInit {

  posts: Post[] = [];

  currentPage: number;
  totalPosts = 0;
  postsPerPage = 0;
  destroy$ = new Subject<void>();

  constructor(
    private postService: PostService
  ) {
    const lastActivePage = localStorage.getItem('lastPostPage') || 1;
    this.currentPage = +lastActivePage || 1;
  }

  ngOnInit(): void {
    this.getPosts(this.currentPage);
  }

  getPosts(page: number) {
    this.postService.getAll('', { page: page })
      .pipe(
        takeUntil(this.destroy$)
      )
      .subscribe((data: any) => {
        this.posts = data.posts.data;
        this.currentPage = data.posts.current_page;
        this.totalPosts = data.posts.total;
        this.postsPerPage = data.posts.per_page;
        this.currentPage = page;
        localStorage.setItem('lastPostPage', page.toString());
      }, error => {
        throw error;
      })
  }

  identify(index: number, item: Post) {
    return item._id;
  }

  pageChanged(page: number) {
    this.getPosts(page);
  }

}

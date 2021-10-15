import { Component, OnInit } from '@angular/core';
import { fade } from 'src/app/core/animations/fade';
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

  posts: any = [];

  currentPage: number;
  totalPosts = 0;
  postsPerPage = 0;

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
    this.postService.getAll('', {page: page}).subscribe((data: any) => {
      this.posts = data.result.data;
      this.currentPage = data.result.current_page;
      this.totalPosts = data.result.total;
      this.postsPerPage = data.result.per_page;
      this.currentPage = page;
      localStorage.setItem('lastPostPage', page.toString());
    }, error => {
      throw error;
    })
  }

  identify(index: number, item: any) {
    return item.id;
  }

  pageChanged(page: number) {
    this.getPosts(page);
  }

}

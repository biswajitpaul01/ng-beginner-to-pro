import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { fade } from 'src/app/core/animations/fade';
import { Post } from 'src/app/core/models/Post';
import { PostService } from 'src/app/core/services/post.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
  animations: [
    fade(3000)
  ]
})
export class DetailComponent implements OnInit {

  post?: Post;

  constructor(
    private postService: PostService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {

    this.route.params.subscribe(params => {
      const slug = params.slug;

      this.postService.getOne(slug).subscribe((data: any) => {
        this.post = data.post;
      }, error => {
        throw error;
      });
    });
  }

}

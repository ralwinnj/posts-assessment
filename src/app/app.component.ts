import { Component, OnInit } from '@angular/core';
import { Post } from './models/post';
import { ApiService } from './api.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddPostComponent } from './components/add-post/add-post.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  posts: Post[];
  title = 'Posts Assessment';

  constructor(private api: ApiService, private modalService: NgbModal) { }

  ngOnInit() {
    this.api.getPosts()
      .subscribe(
        (res: Post[]) => {
          this.posts = res.slice(0, 25);
        }
      );
  }

  createPost() {
    const modalRef = this.modalService.open(AddPostComponent, { size: 'xl' });
    modalRef.componentInstance.title = 'Create New Post';

  }

}

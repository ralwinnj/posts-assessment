import { Component, OnInit, Input } from '@angular/core';
import { Post } from 'src/app/models/post';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddPostComponent } from '../add-post/add-post.component';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Input() post: Post;

  constructor(private modalService: NgbModal, private api: ApiService) { }

  ngOnInit() {
  }

  updatePost() {
    const modalRef = this.modalService.open(AddPostComponent, { size: 'xl' });
    modalRef.componentInstance.title = 'Update Post';
    modalRef.componentInstance.post = this.post;
  }

  deletePost(id) {
    this.api.deletePost(id)
      .subscribe(
        (res: Post) => {
          alert(`Successfully deleted post`);
        }
      );
  }

}

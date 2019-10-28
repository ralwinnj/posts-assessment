import { Component, OnInit, Input } from '@angular/core';
import { Post } from 'src/app/models/post';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators, Form } from '@angular/forms';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {
  @Input() post: Post;
  @Input() title: string;

  postForm: FormGroup;

  constructor(
    public activeModal: NgbActiveModal,
    private fb: FormBuilder,
    private api: ApiService) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.postForm = this.fb.group({
      title: ['', Validators.compose([Validators.required])],
      body: ['', Validators.compose([Validators.required])]
    });
    if (this.post) {

      this.postForm = this.fb.group({
        title: [this.post.title, Validators.compose([Validators.required])],
        body: [this.post.title, Validators.compose([Validators.required])]
      });
    } else {
      this.postForm = this.fb.group({
        title: ['', Validators.compose([Validators.required])],
        body: ['', Validators.compose([Validators.required])]
      });
    }
  }

  submitForm() {
    if (this.postForm.valid) {
      if (this.post) {
        this.post.title = this.postForm.value.title;
        this.post.body = this.postForm.value.body;
        this.api.updatePost(this.post.id, this.post)
          .subscribe(
            (res: Post) => {
              console.log('Update success.', res);
              alert(`Successfully updated post with ID: ${res.id}`);
            }
          );
      } else {
        const data: Post = {
          title: this.postForm.value.title,
          body: this.postForm.value.body,
          userId: null,
          id: null
        };
        this.api.createPost(data)
          .subscribe(
            (res: Post) => {
              console.log('Create successful', res);
              alert(`Created post successfully. ID: ${res.id}`);
            }
          );
      }
    } else {
      alert('Please ensure all form fields are filled in.');
    }

  }

}

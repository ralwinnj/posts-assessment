import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as mdl from './models/post';
import { Injectable } from '@angular/core';

const headers = new HttpHeaders()
  .set("X-Requested-With", "XMLHttpRequest")
  .set("Accept", "application/json")
  .set("Content-Type", "application/json");

const reqOptions = { headers };

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  API_URL: string;

  constructor(private http: HttpClient) {
    this.API_URL = 'https://jsonplaceholder.typicode.com/posts';
  }

  getPosts() {
    return this.http.get(this.API_URL);
  }

  createPost(body: mdl.Post) {
    return this.http.post(this.API_URL, body, reqOptions);
  }

  updatePost(id, body: mdl.Post) {
    return this.http.put(`${this.API_URL}/${id}`, body, reqOptions);
  }

  deletePost(id) {
    return this.http.delete(`${this.API_URL}/${id}`, reqOptions);
  }

}

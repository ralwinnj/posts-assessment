export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}
interface Posts extends Array<Post> { }

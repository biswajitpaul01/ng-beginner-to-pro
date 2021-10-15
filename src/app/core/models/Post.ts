import { User } from "./User";

export interface Post {
  author: User;
  created_at: string;
  featured_image: string;
  post_content: string;
  post_title: string;
  slug: string;
  updated_at: string;
  user_id: string;
  _id: string;
}

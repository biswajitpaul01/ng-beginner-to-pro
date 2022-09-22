export interface Comment {
  id: number;
  commenter_name: string;
  commenter_email: string;
  comment_text: string;
  commenter_image: string;
  post_id: number;
  deleted_at: string | null;
  created_at: string;
  updated_at: string;
}

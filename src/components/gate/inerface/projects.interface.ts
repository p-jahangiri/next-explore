export interface ResponseGetProjectsDataType {
  id: number;
  accepted: string;
  user_id: string;
  type_id: string;
  album_id?: string | null;
  disable_comments: string;
  draft: string;
  mature_content: string;
  weak: string;
  best_of_month: string;
  best_of_month_counter: string;
  title: string;
  description: string;
  thumbnail?: null;
  thumbnail_source: string;
  crop_data: string;
  thumbnail_media_id: string;
  decline_reason?: null;
  created_at: string;
  edited_at?: string | null;
  updated_at: string;
  deleted_at?: null;
  pic: string;
  count_like: number;
  count_visit: number;
  user?: User | null;
}
export interface User {
  first_name: string;
  last_name: string;
  profile_image?: string | null;
}

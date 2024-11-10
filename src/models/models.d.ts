export interface Task {
  title: string;
  description: string;
  start_date: null;
  end_date: null;
  status?: "incomplete" | "completed";
  id: number | string;
  created_at: string;
  tags: string[];
  author_id: string;
}

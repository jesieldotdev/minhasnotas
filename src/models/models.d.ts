export interface Task {
  title: string;
  status?: "incomplete" | "completed";
  id: number | string;
  createdAt: string;
}

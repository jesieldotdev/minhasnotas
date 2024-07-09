export interface Task {
  title: string;
  description: string;
  startDate: string;
  endDate: strinh;
  status?: "incomplete" | "completed";
  id: number | string;
  createdAt: string;
  tags: string[];
  startDate: string;
  endDate: string;
  author: string;
}

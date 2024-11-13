import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

interface Task{
  id: number;
  title: string;
  description: string;
}

interface TasksState {
 tasks: Task[];
  loading: boolean;
  name: string
}

const initialState: TasksState = {
  tasks: [],
  name: "teste",
  loading: false,
};

export const fetchTasks = createAsyncThunk('tasks/fetchTasks', async () => {
  const response = await axios.get('https://posts-api-vercel.vercel.app/api/tasks');
  console.log(response.data, "res")
  return response.data;
});

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTasks.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.tasks = action.payload;
        state.loading = false;
      })
      .addCase(fetchTasks.rejected, (state) => {
        state.loading = false;
      });
  },
});

export default tasksSlice.reducer;

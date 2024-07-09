import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { NewTodo } from './pages/NewTodo/index.tsx';
import { AppProvider } from './context/AppContext.tsx';
import Register from './pages/Register/index.tsx';
import Login from './pages/Login/index.tsx';
import { SnackbarProvider } from 'notistack';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/new",
    element: <NewTodo onClose={undefined} />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },

]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppProvider>
      <SnackbarProvider/>
      <RouterProvider router={router} />
    </AppProvider>
  </React.StrictMode>,
)

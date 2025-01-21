import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ToDoList from "./todolist";
import {createBrowserRouter, RouterProvider} from 'react-router-dom'; 

const router = createBrowserRouter([
  {
    path: '/',
    element: <ToDoList/>,
  },
  {
    // path: '/login',
    // element: <Login/>,
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)

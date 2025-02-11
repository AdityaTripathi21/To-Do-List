import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ToDoList from "./todolist";
import Login from './Login/Login.jsx';
import Register from './Register/Register.jsx'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'; 

const router = createBrowserRouter([
  {
    path: '/',
    element: <ToDoList/>,
  },
  {
    path: '/login',
    element: <Login/>,
  },
  {
    path: '/register',
    element: <Register/>,
},
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)

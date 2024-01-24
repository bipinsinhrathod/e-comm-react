import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
<<<<<<< HEAD
=======
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import About from './About/About';



const router = createBrowserRouter(
  [
    {
      path:"/",
      element:<App />,
    },
    {
      path:"/about",
      element:<About />,
    }
  ]
)





>>>>>>> 6eafbf1 (Files Uplodaded)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
<<<<<<< HEAD
    <App />
=======
    <RouterProvider router={router} />
>>>>>>> 6eafbf1 (Files Uplodaded)
  </React.StrictMode>
);




import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

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







const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <App />
    <RouterProvider router={router} />

  </React.StrictMode>
);




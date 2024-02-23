import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import About from './About/About';
import Services from './Components/Service/Services';
import Contectus from './Components/Contectus/Contectus';
import Mens from './Components/Men/Mens';
import Kids from './Components/Kids/Kids';
import Womens from './Components/Women/Womens'
import { SignUpOne } from './Components/Signup/SignUpOne';
import { SignInThree } from './Components/Signup/SignInThree';
import Cart from './Components/Cart/Cart';
import ProductOverView from './Components/Products/ProductOverView';


const router = createBrowserRouter(
  [
    {
      path:"/",
      element:<App />,
    },
    {
      path:"/about",
      element:<About />,
    },
    {
      path:"/services",
      element:<Services/>,
    },
    {
      path:"/contectus",
      element:<Contectus/>,
    },
    {
      path:"/mens",
      element:<Mens/>,
    },
    {
      path:"/womens",
      element:<Womens/>,
    },
    {
      path:"/kids",
      element:<Kids/>,
    },
    {
      path:"/signupone",
      element:<SignUpOne/>,
    },
    {
      path:"/signinthree",
      element:<SignInThree/>,
    },
    {
      path:"/productoverview/:id",
      element:<ProductOverView/>
    },
    {
      path:"/cart/:id",
      element:<Cart/>,
    }
    // ,
    // {
    //   path:"/productoverview",
    //   element:<ProductOverView/>
    // }
    
  ]
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <RouterProvider router={router} />

  </React.StrictMode>
);




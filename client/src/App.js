

import HomePage from "./routes/homePage/HomePage";
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import ListPage from "./routes/listPage/ListPage";
import {Layout,  RequireAuth } from './routes/layout/Layout';
import SinglePage from "./routes/singlePage/SinglePage";
import ProfilePage from "./routes/profilePage/ProfilePage";
import SignUpPage from "./routes/signupPage/SignUpPage";
import Login from "./routes/login/Login";
import ProfileUpdatePage from "./routes/profileUpdatePage/ProfileUpdatePage";
import NewPostPage from "./routes/newPostPage/NewPostPage";
import { listPageLoader, singlePageLoader } from "./lib/Loader";
function App() {
  const router=createBrowserRouter([
    {
      path:"/",
      element:(
        <Layout/>
      ),
      children:[
        {
          path:"/",
          element:<HomePage/>

        },
        {
          path:"/list",
          element:<ListPage/>,
          loader:listPageLoader,
        },
        {
          path:"/:id",
          element:<SinglePage/>,
          loader:singlePageLoader,

        },
       
        {
          path:"/register",
          element:<SignUpPage/>

        },
        {
          path:"/login",
          element:<Login/>

        },
      ]
    },
    {
      path:"/",
      element:<RequireAuth/>,
      children:[
        {
          path:"/profile",
          element:<ProfilePage/>
        },
        {
          path:"/profile/update",
          element:<ProfileUpdatePage/>
        },
        {
          path:"/add",
          element:<NewPostPage/>
        },
       
      ]
    },
  ])
  return (
    
    <RouterProvider router={router}/>
  );
}

export default App;

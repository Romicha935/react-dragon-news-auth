import { createBrowserRouter } from "react-router-dom";

import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import News from "../News/News";
import PrivetRoute from "./PrivetRoute";

const routes = createBrowserRouter([
    {
        path:'/',
        element:<Root/>,
        children: [
            {
                path:'/',
                element:<Home/>,
                loader: ()=> fetch('news.json')
            },
            {
              path:'/news/:id',
              element:<PrivetRoute><News/></PrivetRoute>
            },
            {
                path:'/login',
                element:<Login/>
            },
            {
                path:'/register',
                element:<Register/>
            },
        ]
    }
])

export default routes
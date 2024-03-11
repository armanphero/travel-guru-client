import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Carousel from "../pages/Carousel";
import DestinationDetails from "../pages/DestinationDetails";
import SignUp from "../pages/SignUp";
import Searched from "../pages/Searched";
import Login from "../pages/Login";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: '/',
                element: <Carousel />
            },
            {
                path: '/destination/:id',
                element: <DestinationDetails />,
                loader: ({params}) => fetch(`http://localhost:3000/destinations/${params.id}`)
            },
            {
                path: '/signup',
                element: <SignUp />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/search/:name',
                element: <Searched />,
                loader: ({params}) => fetch(`http://localhost:3000/search/${params.name}`)
            }
        ]
    },
]);

export default router;
import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Authentication from "../Pages/Authentication/Authentication";
import Blog from "../Pages/Blog/Blog";
import Checkout from "../Pages/Checkout/Checkout";
import Courses from "../Pages/Courses/Courses";
import About from "../Pages/Courses/RightSide/About";
import MyCourses from "../Pages/Courses/RightSide/MyCourses";
import Payment from "../Pages/Courses/RightSide/Payment";
import Profile from "../Pages/Courses/RightSide/Profile";
import SingleCourse from "../Pages/Courses/RightSide/SingleCourse";
import ErrorPage from "../Pages/ErrorPage";
import FAQ from "../Pages/FAQ/FAQ";

import PrivateRoute from "../Pages/PrivateRoute/PrivateRoute";

//server url
// const url = 'https://teaching-with-love-server.vercel.app/';

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [

            {
                path: '/login',
                element: <Authentication />,
            },
            {
                path: '/blog',
                element: <Blog />,
            },
            {
                path: '/faq',
                element: <FAQ />,
            },
            {
                path: '/checkout/:id',
                loader: async ({ params }) => {
                    return fetch(`https://teaching-with-love-server.vercel.app/courses/${params.id}`)
                },
                element: <PrivateRoute><Checkout /></PrivateRoute>,
            },
            {
                path: '/course/:id',
                loader: async ({ params }) => {
                    return fetch(`https://teaching-with-love-server.vercel.app/courses/${params.id}`)
                },
                element: <SingleCourse />,
            },
            {
                path: '/courses',
                element: <Courses />,
                children: [
                    {
                        index: true,
                        element: <MyCourses />,
                        loader: async () => {
                            return fetch('https://teaching-with-love-server.vercel.app/courses')
                        }
                    },
                    {
                        path: 'profile',
                        element: <Profile />
                    },
                    {
                        path: 'about',
                        element: <About />
                    },
                    {
                        path: 'payment',
                        element: <Payment />
                    },
                ]
            },
        ]
    }
])
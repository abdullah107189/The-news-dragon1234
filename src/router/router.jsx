import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layouts/Main';
import About from '../Components/About';
import Career from '../Components/Career';
import Category from '../Components/Category';
import NewLayout from '../Layouts/NewLayout';
import News from '../page/news/news/news';
import AuthLayout from '../Layouts/AuthLayout';
import Login from '../Form/Login/Login';
import Register from '../Form/Register/Register';
import PrivetRoute from '../Route/PrivetRoute';
import Terms from '../Components/Terms';
const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Category></Category>,
                loader: () => fetch('http://localhost:5000/news')
            },
            {
                path: 'about',
                element: <About></About>
            },
            {
                path: 'career',
                element: <Career></Career>
            },
            {
                path: '/category/:id',
                element: <Category></Category>,
                loader: ({ params }) => fetch(`http://localhost:5000/categories/${params.id}`)
            }

        ]
    },
    {
        path: 'news',
        element: <NewLayout></NewLayout>,
        children: [
            {
                path: ':id',
                element: <PrivetRoute><News></News></PrivetRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/news/${params.id}`)
            }
        ]
    },
    {
        path: 'auth',
        element: <AuthLayout></AuthLayout>,
        children: [
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'reg',
                element: <Register></Register>
            },
            {
                path: 'about',
                element: <About></About>
            },
            {
                path: 'career',
                element: <Career></Career>
            },
            {
                path: 'terms',
                element: <Terms></Terms>
            }
        ]
    }
])

export default router;
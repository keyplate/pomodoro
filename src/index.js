import React from 'react';
import App from './App';
import ReactDOM from 'react-dom/client';
import {
    createBrowserRouter,
    RouterProvider,
} from 'react-router-dom';

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
    },
    ]);

const el = document.getElementById('root');
const root = ReactDOM.createRoot(el);
root.render(

        <RouterProvider router={router} />

);


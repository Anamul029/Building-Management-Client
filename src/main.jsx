import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Main from './Components/Main/Main';
import Home from './Components/Home/Home';
import Register from './Components/Register/Register';
import Login from './Components/Login/Login';
import Apartment from './Components/Apartment/Apartment';
import AuthProvider from './Components/Provider/AuthProvider';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import DashBoard from './Components/DashBoard/DashBoard';
import UserProfile from './Components/Users/UserProfile';
import ManageMember from './Components/AdminHome/ManageMember';
import {
  QueryClient,
  QueryClientProvider,
 
} from '@tanstack/react-query'
import MakeAnouchment from './Components/AdminHome/MakeAnouchment';
import AgreementRequest from './Components/AdminHome/AgreementRequest';
import ManageCoupon from './Components/AdminHome/ManageCoupon';
import AlAnnouchment from './Components/DashBoard/AlAnnouchment';
import CheckOutForm from './Components/Payment/CheckOutForm';
import PaymentHistory from './Components/Payment/PaymentHistory';
const queryClient = new QueryClient()
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/signUp',
        element: <Register></Register>,
      },
      {
           path:'/apartment',
           element:<Apartment></Apartment>,
      },
      {
        path: '/login',
        element: <Login></Login>
      }
    ]
  },
  {
    path:'/dashboard',
    element:<PrivateRoute><DashBoard></DashBoard></PrivateRoute>,
    children:[
      {
        path:'/dashboard/userProfile',
        element:<PrivateRoute><UserProfile></UserProfile></PrivateRoute>,
      },
      {
        path:'userAnnouncment',
        element:<AlAnnouchment></AlAnnouchment>,
      },
      {
        path:'managemember',
        element:<PrivateRoute><ManageMember></ManageMember></PrivateRoute>
      },
      {
        path:'anouchment',
        element:<MakeAnouchment></MakeAnouchment>
      },
      {
        path:'agriment',
        element:<PrivateRoute><AgreementRequest></AgreementRequest></PrivateRoute>
      },
      {
        path:'coupon',
        element:<PrivateRoute><ManageCoupon></ManageCoupon></PrivateRoute>
      },
      {
        path:'payment',
        element:<PrivateRoute><CheckOutForm></CheckOutForm></PrivateRoute>
      },
      {
        path:'paymentHistory',
        element:<PrivateRoute><PaymentHistory></PaymentHistory></PrivateRoute>
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
    <AuthProvider> <RouterProvider router={router} /></AuthProvider>
  </QueryClientProvider>,
  </React.StrictMode>,
)

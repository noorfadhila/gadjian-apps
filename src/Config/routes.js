import React from 'react';
import Login from '../container/Login';
import Dashboard from '../container/Dashboard';
import Personnel from '../container/Personnel';
import DailyAttendance from '../container/DailyAttendance';
import PageNotFound from '../container/PageNotFound';

const routes =[
    {
        path:'/',
        container: Dashboard
      },
    {
        path:'/login',
        container: Login
    },
    {
        path:'/dashboard',
        container: Dashboard
    },
    {
        path:'/personnel',
        container: Personnel
    },
    {
        path:'/daily-attendance',
        container: DailyAttendance
    },
    {
        path:'/*',
        container: PageNotFound
    },
]
 
export default routes
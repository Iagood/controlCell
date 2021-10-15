import Home from '@/pages/Home'
import Customer from '@/pages/Customer/List'
import Login from '@/pages/Auth/Login'

const routes = [
    {
        path: '/',
        component: () => import('@/layouts/DefaultTemplate'),
        children: [
            {
                path: '/',
                component: Home,
                name: 'home'
            },
            {
                path: '/customer',
                component: Customer,
                name: 'customer'
            }
        ]
    },
    {
        path: '/',
        component: () => import('@/layouts/AuthTemplate'),
        children: [

        ]
    }

]

export default routes
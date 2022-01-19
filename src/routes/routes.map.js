import Home from '@/pages/Home'
import Customer from '@/pages/Customer/List'
import Product from '@/pages/Product/List'
import Login from '@/pages/Auth/Login'
import Register from '@/pages/Auth/Register'

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
            },
            {
                path: '/product',
                component: Product,
                name: 'product'
            }
        ]
    },
    {
        path: '/',
        component: () => import('@/layouts/AuthTemplate'),
        children: [
            {
                path: '/login',
                component: Login,
                name: 'login'
            },
            {
                path: '/register',
                component: Register,
                name: 'register'
            }
        ]
    }

]

export default routes
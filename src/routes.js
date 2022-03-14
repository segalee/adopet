import { HomePage } from './pages/HomePage.jsx'
import { Dogs } from './pages/Dogs.jsx'
import { About } from './pages/About.jsx'


const routes = [
    {
        path: '/',
        component: <HomePage />,
    },
    {
        path: '/about',
        component: <About />,
    },
    {
        path: '/dogs',
        component: <Dogs />,
    }
]

export default routes;
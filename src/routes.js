import { HomePage } from './pages/HomePage.jsx'
import { Dogs } from './pages/Dogs.jsx'
import { About } from './pages/About.jsx'
import { DogDetails } from './pages/DogDetails.jsx'


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
    },
    {
        path: '/details/:dogId',
        component: <DogDetails />,
    }
]

export default routes;
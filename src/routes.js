import { HomePage } from './pages/HomePage.jsx'
import { Dogs } from './pages/Dogs.jsx'
import { About } from './pages/About.jsx'
import { DogDetails } from './pages/DogDetails.jsx'
import { DogEdit } from './pages/DogEdit.jsx'


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
    },
    {
        path: '/edit/:dogId',
        component: <DogEdit />,
    }
]

export default routes;
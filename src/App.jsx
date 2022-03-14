import React from 'react'
import { Routes, Route } from 'react-router-dom';
import routes from './routes.js'
import { AppHeader } from './cmps/AppHeader.jsx'
import { AppFooter } from './cmps/AppFooter.jsx'


export class App extends React.Component {

    render() {
        return (
            <div>
                <AppHeader />
                <main className='main-container'>
                    <Routes>
                        {/* <Route path="/" element={<Home />}></Route> */}
                        {routes.map(route => <Route key={route.path} element={route.component} path={route.path} />)}
                    </Routes>
                </main>
                <AppFooter />
            </div>
        )
    }
}


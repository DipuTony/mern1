import React from 'react'
import Home from '../Pages/Home'
import Header from './Header/Header'
import Sidebar from './Sidebar/Sidebar'

function Layout() {
    return (
        <>
            <Header />
            <div className='grid grid-cols-12'>
                <div className='col-span-2 bg-indigo-500 min-h-screen'>
                    <Sidebar />
                </div>
                <div className='col-span-10'>
                    <Home />
                </div>
            </div>
        </>
    )
}

export default Layout
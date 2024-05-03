import React from 'react'
import './App.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
// Pages
import Home from './pages/Home/Home'
import Projetos from './pages/Projetos/Projetos'

const App = () => {
    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/projetos' element={<Projetos />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
import React from 'react'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Jett from '../Pages/Jett/Jett'
import Sage from '../Pages/Sage/Sage'
import Omen from '../Pages/Omen/Omen'
import Reyna from '../Pages/Reyna/Reyna'

export default function RoutesApp() {
    return (

        <BrowserRouter>

            <Routes>

                <Route path='/jett' element={<Jett />} />
                <Route path='/sage' element={<Sage />} />
                <Route path='/omen' element={<Omen />} />
                <Route path='/reyna' element={<Reyna />} />

            </Routes>

        </BrowserRouter>

    )
}

import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import NewsCat from './NewsCat'

const Pages = () => {
  return (
    <div>

      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/NewsCat/:type" element={<NewsCat />} />

      </Routes>

    </div>
  )
}

export default Pages
import './App.css'
import React from 'react'
import Layout from './pages/Layout.js'
import CountryList from './components/CountryList.js'
import CountryDetails from './pages/CountryDetails.js'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App () {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<CountryList />} />
        <Route path='/' element={<Layout />}>
          <Route path='/country/:cca3' element={<CountryDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App

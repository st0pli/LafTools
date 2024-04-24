import { useState } from 'react'
import './App.css'
import './index.scss'
import "./globals.css";
import Home from './[lang]/[category]/page';

function App() {

  return (
    <>
      <Home params={{
        subCategory: '',
        category: '',
        id: ''
      }} searchParams={{}} />
    </>
  )
}

export default App

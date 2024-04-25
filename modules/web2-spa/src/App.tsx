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
      <div>i am ok 2</div>
    </>
  )
}

export default App

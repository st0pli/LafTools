import { useState } from 'react'
import './App.css'
import './index.scss'
import "./globals.css";
// import Home from './[lang]/[category]/page';
import CryptoApi from "crypto-api/src/crypto-api.mjs";
import _ from 'lodash';

function App() {
  console.log(CryptoApi)

  return (
    <>
      <div className='   '>this is main app 20 </div>
      <h1>
        {
          _.keys(CryptoApi)
        }
      </h1>
      {/* <Home params={{
        subCategory: '',
        category: '',
        id: ''
      }} searchParams={{}} /> */}
    </>
  )
}

export default App

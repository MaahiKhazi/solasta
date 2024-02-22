import { useState, useEffect } from 'react'
import { GoogleGenerativeAI } from '@google/generative-ai'
import ReactComponent from './reactComponents/ReactComponents';
import Header from "./reactComponents/Header"
import Footer from './reactComponents/Footer';
import AiServices from './reactComponents/AiServices';
import Home from './reactComponents/Home';
import Form from './reactComponents/Form';

const genAI = new GoogleGenerativeAI("AIzaSyDuNTuGXba6sBd5VjXxOG3ldEHrbDRf_L0");

function App() {
  return (
    <div>
      <Header/>
      <AiServices/>
      <Footer/>
    </div>
  )
}

export default App

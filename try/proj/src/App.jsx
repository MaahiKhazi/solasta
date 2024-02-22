import { useState, useEffect } from 'react'
import { GoogleGenerativeAI } from '@google/generative-ai'
import Header from "./reactComponents/Header"
import Footer from './reactComponents/Footer';
import AiServices from './reactComponents/AiServices';
import Home from './reactComponents/Home';
import Form from './reactComponents/Form';
import { Routes, Route } from "react-router-dom";

const genAI = new GoogleGenerativeAI("AIzaSyDuNTuGXba6sBd5VjXxOG3ldEHrbDRf_L0");

function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path="result" element={<AiServices/>} />
        <Route path="form" element={<Form/>} />
        <Route path="/" element={<Home/>} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App

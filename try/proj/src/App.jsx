import { useState } from 'react'
import { GoogleGenerativeAI } from '@google/generative-ai'


const genAI = new GoogleGenerativeAI("AIzaSyDuNTuGXba6sBd5VjXxOG3ldEHrbDRf_L0");

async function run() {
  // For text-only input, use the gemini-pro model
  const model = genAI.getGenerativeModel({ model: "gemini-pro"});

  const prompt = 'Give me the JSON for an array object called "paths" containing 10 learning paths that suggest user for learning new programming skills which are related to what he knows. Paths should be in the form of objects which have title, description and skills (new or old) as keys. The user knows ReactJs, Node.js, JavaScript, Python, C, C++ language(s).'

  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = response.text();
  // console.log(text);
  return text;
}

function App() {
  const result = run()
  return (
    <div>
      <h1>This is generative AI </h1>
      <p>{result}</p>
    </div>
  )
}

export default App

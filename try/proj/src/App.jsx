import { useState, useEffect } from 'react'
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

  const [loading, setLoading] = useState(false); 
  const [posts, setPosts] = useState([]); 
  
  useEffect(() => { 
      const loadPost = async () => { 
          // Till the data is fetch using API 
          // the Loading page will show. 
          setLoading(true); 

          // Await make wait until that 
          // promise settles and return its result 
          const model = genAI.getGenerativeModel({ model: "gemini-pro"});

          const prompt = 'Give me the JSON for an array object called "paths" containing 10 learning paths that suggest user for learning new programming skills which are related to what he knows. Paths should be in the form of objects which have title, description and skills (new or old) as keys. The user knows ReactJs, Node.js, JavaScript, Python, C, C++ language(s).'

          const result = await model.generateContent(prompt);
          const response = await result.response;
          const data = JSON.stringify(response);
          const jsonData = JSON.parse(data);
          if (jsonData && jsonData.candidates && jsonData.candidates.length > 0) {
            const paths = jsonData.candidates[0].content.parts[0].text;
            const mpaths = paths.slice(3, -3)
            // Now 'paths' contains the JSON string representing the paths
            setPosts(mpaths);
          } else {
            console.error("Invalid JSON structure in the response");
          }

          // Closed the loading page 
          setLoading(false); 
      }; 

      // Call the function 
      loadPost(); 
  }, []);
  return (
    <div>
      <h1>This is generative AI </h1>
      <div>
        {loading ? ( 
              <h4>Loading...</h4> 
          ):( 
            // posts((item) => ( 
            //  // Presently we only fetch 
            //  // title from the API 
            <h4>{posts}</h4>
           // )) 
          )} 
      </div>
    </div>
  )
}

export default App

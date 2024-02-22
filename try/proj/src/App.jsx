import { useState, useEffect } from 'react'
import { GoogleGenerativeAI } from '@google/generative-ai'
import ReactComponent from './reactComponents/ReactComponents';

const genAI = new GoogleGenerativeAI("AIzaSyDuNTuGXba6sBd5VjXxOG3ldEHrbDRf_L0");

// async function run() {
//   // For text-only input, use the gemini-pro model
  
//   const model = genAI.getGenerativeModel({ model: "gemini-pro"});

//   const prompt = 'Give me the JSON for an array object called "paths" containing 10 learning paths that suggest user for learning new programming skills which are related to what he knows. Paths should be in the form of objects which have title, description and skills (new or old) as keys. The user knows ReactJs, Node.js, JavaScript, Python, C, C++ language(s).'

//   const result = await model.generateContent(prompt);
//   const response = await result.response;
//   const text = response.text();
//   // console.log(text);
//   return text;
// }

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

          const prompt = 'Give me the JSON for an array object called "paths" containing 3 learning paths that suggest user for learning new programming skills which are related to what he knows. Paths should be in the form of objects which have title, description and skills (new or old) as keys. The user knows ReactJs, Node.js, JavaScript, Python, C, C++ language(s) do not add any extra text other than the JSON object.'

          const result = await model.generateContent(prompt);
          const response = await result.response;
          const data = JSON.stringify(response);
          const jsonData = JSON.parse(data);
          if (jsonData && jsonData.candidates && jsonData.candidates.length > 0) {
            const paths = jsonData.candidates[0].content.parts[0].text;
            if (paths[4] === "J" || paths[4] === "j"){
              const modpaths = paths.slice(8, -3)
              console.log(modpaths)
              const finaldata = JSON.parse(modpaths)
              setPosts(finaldata);
            }
            else if(paths[4] === "S" || paths[4] === "s"){
              const modpaths = paths.slice(7, -3)
              console.log(modpaths)
              const finaldata = JSON.parse(modpaths)
              setPosts(finaldata);              
            }
            else if(paths[4] === "O" || paths[4] === "o"){
              const modpaths = paths.slice(6, -3)
              console.log(modpaths)
              const finaldata = JSON.parse(modpaths)
              setPosts(finaldata);
            }
            else if(paths[4] === "N" || paths[4] === "n"){
              const modpaths = paths.slice(5, -3)
              console.log(modpaths)
              const finaldata = JSON.parse(modpaths)
              setPosts(finaldata);
            }
            else{
              const mpaths = paths.slice(3, -3)
              const finaldata = JSON.parse(mpaths)
              setPosts(finaldata);
            }
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
            <div>
              <ReactComponent data={posts}/>
            </div>
          )} 
      </div>
    </div>
  )
}

export default App
